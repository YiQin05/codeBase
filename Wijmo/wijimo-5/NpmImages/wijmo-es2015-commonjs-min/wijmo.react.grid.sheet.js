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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcGridSheet=require("wijmo/wijmo.grid.sheet");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.grid.sheet");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.grid=__glob.wijmo.react.grid||{},__glob.wijmo.react.grid.sheet=wjcSelf;class FlexSheet extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGridSheet.FlexSheet,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})}}exports.FlexSheet=FlexSheet;class Sheet extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGridSheet.Sheet,{objectProps:["itemsSource"]}),this._parentProp="sheets"}}exports.Sheet=Sheet;var Wj=wjcReactBase;