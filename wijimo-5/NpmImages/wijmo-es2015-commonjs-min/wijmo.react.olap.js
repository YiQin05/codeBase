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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcOlap=require("wijmo/wijmo.olap");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.olap");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.olap=wjcSelf;class PivotGrid extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcOlap.PivotGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})}}exports.PivotGrid=PivotGrid;class PivotChart extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcOlap.PivotChart,{objectProps:["itemsSource","headerStyle","footerStyle"]})}}exports.PivotChart=PivotChart;class PivotPanel extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcOlap.PivotPanel,{objectProps:["engine","itemsSource"]})}}exports.PivotPanel=PivotPanel;class Slicer extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcOlap.Slicer,{objectProps:["field"]})}}exports.Slicer=Slicer;var Wj=wjcReactBase;