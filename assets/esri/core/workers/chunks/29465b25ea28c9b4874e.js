(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[292],{84807:(e,t,n)=>{"use strict";function r(){r=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,o){var a=new RegExp(e,r);return t.set(a,o||t.get(e)),i(a,n.prototype)}function a(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return o(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=a(n,this)),n},n.prototype[Symbol.replace]=function(n,r){if("string"==typeof r){var o=t.get(this);return e[Symbol.replace].call(this,n,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+o[t]})))}if("function"==typeof r){var i=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(a(e,i)),r.apply(this,e)}))}return e[Symbol.replace].call(this,n,r)},r.apply(this,arguments)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,{_:()=>r})},80361:(e,t,n)=>{"use strict";n.d(t,{lG:()=>S,q9:()=>s,my:()=>F,O3:()=>T});var r=n(8811),o=n(96535),i=n(47369);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function s(e){return a[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*u(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function c(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function y(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function d(e,t,n){switch(t.type){case"LineString":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)g(e,r,n);return e}(e,t,n);case"MultiPoint":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){f(e,r[0],n);for(let t=1;t<r.length;t++)m(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;f(e,r[0],n);for(let t=1;t<r.length;t++)m(e,r[t],n);return e}(e,t,n)}}function f(e,t,n){const r=y(t);!function(e){return!p(e)}(r)?g(e,r,n):h(e,r,n)}function m(e,t,n){const r=y(t);!function(e){return p(e)}(r)?g(e,r,n):h(e,r,n)}function g(e,t,n){for(const r of t)b(e,r,n);e.lengths.push(t.length)}function h(e,t,n){for(let r=t.length-1;r>=0;r--)b(e,t[r],n);e.lengths.push(t.length)}function b(e,t,n){const[r,o,i]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(i||0)}function w(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){if(!e)throw new r.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!o.test(n))throw new r.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function F(e,t={}){const n=[],r=new Set,o=new Set;let i,a=!1,p=Number.NEGATIVE_INFINITY,y=null,d=!1,{geometryType:f=null}=t,m=!1;for(const t of l(e)){const{geometry:e,properties:l,id:g}=t;if((!e||(f||(f=s(e.type)),s(e.type)===f))&&(a||(a=c(u(e))),d||(d=null!=g,d&&(i=typeof g,"number"===i&&(y=Object.keys(l).filter((e=>l[e]===g))))),d&&"number"===i&&null!=g&&(p=Math.max(p,g),y.length>1?y=y.filter((e=>l[e]===g)):1===y.length&&(y=l[y[0]]===g?y:[])),!m&&l)){let e=!0;for(const t in l){if(r.has(t))continue;const i=l[t];if(null==i){e=!1,o.add(t);continue}const a=w(i);"unknown"!==a?(o.delete(t),r.add(t),n.push({name:t,alias:t,type:a})):o.add(t)}m=e}}const g=y&&1===y.length&&y[0]||null;if(g)for(const e of n)e.name===g&&(e.type="esriFieldTypeOID");return{fields:n,geometryType:f,hasZ:a,maxObjectId:Math.max(0,p),objectIdFieldName:g,objectIdFieldType:i,unknownFields:Array.from(o)}}function S(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:r}=t;for(const l of e){var a;const{geometry:e,properties:u,id:c}=l;if(e&&s(e.type)!==n)continue;const p=u||{};let y=null!=(a=p[r])?a:null;r&&null!=c&&!p[r]&&(p[r]=y=c);const f=new o.Z(e?d(new i.Z,e,t):null,p,null,y);yield f}}(l(e),t))}},70292:(e,t,n)=>{"use strict";n.d(t,{M8:()=>S,ft:()=>G,FU:()=>C,Bm:()=>Z,be:()=>E,eB:()=>O});var r=n(84807),o=(n(18507),n(93100)),i=n(8811);function a(e,t){for(const n of e)if(null!=n&&t(n))return n}var s=n(67380),l=n(8764),u=n(99204),c=n(45387),p=n(31174),y=n(52389),d=n(80361);const f=(0,r._)(/^(?:(\x2D?[0-9]{4,})\x2D([0-9]{2})\x2D([0-9]{2}))(?:T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\.([0-9]+))?)?(?:(Z)|(?:(\+|\x2D)([0-9]{2}):([0-9]{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11});function m(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&m(n,t)}else m(n,e)}}function*g(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*g(n,e)}}var h=n(233),b=n(61948),w=n(56368);const T="xlink:href",F="2.0.0",S="__esri_wfs_id__",v="wfs-layer:feature-type-not-found",x="wfs-layer:unknown-geometry-type";async function C(e,t){const n=function(e){const t=M(e);(function(e){const t=e.firstElementChild.getAttribute("version");if(t&&t!==F)throw new i.Z("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${t}. Supported version: ${F}`)})(t),_(t);const n=t.firstElementChild,r=new Map;return{operations:P(n),get featureTypes(){return Array.from(k(n,r))},readFeatureTypes:()=>k(n,r)}}((await(0,o.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:F,...null==t?void 0:t.customParameters},signal:null==t?void 0:t.signal})).data);return function(e,t){(0,u.$U)(e)&&((0,u.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,u.hO)(t.operations.DescribeFeatureType.url)),(0,u.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,u.hO)(t.operations.GetFeature.url)))}(e,n),n}const N=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function P(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(m(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(T)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(T)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(T)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;N.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new i.Z("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,s.Wi)(n.GetFeature.outputFormat))throw new i.Z("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function k(e,t){return g(e,{FeatureTypeList:{FeatureType:e=>{if(t.has(e))return t.get(e);const n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},o=new Set([4326]),i=e=>{var t,n;const i=parseInt(null==(t=e.textContent.match((0,r._)(/([0-9]+$)/i,{wkid:1})))||null==(n=t.groups)?void 0:n.wkid,10);Number.isNaN(i)||o.add(i)};return m(e,{Name:e=>{const{name:t,prefix:r}=I(e.textContent);n.typeName=`${r}:${t}`,n.name=t,n.namespacePrefix=r,n.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{n.description=e.textContent},Title:e=>{n.title=e.textContent},WGS84BoundingBox:e=>{n.extent=function(e){let t,n,r,o;for(const i of e.children)switch(i.localName){case"LowerCorner":[t,n]=i.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,o]=i.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:p.Zn}}(e)},DefaultSRS:i,DefaultCRS:i,OtherSRS:i,OtherCRS:i}),n.title||(n.title=n.name),n.supportedSpatialReferences.push(...o),t.set(e,n),n}}})}function G(e,t,n){return a(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function E(e,t,n,r={}){var o;const{featureType:a,extent:u}=await async function(e,t,n,r={}){const{spatialReference:o=b.Z.WGS84}=r,a=e.readFeatureTypes(),l=t?G(a,t,n):a.next().value;if((0,s.Wi)(l))throw t?new i.Z(v,`The type '${t}' could not be found in the service`):new i.Z("wfs-layer:empty-service","The service is empty");let u=new w.Z({...l.extent,spatialReference:o});if(!(0,p.fS)(o,p.Zn))try{await(0,c.iQ)(p.Zn,o,void 0,r),u=(0,c.iV)(u,p.Zn)}catch{throw new i.Z("wfs-layer:unsupported-spatial-reference","Projection not supported")}return{extent:u,spatialReference:o,featureType:l}}(e,t,n,r),{fields:y,geometryType:d,swapXY:f,objectIdField:m,geometryField:g}=await async function(e,t,n={}){const[r,o]=await(0,l.as)([D(e.operations.DescribeFeatureType.url,t,n),j(e,t,n)]);if(r.error||o.error)throw new i.Z("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${t}'`,{error:r.error||o.error});const{fields:a,errors:u}=r.value,c=r.value.geometryType||o.value.geometryType,p=o.value.swapXY;if((0,s.Wi)(c))throw new i.Z(x,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:c,fields:a,errors:u});return{...O(a),geometryType:c,swapXY:p}}(e,a.typeName,r);return{url:e.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:y,geometryField:g,geometryType:d,objectIdField:m,spatialReference:null!=(o=r.spatialReference)?o:b.Z.WGS84,extent:u,swapXY:f,wfsCapabilities:e,customParameters:r.customParameters}}function O(e){var t;const n=e.find((e=>"geometry"===e.type));let r=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),r||(r=new h.Z({name:S,type:"oid",alias:S}),e.unshift(r)),{geometryField:null!=(t=null==n?void 0:n.name)?t:null,objectIdField:r.name,fields:e}}async function j(e,t,n={}){var r;let i,a=!1;const[s,l]=await Promise.all([Z(e.operations.GetFeature.url,t,e.operations.GetFeature.outputFormat,{...n,count:1}),(0,o.default)(e.operations.GetFeature.url,{responseType:"text",query:A(t,void 0,{...n,count:1}),signal:null==n?void 0:n.signal})]),u="FeatureCollection"===s.type&&(null==(r=s.features[0])?void 0:r.geometry);if(u){let e;switch(i=y.Mk.fromJSON((0,d.q9)(u.type)),u.type){case"Point":e=u.coordinates;break;case"LineString":case"MultiPoint":e=u.coordinates[0];break;case"MultiLineString":case"Polygon":e=u.coordinates[0][0];break;case"MultiPolygon":e=u.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(l.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),o=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===o&&(a=!0)}}return{geometryType:i,swapXY:a}}async function D(e,t,n){return function(e,t){const{name:n}=I(e),r=M(t);_(r);const o=a(g(r.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:I(e.getAttribute("type")).name})}),(({name:e})=>e===n));if((0,s.pC)(o)){const e=a(g(r.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===o.typeName));if((0,s.pC)(e))return function(e){var t,n;const r=[],o=[];let a;const s=g(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const l of s){const s=l.getAttribute("name");if(!s)continue;let u,c;if(l.hasAttribute("type")?u=I(l.getAttribute("type")).name:m(l,{simpleType:{restriction:e=>(u=I(e.getAttribute("base")).name,{maxLength:e=>{c=+e.getAttribute("value")}})}}),!u)continue;const p="true"===l.getAttribute("nillable");let y=!1;switch(u.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":o.push(new h.Z({name:s,alias:s,type:"integer",nullable:p}));break;case"float":case"double":case"decimal":o.push(new h.Z({name:s,alias:s,type:"double",nullable:p}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":o.push(new h.Z({name:s,alias:s,type:"string",nullable:p,length:null!=(t=c)?t:255}));break;case"datetime":case"date":o.push(new h.Z({name:s,alias:s,type:"date",nullable:p,length:null!=(n=c)?n:36}));break;case"pointpropertytype":a="point",y=!0;break;case"multipointpropertytype":a="multipoint",y=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",y=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",y=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":y=!0,r.push(new i.Z(x,`geometry type '${u}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:r.push(new i.Z("wfs-layer:unknown-field-type",`Unknown field type '${u}'`,{type:(new XMLSerializer).serializeToString(e)}))}y&&o.push(new h.Z({name:s,alias:s,type:"geometry",nullable:p}))}for(const e of o)if("integer"===e.type&&!e.nullable&&R.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:a,fields:o,errors:r}}(e)}throw new i.Z(v,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}(t,(await(0,o.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:F,TYPENAME:t,...null==n?void 0:n.customParameters},signal:null==n?void 0:n.signal})).data)}const R=new Set(["objectid","fid"]);async function Z(e,t,n,r){let{data:a}=await(0,o.default)(e,{responseType:"text",query:A(t,n,r),signal:null==r?void 0:r.signal});a=a.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var s;if(null!=r&&null!=(s=r.dateFields)&&s.length){const e=new Set(r.dateFields);return JSON.parse(a,((t,n)=>e.has(t)?function(e){var t;return null!=(t=function(e){var t,n,r,o;const i=f.exec(e);if(!i)return null;const a=i.groups,s=+a.year,l=+a.month-1,u=+a.day,c=+(null!=(t=a.hours)?t:"0"),p=+(null!=(n=a.minutes)?n:"0"),y=+(null!=(r=a.seconds)?r:"0");if(c>23)return null;if(p>59)return null;if(y>59)return null;const d=null!=(o=a.ms)?o:"0",m=d?+d.padEnd(3,"0").substring(0,3):0;let g;if(a.isUTC)g=Date.UTC(s,l,u,c,p,y,m);else if(a.offsetSign){const e=+a.offsetHours,t=+a.offsetMinutes;g=6e4*("+"===a.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,l,u,c,p,y,m)}else g=new Date(s,l,u,c,p,y,m).getTime();return Number.isNaN(g)?null:g}(e))?t:function(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}(n):n))}return JSON.parse(a)}catch(e){throw new i.Z("wfs-layer:malformed-json","Error while parsing the response",{response:a,error:e})}}function A(e,t,n){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==n?void 0:n.startIndex,COUNT:null==n?void 0:n.count,...null==n?void 0:n.customParameters}}function M(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function I(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:null!=n?n:t}}function _(e){let t,n;if(m(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new i.Z(`wfs-layer:${t}`,n)}},233:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r,o=n(14983),i=n(30223),a=n(42963),s=n(84066),l=(n(77645),n(38215)),u=(n(45851),n(68720)),c=n(79159),p=n(74184),y=n(85625),d=n(76882);const f=new i.Xn({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=r=class extends a.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?n.value:null}readValueType(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?f.fromJSON(n.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};(0,o._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,o._)([(0,s.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,o._)([(0,s.Cb)()],m.prototype,"description",void 0),(0,o._)([(0,c.r)("description")],m.prototype,"readDescription",null),(0,o._)([(0,s.Cb)({types:y.V5,json:{read:{reader:y.im},write:!0}})],m.prototype,"domain",void 0),(0,o._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,o._)([(0,s.Cb)({type:l.z8,json:{write:!0}})],m.prototype,"length",void 0),(0,o._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,o._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,o._)([(0,u.J)(d.v)],m.prototype,"type",void 0),(0,o._)([(0,s.Cb)()],m.prototype,"valueType",void 0),(0,o._)([(0,c.r)("valueType",["description"])],m.prototype,"readValueType",null),m=r=(0,o._)([(0,p.j)("esri.layers.support.Field")],m);const g=m},76882:(e,t,n)=>{"use strict";n.d(t,{v:()=>r});const r=new(n(30223).Xn)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}}]);