import { AreaAndIntersectOpt, AreaOpt, GraphicHashMapAndLayer } from "helpers/interfaces";
import Graphic from "@arcgis/core/Graphic";
import { intersectionZoneSymbol } from "../symbol";
import GeometryOnMap from "../geometry/GeometryOnMap";

export default class SketchEvents {
    //#region private fields
    private noFlyLayer!: __esri.GraphicsLayer;
    private sketchLayer!: __esri.GraphicsLayer;
    private intersectionMap!: Map<__esri.Graphic, __esri.Graphic>;
    //#endregion

    //#region Constants
    public static readonly CREATE: string = 'create';
    public static readonly UPDATE: string = 'update';
    public static readonly STATE_COMPLETE: string = 'complete';
    public static readonly STATE_ACTIVE: string = 'active';
    public static readonly STATE_START: string = 'start';
    //#endregion

    //#region constructor
    constructor (noFlyLayer: __esri.GraphicsLayer, sketchLayer: __esri.GraphicsLayer, intersectionMap: Map<__esri.Graphic, __esri.Graphic>) {
        this.noFlyLayer = noFlyLayer;
        this.sketchLayer = sketchLayer;
        this.intersectionMap = intersectionMap;
    }
    //#endregion
    
    //#region Sketch Create
    sketchCreate = async (event: __esri.SketchCreateEvent): Promise<AreaAndIntersectOpt> => {
        let areaAndIntersect: AreaAndIntersectOpt = {
            geodesic: '',
            planar: '',
            intersect: false
        }
        this.noFlyLayer.graphics.forEach(graphic => {
            areaAndIntersect = this.checkForIntersectionAndComputeArea(graphic, event.graphic);
        });

        return areaAndIntersect;
    }
    //#endregion

    //#region Sketch Update
    sketchUpdate = async (event: __esri.SketchUpdateEvent): Promise<AreaAndIntersectOpt> => {
        // Based on extra credit ideas, assuming we are updating the intersection 
        let graphicForLayerAndHashMap!: GraphicHashMapAndLayer;
        if (this.intersectionMap.size > 0) {
            graphicForLayerAndHashMap = this.determineCorrespondingIntersectionShape(event.graphics);
        }
        
        // while we move the shape around, check for intersection shape that corresponds to the shape
        // currently updating
        if (graphicForLayerAndHashMap && graphicForLayerAndHashMap.hashMap) {
            this.removeIntersectionShape(graphicForLayerAndHashMap.layer, graphicForLayerAndHashMap.hashMap);
        }
        
        let areaAndIntersect: AreaAndIntersectOpt = {
            geodesic: '',
            planar: '',
            intersect: false
        }

        event.graphics.forEach(graphic => {
            // Only supporting single select update, not multi-select.
            // Therefore, assuming user will only select one shape to update at a time
            areaAndIntersect = this.checkForIntersectionAndComputeArea(this.noFlyLayer.graphics.getItemAt(0), graphic)
        });
        return areaAndIntersect;
    }
    //#endregion

    checkForIntersectionAndComputeArea = (graphic1: __esri.Graphic, graphic2: __esri.Graphic): AreaAndIntersectOpt => {
        const geometry = GeometryOnMap.intersects(graphic1.geometry, graphic2.geometry);
        let intersection = false,
            area: AreaOpt = {
                geodesic: '',
                planar: ''
            };
        if (geometry) {
            intersection = true;
            area = GeometryOnMap.geodesicAndPlanarAreas(geometry);
            const graphic = new Graphic({
                geometry: geometry,
                symbol: intersectionZoneSymbol
            });
            this.intersectionMap.set(graphic2, graphic);
            this.sketchLayer.add(graphic);
        }
        return {
            intersect: intersection,
            geodesic: area.geodesic,
            planar: area.planar
        };
    }

    removeIntersectionShape = (removeFromLayer: __esri.Graphic, removeFromHashMap: __esri.Graphic): void => {
        // HashMap to access corresponding intersection for the shape, Time complexity O(1)
        // We want to remove the intersection shape from the sketch layer
        // And also remove the current shape we are updating from being a key in intersection hashmap
        // Because we just removed the intersection from the sketch layer
        this.sketchLayer.remove(removeFromLayer);
        this.intersectionMap.delete(removeFromHashMap);
    }

    determineCorrespondingIntersectionShape = (graphics: __esri.Graphic[]): GraphicHashMapAndLayer => {
        let graphicForLayerAndHashMap = {} as GraphicHashMapAndLayer;
        for (let i = 0; i < graphics.length; i++) {
            const graphic = this.intersectionMap.get(graphics[i]);
            if (graphic) {
                graphicForLayerAndHashMap.hashMap = graphics[i];
                graphicForLayerAndHashMap.layer = graphic;
                break;
            } 
        }
        return graphicForLayerAndHashMap;
    }

}
