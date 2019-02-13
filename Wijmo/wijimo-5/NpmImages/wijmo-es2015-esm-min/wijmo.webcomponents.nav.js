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
import*as wjcWebcomponentsBase from"wijmo/wijmo.webcomponents.base";import*as wjcNav from"wijmo/wijmo.nav";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.webcomponents.nav";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.nav=wjcSelf;let _wj_ns_exists_18=!0;export class WjcTreeView extends wjcNav.TreeView{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,o,t){this._wjBehaviour.lhAttributeChanged(e,o,t)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}};_wj_ns_exists_18&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-tree-view",WjcTreeView),wjcWebcomponentsBase.WjComponentBehavior.register("",wjcNav.TabPanel);