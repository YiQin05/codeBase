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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcWebcomponentsBase=require("wijmo/wijmo.webcomponents.base"),wjcGrid=require("wijmo/wijmo.grid");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.webcomponents.grid");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.grid=wjcSelf;let _wj_ns_exists_14=!0;class WjcFlexGrid extends wjcGrid.FlexGrid{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcFlexGrid=WjcFlexGrid,_wj_ns_exists_14&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-flex-grid",WjcFlexGrid);class WjcFlexGridColumn extends HTMLElement{constructor(){super(),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}_beforeInitParent(){let e=this.parentElement.control;e.autoGenerateColumns&&(e.autoGenerateColumns=!1,e.columns.clear())}}WjcFlexGridColumn.wrappedClass=(()=>wjcGrid.Column),WjcFlexGridColumn.parentProp="columns",exports.WjcFlexGridColumn=WjcFlexGridColumn,_wj_ns_exists_14&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-flex-grid-column",WjcFlexGridColumn);