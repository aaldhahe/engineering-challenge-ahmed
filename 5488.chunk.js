"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[5488],{31777:(t,e,a)=>{a.d(e,{q:()=>s});var o=a(33834);function s(t,e){0===e.output&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(o.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===e.output||3===e.output?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("cameraNearFar","vec2"),t.vertex.code.add(o.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):t.vertex.code.add(o.H`void forwardLinearDepth() {}`)}},87023:(t,e,a)=>{a.d(e,{T:()=>r});var o=a(33834);function s(t){const e=t.fragment.code;e.add(o.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(o.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(o.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var i=a(9295);function r(t,e){const a=t.fragment.code;t.include(i.e),3===e.pbrMode||4===e.pbrMode?(a.add(o.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),a.add(o.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),a.add(o.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),a.add(o.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),a.add(o.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==e.pbrMode&&2!==e.pbrMode||(t.include(s),a.add(o.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),a.add(o.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),a.add(o.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),a.add(o.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),a.add(o.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),a.add(o.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},71613:(t,e,a)=>{a.d(e,{hX:()=>i,O2:()=>r,mi:()=>l,vL:()=>n});var o=a(61017),s=a(33834);function i(t){t.fragment.include(o.n),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(s.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function r(t,e){e.shadowMappingEnabled&&(e.shadowMap.bind(t),e.shadowMap.bindView(t,e.origin))}function n(t,e,a){e.shadowMappingEnabled&&e.shadowMap.bindView(t,a)}function l(t,e){e.shadowMappingEnabled&&e.shadowMap.bindView(t,e.origin)}},55666:(t,e,a)=>{a.d(e,{yn:()=>v,W9:()=>g});var o=a(59472),s=a(98501),i=a(30663),r=a(67128),n=a(12811),l=a(2847),h=a(32232),f=a(17387),c=a(69236),d=a(77625),u=a(38256),p=a(13633);class v{constructor(){this._transform=(0,n.c)(),this._transformInverse=new m({value:this._transform},r.a,n.c),this._transformInverseTranspose=new m(this._transformInverse,r.e,n.c),this._transformTranspose=new m({value:this._transform},r.e,n.c),this._transformInverseRotation=new m({value:this._transform},s.n,i.c)}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){(0,r.d)(this._transform,t)}multiplyTransform(t){(0,r.m)(this._transform,this._transform,t)}set(t){(0,r.d)(this._transform,t),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,e){this.setTransformMatrix(t),this.multiplyTransform(e),this.invalidateLazyTransforms()}}class m{constructor(t,e,a){this.original=t,this.update=e,this.dirty=!0,this.transform=a()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}const b=new class{constructor(t=0){this.offset=t,this.sphere=(0,p.c)(),this.tmpVertex=(0,d.c)()}applyToVertex(t,e,a){const o=this.objectTransform.transform;let s=o[0]*t+o[4]*e+o[8]*a+o[12],i=o[1]*t+o[5]*e+o[9]*a+o[13],r=o[2]*t+o[6]*e+o[10]*a+o[14];const n=this.offset/Math.sqrt(s*s+i*i+r*r);s+=s*n,i+=i*n,r+=r*n;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*s+l[4]*i+l[8]*r+l[12],this.tmpVertex[1]=l[1]*s+l[5]*i+l[9]*r+l[13],this.tmpVertex[2]=l[2]*s+l[6]*i+l[10]*r+l[14],this.tmpVertex}applyToMinMax(t,e){const a=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*a,t[1]+=t[1]*a,t[2]+=t[2]*a;const o=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*o,e[1]+=e[1]*o,e[2]+=e[2]*o}applyToAabb(t){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const a=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*a,t[4]+=t[4]*a,t[5]+=t[5]*a,t}applyToBoundingSphere(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),a=this.offset/e;return this.sphere[0]=t[0]+t[0]*a,this.sphere[1]=t[1]+t[1]*a,this.sphere[2]=t[2]+t[2]*a,this.sphere[3]=t[3]+t[3]*this.offset/e,this.sphere}};function g(t){return(0,o.pC)(t)?(b.offset=t,b):null}new class{constructor(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=(0,d.c)(),this.mbs=(0,u.c)(),this.obb={center:(0,d.c)(),halfSize:(0,c.c)(),quaternion:null}}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}applyToVertex(t,e,a){const o=t,s=e,i=a+this.componentLocalOriginLength,r=this.offset/Math.sqrt(o*o+s*s+i*i);return this.tmpVertex[0]=t+o*r,this.tmpVertex[1]=e+s*r,this.tmpVertex[2]=a+i*r,this.tmpVertex}applyToAabb(t){const e=t[0],a=t[1],o=t[2]+this.componentLocalOriginLength,s=t[3],i=t[4],r=t[5]+this.componentLocalOriginLength,n=this.offset/Math.sqrt(e*e+a*a+o*o);t[0]+=e*n,t[1]+=a*n,t[2]+=o*n;const l=this.offset/Math.sqrt(s*s+i*i+r*r);return t[3]+=s*l,t[4]+=i*l,t[5]+=r*l,t}applyToMbs(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),a=this.offset/e;return this.mbs[0]=t[0]+t[0]*a,this.mbs[1]=t[1]+t[1]*a,this.mbs[2]=t[2]+t[2]*a,this.mbs[3]=t[3]+t[3]*this.offset/e,this.mbs}applyToObb(t){const e=t.center,a=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);this.obb.center[0]=e[0]+e[0]*a,this.obb.center[1]=e[1]+e[1]*a,this.obb.center[2]=e[2]+e[2]*a,(0,f.q)(this.obb.halfSize,t.halfSize,t.quaternion),(0,f.b)(this.obb.halfSize,this.obb.halfSize,t.center);const o=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*o,this.obb.halfSize[1]+=this.obb.halfSize[1]*o,this.obb.halfSize[2]+=this.obb.halfSize[2]*o,(0,f.f)(this.obb.halfSize,this.obb.halfSize,t.center),(0,l.c)(S,t.quaternion),(0,f.q)(this.obb.halfSize,this.obb.halfSize,S),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}},new class{constructor(t=0){this.offset=t,this.tmpVertex=(0,d.c)()}applyToVertex(t,e,a){const o=t+this.localOrigin[0],s=e+this.localOrigin[1],i=a+this.localOrigin[2],r=this.offset/Math.sqrt(o*o+s*s+i*i);return this.tmpVertex[0]=t+o*r,this.tmpVertex[1]=e+s*r,this.tmpVertex[2]=a+i*r,this.tmpVertex}applyToAabb(t){const e=t[0]+this.localOrigin[0],a=t[1]+this.localOrigin[1],o=t[2]+this.localOrigin[2],s=t[3]+this.localOrigin[0],i=t[4]+this.localOrigin[1],r=t[5]+this.localOrigin[2],n=this.offset/Math.sqrt(e*e+a*a+o*o);t[0]+=e*n,t[1]+=a*n,t[2]+=o*n;const l=this.offset/Math.sqrt(s*s+i*i+r*r);return t[3]+=s*l,t[4]+=i*l,t[5]+=r*l,t}};const S=(0,h.a)()}}]);