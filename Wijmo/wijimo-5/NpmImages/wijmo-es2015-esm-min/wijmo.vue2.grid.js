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
import*as wjcVue2Base from"wijmo/wijmo.vue2.base";import*as wjcGrid from"wijmo/wijmo.grid";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.vue2.grid";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=wjcSelf;import VueModuleDefault from"vue";import*as VueModule from"vue";export var Vue=VueModuleDefault||VueModule;class WjFlexGridBehavior extends wjcVue2Base.WjComponentBehavior{}WjFlexGridBehavior.tag="wj-flex-grid",WjFlexGridBehavior.className="wijmo.grid.FlexGrid",WjFlexGridBehavior.classCtor=function(){return wjcGrid.FlexGrid};export var WjFlexGrid=WjFlexGridBehavior.register();class WjFlexGridColumnBehavior extends wjcVue2Base.WjComponentBehavior{_initParent(){var e=this.parent.control;e.autoGenerateColumns&&(e.autoGenerateColumns=!1,e.columns.clear()),super._initParent()}}WjFlexGridColumnBehavior.tag="wj-flex-grid-column",WjFlexGridColumnBehavior.className="wijmo.grid.Column",WjFlexGridColumnBehavior.parentProp="columns",WjFlexGridColumnBehavior.classCtor=function(){return wjcGrid.Column};export var WjFlexGridColumn=WjFlexGridColumnBehavior.register();