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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcWebcomponentsBase=require("wijmo/wijmo.webcomponents.base"),wjcChartInteraction=require("wijmo/wijmo.chart.interaction");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.webcomponents.chart.interaction");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.chart=__glob.wijmo.webcomponents.chart||{},__glob.wijmo.webcomponents.chart.interaction=wjcSelf;let _wj_ns_exists_6=!0;class WjcFlexChartRangeSelector extends HTMLElement{constructor(){super(),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexChartRangeSelector.wrappedClass=(()=>wjcChartInteraction.RangeSelector),WjcFlexChartRangeSelector.parentInCtor=!0,exports.WjcFlexChartRangeSelector=WjcFlexChartRangeSelector,_wj_ns_exists_6&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-flex-chart-range-selector",WjcFlexChartRangeSelector);class WjcFlexChartGestures extends HTMLElement{constructor(){super(),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexChartGestures.wrappedClass=(()=>wjcChartInteraction.ChartGestures),WjcFlexChartGestures.parentInCtor=!0,exports.WjcFlexChartGestures=WjcFlexChartGestures,_wj_ns_exists_6&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-flex-chart-gestures",WjcFlexChartGestures);