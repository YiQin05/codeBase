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
import*as wjcVue2Base from"wijmo/wijmo.vue2.base";import*as wjcGridSheet from"wijmo/wijmo.grid.sheet";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.vue2.grid.sheet";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=__glob.wijmo.vue2.grid||{},__glob.wijmo.vue2.grid.sheet=wjcSelf;import VueModuleDefault from"vue";import*as VueModule from"vue";export var Vue=VueModuleDefault||VueModule;class WjFlexSheetBehavior extends wjcVue2Base.WjComponentBehavior{}WjFlexSheetBehavior.tag="wj-flex-sheet",WjFlexSheetBehavior.className="wijmo.grid.sheet.FlexSheet",WjFlexSheetBehavior.classCtor=function(){return wjcGridSheet.FlexSheet};export var WjFlexSheet=WjFlexSheetBehavior.register();class WjSheetBehavior extends wjcVue2Base.WjComponentBehavior{}WjSheetBehavior.tag="wj-sheet",WjSheetBehavior.className="wijmo.grid.sheet.Sheet",WjSheetBehavior.parentProp="sheets",WjSheetBehavior.classCtor=function(){return wjcGridSheet.Sheet};export var WjSheet=WjSheetBehavior.register();