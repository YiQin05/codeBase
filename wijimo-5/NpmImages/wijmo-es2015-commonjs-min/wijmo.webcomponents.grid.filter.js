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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcWebcomponentsBase=require("wijmo/wijmo.webcomponents.base"),wjcGridFilter=require("wijmo/wijmo.grid.filter");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.webcomponents.grid.filter");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.grid=__glob.wijmo.webcomponents.grid||{},__glob.wijmo.webcomponents.grid.filter=wjcSelf;let _wj_ns_exists_10=!0;class WjcFlexGridFilter extends HTMLElement{constructor(){super(),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,o,t){this._wjBehaviour.lhAttributeChanged(e,o,t)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}}WjcFlexGridFilter.wrappedClass=(()=>wjcGridFilter.FlexGridFilter),WjcFlexGridFilter.parentInCtor=!0,exports.WjcFlexGridFilter=WjcFlexGridFilter,_wj_ns_exists_10&&(wjcWebcomponentsBase.WjComponentBehavior.register("wjc-flex-grid-filter",WjcFlexGridFilter),wjcWebcomponentsBase.WjComponentBehavior.register("",wjcGridFilter.ColumnFilterEditor),wjcWebcomponentsBase.WjComponentBehavior.register("",wjcGridFilter.ConditionFilterEditor),wjcWebcomponentsBase.WjComponentBehavior.register("",wjcGridFilter.ValueFilterEditor));