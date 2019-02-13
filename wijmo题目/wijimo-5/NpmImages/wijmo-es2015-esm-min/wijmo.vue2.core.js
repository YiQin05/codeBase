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
import*as wjcCore from"wijmo/wijmo";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.vue2.core";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.core=wjcSelf;import VueModuleDefault from"vue";import*as VueModule from"vue";export var Vue=VueModuleDefault||VueModule;export var WjInclude=Vue.component("wj-include",{render:function(e){return e("div")},props:["src"],mounted:function(){wjcCore.httpRequest(this.src,{success:e=>{this.$el.innerHTML=e.response}})}});export var WjFormat=Vue.filter("wj-format",function(e,o){return wjcCore.Globalize.format(e,o)});