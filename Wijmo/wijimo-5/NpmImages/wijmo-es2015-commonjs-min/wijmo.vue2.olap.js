/*
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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcOlap=require("wijmo/wijmo.olap");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.olap");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.olap=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjPivotGridBehavior extends wjcVue2Base.WjComponentBehavior{}WjPivotGridBehavior.tag="wj-pivot-grid",WjPivotGridBehavior.className="wijmo.olap.PivotGrid",WjPivotGridBehavior.classCtor=function(){return wjcOlap.PivotGrid},exports.WjPivotGrid=WjPivotGridBehavior.register();class WjPivotChartBehavior extends wjcVue2Base.WjComponentBehavior{}WjPivotChartBehavior.tag="wj-pivot-chart",WjPivotChartBehavior.className="wijmo.olap.PivotChart",WjPivotChartBehavior.classCtor=function(){return wjcOlap.PivotChart},exports.WjPivotChart=WjPivotChartBehavior.register();class WjPivotPanelBehavior extends wjcVue2Base.WjComponentBehavior{}WjPivotPanelBehavior.tag="wj-pivot-panel",WjPivotPanelBehavior.className="wijmo.olap.PivotPanel",WjPivotPanelBehavior.classCtor=function(){return wjcOlap.PivotPanel},exports.WjPivotPanel=WjPivotPanelBehavior.register();class WjSlicerBehavior extends wjcVue2Base.WjComponentBehavior{}WjSlicerBehavior.tag="wj-slicer",WjSlicerBehavior.className="wijmo.olap.Slicer",WjSlicerBehavior.classCtor=function(){return wjcOlap.Slicer},exports.WjSlicer=WjSlicerBehavior.register();