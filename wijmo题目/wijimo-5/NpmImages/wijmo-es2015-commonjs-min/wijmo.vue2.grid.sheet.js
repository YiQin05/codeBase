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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGridSheet=require("wijmo/wijmo.grid.sheet");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.grid.sheet");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=__glob.wijmo.vue2.grid||{},__glob.wijmo.vue2.grid.sheet=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjFlexSheetBehavior extends wjcVue2Base.WjComponentBehavior{}WjFlexSheetBehavior.tag="wj-flex-sheet",WjFlexSheetBehavior.className="wijmo.grid.sheet.FlexSheet",WjFlexSheetBehavior.classCtor=function(){return wjcGridSheet.FlexSheet},exports.WjFlexSheet=WjFlexSheetBehavior.register();class WjSheetBehavior extends wjcVue2Base.WjComponentBehavior{}WjSheetBehavior.tag="wj-sheet",WjSheetBehavior.className="wijmo.grid.sheet.Sheet",WjSheetBehavior.parentProp="sheets",WjSheetBehavior.classCtor=function(){return wjcGridSheet.Sheet},exports.WjSheet=WjSheetBehavior.register();