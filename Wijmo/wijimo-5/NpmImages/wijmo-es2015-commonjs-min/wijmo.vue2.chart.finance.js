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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcChartFinance=require("wijmo/wijmo.chart.finance");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.chart.finance");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.chart=__glob.wijmo.vue2.chart||{},__glob.wijmo.vue2.chart.finance=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjFinancialChartBehavior extends wjcVue2Base.WjComponentBehavior{_updateControl(e,a){switch(e){case"tooltipContent":this.control.tooltip.content=a;break;case"labelContent":this.control.dataLabel.content=a;break;default:super._updateControl(e,a)}}}WjFinancialChartBehavior.tag="wj-financial-chart",WjFinancialChartBehavior.className="wijmo.chart.finance.FinancialChart",WjFinancialChartBehavior.extraProps=["tooltipContent","labelContent"],WjFinancialChartBehavior.classCtor=function(){return wjcChartFinance.FinancialChart},exports.WjFinancialChart=WjFinancialChartBehavior.register();class WjFinancialChartSeriesBehavior extends wjcVue2Base.WjComponentBehavior{}WjFinancialChartSeriesBehavior.tag="wj-financial-chart-series",WjFinancialChartSeriesBehavior.className="wijmo.chart.finance.FinancialSeries",WjFinancialChartSeriesBehavior.parentProp="series",WjFinancialChartSeriesBehavior.siblingId="series",WjFinancialChartSeriesBehavior.classCtor=function(){return wjcChartFinance.FinancialSeries},exports.WjFinancialChartSeries=WjFinancialChartSeriesBehavior.register();