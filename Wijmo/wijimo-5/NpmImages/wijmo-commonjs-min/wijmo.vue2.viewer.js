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
"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])};return function(r,o){function t(){this.constructor=r}e(r,o),r.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcViewer=require("wijmo/wijmo.viewer"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.vue2.viewer"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.viewer=wjcSelf;var vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;var WjReportViewerBehavior=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.tag="wj-report-viewer",r.className="wijmo.viewer.ReportViewer",r.classCtor=function(){return wjcViewer.ReportViewer},r}(wjcVue2Base.WjComponentBehavior);exports.WjReportViewer=WjReportViewerBehavior.register();var WjPdfViewerBehavior=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.tag="wj-pdf-viewer",r.className="wijmo.viewer.PdfViewer",r.classCtor=function(){return wjcViewer.PdfViewer},r}(wjcVue2Base.WjComponentBehavior);exports.WjPdfViewer=WjPdfViewerBehavior.register();