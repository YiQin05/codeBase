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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcWebcomponentsBase=require("wijmo/wijmo.webcomponents.base"),wjcGridMultirow=require("wijmo/wijmo.grid.multirow");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.webcomponents.grid.multirow");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.grid=__glob.wijmo.webcomponents.grid||{},__glob.wijmo.webcomponents.grid.multirow=wjcSelf;let _wj_ns_exists_12=!0;class WjcMultiRow extends wjcGridMultirow.MultiRow{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,o,t){this._wjBehaviour.lhAttributeChanged(e,o,t)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcMultiRow=WjcMultiRow,_wj_ns_exists_12&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-multi-row",WjcMultiRow);