﻿/*
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
import*as wjcWebcomponentsBase from"wijmo/wijmo.webcomponents.base";import*as wjcOlap from"wijmo/wijmo.olap";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.webcomponents.olap";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.olap=wjcSelf;let _wj_ns_exists_16=!0;import"wijmo/wijmo.webcomponents.chart";export class WjcPivotGrid extends wjcOlap.PivotGrid{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}};_wj_ns_exists_16&&(wjcWebcomponentsBase.WjComponentBehavior.register("",wjcOlap._GridContextMenu),wjcWebcomponentsBase.WjComponentBehavior.register("",wjcOlap.DetailDialog),wjcWebcomponentsBase.WjComponentBehavior.register("",wjcOlap.PivotFieldEditor),wjcWebcomponentsBase.WjComponentBehavior.register("",wjcOlap.PivotFilterEditor),wjcWebcomponentsBase.WjComponentBehavior.register("wjc-pivot-grid",WjcPivotGrid));export class WjcPivotChart extends wjcOlap.PivotChart{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}};_wj_ns_exists_16&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-pivot-chart",WjcPivotChart);export class WjcPivotPanel extends wjcOlap.PivotPanel{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}};_wj_ns_exists_16&&(wjcWebcomponentsBase.WjComponentBehavior.register("",wjcOlap._ListContextMenu),wjcWebcomponentsBase.WjComponentBehavior.register("wjc-pivot-panel",WjcPivotPanel));export class WjcSlicer extends wjcOlap.Slicer{constructor(){super(document.createElement("div")),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}};_wj_ns_exists_16&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-slicer",WjcSlicer);