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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])};return function(o,t){function r(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcOlap=require("wijmo/wijmo.olap"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.vue2.olap"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.olap=wjcSelf;var vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;var WjPivotGridBehavior=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.tag="wj-pivot-grid",o.className="wijmo.olap.PivotGrid",o.classCtor=function(){return wjcOlap.PivotGrid},o}(wjcVue2Base.WjComponentBehavior);exports.WjPivotGrid=WjPivotGridBehavior.register();var WjPivotChartBehavior=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.tag="wj-pivot-chart",o.className="wijmo.olap.PivotChart",o.classCtor=function(){return wjcOlap.PivotChart},o}(wjcVue2Base.WjComponentBehavior);exports.WjPivotChart=WjPivotChartBehavior.register();var WjPivotPanelBehavior=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.tag="wj-pivot-panel",o.className="wijmo.olap.PivotPanel",o.classCtor=function(){return wjcOlap.PivotPanel},o}(wjcVue2Base.WjComponentBehavior);exports.WjPivotPanel=WjPivotPanelBehavior.register();var WjSlicerBehavior=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.tag="wj-slicer",o.className="wijmo.olap.Slicer",o.classCtor=function(){return wjcOlap.Slicer},o}(wjcVue2Base.WjComponentBehavior);exports.WjSlicer=WjSlicerBehavior.register();