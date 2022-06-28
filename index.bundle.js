(()=>{var e,t,n,r,a,o={41993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=41993,e.exports=t},11136:(e,t,n)=>{"use strict";n(29232);var r=n(93379),a=n.n(r),o=n(7795),i=n.n(o),s=n(90569),c=n.n(s),l=n(3565),u=n.n(l),h=n(19216),p=n.n(h),d=n(44589),f=n.n(d),v=n(838),y={};y.styleTagTransform=f(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),a()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;var m=n(67294),k=n(73935),g=n(32465),b=n(6610),Z=n(96156),E=n(92137),S=n(5991),A=n(87757),w=n.n(A),L=n(68949),O=n(44095),T=n(49275),M=n(94394),P=n(15988),F=n(53817),I=n(45560),x=function e(t){var n=this;(0,b.Z)(this,e),(0,Z.Z)(this,"sketch",void 0),(0,Z.Z)(this,"setEvents",(function(e,t){n.sketch.on(e,t)})),(0,Z.Z)(this,"destroy",(function(){n.sketch.destroy()})),(0,Z.Z)(this,"addUI",(function(e,t){e.ui.add(n.sketch,t)})),this.sketch=new I.Z(t)},C=function e(){(0,b.Z)(this,e)};(0,Z.Z)(C,"SIMPLE_FILL","simple-fill"),(0,Z.Z)(C,"SQUARE_KILOMETERS","square-kilometers");var _=n(14743);const j="rgba(51, 51, 204, 0.2)",R="rgba(255, 6, 6, 0.4)",U="white",G="black";var D={color:new _.Z(j),type:C.SIMPLE_FILL,style:"solid",outline:{color:U,width:2}},N={color:new _.Z(R),type:C.SIMPLE_FILL,style:"solid",outline:{color:G,width:2}},q={spatialReference:{wkid:102100},rings:[[[-9278977.502393615,5196972.662366206],[-9278404.224681476,5197240.191965203],[-9274505.936238931,5195673.232885358],[-9275518.726863708,5190055.1113064],[-9278881.956108259,5189061.429938688],[-9280869.318843672,5188660.135540191],[-9282646.479751302,5192481.986954449],[-9278977.502393615,5196972.662366206]]]},z=n(70642),Q=function(){function e(){(0,b.Z)(this,e)}return(0,S.Z)(e,null,[{key:"geodesic",value:function(e){return(0,z.geodesicArea)(new F.Z(e),C.SQUARE_KILOMETERS).toFixed(2).toString()}},{key:"planar",value:function(e){return(0,z.planarArea)(new F.Z(e),C.SQUARE_KILOMETERS).toFixed(2).toString()}}]),e}(),B=function(){function e(){(0,b.Z)(this,e)}return(0,S.Z)(e,null,[{key:"intersects",value:function(e,t){return(0,z.intersect)(e,t)||null}},{key:"geodesicAndPlanarAreas",value:function(e){return{geodesic:Q.geodesic(e),planar:Q.planar(e)}}}]),e}(),K=function e(t,n,r){var a=this;(0,b.Z)(this,e),(0,Z.Z)(this,"noFlyLayer",void 0),(0,Z.Z)(this,"sketchLayer",void 0),(0,Z.Z)(this,"intersectionMap",void 0),(0,Z.Z)(this,"sketchCreate",function(){var e=(0,E.Z)(w().mark((function e(t){var n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={geodesic:"",planar:"",intersect:!1},a.noFlyLayer.graphics.forEach((function(e){n=a.checkForIntersectionAndComputeArea(e,t.graphic)})),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,Z.Z)(this,"sketchUpdate",function(){var e=(0,E.Z)(w().mark((function e(t){var n,r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.intersectionMap.size>0&&(n=a.determineCorrespondingIntersectionShape(t.graphics)),n&&n.hashMap&&a.removeIntersectionShape(n.layer,n.hashMap),r={geodesic:"",planar:"",intersect:!1},t.graphics.forEach((function(e){r=a.checkForIntersectionAndComputeArea(a.noFlyLayer.graphics.getItemAt(0),e)})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,Z.Z)(this,"checkForIntersectionAndComputeArea",(function(e,t){var n=B.intersects(e.geometry,t.geometry),r=!1,o={geodesic:"",planar:""};if(n){r=!0,o=B.geodesicAndPlanarAreas(n);var i=new P.Z({geometry:n,symbol:N});a.intersectionMap.set(t,i),a.sketchLayer.add(i)}return{intersect:r,geodesic:o.geodesic,planar:o.planar}})),(0,Z.Z)(this,"removeIntersectionShape",(function(e,t){a.sketchLayer.remove(e),a.intersectionMap.delete(t)})),(0,Z.Z)(this,"determineCorrespondingIntersectionShape",(function(e){for(var t={},n=0;n<e.length;n++){var r=a.intersectionMap.get(e[n]);if(r){t.hashMap=e[n],t.layer=r;break}}return t})),this.noFlyLayer=t,this.sketchLayer=n,this.intersectionMap=r};(0,Z.Z)(K,"CREATE","create"),(0,Z.Z)(K,"UPDATE","update"),(0,Z.Z)(K,"STATE_COMPLETE","complete"),(0,Z.Z)(K,"STATE_ACTIVE","active"),(0,Z.Z)(K,"STATE_START","start");var V=function(){function e(t){var n=this;(0,b.Z)(this,e),(0,Z.Z)(this,"rootStore",void 0),(0,Z.Z)(this,"map",void 0),(0,Z.Z)(this,"noFlyLayer",void 0),(0,Z.Z)(this,"sketchLayer",void 0),(0,Z.Z)(this,"intersectionMap",void 0),(0,Z.Z)(this,"sketch",void 0),(0,Z.Z)(this,"sketchState",void 0),(0,Z.Z)(this,"intersects",void 0),(0,Z.Z)(this,"canFlyStatus",void 0),(0,Z.Z)(this,"intersectionGeoArea",void 0),(0,Z.Z)(this,"intersectionPlanArea",void 0),(0,Z.Z)(this,"sketchEvents",void 0),(0,Z.Z)(this,"sketchUpdate",function(){var e=(0,E.Z)(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("update: ",t),n.setSketchState(t.state),t.state!==K.STATE_START){e.next=4;break}return e.abrupt("return");case 4:return console.log("calling update in sketch events"),e.next=7,n.sketchEvents.sketchUpdate(t);case 7:r=e.sent,n.setIntersectionGeoArea("".concat(r.geodesic)),n.setIntersectionPlanArea("".concat(r.planar)),n.setCanFlyMessage(r.intersect);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,Z.Z)(this,"sketchCreate",function(){var e=(0,E.Z)(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("create: ",t),n.setSketchState(t.state),t.state===K.STATE_COMPLETE){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,n.sketchEvents.sketchCreate(t);case 6:r=e.sent,console.log("areaOpt create: ",r),n.setIntersectionGeoArea("".concat(r.geodesic)),n.setIntersectionPlanArea("".concat(r.planar)),n.setCanFlyMessage(r.intersect);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,L.rC)(this,{sketchState:L.LO,setSketchState:L.aD,canFlyStatus:L.LO,setCanFlyMessage:L.aD,intersectionGeoArea:L.LO,setIntersectionGeoArea:L.aD,intersectionPlanArea:L.LO,setIntersectionPlanArea:L.aD}),this.rootStore=t,this.setSketchState("idle"),this.intersectionMap=new Map}return(0,S.Z)(e,[{key:"setSketchState",value:function(e){this.sketchState=e}},{key:"setIntersectionGeoArea",value:function(e){this.intersectionGeoArea=e}},{key:"setIntersectionPlanArea",value:function(e){this.intersectionPlanArea=e}},{key:"setCanFlyMessage",value:function(e){this.canFlyStatus=e?"Denied":"Approved"}},{key:"constructMap",value:function(e){var t=this;this.sketchLayer=new M.Z,this.noFlyLayer=new M.Z;var n=D;this.noFlyLayer.add(new P.Z({geometry:new F.Z(q),symbol:n})),this.map=new O.Z({basemap:"streets-vector",layers:[this.noFlyLayer,this.sketchLayer]});var r=new T.Z({map:this.map,container:e,center:[-83.35447311401367,42.23982914405],zoom:11});r.when((function(){t.sketch=new x(function(e,t){return{layer:t,view:e,visibleElements:{createTools:{point:!1,polygon:!1,polyline:!1},selectionTools:{"lasso-selection":!1,"rectangle-selection":!1},settingsMenu:!1,undoRedoMenu:!1},creationMode:"update"}}(r,t.sketchLayer)),t.sketchEvents=new K(t.noFlyLayer,t.sketchLayer,t.intersectionMap),t.sketch.addUI(r,"top-right"),t.sketch.setEvents(K.CREATE,t.sketchCreate),t.sketch.setEvents(K.UPDATE,t.sketchUpdate)}))}},{key:"cleanup",value:function(){this.sketch.destroy(),this.setSketchState("idle")}}]),e}();(0,L.jQ)({enforceActions:"always",computedRequiresReaction:!0,reactionRequiresObservable:!0,observableRequiresReaction:!0,disableErrorBoundaries:!0});var H=new function e(){(0,b.Z)(this,e),(0,Z.Z)(this,"mapStore",void 0),this.mapStore=new V(this)},J=(0,m.createContext)(H),W=function(){return(0,m.useContext)(J)};const X=function(){var e=W().mapStore;return(0,m.useEffect)((function(){return e.constructMap("map"),function(){e.cleanup()}}),[]),m.createElement("div",{id:"map"})};var Y,$=n(29163),ee=n(12938),te=$.ZP.p(Y||(Y=(0,g.Z)(["\n  position: absolute;\n  z-index: 100;\n  top: 15px;\n  left: 60px;\n  background-color: black;\n  color: white;\n  padding: 10px;\n  height: 120px;\n  width: 200px;\n"])));const ne=(0,ee.Pi)((function(){var e=W().mapStore;return m.createElement(m.Fragment,null,m.createElement(te,null,m.createElement("span",null,"Sketch State: ".concat(e.sketchState)),m.createElement("br",null),m.createElement("span",null,e.canFlyStatus?"Flight Status: ".concat(e.canFlyStatus):""),m.createElement("br",null),m.createElement("span",null,e.intersectionGeoArea?"Geodesic area: ".concat(e.intersectionGeoArea," km²"):""),m.createElement("br",null),m.createElement("span",null,e.intersectionPlanArea?"Planar area: ".concat(e.intersectionPlanArea," km²"):"")),m.createElement(X,null))}));(0,k.render)(m.createElement(ne,null),document.getElementById("root"))},838:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);"]),a.push([e.id,'*{box-sizing:border-box}body,html{font-family:"Open Sans",sans-serif;color:#464f56;line-height:1.5rem;width:100;height:100%}#map{position:absolute;top:0;right:0;bottom:0;left:0}',""]);const o=a}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=o,e=[],s.O=(t,n,r,a)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],i=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(s.O).every((e=>s.O[e](n[c])))?n.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);s.r(a);var o={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,s.d(a,o),a},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,n)=>(s.f[n](e,t),t)),[])),s.u=e=>e+".chunk.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="react-esri-template:",s.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var i,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var h=l[u];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==a+n){i=h;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",a+n),i.src=e),r[e]=[t];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var a=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.p="",(()=>{var e={4826:0};s.f.j=(t,n)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=a);var o=s.p+s.u(t),i=new Error;s.l(o,(n=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,r[1](i)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[o,i,c]=n,l=0;for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(c)var u=c(s);for(t&&t(n);l<o.length;l++)a=o[l],s.o(e,a)&&e[a]&&e[a][0](),e[o[l]]=0;return s.O(u)},n=self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var c=s.O(void 0,[1216],(()=>s(11136)));c=s.O(c)})();