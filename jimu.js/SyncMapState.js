// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","esri/geometry/Extent"],function(d,e){var b=null;var c=d(null,{map:null,setMap:function(a){this.map=a},handleMapChangeEvent:function(a){switch(a.evtName){case "sync/map/extent-change":return this._onExtentChange(a.evt);default:console.error("Unknown event name:",a.evtName)}},_onExtentChange:function(a){this.map.setExtent(new e(a))}});c.getInstance=function(){null===b&&(b=new c);return b};return c});