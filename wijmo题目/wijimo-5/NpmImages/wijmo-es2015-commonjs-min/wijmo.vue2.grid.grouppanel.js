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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGridGrouppanel=require("wijmo/wijmo.grid.grouppanel");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.grid.grouppanel");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=__glob.wijmo.vue2.grid||{},__glob.wijmo.vue2.grid.grouppanel=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjGroupPanelBehavior extends wjcVue2Base.WjComponentBehavior{}WjGroupPanelBehavior.tag="wj-group-panel",WjGroupPanelBehavior.className="wijmo.grid.grouppanel.GroupPanel",WjGroupPanelBehavior.classCtor=function(){return wjcGridGrouppanel.GroupPanel},exports.WjGroupPanel=WjGroupPanelBehavior.register();