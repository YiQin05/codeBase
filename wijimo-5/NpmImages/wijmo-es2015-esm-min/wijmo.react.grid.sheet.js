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
import*as wjcReactBase from"wijmo/wijmo.react.base";import*as wjcGridSheet from"wijmo/wijmo.grid.sheet";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.react.grid.sheet";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.grid=__glob.wijmo.react.grid||{},__glob.wijmo.react.grid.sheet=wjcSelf;export class FlexSheet extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGridSheet.FlexSheet,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})}};export class Sheet extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGridSheet.Sheet,{objectProps:["itemsSource"]}),this._parentProp="sheets"}};var Wj=wjcReactBase;