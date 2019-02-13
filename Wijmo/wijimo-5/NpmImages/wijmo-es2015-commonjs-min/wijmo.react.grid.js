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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcGrid=require("wijmo/wijmo.grid");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.grid");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.grid=wjcSelf;class FlexGrid extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGrid.FlexGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold"]})}}exports.FlexGrid=FlexGrid;class FlexGridColumn extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcGrid.Column,{objectProps:["dataMap"]}),this._parentProp="columns"}_initParent(){var e=this.parent.control;e.autoGenerateColumns&&(e.autoGenerateColumns=!1,e.columns.clear()),super._initParent()}}exports.FlexGridColumn=FlexGridColumn;var Wj=wjcReactBase;