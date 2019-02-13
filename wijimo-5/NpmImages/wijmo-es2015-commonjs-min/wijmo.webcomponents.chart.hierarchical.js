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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcWebcomponentsBase=require("wijmo/wijmo.webcomponents.base"),wjcChartHierarchical=require("wijmo/wijmo.chart.hierarchical");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.webcomponents.chart.hierarchical");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.chart=__glob.wijmo.webcomponents.chart||{},__glob.wijmo.webcomponents.chart.hierarchical=wjcSelf;let _wj_ns_exists_5=!0;class WjcSunburst extends wjcChartHierarchical.Sunburst{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcSunburst=WjcSunburst,_wj_ns_exists_5&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-sunburst",WjcSunburst);class WjcTreeMap extends wjcChartHierarchical.TreeMap{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcTreeMap=WjcTreeMap,_wj_ns_exists_5&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-tree-map",WjcTreeMap);