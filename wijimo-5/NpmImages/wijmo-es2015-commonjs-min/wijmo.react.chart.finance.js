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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcChartFinance=require("wijmo/wijmo.chart.finance");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.chart.finance");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.chart=__glob.wijmo.react.chart||{},__glob.wijmo.react.chart.finance=wjcSelf;class FinancialChart extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChartFinance.FinancialChart,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection"]})}}exports.FinancialChart=FinancialChart;class FinancialChartSeries extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChartFinance.FinancialSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource"]}),this._parentProp="series",this._siblingId="series"}}exports.FinancialChartSeries=FinancialChartSeries;var Wj=wjcReactBase;