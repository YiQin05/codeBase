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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGridMultirow=require("wijmo/wijmo.grid.multirow");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.grid.multirow");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=__glob.wijmo.vue2.grid||{},__glob.wijmo.vue2.grid.multirow=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjMultiRowBehavior extends wjcVue2Base.WjComponentBehavior{}WjMultiRowBehavior.tag="wj-multi-row",WjMultiRowBehavior.className="wijmo.grid.multirow.MultiRow",WjMultiRowBehavior.classCtor=function(){return wjcGridMultirow.MultiRow},exports.WjMultiRow=WjMultiRowBehavior.register();