"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[1996],{60137:(e,t,a)=>{a.r(t),a.d(t,{previewCIMSymbol:()=>i});var r=a(96071),n=a(60036),s=a(14020);const o=new n.CIMSymbolRasterizer(null,!0);async function i(e,t={}){const{size:a,maxSize:n,node:i,opacity:l}=t,c=t.cimOptions||t,{feature:u,fieldMap:m,geometryType:d,style:y}=c,p=(0,s.kW)(e),h=Math.min(null!=a?a:p,null!=n?n:(0,r.Wz)(120));h!==p&&(e=e.clone(),(0,s.PI)(e,h,{preserveOutlineWidth:!0}));let g=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(g=1);const w=await o.rasterizeCIMSymbolAsync(e,u,m,d,{scaleFactor:g,style:y}),f=document.createElement("canvas");f.width=w.imageData.width,f.height=w.imageData.height,f.getContext("2d").putImageData(w.imageData,0,0);let v=f.width/g,M=f.height/g;if(null!=a&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale))){const e=v/M;v=e<=1?Math.ceil(h*e):h,M=e<=1?h:Math.ceil(h/e)}const b=new Image(v,M);return b.src=f.toDataURL(),null!=l&&(b.style.opacity=`${l}`),i&&i.appendChild(b),b}},49723:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(32656),n=a(36544),s=a(78712);const o=new Map;function i(e,t,a){const{transform:i,hasZ:l,hasM:c}=a;o.has(t)||o.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,a,r,n)=>(0,s.U1)(a,t,e,r,n);case"esriGeometryPolygon":return(e,a,r,n)=>(0,s.Ie)(a,t,e,r,n);case"esriGeometryPolyline":return(e,a,r,n)=>(0,s.G6)(a,t,e,r,n);case"esriGeometryMultipoint":return(e,a,r,n)=>(0,s.J9)(a,t,e,r,n);default:return n.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new r.Z("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const u=o.get(t)(e.geometry,i,l,c);return{...e,geometry:u}}const l=function(e,t,a,r,s){const o=e.referencesGeometry()&&s?i(t,r,s):t,l=e.repurposeFeature(o);try{return e.evaluate({...a,$feature:l})}catch(e){return n.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}}}]);