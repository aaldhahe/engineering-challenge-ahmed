(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5114],{19153:(e,t,n)=>{"use strict";n.d(t,{E:()=>r,R:()=>i});const r=1e-6,i=Math.random,a=Math.PI/180,u=180/Math.PI;Object.freeze({__proto__:null,EPSILON:r,RANDOM:i,toRadian:function(e){return e*a},toDegree:function(e){return e*u},equals:function(e,t){return Math.abs(e-t)<=r*Math.max(1,Math.abs(e),Math.abs(t))}})},10188:(e,t,n)=>{"use strict";n.d(t,{E:()=>f,a:()=>d,b:()=>s,c:()=>g,d:()=>M,e:()=>b,f:()=>l,g:()=>u,h:()=>h,i:()=>m,k:()=>T,l:()=>a,m:()=>F,n:()=>y,p:()=>p,q:()=>N,r:()=>x,s:()=>o,t:()=>_,u:()=>$});var r=n(88230),i=n(19153);function a(e){const t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function u(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function o(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function s(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function l(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function c(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function f(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function d(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function m(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}function h(e,t){const n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i}function p(e){const t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function y(e,t){const n=t[0],r=t[1],i=t[2];let a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}function M(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function g(e,t,n){const r=t[0],i=t[1],a=t[2],u=n[0],o=n[1],s=n[2];return e[0]=i*s-a*o,e[1]=a*u-r*s,e[2]=r*o-i*u,e}function b(e,t,n,r){const i=t[0],a=t[1],u=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=u+r*(n[2]-u),e}function F(e,t,n){const r=t[0],i=t[1],a=t[2];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12],e[1]=n[1]*r+n[5]*i+n[9]*a+n[13],e[2]=n[2]*r+n[6]*i+n[10]*a+n[14],e}function _(e,t,n){const r=t[0],i=t[1],a=t[2];return e[0]=r*n[0]+i*n[3]+a*n[6],e[1]=r*n[1]+i*n[4]+a*n[7],e[2]=r*n[2]+i*n[5]+a*n[8],e}function N(e,t,n){const r=n[0],i=n[1],a=n[2],u=n[3],o=t[0],s=t[1],l=t[2];let c=i*l-a*s,f=a*o-r*l,d=r*s-i*o,m=i*d-a*f,h=a*c-r*d,p=r*f-i*c;const y=2*u;return c*=y,f*=y,d*=y,m*=2,h*=2,p*=2,e[0]=o+c+m,e[1]=s+f+h,e[2]=l+d+p,e}const v=(0,r.c)(),I=(0,r.c)();function T(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function x(e,t,n){const r=n[0]-t[0],i=n[1]-t[1],a=n[2]-t[2];let u=r*r+i*i+a*a;return u>0?(u=1/Math.sqrt(u),e[0]=r*u,e[1]=i*u,e[2]=a*u,e):(e[0]=0,e[1]=0,e[2]=0,e)}const S=l,A=c,w=f,V=m,E=h,$=a,O=p;Object.freeze({__proto__:null,length:a,copy:u,set:o,add:s,subtract:l,multiply:c,divide:f,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e},min:function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e},max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},scale:d,scaleAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e},distance:m,squaredDistance:h,squaredLength:p,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},normalize:y,dot:M,cross:g,lerp:b,hermite:function(e,t,n,r,i,a){const u=a*a,o=u*(2*a-3)+1,s=u*(a-2)+a,l=u*(a-1),c=u*(3-2*a);return e[0]=t[0]*o+n[0]*s+r[0]*l+i[0]*c,e[1]=t[1]*o+n[1]*s+r[1]*l+i[1]*c,e[2]=t[2]*o+n[2]*s+r[2]*l+i[2]*c,e},bezier:function(e,t,n,r,i,a){const u=1-a,o=u*u,s=a*a,l=o*u,c=3*a*o,f=3*s*u,d=s*a;return e[0]=t[0]*l+n[0]*c+r[0]*f+i[0]*d,e[1]=t[1]*l+n[1]*c+r[1]*f+i[1]*d,e[2]=t[2]*l+n[2]*c+r[2]*f+i[2]*d,e},random:function(e,t){t=t||1;const n=2*(0,i.R)()*Math.PI,r=2*(0,i.R)()-1,a=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(n)*a,e[1]=Math.sin(n)*a,e[2]=r*t,e},transformMat4:F,transformMat3:_,transformQuat:N,rotateX:function(e,t,n,r){const i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e},rotateY:function(e,t,n,r){const i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e},rotateZ:function(e,t,n,r){const i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e},angle:function(e,t){u(v,e),u(I,t),y(v,v),y(I,I);const n=M(v,I);return n>1?0:n<-1?Math.PI:Math.acos(n)},str:function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},exactEquals:T,equals:function(e,t){const n=e[0],r=e[1],a=e[2],u=t[0],o=t[1],s=t[2];return Math.abs(n-u)<=i.E*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(r-o)<=i.E*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(a-s)<=i.E*Math.max(1,Math.abs(a),Math.abs(s))},direction:x,sub:S,mul:A,div:w,dist:V,sqrDist:E,len:$,sqrLen:O})},88230:(e,t,n)=>{"use strict";function r(){return[0,0,0]}function i(e){return[e[0],e[1],e[2]]}function a(e,t,n){return[e,t,n]}function u(e){const t=[0,0,0],n=Math.min(3,e.length);for(let r=0;r<n;++r)t[r]=e[r];return t}function o(e,t){return new Float64Array(e,t,3)}function s(){return a(1,1,1)}function l(){return a(1,0,0)}function c(){return a(0,1,0)}function f(){return a(0,0,1)}n.d(t,{O:()=>m,Z:()=>d,a:()=>i,b:()=>o,c:()=>r,d:()=>u,f:()=>a});const d=[0,0,0],m=s(),h=l(),p=c(),y=f();Object.freeze({__proto__:null,create:r,clone:i,fromValues:a,fromArray:u,createView:o,zeros:function(){return[0,0,0]},ones:s,unitX:l,unitY:c,unitZ:f,ZEROS:d,ONES:m,UNIT_X:h,UNIT_Y:p,UNIT_Z:y})},68589:(e,t,n)=>{"use strict";n.d(t,{ZF:()=>h,Kt:()=>p,jE:()=>y,uZ:()=>s,Vl:()=>d,xV:()=>a,i2:()=>u,wt:()=>l,t7:()=>f,k3:()=>c,Sf:()=>o,BV:()=>m});var r=n(10188);const i=new Float32Array(1),a=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},u=Number.isNaN||function(e){return e!=e};function o(e){--e;for(let t=1;t<32;t<<=1)e|=e>>t;return e+1}function s(e,t,n){return Math.min(Math.max(e,t),n)}function l(e){return 0==(e&e-1)}Math.sign;const c=Math.log2||function(e){return Math.log(e)/Math.LN2};function f(e,t,n){return e+(t-e)*n}function d(e){return e*Math.PI/180}function m(e){return 180*e/Math.PI}function h(e){return Math.acos(s(e,-1,1))}function p(e){return Math.asin(s(e,-1,1))}function y(e,t){const n=(0,r.l)(e),i=p(e[2]/n),a=Math.atan2(e[1]/n,e[0]/n);return(0,r.s)(t,n,i,a),t}i[0]=34028234663852886e22,i[0]},18507:(e,t,n)=>{"use strict";n.d(t,{qM:()=>c});var r=n(38215),i=n(56368),a=n(82114),u=n(81787),o=n(59499),s=n(60716),l=n(70049);n(61948),n(52389),n(64334);const c={base:a.Z,key:"type",typeMap:{extent:i.Z,multipoint:u.Z,point:o.Z,polyline:l.Z,polygon:s.Z}};(0,r.N7)(c)},63454:(e,t,n)=>{"use strict";n.d(t,{io:()=>p,AB:()=>h,gd:()=>m,Q0:()=>d,YN:()=>s,UF:()=>c,O5:()=>y,os:()=>g,H7:()=>A,qN:()=>w,Pz:()=>$,Qc:()=>O,vP:()=>U}),n(8811);var r=n(31544),i=n(85625),a=n(32555);const u=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],o=["field","normalizationField"];function s(e,t){if(null!=e&&null!=t)for(const n of Array.isArray(e)?e:[e])if(l(u,n,t),"visualVariables"in n&&n.visualVariables)for(const e of n.visualVariables)l(o,e,t)}function l(e,t,n){if(e)for(const i of e){const e=(0,r.hS)(i,t),a=e&&"function"!=typeof e&&n.get(e);a&&(0,r.RB)(i,a.name,t)}}function c(e,t){if(null!=e&&null!=t&&t.fields.length)if("startField"in e){const n=t.get(e.startField),r=t.get(e.endField);e.startField=n&&n.name||null,e.endField=r&&r.name||null}else{const n=t.get(e.startTimeField),r=t.get(e.endTimeField);e.startTimeField=n&&n.name||null,e.endTimeField=r&&r.name||null}}const f=new Set;function d(e,t){return e&&t?(f.clear(),m(f,e,t),Array.from(f).sort()):[]}function m(e,t,n){var r;if(n)if(null!=t&&null!=(r=t.fields)&&r.length)if(n.includes("*"))for(const{name:n}of t.fields)e.add(n);else for(const r of n)h(e,t,r);else{if(n.includes("*"))return e.clear(),void e.add("*");for(const t of n)e.add(t)}}function h(e,t,n){if("string"==typeof n)if(t){const r=t.get(n);r&&e.add(r.name)}else e.add(n)}async function p(e,t,n){if(!n)return;const{arcadeUtils:r}=await(0,a.LC)(),i=r.extractFieldNames(n);for(const n of i)h(e,t,n)}function y({displayField:e,fields:t}){return e||(t&&t.length?M(t,"name-or-title")||M(t,"unique-identifier")||M(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue;const e=t.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return t.name}return null}(t):null)}function M(e,t){for(const n of e)if(n&&n.valueType&&n.valueType===t)return n.name;return null}function g(e){const t=e.defaultValue;return void 0!==t&&x(e,t)?t:e.nullable?null:void 0}function b(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function F(e){return null===e||b(e)}const _="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function N(e){return null===e||_(e)}function v(e){return null!=e&&"string"==typeof e}function I(e){return null===e||v(e)}function T(){return!0}function x(e,t){let n;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=e.nullable?N:_;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=e.nullable?F:b;break;case"string":case"esriFieldTypeString":n=e.nullable?I:v;break;default:n=T}return 1===arguments.length?n:n(t)}const S=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function A(e){return null!=e&&S.has(e.type)}function w(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var V,E;function $(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function O(e,t){return e.nullable&&null===t?null:A(e)&&!function(e,t){const n="string"==typeof e?D(e):e;return!!n&&(n.isInteger?_(t)&&t>=n.min&&t<=n.max:t>=n.min&&t<=n.max)}(e.type,Number(t))?V.OUT_OF_RANGE:x(e,t)?e.domain?(0,i.F3)(e.domain,t):null:E.INVALID_TYPE}function D(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return L;case"esriFieldTypeInteger":case"integer":return q;case"esriFieldTypeSingle":case"single":return R;case"esriFieldTypeDouble":case"double":return k}}(V||(V={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range",function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(E||(E={}));const L={min:-32768,max:32767,isInteger:!0},q={min:-2147483648,max:2147483647,isInteger:!0},R={min:-34e37,max:12e37,isInteger:!1},k={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function U(e,t,n){switch(e){case i.V$.INVALID_CODED_VALUE:return`Value ${n} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case i.V$.VALUE_OUT_OF_RANGE:return`Value ${n} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case E.INVALID_TYPE:return`Value ${n} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;case V.OUT_OF_RANGE:{const{min:e,max:r}=D(t.type);return`Value ${n} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${r}`}}}},83110:(e,t,n)=>{"use strict";function r(e){const t=null!=e.normalizationField||null!=e.normalizationType,n=null!=e.minValue||null!=e.maxValue,r=!!e.sqlExpression&&e.supportsSQLExpression;return!t&&!n&&!r}function i(e){const{values:t,supportsNullCount:n}=e,r=t.filter((e=>null!=e)).length,i={count:r};return n&&(i.nullcount=t.length-r),i}function a(e){const{values:t,useSampleStdDev:n,supportsNullCount:r}=e;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,u=null,o=null,s=null,l=null,c=0;const f=null==e.minValue?-1/0:e.minValue,d=null==e.maxValue?1/0:e.maxValue;for(const e of t)Number.isFinite(e)?e>=f&&e<=d&&(u+=e,i=Math.min(i,e),a=Math.max(a,e),c++):"string"==typeof e&&c++;if(c&&null!=u){o=u/c;let e=0;for(const n of t)Number.isFinite(n)&&n>=f&&n<=d&&(e+=(n-o)**2);l=n?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(l)}else i=null,a=null;const m={avg:o,count:c,max:a,min:i,stddev:s,sum:u,variance:l};return r&&(m.nullcount=t.length-c),m}function u(e,t){return t?(["avg","stddev","variance"].forEach((t=>{null!=e[t]&&(e[t]=Math.ceil(e[t]))})),e):e}function o(e,t,n,r){let i=null;switch(t){case"log":0!==e&&(i=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(r)&&0!==r&&(i=e/r*100);break;case"field":Number.isFinite(n)&&0!==n&&(i=e/n);break;case"natural-log":e>0&&(i=Math.log(e));break;case"square-root":e>0&&(i=e**.5)}return i}n.d(t,{i5:()=>a,H0:()=>i,fk:()=>o,S5:()=>r,rt:()=>u}),n(8811),n(63454)},32555:(e,t,n)=>{"use strict";n.d(t,{mz:()=>c,pp:()=>l,WW:()=>o,Yi:()=>s,LC:()=>u}),n(18507);var r=n(67380),i=n(61948);let a;async function u(){return a||(a=(async()=>{const e=await n.e(1235).then(n.bind(n,21235));return await e.arcade.load(),{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),a}const o=(e,t,n)=>c.create(e,t,n,null,["$feature"]),s=(e,t,n)=>c.create(e,t,n,null,["$feature","$view"]),l=(e,t,n,r)=>c.create(e,t,n,r,["$feature","$view"]);class c{constructor(e,t,n,r,i,a,u,o){this.script=e,this.evaluate=i;const s=Array.isArray(u)?u:u.fields;this.fields=s,this._syntaxTree=r,this._arcade=t,this._arcadeDictionary=n,this._arcadeFeature=a,this._spatialReference=o,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,n,a,o,s){const{arcade:l,Feature:f,Dictionary:d}=await u(),m=i.Z.fromJSON(t),h=l.parseScript(e,s),p=o.reduce(((e,t)=>({...e,[t]:null})),{});let y=null;(0,r.pC)(a)&&(y=new d(a),y.immutable=!0,p.$config=null);const M=l.scriptUsesGeometryEngine(h)&&l.enableGeometrySupport(),g=l.scriptUsesFeatureSet(h)&&l.enableFeatureSetSupport(),b=l.scriptIsAsync(h)&&l.enableAsyncSupport(),F={vars:p,spatialReference:m,useAsync:!!b},_=new d;_.immutable=!1,_.setField("scale",0);const N=l.compileScript(h,F);return await Promise.all([M,g,b]),new c(e,l,d,h,(e=>("$view"in e&&e.$view&&(_.setField("scale",e.$view.scale),e.$view=_),y&&(e.$config=y),N({vars:e,spatialReference:m}))),new f,n,m)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)}}}}]);