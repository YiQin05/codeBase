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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcChartHierarchical=require("wijmo/wijmo.chart.hierarchical");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.chart.hierarchical");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.chart=__glob.wijmo.react.chart||{},__glob.wijmo.react.chart.hierarchical=wjcSelf;class Sunburst extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChartHierarchical.Sunburst,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})}}exports.Sunburst=Sunburst;class TreeMap extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcChartHierarchical.TreeMap,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","bindingName","childItemsPath"]})}}exports.TreeMap=TreeMap;var Wj=wjcReactBase;