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
import*as wjcReactBase from"wijmo/wijmo.react.base";import*as wjcOlap from"wijmo/wijmo.olap";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.react.olap";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.olap=wjcSelf;export class PivotGrid extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcOlap.PivotGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})}};export class PivotChart extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcOlap.PivotChart,{objectProps:["itemsSource","headerStyle","footerStyle"]})}};export class PivotPanel extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcOlap.PivotPanel,{objectProps:["engine","itemsSource"]})}};export class Slicer extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcOlap.Slicer,{objectProps:["field"]})}};var Wj=wjcReactBase;