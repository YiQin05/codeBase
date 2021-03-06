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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])};return function(r,o){function t(){this.constructor=r}e(r,o),r.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGrid=require("wijmo/wijmo.grid"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.vue2.grid"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=wjcSelf;var vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;var WjFlexGridBehavior=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.tag="wj-flex-grid",r.className="wijmo.grid.FlexGrid",r.classCtor=function(){return wjcGrid.FlexGrid},r}(wjcVue2Base.WjComponentBehavior);exports.WjFlexGrid=WjFlexGridBehavior.register();var WjFlexGridColumnBehavior=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._initParent=function(){var r=this.parent.control;r.autoGenerateColumns&&(r.autoGenerateColumns=!1,r.columns.clear()),e.prototype._initParent.call(this)},r.tag="wj-flex-grid-column",r.className="wijmo.grid.Column",r.parentProp="columns",r.classCtor=function(){return wjcGrid.Column},r}(wjcVue2Base.WjComponentBehavior);exports.WjFlexGridColumn=WjFlexGridColumnBehavior.register();