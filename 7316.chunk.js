"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[7316],{10510:(e,t,o)=>{o.d(t,{D:()=>F,b:()=>R});var r=o(31777),i=o(7261),a=o(61514),n=o(62213),s=o(84530),l=o(74681),c=o(6838),d=o(31163),u=o(82094),m=o(11823),p=o(34074),v=o(76789),f=o(36305),h=o(4071),g=o(10832),x=o(72582),b=o(72884),y=o(88214),C=o(52369),w=o(87023),T=o(44624),M=o(71613),_=o(8681),A=o(34658),S=o(62734),O=o(42211),P=o(33834),H=o(51219);function R(e){const t=new H.kG,o=t.vertex.code,R=t.fragment.code;return t.include(S.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(c.f),t.varyings.add("vpos","vec3"),t.include(_.kl,e),t.include(s.f,e),t.include(v.LC,e),0!==e.output&&7!==e.output||(t.include(l.O,e),t.include(n.w,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(i.w),t.include(g.Q,e),t.include(p.B,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u.D,e),t.include(r.q,e),t.include(d.R,e),t.include(m.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),o.add(P.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P.H.float(A.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?P.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(a.p2,e),t.include(A.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(h.S),t.include(y.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(O.y),R.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?P.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.p2,e),t.include(b.X,e),t.include(x.K,e),t.include(A.sj,e),e.receiveShadows&&t.include(M.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(h.S),t.include(y.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(T.jV,e),t.include(w.T,e),t.fragment.include(O.y),t.include(C.k,e),R.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?P.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:P.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?P.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?P.H`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${1===e.pbrMode||2===e.pbrMode?P.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(f.s,e),t}var F=Object.freeze({__proto__:null,build:R})},79733:(e,t,o)=>{o.d(t,{R:()=>O,b:()=>S});var r=o(31777),i=o(7261),a=o(61514),n=o(62213),s=o(84530),l=o(74681),c=o(6838),d=o(31163),u=o(82094),m=o(11823),p=o(76789),v=o(36305),f=o(4071),h=o(72582),g=o(72884),x=o(88214),b=o(87023),y=o(44624),C=o(71613),w=o(8681),T=o(34658),M=o(42211),_=o(33834),A=o(51219);function S(e){const t=new A.kG,o=t.vertex.code,S=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(c.f),t.varyings.add("vpos","vec3"),t.include(w.kl,e),t.include(s.f,e),t.include(p.LC,e),0!==e.output&&7!==e.output||(t.include(l.O,e),t.include(n.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(i.w),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u.D,e),t.include(r.q,e),t.include(d.R,e),t.include(m.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(_.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${_.H.float(T.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?_.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(a.p2,e),t.include(T.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(f.S),t.include(x.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(M.y),S.add(_.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?_.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?_.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?_.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.p2,e),t.include(g.X,e),t.include(h.K,e),t.include(T.sj,e),e.receiveShadows&&t.include(C.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(f.S),t.include(x.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(y.jV,e),t.include(b.T,e),t.fragment.include(M.y),S.add(_.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?_.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?_.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?_.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${_.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?_.H`vec3 normalGround = normalize(vpos + localOrigin);`:_.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_.H``}
        ${1===e.pbrMode||2===e.pbrMode?_.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(v.s,e),t}var O=Object.freeze({__proto__:null,build:S})},47442:(e,t,o)=>{o.d(t,{a:()=>a,b:()=>l,n:()=>s,s:()=>n,t:()=>i});var r=o(76927);function i(e,t,o){if(e.count!==t.count)return void r.k.error("source and destination buffers need to have the same number of elements");const i=e.count,a=o[0],n=o[1],s=o[2],l=o[4],c=o[5],d=o[6],u=o[8],m=o[9],p=o[10],v=o[12],f=o[13],h=o[14],g=e.typedBuffer,x=e.typedBufferStride,b=t.typedBuffer,y=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*x,o=e*y,r=b[o],i=b[o+1],C=b[o+2];g[t]=a*r+l*i+u*C+v,g[t+1]=n*r+c*i+m*C+f,g[t+2]=s*r+d*i+p*C+h}}function a(e,t,o){if(e.count!==t.count)return void r.k.error("source and destination buffers need to have the same number of elements");const i=e.count,a=o[0],n=o[1],s=o[2],l=o[3],c=o[4],d=o[5],u=o[6],m=o[7],p=o[8],v=e.typedBuffer,f=e.typedBufferStride,h=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*f,o=e*g,r=h[o],i=h[o+1],x=h[o+2];v[t]=a*r+l*i+u*x,v[t+1]=n*r+c*i+m*x,v[t+2]=s*r+d*i+p*x}}function n(e,t,o){const r=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*a,r=e*s;i[t]=o*n[r],i[t+1]=o*n[r+1],i[t+2]=o*n[r+2]}}function s(e,t){const o=Math.min(e.count,t.count),r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*i,o=e*n,s=a[o],l=a[o+1],c=a[o+2],d=Math.sqrt(s*s+l*l+c*c);if(d>0){const e=1/d;r[t]=e*s,r[t+1]=e*l,r[t+2]=e*c}}}function l(e,t,o){const r=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*a,r=e*s;i[t]=n[r]>>o,i[t+1]=n[r+1]>>o,i[t+2]=n[r+2]>>o}}Object.freeze({__proto__:null,transformMat4:i,transformMat3:a,scale:n,normalize:s,shiftRight:l})},10406:(e,t,o)=>{function r(e,t,o){const r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*i,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let e=0;e<s;++e)r[l]=a[c],r[l+1]=a[c+1],r[l+2]=a[c+2],l+=i,c+=n}function i(e,t,o,r,i){var a,n;const s=e.typedBuffer,l=e.typedBufferStride,c=null!=(a=null==i?void 0:i.count)?a:e.count;let d=(null!=(n=null==i?void 0:i.dstIndex)?n:0)*l;for(let e=0;e<c;++e)s[d]=t,s[d+1]=o,s[d+2]=r,d+=l}o.d(t,{c:()=>r,f:()=>i}),Object.freeze({__proto__:null,copy:r,fill:i})},76927:(e,t,o)=>{o.d(t,{k:()=>r});const r=o(36544).Z.getLogger("esri.views.3d.support.buffer.math")},7316:(e,t,o)=>{o.r(t),o.d(t,{fetch:()=>G,gltfToEngineResources:()=>U,parseUrl:()=>$});var r=o(37969),i=o(59472),a=o(98501),n=o(30663),s=o(67128),l=o(12811),c=o(17387),d=o(77625),u=o(69996),m=o(57805),p=o(47442),v=o(54107),f=o(12391),h=o(16208),g=o(66225),x=o(81229),b=o(54721),y=o(59351),C=o(32656),w=o(36544),T=o(39105),M=o(34175),_=o(41419),A=o(68500),S=o(43473),O=o(10492);const P=w.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function H(e){throw new C.Z("",`Request for object resource failed: ${e}`)}function R(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(P.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(P.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(P.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(P.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else P.warn("Indexed geometries must specify faces"),r=!1;break}default:P.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(P.warn("Geometry requires material"),r=!1);const i=e.params.vertexAttributes;for(const e in i)i[e].values||(P.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function F(e){const t=(0,u.cS)();return e.forEach((e=>{const o=e.boundingInfo;(0,i.pC)(o)&&((0,u.pp)(t,o.getBBMin()),(0,u.pp)(t,o.getBBMax()))})),t}async function E(e,t){const o=[];for(const r in e){const a=e[r],n=a.images[0].data;if(!n){P.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+n,l="/textureDefinitions/"+r,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=(0,i.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,_.t)(s,t);o.push(d.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:"rgba"===a.channels?a.alphaChannelUsage||"transparency":"none"}))))}const r=await Promise.all(o),a={};for(const e of r)a[e.refId]=e;return a}function B(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function L(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const D=new M.G(1,2,"wosr");var z=o(28796),I=o(31977),N=o(72697),V=o(10406);async function G(e,t){const o=$((0,r.pJ)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):async function(e,t){const o=await async function(e,t){const o=(0,i.pC)(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const r=await(0,y.q6)(t.request(e,"json",o));if(!0===r.ok)return r.value;(0,T.r9)(r.error),H(r.error.details.url)}(e,o,t);const r=await(0,y.q6)((0,b.default)(e,(0,i.Wg)(t)));if(!0===r.ok)return r.value.data;(0,T.r9)(r.error),H(r.error)}(e,t);return{resource:o,textures:await E(o.textureDefinitions,t)}}(o.url,t)),r=function(e,t){const o=[],r=[],a=[],n=[],s=e.resource,l=M.G.parse(s.version||"1.0","wosr");D.validate(l);const c=s.model.name,u=s.model.geometries,m=s.materialDefinitions,p=e.textures;let v=0;const f=new Map;for(let e=0;e<u.length;e++){const s=u[e];if(!R(s))continue;const l=L(s),c=s.params.vertexAttributes,h=[];for(const e in c){const t=c[e],o=t.values;h.push([e,{data:o,size:t.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)g.push([t,new Uint32Array(e[t].values)])}const x=p&&p[l.texture];if(x&&!f.has(l.texture)){const{image:e,params:t}=x,o=new S.x(e,t);n.push(o),f.set(l.texture,o)}const b=f.get(l.texture),y=b?b.id:void 0;let C=a[l.material]?a[l.material][l.texture]:null;if(!C){const e=m[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=x&&x.alphaChannelUsage,r=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,n={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:x?B(x.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:y,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};(0,i.pC)(t)&&t.materialParamsMixin&&Object.assign(n,t.materialParamsMixin),C=new O.G(n),a[l.material]||(a[l.material]={}),a[l.material][l.texture]=C}r.push(C);const w=new A.Z(h,g);v+=g.position?g.position.length:0,o.push(w)}return{name:c,stageResources:{textures:n,materials:r,geometries:o},pivotOffset:s.model.pivotOffset,boundingBox:F(o),numberOfVertices:v,lodThreshold:null}}(e,t);return{lods:[r],referenceBoundingBox:r.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(t.cache?t.cache.loadGLTF(o.url,t,t.usePBR):(0,g.z)(new h.C(t.streamDataRequester),o.url,t,t.usePBR)),n=(0,i.U2)(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&(0,i.pC)(n)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];e.customMeta.esriTreeRendering=!0;for(const a of r.parts){const r=a.attributes.normal;if((0,i.Wi)(r))return;const n=a.attributes.position,u=n.count,p=(0,d.c)(),v=(0,d.c)(),h=(0,d.c)(),g=(0,f.gS)(m.mc,u),x=(0,f.gS)(m.ct,u),b=(0,s.a)((0,l.c)(),a.transform);for(let i=0;i<u;i++){n.getVec(i,v),r.getVec(i,p),(0,c.m)(v,v,a.transform),(0,c.f)(h,v,t.center),(0,c.E)(h,h,t.radius);const s=h[2],l=(0,c.l)(h),d=Math.min(.45+.55*l*l,1);(0,c.E)(h,h,t.radius),(0,c.m)(h,h,b),(0,c.n)(h,h),o+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.e)(h,h,p,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(i,h),g.set(i,0,255*d),g.set(i,1,255*d),g.set(i,2,255*d),g.set(i,3,255)}a.attributes.normal=x,a.attributes.color=g}}}(a,n);const u=a.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},p={...t.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=o.specifiedLodIndex){const e=U(a,u,p,o.specifiedLodIndex);let t=e[0].boundingBox;return 0!==o.specifiedLodIndex&&(t=U(a,u,p,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const v=U(a,u,p);return{lods:v,referenceBoundingBox:v[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function $(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function U(e,t,o,r){const s=e.model,l=(0,n.c)(),c=new Array,d=new Map,h=new Map;return s.lods.forEach(((e,n)=>{if(void 0!==r&&n!==r)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,i.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,u.cS)()};c.push(g),e.parts.forEach((e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),c=(0,i.pC)(e.attributes.texCoord0),b=(0,i.pC)(e.attributes.normal);if(!d.has(r)){if(c){if((0,i.pC)(n.textureColor)&&!h.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureColor,new S.x(e.data,t))}if((0,i.pC)(n.textureNormal)&&!h.has(n.textureNormal)){const e=s.textures.get(n.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureNormal,new S.x(e.data,t))}if((0,i.pC)(n.textureOcclusion)&&!h.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureOcclusion,new S.x(e.data,t))}if((0,i.pC)(n.textureEmissive)&&!h.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureEmissive,new S.x(e.data,t))}if((0,i.pC)(n.textureMetallicRoughness)&&!h.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};h.set(n.textureMetallicRoughness,new S.x(e.data,t))}}const a=n.color[0]**(1/z.K),l=n.color[1]**(1/z.K),u=n.color[2]**(1/z.K),m=n.emissiveFactor[0]**(1/z.K),p=n.emissiveFactor[1]**(1/z.K),v=n.emissiveFactor[2]**(1/z.K);d.set(r,new O.G({...t,transparent:"BLEND"===n.alphaMode,textureAlphaMode:k(n.alphaMode),textureAlphaCutoff:n.alphaCutoff,diffuse:[a,l,u],ambient:[a,l,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:b?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,i.pC)(n.textureColor)&&c?h.get(n.textureColor).id:void 0,colorMixMode:n.colorMixMode,normalTextureId:(0,i.pC)(n.textureNormal)&&c?h.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:(0,i.pC)(n.textureOcclusion)&&c?h.get(n.textureOcclusion).id:void 0,emissiveTextureId:(0,i.pC)(n.textureEmissive)&&c?h.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,i.pC)(n.textureMetallicRoughness)&&c?h.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[m,p,v],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...o}))}const y=function(e,t){switch(t){case 4:return(0,x.nh)(e);case 5:return(0,x.DA)(e);case 6:return(0,x.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),C=e.attributes.position.count,w=(0,f.gS)(m.ct,C);(0,p.t)(w,e.attributes.position,e.transform);const T=[["position",{data:w.typedBuffer,size:w.elementCount,exclusive:!0}]],M=[["position",y]];if((0,i.pC)(e.attributes.normal)){const t=(0,f.gS)(m.ct,C);(0,a.a)(l,e.transform),(0,p.a)(t,e.attributes.normal,l),T.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["normal",y])}if((0,i.pC)(e.attributes.tangent)){const t=(0,f.gS)(m.ek,C);(0,a.a)(l,e.transform),(0,v.t)(t,e.attributes.tangent,l),T.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["tangent",y])}if((0,i.pC)(e.attributes.texCoord0)){const t=(0,f.gS)(m.Eu,C);(0,I.n)(t,e.attributes.texCoord0),T.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["uv0",y])}if((0,i.pC)(e.attributes.color)){const t=(0,f.gS)(m.mc,C);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m.ek?(0,v.s)(t,e.attributes.color,255):e.attributes.color instanceof m.mc?(0,N.c)(t,e.attributes.color):e.attributes.color instanceof m.v6&&(0,v.s)(t,e.attributes.color,1/256);else{(0,N.f)(t,255,255,255,255);const o=new m.ne(t.buffer,0,4);e.attributes.color instanceof m.ct?(0,p.s)(o,e.attributes.color,255):e.attributes.color instanceof m.ne?(0,V.c)(o,e.attributes.color):e.attributes.color instanceof m.mw&&(0,p.s)(o,e.attributes.color,1/256)}T.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["color",y])}const _=new A.Z(T,M);g.stageResources.geometries.push(_),g.stageResources.materials.push(d.get(r)),c&&((0,i.pC)(n.textureColor)&&g.stageResources.textures.push(h.get(n.textureColor)),(0,i.pC)(n.textureNormal)&&g.stageResources.textures.push(h.get(n.textureNormal)),(0,i.pC)(n.textureOcclusion)&&g.stageResources.textures.push(h.get(n.textureOcclusion)),(0,i.pC)(n.textureEmissive)&&g.stageResources.textures.push(h.get(n.textureEmissive)),(0,i.pC)(n.textureMetallicRoughness)&&g.stageResources.textures.push(h.get(n.textureMetallicRoughness))),g.numberOfVertices+=C;const P=_.boundingInfo;(0,i.pC)(P)&&((0,u.pp)(g.boundingBox,P.getBBMin()),(0,u.pp)(g.boundingBox,P.getBBMax()))}))})),c}function k(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}},7261:(e,t,o)=>{o.d(t,{w:()=>i});var r=o(33834);function i(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},84530:(e,t,o)=>{o.d(t,{f:()=>l});var r,i=o(77625),a=o(25117),n=o(33834),s=o(71061);function l(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(a.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[n.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?n.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?n.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n.H``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===t.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}(r=l||(l={})).Uniforms=class{},r.bindCustomOrigin=function(e,t){(0,s.po)(t,c,d,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",d)};const c=(0,i.c)(),d=(0,i.c)()},74681:(e,t,o)=>{o.d(t,{O:()=>a});var r=o(33834);function i(e){const t=r.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function a(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(r.H`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(i),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(r.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},6838:(e,t,o)=>{o.d(t,{f:()=>i});var r=o(33834);function i(e){e.attributes.add("position","vec3"),e.vertex.code.add(r.H`vec3 positionModel() { return position; }`)}},31163:(e,t,o)=>{o.d(t,{R:()=>a});var r=o(33834);function i(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function a(e,t){t.symbolColor?(e.include(i),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(r.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(r.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},82094:(e,t,o)=>{o.d(t,{D:()=>i});var r=o(33834);function i(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(r.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(r.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(r.H`void forwardTextureCoordinates() {}`)}},34074:(e,t,o)=>{o.d(t,{B:()=>m});var r,i=o(74681),a=o(30663),n=o(12811),s=o(77625),l=o(6838),c=o(25117),d=o(33834);function u(e,t){e.include(l.f),e.vertex.include(c.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(d.H`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function m(e,t){0===t.normalType||1===t.normalType?(e.include(i.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(d.H`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(d.H`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?d.H`normalize(vPositionWorldCameraRelative);`:d.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(d.H`void forwardNormal() {}`)}(r=u||(u={})).ModelTransform=class{constructor(){this.worldFromModel_RS=(0,a.c)(),this.worldFromModel_TH=(0,s.c)(),this.worldFromModel_TL=(0,s.c)()}},r.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,s.c)(),this.worldFromView_TL=(0,s.c)(),this.viewFromCameraRelative_RS=(0,a.c)(),this.projFromView=(0,n.c)()}},r.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},r.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)},(m||(m={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},51206:(e,t,o)=>{o.d(t,{i:()=>n});var r=o(82094),i=o(33834);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function n(e,t){e.include(r.D,t),e.fragment.code.add(i.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(i.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(a),e.fragment.code.add(i.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},36305:(e,t,o)=>{o.d(t,{s:()=>p});var r=o(61514),i=o(62213),a=o(74681),n=o(82094),s=o(34074),l=o(83488),c=o(72023),d=o(8681),u=o(34658),m=o(33834);function p(e,t){const o=e.vertex.code,p=e.fragment.code;1!==t.output&&3!==t.output||(e.include(i.w,{linearDepth:!0}),e.include(n.D,t),e.include(d.kl,t),e.include(l.F,t),e.include(r.p2,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(m.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(u.sj,t),p.add(m.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(i.w,{linearDepth:!1}),e.include(a.O,t),e.include(s.B,t),e.include(n.D,t),e.include(d.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),o.add(m.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?m.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(r.p2,t),e.include(u.sj,t),p.add(m.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?m.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:m.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(i.w,{linearDepth:!1}),e.include(n.D,t),e.include(d.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(m.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(r.p2,t),e.include(u.sj,t),e.include(c.bA),p.add(m.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},10832:(e,t,o)=>{o.d(t,{Q:()=>a});var r=o(51206),i=o(33834);function a(e,t){const o=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?o.code.add(i.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(i.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(i.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(r.i,t),o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),o.code.add(i.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},72582:(e,t,o)=>{o.d(t,{K:()=>i});var r=o(33834);function i(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add("ssaoTex","sampler2D"),o.uniforms.add("viewportPixelSz","vec4"),o.code.add(r.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):o.code.add(r.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},72884:(e,t,o)=>{o.d(t,{X:()=>d});var r=o(33834);function i(e,t){const o=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(o.uniforms.add("lightingAmbientSH0","vec3"),o.code.add(r.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(o.uniforms.add("lightingAmbientSH_R","vec4"),o.uniforms.add("lightingAmbientSH_G","vec4"),o.uniforms.add("lightingAmbientSH_B","vec4"),o.code.add(r.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(o.uniforms.add("lightingAmbientSH0","vec3"),o.uniforms.add("lightingAmbientSH_R1","vec4"),o.uniforms.add("lightingAmbientSH_G1","vec4"),o.uniforms.add("lightingAmbientSH_B1","vec4"),o.uniforms.add("lightingAmbientSH_R2","vec4"),o.uniforms.add("lightingAmbientSH_G2","vec4"),o.uniforms.add("lightingAmbientSH_B2","vec4"),o.code.add(r.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||o.code.add(r.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var a=o(72582);function n(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(r.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var s=o(87023),l=o(9295),c=o(71613);function d(e,t){const o=e.fragment;e.include(n),e.include(a.K,t),0!==t.pbrMode&&e.include(s.T,t),e.include(i,t),t.receiveShadows&&e.include(c.hX,t),o.uniforms.add("lightingGlobalFactor","float"),o.uniforms.add("ambientBoostFactor","float"),e.include(l.e),o.code.add(r.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),o.code.add(r.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?r.H`normalize(vPosWorld)`:r.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.code.add(r.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?o.code.add(r.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(o.code.add(r.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(r.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.code.add(r.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.code.add(r.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(r.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?r.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:r.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},52369:(e,t,o)=>{o.d(t,{k:()=>i});var r=o(33834);function i(e,t){const o=e.fragment;o.code.add(r.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?o.code.add(r.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?o.code.add(r.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):o.code.add(r.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},44624:(e,t,o)=>{o.d(t,{jV:()=>n,nW:()=>s});var r=o(69236),i=o(51206),a=o(33834);function n(e,t){const o=e.fragment,r=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&r&&e.include(i.i,t),2!==t.pbrMode?(0===t.pbrMode&&o.code.add(a.H`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(o.uniforms.add("emissionFactor","vec3"),o.uniforms.add("mrrFactors","vec3"),o.code.add(a.H`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(o.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texMetallicRoughnessSize","vec2"),o.code.add(a.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(o.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texEmissionSize","vec2"),o.code.add(a.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(o.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texOcclusionSize","vec2"),o.code.add(a.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):o.code.add(a.H`float getBakedOcclusion() { return 1.0; }`),o.code.add(a.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):o.code.add(a.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function s(e,t,o=!1){o||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(0,r.f)(0,.6,.2)},25117:(e,t,o)=>{o.d(t,{$:()=>g,I:()=>x});var r=o(95830),i=o(33834),a=o(59472),n=o(77625),s=o(91494),l=o(84570),c=o(51007),d=(o(86920),o(88378),o(8634),o(74038)),u=o(71061),m=o(56469),p=o(31563);class v{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,(0,p.M)(e).then((e=>this.svgAlwaysPremultipliesAlpha=!e))}get doublePrecisionRequiresObfuscation(){if((0,a.Wi)(this._doublePrecisionRequiresObfuscation)){const e=h(this.context,!1),t=h(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let f=null;function h(e,t){const o=new l.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),r=s.Z.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),i=new d.Z(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:r}),a=(0,n.f)(5633261.287538229,2626832.878767164,1434988.0495278358),p=(0,n.f)(5633271.46742708,2626873.6381334523,1434963.231608387),v=function(o,r){const i=new c.$(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),a=new Float32Array(6);(0,u.LF)(o,a,3);const n=new Float32Array(6);return(0,u.LF)(r,n,3),e.useProgram(i),i.setUniform3f("u_highA",a[0],a[2],a[4]),i.setUniform3f("u_lowA",a[1],a[3],a[5]),i.setUniform3f("u_highB",n[0],n[2],n[4]),i.setUniform3f("u_lowB",n[1],n[3],n[5]),i}(a,p),f=e.getBoundFramebufferObject(),{x:h,y:g,width:x,height:b}=e.getViewport();e.bindFramebuffer(o),e.setViewport(0,0,1,1),e.bindVAO(i),e.drawArrays(5,0,4);const y=new Uint8Array(4);o.readPixels(0,0,1,1,6408,5121,y),v.dispose(),i.dispose(!1),r.dispose(),o.dispose(),e.setViewport(h,g,x,b),e.bindFramebuffer(f);const C=(a[2]-p[2])/25,w=(0,m.vP)(y);return Math.abs(C-w)}function g({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function x(e){return!!(0,r.Z)("force-double-precision-obfuscation")||(t=e,((0,a.Wi)(f)||f.context!==t)&&(f=new v(t)),f).doublePrecisionRequiresObfuscation;var t}},62734:(e,t,o)=>{o.d(t,{a:()=>a});var r=o(33834),i=o(88378);function a(e,t){const o=r.H`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;(0,i.CG)()&&(e.fragment.code.add(o),e.vertex.code.add(o))}},42211:(e,t,o)=>{o.d(t,{y:()=>a});var r=o(63230),i=o(33834);function a(e){e.include(r.Y),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},10492:(e,t,o)=>{o.d(t,{G:()=>I});var r=o(30663),i=o(17387),a=o(77625),n=o(80905),s=o(34658),l=o(82976),c=o(10762),d=o(66704),u=o(55666),m=o(13405),p=o(30090),v=o(56140),f=o(61514),h=o(84530),g=o(76789),x=o(72023),b=o(88214),y=o(44624),C=o(71613),w=o(8681),T=o(25117),M=o(89553),_=o(23240),A=o(97853),S=o(44801),O=o(11379),P=o(97111),H=o(38391),R=o(10510),F=o(36904);class E extends A.A{initializeProgram(e){const t=E.shader.get(),o=this.configuration,r=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?o.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:o.normalsTypeDerivate?3:0,doubleSidedMode:o.doubleSidedMode,vertexTangents:o.vertexTangents,attributeTextureCoordinates:o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture||o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,T.I)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new P.$(e.rctx,r,O.i)}bindPass(e,t){var o,r;(0,M.II)(this.program,t.camera.projectionMatrix);const i=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===i)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),(0,b.p)(this.program,t)),7===i&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",p.FZ[e.colorMixMode])),0===i?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",p.FZ[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&(0,y.nW)(this.program,e,this.configuration.isSchematic)):4===i&&(0,x.wW)(this.program,t),(0,w.uj)(this.program,e),(0,g.Mo)(this.program,e,t),(0,p.bj)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(o=t.shadowMap)||o.bind(this.program),null==(r=t.ssaoHelper)||r.bind(this.program)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,a.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(0,M.q0)(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&(0,M.fb)(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&h.f.bindCustomOrigin(this.program,t),(0,f.Vv)(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&(0,C.vL)(this.program,e,t)}setPipeline(e,t){const o=this.configuration,r=3===e,i=2===e;return(0,F.sm)({blending:0!==o.output&&7!==o.output||!o.transparent?null:r?d.wu:(0,d.$L)(e),culling:B(o)&&(0,F.zp)(o.cullFace),depthTest:{func:(0,d.$x)(e)},depthWrite:r||i?o.writeDepth&&F.LZ:null,colorWrite:F.BK,stencilWrite:o.sceneHasOcludees?H.s3:null,stencilTest:o.sceneHasOcludees?t?H.eD:H.RY:null,polygonOffset:r||i?null:(0,d.je)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function B(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}E.shader=new _.J(R.D,(()=>o.e(2186).then(o.bind(o,72186))));class L extends S.m{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}(0,v._)([(0,S.o)({count:8})],L.prototype,"output",void 0),(0,v._)([(0,S.o)({count:4})],L.prototype,"alphaDiscardMode",void 0),(0,v._)([(0,S.o)({count:3})],L.prototype,"doubleSidedMode",void 0),(0,v._)([(0,S.o)()],L.prototype,"isSchematic",void 0),(0,v._)([(0,S.o)()],L.prototype,"vertexColors",void 0),(0,v._)([(0,S.o)()],L.prototype,"offsetBackfaces",void 0),(0,v._)([(0,S.o)()],L.prototype,"symbolColors",void 0),(0,v._)([(0,S.o)()],L.prototype,"vvSize",void 0),(0,v._)([(0,S.o)()],L.prototype,"vvColor",void 0),(0,v._)([(0,S.o)()],L.prototype,"verticalOffset",void 0),(0,v._)([(0,S.o)()],L.prototype,"receiveShadows",void 0),(0,v._)([(0,S.o)()],L.prototype,"slicePlaneEnabled",void 0),(0,v._)([(0,S.o)()],L.prototype,"sliceHighlightDisabled",void 0),(0,v._)([(0,S.o)()],L.prototype,"receiveAmbientOcclusion",void 0),(0,v._)([(0,S.o)()],L.prototype,"screenSizePerspective",void 0),(0,v._)([(0,S.o)()],L.prototype,"textureAlphaPremultiplied",void 0),(0,v._)([(0,S.o)()],L.prototype,"hasColorTexture",void 0),(0,v._)([(0,S.o)()],L.prototype,"usePBR",void 0),(0,v._)([(0,S.o)()],L.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,v._)([(0,S.o)()],L.prototype,"hasEmissionTexture",void 0),(0,v._)([(0,S.o)()],L.prototype,"hasOcclusionTexture",void 0),(0,v._)([(0,S.o)()],L.prototype,"hasNormalTexture",void 0),(0,v._)([(0,S.o)()],L.prototype,"instanced",void 0),(0,v._)([(0,S.o)()],L.prototype,"instancedColor",void 0),(0,v._)([(0,S.o)()],L.prototype,"instancedDoublePrecision",void 0),(0,v._)([(0,S.o)()],L.prototype,"vertexTangents",void 0),(0,v._)([(0,S.o)()],L.prototype,"normalsTypeDerivate",void 0),(0,v._)([(0,S.o)()],L.prototype,"writeDepth",void 0),(0,v._)([(0,S.o)()],L.prototype,"sceneHasOcludees",void 0),(0,v._)([(0,S.o)()],L.prototype,"transparent",void 0),(0,v._)([(0,S.o)()],L.prototype,"enableOffset",void 0),(0,v._)([(0,S.o)({count:3})],L.prototype,"cullFace",void 0),(0,v._)([(0,S.o)({count:4})],L.prototype,"transparencyPassType",void 0),(0,v._)([(0,S.o)()],L.prototype,"multipassTerrainEnabled",void 0),(0,v._)([(0,S.o)()],L.prototype,"cullAboveGround",void 0);var D=o(79733);class z extends E{initializeProgram(e){const t=z.shader.get(),o=this.configuration,r=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,T.I)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new P.$(e.rctx,r,O.i)}}z.shader=new _.J(D.R,(()=>o.e(1343).then(o.bind(o,41343))));class I extends c.F5{constructor(e){super(e,V),this.supportsEdges=!0,this.techniqueConfig=new L,this.vertexBufferLayout=I.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?I.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,o=e.vertexColors,r=e.symbolColors,i=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return o&&(i||a||r)?!!n||s:o?n?l:s:i||a||r?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<d.ve),this.techniqueConfig}intersect(e,t,o,r,a,n,s){if(null!==this.params.verticalOffset){const e=r.camera;(0,i.s)(j,o[12],o[13],o[14]);let t=null;switch(r.viewingMode){case 1:t=(0,i.n)(W,j);break;case 2:t=(0,i.g)(W,k)}let s=0;if(null!==this.params.verticalOffset){const o=(0,i.f)(X,j,e.eye),r=(0,i.l)(o),a=(0,i.a)(o,o,1/r);let n=null;this.params.screenSizePerspective&&(n=(0,i.d)(t,a)),s+=(0,p.Hx)(e,r,this.params.verticalOffset,n,this.params.screenSizePerspective)}(0,i.a)(t,t,s),(0,i.t)(q,t,r.transform.inverseRotation),a=(0,i.f)($,a,q),n=(0,i.f)(U,n,q)}(0,p.Bw)(e,t,r,a,n,(0,u.W9)(r.verticalOffset),s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new N(e)}createBufferWriter(){return new G(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=(0,n.U$)().vec3f("position").vec3f("normal");return e.vertexTangents&&o.vec4f("tangent"),t&&o.vec2f("uv0"),e.vertexColors&&o.vec4u8("color"),e.symbolColors&&o.vec4u8("symbolColor"),o}static getInstanceBufferLayout(e){let t=(0,n.U$)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class N extends l.Z{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?z:E,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const V={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,r.c)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:s.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...c.zh};class G{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,o,r){(0,m.NK)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,r)}}const $=(0,a.c)(),U=(0,a.c)(),k=(0,a.f)(0,0,1),W=(0,a.c)(),q=(0,a.c)(),j=(0,a.c)(),X=(0,a.c)()},31563:(e,t,o)=>{o.d(t,{M:()=>l});var r=o(91494),i=o(84570),a=o(51007),n=o(8634),s=o(74038);async function l(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const o=new i.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),l=r.Z.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),c=new s.Z(e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:l}),d=new a.$(e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));e.useProgram(d);const u=new n.Z(e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(u,0),d.setUniform1i("u_texture",0);const m=e.getBoundFramebufferObject(),{x:p,y:v,width:f,height:h}=e.getViewport();e.bindFramebuffer(o),e.setViewport(0,0,1,1),e.bindVAO(c),e.drawArrays(5,0,4);const g=new Uint8Array(4);return o.readPixels(0,0,1,1,6408,5121,g),d.dispose(),c.dispose(!1),l.dispose(),o.dispose(),u.dispose(),e.setViewport(p,v,f,h),e.bindFramebuffer(m),t.src="",255===g[0]}}}]);