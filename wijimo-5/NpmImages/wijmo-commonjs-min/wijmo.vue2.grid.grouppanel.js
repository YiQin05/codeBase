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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var r in o)o.hasOwnProperty(r)&&(e[r]=o[r])};return function(o,r){function u(){this.constructor=o}e(o,r),o.prototype=null===r?Object.create(r):(u.prototype=r.prototype,new u)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGridGrouppanel=require("wijmo/wijmo.grid.grouppanel"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.vue2.grid.grouppanel"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=__glob.wijmo.vue2.grid||{},__glob.wijmo.vue2.grid.grouppanel=wjcSelf;var vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;var WjGroupPanelBehavior=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.tag="wj-group-panel",o.className="wijmo.grid.grouppanel.GroupPanel",o.classCtor=function(){return wjcGridGrouppanel.GroupPanel},o}(wjcVue2Base.WjComponentBehavior);exports.WjGroupPanel=WjGroupPanelBehavior.register();