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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcWebcomponentsBase=require("wijmo/wijmo.webcomponents.base"),wjcChartAnimation=require("wijmo/wijmo.chart.animation");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.webcomponents.chart.animation");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.chart=__glob.wijmo.webcomponents.chart||{},__glob.wijmo.webcomponents.chart.animation=wjcSelf;let _wj_ns_exists_2=!0;class WjcFlexChartAnimation extends HTMLElement{constructor(){super(),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,o,t){this._wjBehaviour.lhAttributeChanged(e,o,t)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexChartAnimation.wrappedClass=(()=>wjcChartAnimation.ChartAnimation),WjcFlexChartAnimation.parentInCtor=!0,exports.WjcFlexChartAnimation=WjcFlexChartAnimation,_wj_ns_exists_2&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-flex-chart-animation",WjcFlexChartAnimation);