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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)r.hasOwnProperty(i)&&(e[i]=r[i])};return function(r,i){function t(){this.constructor=r}e(r,i),r.prototype=null===i?Object.create(i):(t.prototype=i.prototype,new t)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGridFilter=require("wijmo/wijmo.grid.filter"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.vue2.grid.filter"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=__glob.wijmo.vue2.grid||{},__glob.wijmo.vue2.grid.filter=wjcSelf;var vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;var WjFlexGridFilterBehavior=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.tag="wj-flex-grid-filter",r.className="wijmo.grid.filter.FlexGridFilter",r.parentInCtor=!0,r.classCtor=function(){return wjcGridFilter.FlexGridFilter},r}(wjcVue2Base.WjComponentBehavior);exports.WjFlexGridFilter=WjFlexGridFilterBehavior.register();