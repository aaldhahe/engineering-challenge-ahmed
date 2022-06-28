export const sketchOptions = (view: __esri.MapView, layer: __esri.GraphicsLayer):  __esri.SketchProperties => {
    return {
        layer,
        view,
        visibleElements: {
            createTools: { point: false, polygon: false, polyline: false },
            selectionTools: { 'lasso-selection': false, 'rectangle-selection': false },
            settingsMenu: false,
            undoRedoMenu: false,
        },
    
        creationMode: 'update', // graphic will be selected as soon as it is created
    }
}