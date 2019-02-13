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
import*as wjcVue2Base from"wijmo/wijmo.vue2.base";import*as wjcChartHierarchical from"wijmo/wijmo.chart.hierarchical";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.vue2.chart.hierarchical";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.chart=__glob.wijmo.vue2.chart||{},__glob.wijmo.vue2.chart.hierarchical=wjcSelf;import VueModuleDefault from"vue";import*as VueModule from"vue";export var Vue=VueModuleDefault||VueModule;class WjSunburstBehavior extends wjcVue2Base.WjComponentBehavior{_updateControl(e,o){switch(e){case"tooltipContent":this.control.tooltip.content=o;break;case"labelContent":this.control.dataLabel.content=o;break;default:super._updateControl(e,o)}}}WjSunburstBehavior.tag="wj-sunburst",WjSunburstBehavior.className="wijmo.chart.hierarchical.Sunburst",WjSunburstBehavior.extraProps=["tooltipContent","labelContent"],WjSunburstBehavior.classCtor=function(){return wjcChartHierarchical.Sunburst};export var WjSunburst=WjSunburstBehavior.register();class WjTreeMapBehavior extends wjcVue2Base.WjComponentBehavior{_updateControl(e,o){switch(e){case"tooltipContent":this.control.tooltip.content=o;break;case"labelContent":this.control.dataLabel.content=o;break;default:super._updateControl(e,o)}}}WjTreeMapBehavior.tag="wj-tree-map",WjTreeMapBehavior.className="wijmo.chart.hierarchical.TreeMap",WjTreeMapBehavior.extraProps=["tooltipContent","labelContent"],WjTreeMapBehavior.classCtor=function(){return wjcChartHierarchical.TreeMap};export var WjTreeMap=WjTreeMapBehavior.register();