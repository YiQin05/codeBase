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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcChartHierarchical=require("wijmo/wijmo.chart.hierarchical");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.chart.hierarchical");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.chart=__glob.wijmo.vue2.chart||{},__glob.wijmo.vue2.chart.hierarchical=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjSunburstBehavior extends wjcVue2Base.WjComponentBehavior{_updateControl(e,t){switch(e){case"tooltipContent":this.control.tooltip.content=t;break;case"labelContent":this.control.dataLabel.content=t;break;default:super._updateControl(e,t)}}}WjSunburstBehavior.tag="wj-sunburst",WjSunburstBehavior.className="wijmo.chart.hierarchical.Sunburst",WjSunburstBehavior.extraProps=["tooltipContent","labelContent"],WjSunburstBehavior.classCtor=function(){return wjcChartHierarchical.Sunburst},exports.WjSunburst=WjSunburstBehavior.register();class WjTreeMapBehavior extends wjcVue2Base.WjComponentBehavior{_updateControl(e,t){switch(e){case"tooltipContent":this.control.tooltip.content=t;break;case"labelContent":this.control.dataLabel.content=t;break;default:super._updateControl(e,t)}}}WjTreeMapBehavior.tag="wj-tree-map",WjTreeMapBehavior.className="wijmo.chart.hierarchical.TreeMap",WjTreeMapBehavior.extraProps=["tooltipContent","labelContent"],WjTreeMapBehavior.classCtor=function(){return wjcChartHierarchical.TreeMap},exports.WjTreeMap=WjTreeMapBehavior.register();