export interface Outline {
  color: string;
  width: number;
}

export interface Symbols {
  type: string;
  color: __esri.Color;
  style: string;
  outline: Outline;
}

export interface AreaAndIntersectOpt extends AreaOpt {
  intersect: boolean;
}

export interface AreaOpt {
  planar: string;
  geodesic: string;
}

export interface GraphicHashMapAndLayer {
  hashMap: __esri.Graphic;
  layer: __esri.Graphic;
}
