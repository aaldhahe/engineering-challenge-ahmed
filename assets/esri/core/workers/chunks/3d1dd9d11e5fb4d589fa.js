(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8206],{17253:(e,i,t)=>{"use strict";function a(e){}t.d(i,{Bg:()=>a}),t(77645)},80108:(e,i,t)=>{"use strict";t.d(i,{Y:()=>c});var a=t(14983),n=t(45851),r=t(67380),s=t(84066),l=(t(77645),t(38215),t(74184)),o=t(29444);const c=e=>{let i=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,o.Qc)(this.url);if((0,r.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,o.Nm)(e,n.Z.getLogger(this.declaredClass)))}};return(0,a._)([(0,s.Cb)()],i.prototype,"title",null),(0,a._)([(0,s.Cb)({type:String})],i.prototype,"url",null),i=(0,a._)([(0,l.j)("esri.layers.mixins.ArcGISService")],i),i}},13567:(e,i,t)=>{"use strict";t.d(i,{a:()=>r});var a=t(30817),n=t(13834);const r={inches:(0,a.En)(1,"meters","inches"),feet:(0,a.En)(1,"meters","feet"),"us-feet":(0,a.En)(1,"meters","us-feet"),yards:(0,a.En)(1,"meters","yards"),miles:(0,a.En)(1,"meters","miles"),"nautical-miles":(0,a.En)(1,"meters","nautical-miles"),millimeters:(0,a.En)(1,"meters","millimeters"),centimeters:(0,a.En)(1,"meters","centimeters"),decimeters:(0,a.En)(1,"meters","decimeters"),meters:(0,a.En)(1,"meters","meters"),kilometers:(0,a.En)(1,"meters","kilometers"),"decimal-degrees":1/(0,a.ty)(1,"meters",n.sv.radius)}},97684:(e,i,t)=>{"use strict";function a(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function r(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function s(e,i){const t=i||r(e),a=e.valueUnit||"unknown";return"unknown"===t?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}t.d(i,{PS:()=>r,QW:()=>s,iY:()=>a,qh:()=>n})},73225:(e,i,t)=>{"use strict";t.d(i,{PR:()=>w,Lq:()=>m,Km:()=>v,cM:()=>h,ap:()=>b,V3:()=>y,B3:()=>p});var a=t(98540),n=t(42885),r=t(17253),s=t(45851),l=t(67380),o=t(13567),c=t(97684);const u=s.Z.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),d=new n.Z,f=Math.PI,p=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function m(e,i,t){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.ColorVariable"!==n.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const r="number"==typeof i,s=r?null:i,o=s&&s.attributes;let c=r?i:null;const d=n.field,{ipData:f,hasExpression:p}=n.cache;let m=n.cache.compiledFunc;if(!d&&!p){const e=n.stops;return e&&e[0]&&e[0].color}if("number"!=typeof c)if(p){if(!(0,l.pC)(t)||!(0,l.pC)(t.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},i=t.arcade.arcadeUtils,a=i.getViewInfo(e),r=i.createExecContext(s,a);if(!m){const e=i.createSyntaxTree(n.valueExpression);m=i.createFunction(e),n.cache.compiledFunc=m}c=i.executeFunction(m,r)}else o&&(c=o[d]);const v=n.normalizationField,h=o?parseFloat(o[v]):void 0;if(null!=c&&(!v||r||!isNaN(h)&&0!==h)){isNaN(h)||r||(c/=h);const e=g(c,f);if(e){const i=e[0],r=e[1],s=i===r?n.stops[i].color:a.Z.blendColors(n.stops[i].color,n.stops[r].color,e[2],(0,l.pC)(t)?t.color:void 0);return new a.Z(s)}}}function v(e,i,t){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.OpacityVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof i,r=n?null:i,s=r&&r.attributes;let o=n?i:null;const c=a.field,{ipData:d,hasExpression:f}=a.cache;let p=a.cache.compiledFunc;if(!c&&!f){const e=a.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof o)if(f){if((0,l.Wi)(t)||(0,l.Wi)(t.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},i=t.arcade.arcadeUtils,n=i.getViewInfo(e),s=i.createExecContext(r,n);if(!p){const e=i.createSyntaxTree(a.valueExpression);p=i.createFunction(e),a.cache.compiledFunc=p}o=i.executeFunction(p,s)}else s&&(o=s[c]);const m=a.normalizationField,v=s?parseFloat(s[m]):void 0;if(null!=o&&(!m||n||!isNaN(v)&&0!==v)){isNaN(v)||n||(o/=v);const e=g(o,d);if(e){const i=e[0],t=e[1];if(i===t)return a.stops[i].opacity;{const n=a.stops[i].opacity;return n+(a.stops[t].opacity-n)*e[2]}}}}function h(e,i,t){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.RotationVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=a.axis||"heading",r="heading"===n&&"arithmetic"===a.rotationType?90:0,s="heading"===n&&"arithmetic"===a.rotationType?-1:1,o="number"==typeof i?null:i,c=o&&o.attributes,d=a.field,{hasExpression:f}=a.cache;let p=a.cache.compiledFunc,m=0;if(!d&&!f)return m;if(f){if((0,l.Wi)(t)||(0,l.Wi)(t.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},i=t.arcade.arcadeUtils,n=i.getViewInfo(e),r=i.createExecContext(o,n);if(!p){const e=i.createSyntaxTree(a.valueExpression);p=i.createFunction(e),a.cache.compiledFunc=p}m=i.executeFunction(p,r)}else c&&(m=c[d]||0);return m="number"!=typeof m||isNaN(m)?null:r+s*m,m}function b(e,i,t){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.SizeVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const n=function(e,i,t,a,n){switch(i.transformationType){case"additive":return function(e,i,t,a){return e+(V(i.minSize,t,a)||i.minDataValue)}(e,i,t,a);case"constant":return function(e,i,t){const a=e.stops;let n=a&&a.length&&a[0].size;return null==n&&(n=e.minSize),V(n,i,t)}(i,t,a);case"clamped-linear":return function(e,i,t,a){const n=(e-i.minDataValue)/(i.maxDataValue-i.minDataValue),r=V(i.minSize,t,a),s=V(i.maxSize,t,a),o=(0,l.pC)(a)?a.shape:void 0;if(e<=i.minDataValue)return r;if(e>=i.maxDataValue)return s;if("area"===i.scaleBy&&o){const e="circle"===o,i=e?f*(r/2)**2:r*r,t=i+n*((e?f*(s/2)**2:s*s)-i);return e?2*Math.sqrt(t/f):Math.sqrt(t)}return r+n*(s-r)}(e,i,t,a);case"proportional":return function(e,i,t,a){const n=(0,l.pC)(a)?a.shape:void 0,r=e/i.minDataValue,s=V(i.minSize,t,a),o=V(i.maxSize,t,a);let c=null;return c="circle"===n?2*Math.sqrt(r*(s/2)**2):"square"===n||"diamond"===n||"image"===n?Math.sqrt(r*s**2):r*s,x(c,s,o)}(e,i,t,a);case"stops":return function(e,i,t,a,n){const[r,s,l]=g(e,n);if(r===s)return V(i.stops[r].size,t,a);{const e=V(i.stops[r].size,t,a);return e+(V(i.stops[s].size,t,a)-e)*l}}(e,i,t,a,n);case"real-world-size":return function(e,i,t,a){const n=((0,l.pC)(a)&&a.resolution?a.resolution:1)*o.a[i.valueUnit],r=V(i.minSize,t,a),s=V(i.maxSize,t,a),{valueRepresentation:c}=i;let u=null;return u="area"===c?2*Math.sqrt(e/f)/n:"radius"===c||"distance"===c?2*e/n:e/n,x(u,r,s)}(e,i,t,a);case"identity":return e;case"unknown":return null}}(function(e,i,t){const a="number"==typeof i,n=a?null:i,r=n&&n.attributes;let s=a?i:null;const{isScaleDriven:o}=e.cache;let d=e.cache.compiledFunc;if(o){const i=(0,l.pC)(t)?t.scale:void 0,a=(0,l.pC)(t)?t.view:void 0;s=null==i||"3d"===a?function(e){let i=null,t=null;const a=e.stops;return a?(i=a[0].value,t=a[a.length-1].value):(i=e.minDataValue||0,t=e.maxDataValue||0),(i+t)/2}(e):i}else if(!a)switch(e.inputValueType){case"expression":{if((0,l.Wi)(t)||(0,l.Wi)(t.arcade))return void u.error("Use of arcade expressions requires an arcade context");const i={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},a=t.arcade.arcadeUtils,r=a.getViewInfo(i),o=a.createExecContext(n,r);if(!d){const i=a.createSyntaxTree(e.valueExpression);d=a.createFunction(i),e.cache.compiledFunc=d}s=a.executeFunction(d,o);break}case"field":r&&(s=r[e.field]);break;case"unknown":s=null}if(!(0,c.qh)(s))return null;if(a||!e.normalizationField)return s;const f=r?parseFloat(r[e.normalizationField]):null;return(0,c.qh)(f)&&0!==f?s/f:null}(a,i,t),a,i,t,a.cache.ipData);return null==n||isNaN(n)?0:n}function V(e,i,t){return null==e?null:(0,c.iY)(e)?b(e,i,t):(0,c.qh)(e)?e:null}function x(e,i,t){return(0,c.qh)(t)&&e>t?t:(0,c.qh)(i)&&e<i?i:e}function y(e,i,t){const{isScaleDriven:a}=e.cache;if(!(a&&"3d"===t||i))return null;const n={scale:i,view:t};let r=V(e.minSize,d,n),s=V(e.maxSize,d,n);if(null!=r||null!=s){if(r>s){const e=s;s=r,r=e}return{minSize:r,maxSize:s}}}function g(e,i){if(!i)return;let t=0,a=i.length-1;return i.some(((i,n)=>e<i?(a=n,!0):(t=n,!1))),[t,a,(e-i[t])/(i[a]-i[t])]}function w(e,i,t){const a=["proportional","proportional","proportional"];for(const n of e){const e=n.useSymbolValue?"symbol-value":b(n,i,t);switch(n.axis){case"width":a[0]=e;break;case"depth":a[1]=e;break;case"height":a[2]=e;break;case"width-and-depth":a[0]=e,a[1]=e;break;case"all":case void 0:case null:a[0]=e,a[1]=e,a[2]=e;break;default:(0,r.Bg)(n.axis)}}return a}}}]);