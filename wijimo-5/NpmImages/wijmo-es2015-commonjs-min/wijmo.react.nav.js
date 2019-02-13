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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcNav=require("wijmo/wijmo.nav");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.nav");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.nav=wjcSelf;class TreeView extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcNav.TreeView,{objectProps:["childItemsPath","displayMemberPath","imageMemberPath","itemsSource","selectedItem","selectedNode","checkedItems"]})}}exports.TreeView=TreeView;var Wj=wjcReactBase;