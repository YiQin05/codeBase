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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.viewer","wijmo/wijmo.vue2.viewer","vue","vue"],function(e,t,r,o,i,n,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var w="undefined"!=typeof window?window:self,s=i||t;w.wijmo=w.wijmo||{},w.wijmo.vue2=w.wijmo.vue2||{},w.wijmo.vue2.viewer=s,t.Vue=n.default||u;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-report-viewer",t.className="wijmo.viewer.ReportViewer",t.classCtor=function(){return o.ReportViewer},t}(r.WjComponentBehavior);t.WjReportViewer=a.register();var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.tag="wj-pdf-viewer",t.className="wijmo.viewer.PdfViewer",t.classCtor=function(){return o.PdfViewer},t}(r.WjComponentBehavior);t.WjPdfViewer=f.register()});