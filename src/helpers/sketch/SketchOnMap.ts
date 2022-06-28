import Sketch from '@arcgis/core/widgets/Sketch';
export default class SketchOnMap {
    private sketch!: __esri.Sketch;
    constructor(props: __esri.SketchProperties) {
        this.sketch = new Sketch(props);
    }

    setEvents = (eventType: any, callback: any) => {
        this.sketch.on(eventType, callback);
    } 

    destroy = () => {
        this.sketch.destroy();
    }

    addUI = (view: __esri.MapView, position: string) => {
        view.ui.add(this.sketch, position);
    }
}