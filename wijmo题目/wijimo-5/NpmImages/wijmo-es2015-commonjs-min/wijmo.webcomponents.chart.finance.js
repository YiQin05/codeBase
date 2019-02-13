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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcWebcomponentsBase=require("wijmo/wijmo.webcomponents.base"),wjcChartFinance=require("wijmo/wijmo.chart.finance");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.webcomponents.chart.finance");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.chart=__glob.wijmo.webcomponents.chart||{},__glob.wijmo.webcomponents.chart.finance=wjcSelf;let _wj_ns_exists_4=!0;class WjcFinancialChart extends wjcChartFinance.FinancialChart{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcFinancialChart=WjcFinancialChart,_wj_ns_exists_4&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-financial-chart",WjcFinancialChart);class WjcFinancialChartSeries extends HTMLElement{constructor(){super(),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,n){this._wjBehaviour.lhAttributeChanged(e,t,n)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFinancialChartSeries.wrappedClass=(()=>wjcChartFinance.FinancialSeries),WjcFinancialChartSeries.parentProp="series",WjcFinancialChartSeries.siblingId="series",exports.WjcFinancialChartSeries=WjcFinancialChartSeries,_wj_ns_exists_4&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-financial-chart-series",WjcFinancialChartSeries);