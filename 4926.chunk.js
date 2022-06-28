"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[4926],{53277:(e,t,i)=>{i.d(t,{S:()=>n,X:()=>s});const s=1;function n(e,t){let i=0;for(const n of t){var s;const t=null==(s=n.attributes)?void 0:s[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}},69308:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var s=i(32656),n=i(56885),r=i(27780),a=i(31036),u=i(53277),l=i(24628),o=i(71951),d=i(60051),p=i(56471),c=i(73456),y=i(61121),f=i(88210),h=i(4665);const m=r.Zn,g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.Zn},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function I(e){return(0,n.wp)(e)?null!=e.z:!!e.hasZ}function F(e){return(0,n.wp)(e)?null!=e.m:!!e.hasM}const _=class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,n=this._inferLayerProperties(i,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:n.hasM,c=null!=e.hasZ?e.hasZ:n.hasZ,I=!e.spatialReference&&!n.spatialReference,F=I?m:e.spatialReference||n.spatialReference,_=I?g:null,E=e.geometryType||n.geometryType,q=!E;let T=e.objectIdField||n.objectIdField,x=e.timeInfo;if(!q&&(I&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E))throw new s.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!T)throw new s.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&T!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${T}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),T=n.objectIdField),T&&!n.objectIdField){let e=null;r.some((t=>t.name===T&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:T,name:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of r){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===T&&(e.type="esriFieldTypeOID"),-1===f.v.jsonValues.indexOf(e.type))throw new s.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const j={};this._requiredFields=[];for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=(0,h.os)(e);e.nullable||void 0!==t?j[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new y.Z(r),this._createDefaultAttributes=(0,p.Dm)(j,T),x){if(x.startTimeField){const e=this._fieldsIndex.get(x.startTimeField);e?(x.startTimeField=e.name,e.type="esriFieldTypeDate"):x.startTimeField=null}if(x.endTimeField){const e=this._fieldsIndex.get(x.endTimeField);e?(x.endTimeField=e.name,e.type="esriFieldTypeDate"):x.endTimeField=null}if(x.trackIdField){const e=this._fieldsIndex.get(x.trackIdField);e?x.trackIdField=e.name:(x.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:x}}))}x.startTimeField||x.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:x}}),x=null)}const R={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:(0,p.bU)(E),templates:(0,p.Hq)(j),extent:_,geometryType:E,objectIdField:T,fields:r,hasZ:!!c,hasM:!!a,timeInfo:x},assignedObjectIds:{}};if(this._queryEngine=new d.Z({fields:r,geometryType:E,hasM:a,hasZ:c,objectIdField:T,spatialReference:F,featureStore:new l.Z({geometryType:E,hasM:a,hasZ:c}),timeInfo:x,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=u.X,R;const O=(0,u.S)(T,i);return this._nextObjectId=O+1,await(0,o._W)(i,F),this._loadInitialFeatures(R,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([(0,c.b)(t,i),(0,o._W)(e.adds,t),(0,o._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,r=null,a=null,u=null;for(const t of e){const e=t.geometry;if(e&&(r||(r=(0,n.Ji)(e)),a||(a=e.spatialReference),null==i&&(i=I(e)),null==s&&(s=F(e)),r&&a&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(u=e.name)}return{geometryType:r,spatialReference:a,objectIdField:u,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:r,objectIdField:u,spatialReference:l,featureStore:d}=this._queryEngine,p=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&i!==(0,n.Ji)(s.geometry)){e.featureErrors.push((0,c.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,c.O0)(this._fieldsIndex,t,s.attributes,this._requiredFields,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[u]),s.geometry&&(s.geometry=(0,o.iV)(s.geometry,s.geometry.spatialReference,l)),p.push(s))}if(d.addMany((0,a.Yn)([],p,i,r,s,u)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push((0,c.d1)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:r,hasZ:u,objectIdField:l,spatialReference:d,featureStore:p}=this._queryEngine,y=[];for(const r of t){if(r.geometry&&s!==(0,n.Ji)(r.geometry)){i.push((0,c.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,c.O0)(this._fieldsIndex,t,r.attributes,this._requiredFields);if(a)i.push(a);else{if(this._assignObjectId(t,r.attributes),r.attributes=t,null!=r.uid){const t=r.attributes[l];e.uidToObjectId[r.uid]=t}r.geometry&&(r.geometry=(0,o.iV)((0,c.og)(r.geometry,d),r.geometry.spatialReference,d)),y.push(r),i.push((0,c.d1)(r.attributes[l]))}}p.addMany((0,a.Yn)([],y,s,u,r,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:r,objectIdField:u,spatialReference:l,featureStore:d}=this._queryEngine;for(const p of t){const{attributes:t,geometry:y}=p,f=t&&t[u];if(null==f){e.push((0,c.av)(`Identifier field ${u} missing`));continue}if(!d.has(f)){e.push((0,c.av)(`Feature with object id ${f} missing`));continue}const h=(0,a.EI)(d.getFeature(f),i,r,s);if(y){if(i!==(0,n.Ji)(y)){e.push((0,c.av)("Incorrect geometry type."));continue}h.geometry=(0,o.iV)((0,c.og)(y,l),y.spatialReference,l)}if(t){const i=(0,c.O0)(this._fieldsIndex,h.attributes,t,this._requiredFields);if(i){e.push(i);continue}}d.add((0,a.XA)(h,i,r,s,u)),e.push((0,c.d1)(f))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},56471:(e,t,i)=>{i.d(t,{MS:()=>d,Dm:()=>l,Hq:()=>o,bU:()=>u});var s=i(95830),n=i(82550),r=i(12850),a=i(7767);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}function l(e,t){if((0,s.Z)("csp-restrictions"))return()=>({[t]:null,...e});try{let i=`this.${t} = null;`;for(const t in e)i+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const s=new Function(i);return()=>new s}catch(i){return()=>({[t]:null,...e})}}function o(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);