/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtThematicMap"],function(a,g,c,b,d){a.ib("oj.ojThematicMap",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{},Fja:"",WK:[],Uha:"resources/internal-deps/dvt/thematicMap/basemaps/",bua:{ar:"ar",cs:"cs",da:"da",de:"de",el:"el",es:"es",fi:"fi",fr:"fr","fr-ca":"fr_CA",he:"iw",hu:"hu",it:"it",ja:"ja",ko:"ko",nl:"nl",no:"no",pl:"pl",pt:"pt_BR","pt-pt":"pt",ro:"ro",ru:"ru",sk:"sk",sv:"sv",th:"th",tr:"tr","zh-hans":"zh_CN",
"zh-hant":"zh_TW"},rc:function(){this._super();this.Wz=[];this.Qoa=!1;this.SD=[]},ji:function(a,b,c){return d.ThematicMap.newInstance(a,b,c)},Xm:function(a){var b=a.subId;"oj-thematicmap-area"==b?b=this.mE(a.dataLayer,a.index,"area")+":area["+a.index+"]":"oj-thematicmap-marker"==b?b=this.mE(a.dataLayer,a.index,"marker")+":marker["+a.index+"]":"oj-thematicmap-link"==b?b=this.mE(a.dataLayer,a.index,"link")+":link["+a.index+"]":"oj-thematicmap-tooltip"==b&&(b="tooltip");return b},Jj:function(a){var b=
{};0<a.indexOf(":area")?(b.subId="oj-thematicmap-area",this.$()||(b.dataLayer=a.substring(0,a.indexOf(":"))),b.index=this.cn(a)):0<a.indexOf(":marker")?(b.subId="oj-thematicmap-marker",this.$()||(b.dataLayer=a.substring(0,a.indexOf(":"))),b.index=this.cn(a)):0<a.indexOf(":link")?(b.subId="oj-thematicmap-link",this.$()||(b.dataLayer=a.substring(0,a.indexOf(":"))),b.index=this.cn(a)):"tooltip"==a&&(b.subId="oj-thematicmap-tooltip");return b},ih:function(){var a=this._super();a.push("oj-thematicmap");
return a},Ql:function(){var a=this._super();a["oj-dvtbase oj-thematicmap"]={path:"animationDuration",property:"animation-duration"};a["oj-thematicmap-arealayer"]=[{path:"styleDefaults/areaStyle",property:"CSS_BACKGROUND_PROPERTIES"},{path:"styleDefaults/labelStyle",property:"CSS_TEXT_PROPERTIES"}];a["oj-thematicmap-area"]={path:"styleDefaults/dataAreaDefaults/borderColor",property:"border-top-color"};a["oj-thematicmap-area oj-hover"]={path:"styleDefaults/dataAreaDefaults/hoverColor",property:"border-top-color"};
a["oj-thematicmap-area oj-selected"]=[{path:"styleDefaults/dataAreaDefaults/selectedInnerColor",property:"border-top-color"},{path:"styleDefaults/dataAreaDefaults/selectedOuterColor",property:"border-bottom-color"}];a["oj-thematicmap-marker"]=[{path:"styleDefaults/dataMarkerDefaults/labelStyle",property:"CSS_TEXT_PROPERTIES"},{path:"styleDefaults/dataMarkerDefaults/color",property:"background-color"},{path:"styleDefaults/dataMarkerDefaults/opacity",property:"opacity"},{path:"styleDefaults/dataMarkerDefaults/borderColor",
property:"border-top-color"}];a["oj-thematicmap-link"]={path:"styleDefaults/linkDefaults/color",property:"color"};a["oj-thematicmap-link oj-hover"]={path:"styleDefaults/linkDefaults/_hoverColor",property:"color"};a["oj-thematicmap-link oj-selected"]={path:"styleDefaults/linkDefaults/_selectedColor",property:"border-color"};return a},bn:function(){return["optionChange"]},_setOptions:function(b,c){var d=Object.keys(b).length,g=b.areaLayers,l=this.options.areaLayers,m=b.pointDataLayers;if(1==d&&g&&l&&
0<l.length)for(d=0;d<g.length;d++){var m=g[d],n=l[d],t=!0,s;for(s in m)"areaDataLayer"!=s&&m[s]!=n[s]&&(t=t&&!1);t&&!a.f.Bb(n.areaDataLayer,m.areaDataLayer)&&this.SD.push({options:m.areaDataLayer,parentLayer:m.layer,isADL:!0})}else if(1==d&&m&&this.options.pointDataLayers&&0<this.options.pointDataLayers.length)for(d=0;d<m.length;d++)a.f.Bb(this.options.pointDataLayers[d],m[d])||this.SD.push({options:m[d],parentLayer:m[d].id,isADL:!1});this._super(b,c)},At:function(){return"tooltip/renderer _tooltip/renderer renderer focusRenderer hoverRenderer selectionRenderer".split(" ")},
kr:function(){this._super();var b=this.options.tooltip,c=b?b.renderer:null;if(c){var d=this;this.options._tooltip={renderer:function(b){var e=d.$()?{insert:b.tooltip}:b.tooltip;try{return c(b)||e}catch(g){return a.D.warn("Showing default tooltip. "+g),e}}}}var g=this.options.areaLayers;if(g)for(b=0;b<g.length;b++){var l=g[b].areaDataLayer;if(l){var m=l._templateRenderer;m&&(l.renderer=this.r_(m,"area"))}}if(g=this.options.pointDataLayers)for(b=0;b<g.length;b++)(l=g[b])&&(m=l._templateRenderer)&&(l.renderer=
this.r_(m,"point"));this.options._contextHandler=this.p3()},ni:function(){this.sD();var a=this.options.areaLayers;if(this.$()){if(!this.options.mapProvider){this.gr();return}}else{if(!this.options.basemap||!a||1>a.length){this.gr();return}this.nUa();for(a=0;a<this.Wz.length;a++)if(!this.WK[this.Wz[a]])return;this.Wz=[]}if(this.Qoa&&0<this.SD.length){if(this.mg.isReadyToRender()){for(a=0;a<this.SD.length;a++){var b=this.SD[a],c=b.isADL;c?this.h_("area"):this.h_("point");this.La.updateLayer(b.options,
b.parentLayer,c)}this.SD=[]}}else this._super(),this.Qoa=!0},uI:function(a,b){this.$()&&this.zUa(a);this.R_a(a);this._super(a,b)},p3:function(){var b=this;return function(c,d,g,l,m){c={component:a.Components.qd(b.element),parentElement:c,rootElement:d,data:g,state:l,previousState:m,id:g.id,label:g.label,color:g.color,location:g.location,x:g.x,y:g.y};b.$()&&(c.renderDefaultHover=b.renderDefaultHover.bind(b,c),c.renderDefaultSelection=b.renderDefaultSelection.bind(b,c),c.renderDefaultFocus=b.renderDefaultFocus.bind(b,
c));return b.Sk(c)}},renderDefaultHover:function(a){a.previousState&&a.state.hovered==a.previousState.hovered||this.La.processDefaultHoverEffect(a.id,a.state.hovered)},renderDefaultSelection:function(a){a.previousState&&a.state.selected==a.previousState.selected||this.La.processDefaultSelectionEffect(a.id,a.state.selected)},renderDefaultFocus:function(a){a.previousState&&a.state.focused==a.previousState.focused||this.La.processDefaultFocusEffect(a.id,a.state.focused)},nUa:function(){var b=this.options.basemap;
if(b){var c=a.ra.qk();c!==this.Fja&&(this.Fja=c,this.WK=[]);var d=this.options.areaLayers;if(d)for(var g=0;g<d.length;g++){var l=d[g].layer;l&&this.Tpa(b,l,c)}d=this.options.pointDataLayers;!this.options.mapProvider&&d&&0<d.length&&this.Tpa(b,"cities",c)}},Wpa:function(b,c){if(!this.WK[b]){var d=this,k=g.getScript(a.ra.Db(b),function(){d.WK[b]=!0;d.ni()});c&&k.fail(function(){d.WK[b]=!0;d.ni()})}},Tpa:function(a,b,c){var g=!0;try{g=0<Object.keys(d.DvtBaseMapManager.getLayerIds(a,b)).length}catch(l){g=
!1}g||this.options.mapProvider||(g=this.Uha+"ojthematicmap-"+a+"-"+b+".js",-1==this.Wz.indexOf(g)&&(this.Wz.push(g),this.Wpa(g,!1)));if(-1===c.indexOf("en"))for(g=c.toLowerCase().split("-"),c=[g[0]],1<g.length&&c.unshift(g[0]+"-"+g[1]),2<g.length&&c.unshift(g[0]+"-"+g[2],g[0]+"-"+g[1]+"-"+g[2]),a=a.charAt(0).toUpperCase()+a.slice(1),b=b.charAt(0).toUpperCase()+b.slice(1),a=this.Uha+"resourceBundles/"+a+b+"Bundle_",b=0;b<c.length;b++)if(this.bua[c[b]]){a=a+this.bua[c[b]]+".js";-1==this.Wz.indexOf(a)&&
(this.Wz.push(a),this.Wpa(a,!0));break}},fo:function(a){var b=a.type;if(this.$()||"selection"!==b)this._super(a);else{var b={},c=a.clientId;b[c]=a.selection;if(this.options.selection)for(var d in this.options.selection)c!==d&&(b[d]=this.options.selection[d]);this.rf("selection",b)}},Tk:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.THEMATIC_MAP"]=a.componentName;return b},R_a:function(a){var b=a.selection;if(b){var c=a.pointDataLayers;if(c)if(this.$()&&c[0])c[0].selection=
b;else for(var d=0;d<c.length;d++)b[c[d].id]&&(c[d].selection=b[c[d].id]);(a=a.areaLayers)&&a[0]&&(a=a[0].areaDataLayer,this.$()&&a?a.selection=b:a&&b[a.id]&&(a.selection=b[a.id]))}},getArea:function(a,b){return this.$()?this.La.getAutomation().getData(this.mE(null,a,"area"),"area",a):this.La.getAutomation().getData(a,"area",b)},getMarker:function(a,b){return this.$()?this.La.getAutomation().getData(this.mE(null,a,"marker"),"marker",a):this.La.getAutomation().getData(a,"marker",b)},getLink:function(a,
b){return this.$()?this.La.getAutomation().getData(this.mE(null,a,"link"),"link",a):this.La.getAutomation().getData(a,"link",b)},getContextByNode:function(a){if(a=this.getSubIdByNode(a))if(this.$()&&delete a.dataLayer,"oj-thematicmap-tooltip"!==a.subId)return a;return null},an:function(){return this.$()?{root:["areas","markers","links"]}:{areaLayers:["areaDataLayer/areas","areaDataLayer/markers","areaDataLayer/links"],pointDataLayers:["markers","links"]}},fI:function(){return this.$()?{areas:!0,markers:!0,
links:!0,mapProvider:!0}:{mapProvider:!0,areaLayers:{areaDataLayer:{areas:!0,markers:!0,links:!0}},pointDataLayers:{markers:!0,links:!0}}},gfa:function(a){if(this.$())return this._super();var b=this.options.basemap;a=a.layer?a.layer:"cities";return{basemap:b,layer:a,ids:d.DvtBaseMapManager.getLayerIds(b,a)}},zUa:function(a){var b=a.animationOnMapChange;b&&(a.animationOnDisplay=b);b=[{}];a.areaLayers=b;var c=b[0],b={id:"adl1"};c.areaDataLayer=b;var d=[{id:"pdl1"}];a.pointDataLayers=d;var d=d[0],g=
["labelDisplay","labelType"];this.i6(a,g,[c]);g="animationOnDataChange focusRenderer hoverRenderer renderer selectionMode selectionRenderer".split(" ");this.i6(a,g,[b,d]);g=["areas","isolatedItem"];this.i6(a,g,[b]);this.mT={};if(g=a.areas)for(c=0;c<g.length;c++)this.mT[g[c].id]="adl1";if(g=a.markers){this.j6=[];for(var m=[],n=[],c=0;c<g.length;c++){var t=g[c];t.location?(m.push(t),this.j6[c]="adl1",this.mT[t.id]="adl1"):t.x&&t.y&&(n.push(t),this.j6[c]="pdl1",this.mT[t.id]="pdl1")}0<m.length&&(b.markers=
m);0<n.length&&(d.markers=n)}if(a=a.links){this.LT=[];g=[];m=[];for(c=0;c<a.length;c++)n=a[c],(t=n.startLocation)&&t.location?(g.push(n),this.LT[c]="adl1"):t&&t.x&&t.y?(m.push(n),this.LT[c]="pdl1"):t&&t.id&&(t=this.mT[t.id],"adl1"===t?g.push(n):m.push(n),this.LT[c]=t);0<g.length&&(b.links=g);0<m.length&&(d.links=m)}},i6:function(a,b,c){for(var d=0;d<b.length;d++){var g=b[d],m=a[g];if(m)for(var n=0;n<c.length;n++)c[n][g]=m}},mE:function(a,b,c){if(this.$())switch(c){case "area":return"adl1";case "marker":return this.j6[b];
case "link":return this.LT[b];default:return""}else return a}});(function(){a.J.Ua("oj-thematic-map","dvtBaseComponent",{properties:{animationDuration:{type:"number"},animationOnDisplay:{type:"string",enumValues:["auto","none"]},areas:{type:"Array\x3cobject\x3e|Promise"},focusRenderer:{},hiddenCategories:{type:"Array\x3cstring\x3e",writeback:!0},highlightedCategories:{type:"Array\x3cstring\x3e",writeback:!0},highlightMatch:{type:"string"},hoverBehavior:{type:"string",enumValues:["dim","none"]},hoverRenderer:{},
initialZooming:{type:"string",enumValues:["auto","none"]},isolatedItem:{type:"string"},labelDisplay:{type:"string",enumValues:["auto","on","off"]},labelType:{type:"string",enumValues:["short","long"]},links:{type:"Array\x3cobject\x3e|Promise"},mapProvider:{type:"object",properties:{geo:{type:"object"},propertiesKeys:{type:"object"}}},markers:{type:"Array\x3cobject\x3e|Promise"},markerZoomBehavior:{type:"string",enumValues:["fixed","zoom"]},maxZoom:{type:"number"},panning:{type:"string",enumValues:["none",
"auto"]},renderer:{},selection:{type:"Array\x3cstring\x3e",writeback:!0},selectionMode:{type:"string",enumValues:["none","single","multiple"]},selectionRenderer:{},styleDefaults:{type:"object",properties:{areaSvgStyle:{type:"object"},dataAreaDefaults:{type:"object",properties:{dataAreaDefaults:{borderColor:{type:"string"},hoverColor:{type:"string"},selectedInnerColor:{type:"string"},selectedOuterColor:{type:"string"}}}},dataMarkerDefaults:{type:"object",properties:{dataMarkerDefaults:{borderColor:{type:"string"},
borderStyle:{type:"string",enumValues:["solid","none"]},borderWidth:{type:"number"},color:{type:"string"},height:{type:"number"},labelStyle:{type:"string"},opacity:{type:"number"},shape:{type:"string"},width:{type:"number"}}}},hoverBehaviorDelay:{type:"number"},labelStyle:{type:"string"},linkDefaults:{type:"object",properties:{linkDefaults:{color:{type:"string"},width:{type:"number"}}}}}},tooltip:{type:"object",properties:{renderer:{}}},tooltipDisplay:{type:"string",enumValues:["auto","shortDesc",
"labelAndShortDesc","none"]},touchResponse:{type:"string",enumValues:["auto","touchStart"]},translations:{properties:{componentName:{type:"string"}}},zooming:{type:"string",enumValues:["none","auto"]}},methods:{getArea:{},getContextByNode:{},getLink:{},getMarker:{}},extension:{Ya:"ojThematicMap"}});var b=a.J.getMetadata("oj-thematic-map");a.J.register("oj-thematic-map",{metadata:b,parseFunction:b.extension.lD({"style-defaults.data-marker-defaults.shape":!0})})})()});