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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGridFilter=require("wijmo/wijmo.grid.filter");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.grid.filter");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=__glob.wijmo.vue2.grid||{},__glob.wijmo.vue2.grid.filter=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjFlexGridFilterBehavior extends wjcVue2Base.WjComponentBehavior{}WjFlexGridFilterBehavior.tag="wj-flex-grid-filter",WjFlexGridFilterBehavior.className="wijmo.grid.filter.FlexGridFilter",WjFlexGridFilterBehavior.parentInCtor=!0,WjFlexGridFilterBehavior.classCtor=function(){return wjcGridFilter.FlexGridFilter},exports.WjFlexGridFilter=WjFlexGridFilterBehavior.register();