(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2793],{38010:(e,t,r)=>{"use strict";r.d(t,{R:()=>m,w:()=>w});var i=r(14983),o=r(29438),n=r(67380),s=r(14483),a=r(72424);class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(a.kk),this._values=new Map}clone(e){const t=new l,r=this._originStores[0];r&&r.forEach(((e,r)=>{t.set(r,(0,s.d9)(e),0)}));for(let r=2;r<a.kk;r++){const i=this._originStores[r];i&&i.forEach(((i,o)=>{e&&e.has(o)||t.set(o,(0,s.d9)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||(0,n.j0)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=6){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),o=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),o!==i}originOf(e){return this._propertyOriginMap.get(e)||0}forEach(e){this._values.forEach(e)}}const p=l;var u=r(20748),c=r(87435),y=r(74184);const d=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,n.j0)((0,c.vw)(this)),r=t.metadatas,i=t.store,o=new p;t.store=o,i.keys().forEach((e=>{o.set(e,i.get(e),0)})),Object.keys(r).forEach((e=>{t.internalGet(e)&&o.set(e,t.internalGet(e),0)}))}read(e,t){(0,u.ij)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=(0,a.M9)(t);if("string"==typeof e)return r.get(e,i);const o={};return e.forEach((e=>{o[e]=r.get(e,i)})),o}originOf(e){return(0,a.x3)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=(0,a.M9)(t),o=(0,c.vw)(this);let n;n="string"==typeof e?"*"===e?r.keys(i):[e]:e,n.forEach((e=>{o.invalidate(e),r.revert(e,i),o.commit(e)}))}};return t=(0,i._)([(0,y.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return(0,c.vw)(e).store}let g=class extends(d(o.Z)){};g=(0,i._)([(0,y.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],g);var f=r(15469);const v=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return b(this).delete(e,(0,a.M9)(t))}write(e={},t){return(0,f.cW)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,c.vw)(this).setAtOrigin(e,t,(0,a.M9)(r))}removeOrigin(e){const t=b(this),r=(0,a.M9)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),6)}updateOrigin(e,t){const r=b(this),i=(0,a.M9)(t),o=this.get(e);for(let t=i+1;t<a.kk;++t)r.delete(e,t);r.set(e,o,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,y.j)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function b(e){return(0,c.vw)(e).store}const m=e=>{let t=class extends(v(d(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,y.j)("esri.core.MultiOriginJSONSupport")],t),t};let w=class extends(m(o.Z)){};w=(0,i._)([(0,y.j)("esri.core.MultiOriginJSONSupport")],w)},13878:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var i=r(14983),o=r(13664),n=(r(18507),r(93100)),s=r(8811),a=r(2772),l=r(45610),p=r(42790),u=r(45851),c=r(8764),y=r(99204),d=r(84066),h=(r(77645),r(38215),r(74184)),g=r(56368),f=r(61948);let v=0;const b=u.Z.getLogger("esri.layers.Layer");let m=class extends(a.Z.EventedMixin((0,l.I)(p.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new g.Z(-180,-90,180,90,f.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,i=await r.e(3847).then(r.bind(r,63847));try{return await i.fromUrl(t)}catch(e){throw b.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},i=await r.e(8797).then(r.bind(r,8797));try{return await i.fromItem(t)}catch(e){const r=t&&t.portalItem,i=r&&r.id||"unset",n=r&&r.portal&&r.portal.url||o.Z.portalUrl;throw b.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+i+"')",e),e}}initialize(){this.when().catch((e=>{var t,r;(0,c.D_)(e)||u.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,y.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,n.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new s.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,d.Cb)({type:String})],m.prototype,"attributionDataUrl",void 0),(0,i._)([(0,d.Cb)({type:g.Z})],m.prototype,"fullExtent",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],m.prototype,"hasAttributionData",null),(0,i._)([(0,d.Cb)({type:String})],m.prototype,"id",void 0),(0,i._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],m.prototype,"legendEnabled",void 0),(0,i._)([(0,d.Cb)({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],m.prototype,"opacity",void 0),(0,i._)([(0,d.Cb)()],m.prototype,"parent",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],m.prototype,"parsedUrl",null),(0,i._)([(0,d.Cb)({type:Boolean})],m.prototype,"popupEnabled",void 0),(0,i._)([(0,d.Cb)({type:Boolean})],m.prototype,"attributionVisible",void 0),(0,i._)([(0,d.Cb)({type:f.Z})],m.prototype,"spatialReference",void 0),(0,i._)([(0,d.Cb)({type:String})],m.prototype,"title",void 0),(0,i._)([(0,d.Cb)({type:String,readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),(0,i._)([(0,d.Cb)()],m.prototype,"url",void 0),(0,i._)([(0,d.Cb)({type:Boolean,nonNullable:!0})],m.prototype,"visible",void 0),m=(0,i._)([(0,h.j)("esri.layers.Layer")],m);const w=m},46947:(e,t,r)=>{"use strict";r.d(t,{h:()=>s});var i=r(14983),o=r(84066),n=(r(77645),r(38215),r(45851),r(74184));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,i._)([(0,o.Cb)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),(0,i._)([(0,o.Cb)()],t.prototype,"effect",void 0),t=(0,i._)([(0,n.j)("esri.layers.mixins.BlendLayer")],t),t}},13917:(e,t,r)=>{"use strict";r.d(t,{q:()=>y});var i=r(14983),o=r(8811),n=r(84066),s=(r(77645),r(38215),r(45851),r(74184)),a=r(87060),l=r(20748),p=r(15469);const u={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,OGCFeatureLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};var c=r(75565);const y=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,p.df)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),(0,l.$Z)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=u[e];let i=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return t.messages&&t.messages.push(new o.Z("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof o.Z&&"web-document-write:property-required"===e.name)).length;return!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,n.Cb)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,n.Cb)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),(0,i._)([(0,a.c)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,n.Cb)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.c)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,n.Cb)(c.Oh)],t.prototype,"opacity",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,a.c)("title")],t.prototype,"writeTitle",null),(0,i._)([(0,n.Cb)({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),t=(0,i._)([(0,s.j)("esri.layers.mixins.OperationalLayer")],t),t}},88465:(e,t,r)=>{"use strict";r.d(t,{Q:()=>s});var i=r(14983),o=r(84066),n=(r(77645),r(38215),r(45851),r(74184));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.refreshInterval=0}refresh(){this.emit("refresh")}};return(0,i._)([(0,o.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),t=(0,i._)([(0,n.j)("esri.layers.mixins.RefreshableLayer")],t),t}},3956:(e,t,r)=>{"use strict";r.d(t,{M:()=>s});var i=r(14983),o=r(84066),n=(r(77645),r(38215),r(45851),r(74184));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get scaleRangeId(){return`${this.minScale},${this.maxScale}`}};return(0,i._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"scaleRangeId",null),t=(0,i._)([(0,n.j)("esri.layers.mixins.ScaleRangeLayer")],t),t}},75565:(e,t,r)=>{"use strict";r.d(t,{qG:()=>b,PV:()=>h,id:()=>w,iR:()=>c,rn:()=>d,u1:()=>_,rO:()=>S,Oh:()=>f,bT:()=>v,C_:()=>u,Lx:()=>g,vg:()=>m,YI:()=>p,HQ:()=>y});var i=r(60359),o=r(56368),n=r(61948),s=r(49016),a=r(10439),l=r(20985);const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},u={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},c={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},y={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:s.w}}},d={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},h={value:null,type:a.Z,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function g(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const f={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},v={...f,json:{...f.json,origins:{"web-document":{...f.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,l.b)(t.layerDefinition.drawingInfo.transparency):void 0:(0,l.b)(t.drawingInfo.transparency)}}},b={type:i.Z,readOnly:!0,get(){var e,t;if(null==(e=this.layer)||!e.timeInfo)return null;const r=null==(t=this.view)?void 0:t.timeExtent,i=this.layer.timeExtent,o=this.layer.useViewTime?r&&i?r.intersection(i):r||i:i;if(!o||o.isEmpty)return o;const n=this.layer.timeOffset,s=n?o.offset(-n.value,n.unit):o,a=this._get("timeExtent");return s.equals(a)?a:s}},m={type:o.Z,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=o.Z.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=n.Z.fromJSON(t.spatialReference)),r}}}},read:!1}},w={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},S={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},_={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}}},10439:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var i,o=r(14983),n=r(30223),s=r(42963),a=r(67380),l=r(84066),p=(r(77645),r(38215),r(45851),r(79159)),u=r(74184),c=r(87060),y=r(63454);let d=i=class extends s.wq{async collectRequiredFields(e,t){return(0,y.io)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}};(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],d.prototype,"expression",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],d.prototype,"title",void 0),d=i=(0,o._)([(0,u.j)("esri.layers.support.FeatureExpressionInfo")],d);const h=d;var g=r(13567);const f=function(){const e=Object.keys(g.a);return e.sort(),e}();var v;const b=(0,n.wY)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),m=new n.Xn({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let w=v=class extends s.wq{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write(null,i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):(0,a.pC)(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new v({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};(0,o._)([(0,l.Cb)({type:h,json:{write:!0}})],w.prototype,"featureExpressionInfo",void 0),(0,o._)([(0,p.r)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],w.prototype,"readFeatureExpressionInfo",null),(0,o._)([(0,c.c)("featureExpressionInfo",{featureExpressionInfo:{type:h},"featureExpression.value":{type:[0]}})],w.prototype,"writeFeatureExpressionInfo",null),(0,o._)([(0,l.Cb)({type:b.apiValues,nonNullable:!0,json:{type:b.jsonValues,read:b.read,write:{writer:b.write,isRequired:!0}}})],w.prototype,"mode",null),(0,o._)([(0,l.Cb)({type:Number,json:{write:!0}})],w.prototype,"offset",void 0),(0,o._)([(0,l.Cb)({type:f,json:{type:String,read:m.read,write:m.write}})],w.prototype,"unit",null),w=v=(0,o._)([(0,u.j)("esri.layers.support.ElevationInfo")],w);const S=w}}]);