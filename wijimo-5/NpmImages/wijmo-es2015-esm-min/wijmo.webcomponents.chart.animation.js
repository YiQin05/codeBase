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
import*as wjcWebcomponentsBase from"wijmo/wijmo.webcomponents.base";import*as wjcChartAnimation from"wijmo/wijmo.chart.animation";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.webcomponents.chart.animation";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.webcomponents=__glob.wijmo.webcomponents||{},__glob.wijmo.webcomponents.chart=__glob.wijmo.webcomponents.chart||{},__glob.wijmo.webcomponents.chart.animation=wjcSelf;let _wj_ns_exists_2=!0;export class WjcFlexChartAnimation extends HTMLElement{constructor(){super(),this._wjBehaviour=wjcWebcomponentsBase.WjComponentBehavior._attach(this)}static get observedAttributes(){return wjcWebcomponentsBase.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(o,e,t){this._wjBehaviour.lhAttributeChanged(o,e,t)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}};WjcFlexChartAnimation.wrappedClass=(()=>wjcChartAnimation.ChartAnimation),WjcFlexChartAnimation.parentInCtor=!0,_wj_ns_exists_2&&wjcWebcomponentsBase.WjComponentBehavior.register("wjc-flex-chart-animation",WjcFlexChartAnimation);