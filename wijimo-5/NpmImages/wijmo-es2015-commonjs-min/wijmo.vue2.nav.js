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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcNav=require("wijmo/wijmo.nav");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.nav");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.nav=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjTreeViewBehavior extends wjcVue2Base.WjComponentBehavior{}WjTreeViewBehavior.tag="wj-tree-view",WjTreeViewBehavior.className="wijmo.nav.TreeView",WjTreeViewBehavior.classCtor=function(){return wjcNav.TreeView},exports.WjTreeView=WjTreeViewBehavior.register();