import Polygon from "@arcgis/core/geometry/Polygon";
import { geodesicArea, planarArea } from "@arcgis/core/geometry/geometryEngine";
import Constants from '../constants';

export default class Area {
    
    public static geodesic(geometry: __esri.Geometry): string {
        return geodesicArea(new Polygon(geometry), Constants.SQUARE_KILOMETERS).toFixed(2).toString();
    }

    public static planar(geometry: __esri.Geometry): string {
        return planarArea(new Polygon(geometry), Constants.SQUARE_KILOMETERS).toFixed(2).toString();
    }
}