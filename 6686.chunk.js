"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[6686],{26686:(e,r,t)=>{t.r(r),t.d(r,{clearBoundingBoxCache:()=>f,computeIconLayerResourceSize:()=>p,computeLayerResourceSize:()=>y,computeLayerSize:()=>h,computeObjectLayerResourceSize:()=>m});var n=t(54721),o=t(32656),i=t(65353),s=t(59472),c=t(69996),u=t(38202);let a=l();function l(){return new i.Z(50)}function f(){a=l()}function y(e,r){if("icon"===e.type)return p(e,r);if("object"===e.type)return m(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function h(e,r){if("icon"===e.type)return function(e,r){return p(e,r).then((r=>{if(null==e.size)return r;const t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}(e,r);if("object"===e.type)return async function(e,r){const t=await m(e,r);return(0,u.$K)(t,e)}(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function p(e,r){if(e.resource.href)return(t=e.resource.href,(0,n.default)(t,{responseType:"image"}).then((e=>e.data))).then((e=>[e.width,e.height]));var t;if(e.resource.primitive)return(0,s.pC)(r)?[r,r]:[256,256];throw new o.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function m(e,r){return async function(e,r){if(!e.isPrimitive){const r=e.resource.href,n=a.get(r);if(void 0!==n)return Promise.resolve(n);const o=await Promise.all([t.e(631),t.e(7316),t.e(5488)]).then(t.bind(t,7316)),i=await o.fetch(r,{disableTextures:!0});return a.put(r,i.referenceBoundingBox),i.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=(0,c.Ue)((0,u.Uz)(e.resource.primitive)),(0,s.pC)(r)))for(let e=0;e<n.length;e++)n[e]*=r;return n?Promise.resolve(n):Promise.reject(new o.Z("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((e=>(0,c.dp)(e)))}},38202:(e,r,t)=>{t.d(r,{Uz:()=>a,$K:()=>i}),t(95830);var n=t(77625),o=t(69996);function i(e,{isPrimitive:r,width:t,depth:o,height:i}){const s=r?10:1;if(null==t&&null==i&&null==o)return[s*e[0],s*e[1],s*e[2]];const c=(0,n.f)(t,o,i);let u;for(let r=0;r<3;r++){const t=c[r];if(null!=t){u=t/e[r];break}}for(let r=0;r<3;r++)null==c[r]&&(c[r]=e[r]*u);return c}const s=(0,o.al)(-.5,-.5,-.5,.5,.5,.5),c=(0,o.al)(-.5,-.5,0,.5,.5,1),u=(0,o.al)(-.5,-.5,0,.5,.5,.5);function a(e){switch(e){case"sphere":case"cube":case"diamond":return s;case"cylinder":case"cone":case"inverted-cone":return c;case"tetrahedron":return u;default:return}}}}]);