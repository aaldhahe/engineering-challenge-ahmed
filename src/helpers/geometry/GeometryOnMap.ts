
import { intersect } from "@arcgis/core/geometry/geometryEngine";
import { AreaOpt } from "helpers/interfaces";
import Area  from '../geometry/Area';
export default class GeometryOnMap {

    public static intersects(geometry1: __esri.Geometry, geometry2: __esri.Geometry): __esri.Geometry | null {
        const geometry = intersect(geometry1, geometry2);
        // For the sake of this example we know only one geometry for intersection for a given shap
        return geometry ? geometry as __esri.Geometry : null;
    }

    public static geodesicAndPlanarAreas(geometry: __esri.Geometry): AreaOpt {
        return {
            geodesic: Area.geodesic(geometry),
            planar: Area.planar(geometry)
        }
    } 
}