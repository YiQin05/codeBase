﻿/*
    *
    * Wijmo Library 5.20183.550
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcChartHierarchical=require("wijmo/wijmo.chart.hierarchical"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.vue2.chart.hierarchical"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.chart=__glob.wijmo.vue2.chart||{},__glob.wijmo.vue2.chart.hierarchical=wjcSelf;var vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;var WjSunburstBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._updateControl=function(t,o){switch(t){case"tooltipContent":this.control.tooltip.content=o;break;case"labelContent":this.control.dataLabel.content=o;break;default:e.prototype._updateControl.call(this,t,o)}},t.tag="wj-sunburst",t.className="wijmo.chart.hierarchical.Sunburst",t.extraProps=["tooltipContent","labelContent"],t.classCtor=function(){return wjcChartHierarchical.Sunburst},t}(wjcVue2Base.WjComponentBehavior);exports.WjSunburst=WjSunburstBehavior.register();var WjTreeMapBehavior=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._updateControl=function(t,o){switch(t){case"tooltipContent":this.control.tooltip.content=o;break;case"labelContent":this.control.dataLabel.content=o;break;default:e.prototype._updateControl.call(this,t,o)}},t.tag="wj-tree-map",t.className="wijmo.chart.hierarchical.TreeMap",t.extraProps=["tooltipContent","labelContent"],t.classCtor=function(){return wjcChartHierarchical.TreeMap},t}(wjcVue2Base.WjComponentBehavior);exports.WjTreeMap=WjTreeMapBehavior.register();