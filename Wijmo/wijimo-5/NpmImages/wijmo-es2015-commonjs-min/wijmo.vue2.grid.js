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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGrid=require("wijmo/wijmo.grid");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.grid");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjFlexGridBehavior extends wjcVue2Base.WjComponentBehavior{}WjFlexGridBehavior.tag="wj-flex-grid",WjFlexGridBehavior.className="wijmo.grid.FlexGrid",WjFlexGridBehavior.classCtor=function(){return wjcGrid.FlexGrid},exports.WjFlexGrid=WjFlexGridBehavior.register();class WjFlexGridColumnBehavior extends wjcVue2Base.WjComponentBehavior{_initParent(){var e=this.parent.control;e.autoGenerateColumns&&(e.autoGenerateColumns=!1,e.columns.clear()),super._initParent()}}WjFlexGridColumnBehavior.tag="wj-flex-grid-column",WjFlexGridColumnBehavior.className="wijmo.grid.Column",WjFlexGridColumnBehavior.parentProp="columns",WjFlexGridColumnBehavior.classCtor=function(){return wjcGrid.Column},exports.WjFlexGridColumn=WjFlexGridColumnBehavior.register();