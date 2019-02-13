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
import*as wjcReactBase from"wijmo/wijmo.react.base";import*as wjcGrid from"wijmo/wijmo.grid";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.react.grid";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.grid=wjcSelf;export class FlexGrid extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGrid.FlexGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})}};export class FlexGridColumn extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGrid.Column,{objectProps:["dataMap"]}),this._parentProp="columns"}_initParent(){var e=this.parent.control;e.autoGenerateColumns&&(e.autoGenerateColumns=!1,e.columns.clear()),super._initParent()}};var Wj=wjcReactBase;