﻿/*
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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var wjcCore=require("wijmo/wijmo"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.vue2.core"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.core=wjcSelf;var vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule,exports.WjInclude=exports.Vue.component("wj-include",{render:function(e){return e("div")},props:["src"],mounted:function(){var e=this;wjcCore.httpRequest(this.src,{success:function(o){e.$el.innerHTML=o.response}})}}),exports.WjFormat=exports.Vue.filter("wj-format",function(e,o){return wjcCore.Globalize.format(e,o)});