"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[9198],{43019:(t,e,n)=>{function a(t){return"h"in t&&"s"in t&&"v"in t}function o(t){return"l"in t&&"a"in t&&"b"in t}function r(t){return"l"in t&&"c"in t&&"h"in t}n.d(e,{_j:()=>v,_Y:()=>f,Y3:()=>L,sJ:()=>g,xr:()=>y});const i=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],c=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function l(t,e){const n=[];let a,o;if(t[0].length!==e.length)throw"dimensions do not match";const r=t.length,i=t[0].length;let c=0;for(a=0;a<r;a++){for(c=0,o=0;o<i;o++)c+=t[a][o]*e[o];n.push(c)}return n}function s(t){const e=[t.r/255,t.g/255,t.b/255].map((t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4)),n=l(i,e);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function h(t){const e=l(c,[t.x/100,t.y/100,t.z/100]).map((t=>{const e=t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055;return Math.min(1,Math.max(e,0))}));return{r:Math.round(255*e[0]),g:Math.round(255*e[1]),b:Math.round(255*e[2])}}function u(t){const e=[t.x/95.047,t.y/100,t.z/108.883].map((t=>t>(6/29)**3?t**(1/3):1/3*(29/6)**2*t+4/29));return{l:116*e[1]-16,a:500*(e[0]-e[1]),b:200*(e[1]-e[2])}}function m(t){const e=t.l,n=[(e+16)/116+t.a/500,(e+16)/116,(e+16)/116-t.b/200].map((t=>t>6/29?t**3:3*(6/29)**2*(t-4/29)));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function p(t){return u(s(t))}function d(t){return h(m(t))}function y(t){return"r"in(e=t)&&"g"in e&&"b"in e?t:r(t)?function(t){return h(m(function(t){const e=t.l,n=t.c,a=t.h;return{l:e,a:n*Math.cos(a),b:n*Math.sin(a)}}(t)))}(t):o(t)?d(t):function(t){return"x"in t&&"y"in t&&"z"in t}(t)?h(t):a(t)?function(t){const e=(t.h+360)%360/60,n=t.s/100,a=t.v/100*255,o=a*n,r=o*(1-Math.abs(e%2-1));let i;switch(Math.floor(e)){case 0:i={r:o,g:r,b:0};break;case 1:i={r,g:o,b:0};break;case 2:i={r:0,g:o,b:r};break;case 3:i={r:0,g:r,b:o};break;case 4:i={r,g:0,b:o};break;case 5:case 6:i={r:o,g:0,b:r};break;default:i={r:0,g:0,b:0}}return i.r=Math.round(i.r+a-o),i.g=Math.round(i.g+a-o),i.b=Math.round(i.b+a-o),i}(t):t;var e}function f(t){return a(t)?t:function(t){const e=t.r,n=t.g,a=t.b,o=Math.max(e,n,a),r=o-Math.min(e,n,a);let i=o,c=0===r?0:o===e?(n-a)/r%6:o===n?(a-e)/r+2:(e-n)/r+4,l=0===r?0:r/i;return c<0&&(c+=6),c*=60,l*=100,i*=100/255,{h:c,s:l,v:i}}(y(t))}function L(t){return o(t)?t:p(y(t))}function g(t){return r(t)?t:function(t){return function(t){const e=t.l,n=t.a,a=t.b,o=Math.sqrt(n*n+a*a);let r=Math.atan2(a,n);return r=r>0?r:r+2*Math.PI,{l:e,c:o,h:r}}(u(s(t)))}(y(t))}function v(t,e){const n=p(t);return n.l*=1-e,d(n)}},59126:(t,e,n)=>{n.d(e,{dc:()=>y,uH:()=>d,TE:()=>h,Pc:()=>l,EB:()=>s,XX:()=>m,EV:()=>i,DY:()=>u,eb:()=>r,tp:()=>p,ht:()=>c,JZ:()=>o});var a=n(78745);const o={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function r(t,e,n){let a=22,o=22;t<1?a*=.75:t>1&&(o*=1.25);let r=22,i=22;return e&&n&&(a=o=r=i=0),[{type:"path",path:[{command:"M",values:[r,0]},{command:"L",values:[n?r:.875*r,0]},{command:"L",values:[n?a-.5*r:0,o-.5*i]},{command:"L",values:[a-.5*r,o-.5*i]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[r,0]},{command:"L",values:[r,e?0:.125*i]},{command:"L",values:[a-.5*r,e?o-.5*i:i]},{command:"L",values:[a-.5*r,o-.5*i]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[a-.5*r,o-.5*i]},{command:"L",values:[n?a-.5*r:0,o-.5*i]},{command:"L",values:[n?a-.5*r:0,e?o-.5*i:i]},{command:"L",values:[a-.5*r,e?o-.5*i:i]},{command:"Z",values:[]}]}]}function i(t){const e=22,n=.5*t;return[{type:"path",path:[{command:"M",values:[0,.7*e*.5]},{command:"L",values:[6.6,.7*e]},{command:"L",values:[6.6,.7*e+n]},{command:"L",values:[0,.7*e+n-.7*e*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,.7*e]},{command:"L",values:[6.6,.7*e+n]},{command:"L",values:[e,n]},{command:"L",values:[e,0]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,0]},{command:"L",values:[e,0]},{command:"L",values:[6.6,.7*e]},{command:"L",values:[0,.7*e*.5]},{command:"Z",values:[]}]}]}function c(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function l(t,e){let n=e?20:t;const a=e?4:6;n-=n<=22?.5*a:a;const o=e?.35*n:.5*n;return[{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[n,.5*o]},{command:"L",values:[.5*n,o]},{command:"L",values:[0,.5*o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[.5*n,o]},{command:"L",values:[.5*n,t]},{command:"L",values:[0,t-.5*o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*n,o]},{command:"L",values:[.5*n,t]},{command:"L",values:[n,t-.5*o]},{command:"L",values:[n,.5*o]},{command:"Z",values:[]}]}]}function s(t,e){let n=e?20:t;const a=e?4:6;n-=n<=22?.5*a:a;const o=.5*n,r=.15*n,i=t-r;return[{type:"ellipse",cx:.5*n,cy:i,rx:o,ry:r},{type:"path",path:[{command:"M",values:[0,r]},{command:"L",values:[0,i]},{command:"L",values:[n,i]},{command:"L",values:[n,r]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*n,cy:r,rx:o,ry:r}]}function h(t,e){let n=e?20:t;const a=e?4:6;n-=n<=22?.5*a:a;const o=.15*n,r=t-o;return[{type:"ellipse",cx:.5*n,cy:r,rx:.5*n,ry:o},{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[n,r]},{command:"L",values:[0,r]},{command:"Z",values:[]}]}]}function u(t){let e=t;e-=e<22?3:6;const n=.15*e;return[{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[e,0]},{command:"L",values:[.5*e,t-n]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*e,cy:0,rx:.5*e,ry:n}]}function m(t){let e=t;const n=t;e-=e<22?2:4;const a=e,o=n,r=Math.floor(t/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[a,.5*o-r]},{command:"L",values:[.45*a-r,.5*o+r]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[.45*a-r,.5*o+r]},{command:"L",values:[0,.5*o-r]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*o-r]},{command:"L",values:[.45*a-r,.5*o+r]},{command:"L",values:[.45*a,n]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,n]},{command:"L",values:[a,.5*o-r]},{command:"L",values:[.45*a-r,.5*o+r]},{command:"Z",values:[]}]}]}function p(t){let e=t;return e-=e<22?1:2,[{type:"path",path:[{command:"M",values:[.45*t,0]},{command:"L",values:[t,e]},{command:"L",values:[.45*t,.6*e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*t,0]},{command:"L",values:[.45*t,.6*e]},{command:"L",values:[0,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,e]},{command:"L",values:[.45*t,.6*e]},{command:"L",values:[t,e]},{command:"Z",values:[]}]}]}function d(t,e){return Math.round(Math.min(Math.max(t+255*e*.75,0),255))}function y(t,e){if("type"in t&&("linear"===t.type||"pattern"===t.type))return t;const n=new a.Z(t);return new a.Z([d(n.r,e),d(n.g,e),d(n.b,e),n.a])}},53714:(t,e,n)=>{n.d(e,{w:()=>U,r:()=>P});var a=n(23838),o=n(54721),r=n(43019),i=n(32656),c=n(95830),l=(n(38836),n(572)),s=n(78745),h=n(87561),u=n(42738),m=(n(40450),n(36544),n(29688));let p=0,d=0;const y=(0,c.Z)("android"),f=(0,c.Z)("chrome")||y&&y>=4?"auto":"optimizeLegibility",L={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},g=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let v={},x={};const M={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},w=Math.PI;function b(t,e){const n=t*(w/180);return Math.abs(e*Math.sin(n))+Math.abs(e*Math.cos(n))}function k(t){return t.map((t=>`${t.command} ${t.values.join(" ")}`)).join(" ").trim()}function Z(t,e,n,a){if(t){if("circle"===t.type)return(0,m.u)("circle",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return(0,m.u)("ellipse",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return(0,m.u)("rect",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return(0,m.u)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const a="string"!=typeof t.path?k(t.path):t.path;return(0,m.u)("path",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",d:a})}if("text"===t.type)return(0,m.u)("text",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4","text-anchor":a.align,"text-decoration":a.decoration,kerning:a.kerning,rotate:a.rotate,"text-rendering":f,"font-style":a.font.style,"font-variant":a.font.variant,"font-weight":a.font.weight,"font-size":a.font.size,"font-family":a.font.family,x:t.x,y:t.y},t.text)}return null}function j(t){const e={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const n="patternId-"+ ++p;e.fill=`url(#${n})`,e.pattern={id:n,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const n="linearGradientId-"+ ++d;e.fill=`url(#${n})`,e.linearGradient={id:n,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map((t=>({offset:t.offset,color:t.color&&new s.Z(t.color).toString()})))}}else if(t){const n=new s.Z(t);e.fill=n.toString()}return e}function z(t){const e={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(e.width=t.width),t.cap&&(e.cap=t.cap),t.join&&(e.join=t.join.toString()),t.color&&(e.color=new s.Z(t.color).toString()),t.style)){let n=null;if(t.style in M&&(n=M[t.style]),Array.isArray(n)){n=n.slice(0);for(let e=0;e<n.length;++e)n[e]*=t.width;if("butt"!==t.cap){for(let e=0;e<n.length;e+=2)n[e]-=t.width,n[e]<1&&(n[e]=1);for(let e=1;e<n.length;e+=2)n[e]+=t.width}n=n.join(",")}e.dashArray=n}return e}function I(t,e){const n={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(n.align=t.align,n.decoration=t.decoration,n.kerning=t.kerning?"auto":"0",n.rotate=t.rotated?"90":"0",n.font.style=e.style||"normal",n.font.variant=e.variant||"normal",n.font.weight=e.weight||"normal",n.font.size=e.size&&e.size.toString()||"10pt",n.font.family=e.family||"serif"),n}function S(t){const{pattern:e,linearGradient:n}=t;if(e)return(0,m.u)("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},(0,m.u)("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(n){const t=n.stops.map(((t,e)=>(0,m.u)("stop",{key:`${e}-stop`,offset:t.offset,"stop-color":t.color})));return(0,m.u)("linearGradient",{id:n.id,gradientUnits:"userSpaceOnUse",x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2},t)}return null}function $(t,e,n){return(0,u.t)(t,(0,u.i)(t),[e,n])}function A(t,e,n,a,o){return(0,u.s)(t,(0,u.i)(t),[e,n]),t[4]=t[4]*e-a*e+a,t[5]=t[5]*n-o*n+o,t}function C(t,e){v&&"left"in v?(v.left>t&&(v.left=t),v.right<t&&(v.right=t),v.top>e&&(v.top=e),v.bottom<e&&(v.bottom=e)):v={left:t,bottom:e,right:t,top:e}}function N(t){const e=t.args,n=e.length;let a;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(a=0;a<n;a+=2)C(e[a],e[a+1]);x.x=e[n-2],x.y=e[n-1];break;case"H":for(a=0;a<n;++a)C(e[a],x.y);x.x=e[n-1];break;case"V":for(a=0;a<n;++a)C(x.x,e[a]);x.y=e[n-1];break;case"m":{let t=0;"x"in x||(C(x.x=e[0],x.y=e[1]),t=2);for(a=t;a<n;a+=2)C(x.x+=e[a],x.y+=e[a+1]);break}case"l":case"t":for(a=0;a<n;a+=2)C(x.x+=e[a],x.y+=e[a+1]);break;case"h":for(a=0;a<n;++a)C(x.x+=e[a],x.y);break;case"v":for(a=0;a<n;++a)C(x.x,x.y+=e[a]);break;case"c":for(a=0;a<n;a+=6)C(x.x+e[a],x.y+e[a+1]),C(x.x+e[a+2],x.y+e[a+3]),C(x.x+=e[a+4],x.y+=e[a+5]);break;case"s":case"q":for(a=0;a<n;a+=4)C(x.x+e[a],x.y+e[a+1]),C(x.x+=e[a+2],x.y+=e[a+3]);break;case"A":for(a=0;a<n;a+=7)C(e[a+5],e[a+6]);x.x=e[n-2],x.y=e[n-1];break;case"a":for(a=0;a<n;a+=7)C(x.x+=e[a+5],x.y+=e[a+6])}}function E(t,e,n){const a=L[t.toLowerCase()];let o;"number"==typeof a&&(a?e.length>=a&&(o={action:t,args:e.slice(0,e.length-e.length%a)},n.push(o),N(o)):(o={action:t,args:[]},n.push(o),N(o)))}function _(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const n=function(t){const e=("string"!=typeof t.path?k(t.path):t.path).match(g),n=[];if(v={},x={},!e)return null;let a="",o=[];const r=e.length;for(let t=0;t<r;++t){const r=e[t],i=parseFloat(r);isNaN(i)?(a&&E(a,o,n),o=[],a=r):o.push(i)}E(a,o,n);const i={x:0,y:0,width:0,height:0};return v&&"left"in v&&(i.x=v.left,i.y=v.top,i.width=v.right-v.left,i.height=v.bottom-v.top),i}(t);e.x=n.x,e.y=n.y,e.width=n.width,e.height=n.height}return e}function D(t){const e={x:0,y:0,width:0,height:0};let n=null,a=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(const r of t)n?(n.x=Math.min(n.x,r.x),n.y=Math.min(n.y,r.y),a=Math.max(a,r.x+r.width),o=Math.max(o,r.y+r.height)):(n=e,n.x=r.x,n.y=r.y,a=r.x+r.width,o=r.y+r.height);return n&&(n.width=a-n.x,n.height=o-n.y),n}function G(t,e,n,a,o,r,i,c){const l=(i&&r?b(r,e):e)/2,s=(i&&r?b(r,n):n)/2,m=t.width+a,p=t.height+a,d=(0,h.c)(),y=(0,h.c)();let f=!1;if(o&&0!==m&&0!==p){const t=m/p,a=e>n?e:n;let o=1,r=1;isNaN(a)||(t>1?(o=a/m,r=a/t/p):(r=a/p,o=a*t/m)),(0,u.m)(y,y,A(d,o,r,l,s)),f=!0}const L=t.x+(m-a)/2,g=t.y+(p-a)/2;if((0,u.m)(y,y,$(d,l-L,s-g)),!f&&(m>e||p>n)){const t=m/e>p/n,a=(t?e:n)/(t?m:p);(0,u.m)(y,y,A(d,a,a,L,g))}return r&&(0,u.m)(y,y,function(t,e,n,a){const o=e%360*Math.PI/180;(0,u.r)(t,(0,u.i)(t),o);const r=Math.cos(o),i=Math.sin(o),c=t[4],l=t[5];return t[4]=c*r-l*i+a*i-n*r+n,t[5]=l*r+c*i-n*i-a*r+a,t}(d,r,L,g)),c&&(0,u.m)(y,y,$(d,c[0],c[1])),`matrix(${y[0]},${y[1]},${y[2]},${y[3]},${y[4]},${y[5]})`}function T(t,e,n,a){const o=[],r=[];for(const i of t){const t=[],c=[];let l=0,s=0,h=0;for(const e of i){const{shape:n,fill:a,stroke:r,font:i,offset:u}=e;l+=r&&r.width||0;const m=j(a),p=z(r),d="text"===n.type?I(n,i):null;o.push(S(m)),t.push(Z(n,m.fill,p,d)),c.push(_(n)),u&&(s+=u[0],h+=u[1])}const u=G(D(c),e,n,l,null==a?void 0:a.scale,null==a?void 0:a.rotation,null==a?void 0:a.useRotationSize,[s,h]);r.push((0,m.u)("g",{transform:u},t))}return null!=a&&a.useRotationSize&&null!=a&&a.rotation&&(e=b(null==a?void 0:a.rotation,e),n=b(null==a?void 0:a.rotation,n)),(0,m.u)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n},(0,m.u)("defs",null,o),r)}const Y=(0,l.E)();function U(t,e,n){const a=Math.ceil(e[0]),o=Math.ceil(e[1]);if(!t.some((t=>!!t.length)))return null;const r=n&&n.node||document.createElement("div");return null!=n.opacity&&(r.style.opacity=n.opacity.toString()),Y.append(r,T.bind(null,t,a,o,n)),r}function F(t,e,n,a,o){switch(o){case"multiply":t[e+0]*=n[0],t[e+1]*=n[1],t[e+2]*=n[2],t[e+3]*=n[3];break;default:{const o=(0,r._Y)({r:t[e+0],g:t[e+1],b:t[e+2]});o.h=a.h,o.s=a.s,o.v=o.v/100*a.v;const i=(0,r.xr)(o);t[e+0]=i.r,t[e+1]=i.g,t[e+2]=i.b,t[e+3]*=n[3];break}}}function P(t,e,n,l,s){return function(t,e,n){return t?(0,o.default)(t,{responseType:"image"}).then((t=>{const a=t.data,o=a.width,r=a.height,i=o/r;let c=e;if(n){const t=Math.max(o,r);c=Math.min(c,t)}return{image:a,width:i<=1?Math.ceil(c*i):c,height:i<=1?c:Math.ceil(c/i)}})):Promise.reject(new i.Z("renderUtils: imageDataSize","href not provided."))}(t,e,s).then((o=>{const i=o.width?o.width:e,s=o.height?o.height:e;if(o.image&&function(t,e){return!(!t||"ignore"===e||"multiply"===e&&255===t.r&&255===t.g&&255===t.b&&1===t.a)}(n,l)){let e=o.image.width,a=o.image.height;(0,c.Z)("edge")&&/\.svg$/i.test(t)&&(e-=1,a-=1);const h=function(t,e){t=Math.ceil(t),e=Math.ceil(e);const n=document.createElement("canvas");n.width=t,n.height=e,n.style.width=t+"px",n.style.height=e+"px";const a=n.getContext("2d");return a.clearRect(0,0,t,e),a}(i,s);h.drawImage(o.image,0,0,e,a,0,0,i,s);const u=h.getImageData(0,0,i,s),m=[n.r/255,n.g/255,n.b/255,n.a],p=(0,r._Y)(n);for(let t=0;t<u.data.length;t+=4)F(u.data,t,m,p,l);h.putImageData(u,0,0),t=h.canvas.toDataURL("image/png")}else{const e=a.id&&a.id.findCredential(t);if(e&&e.token){const n=-1===t.indexOf("?")?"?":"&";t=`${t}${n}token=${e.token}`}}return{url:t,width:i,height:s}})).catch((function(){return{url:t,width:e,height:e}}))}}}]);