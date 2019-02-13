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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.viewer","wijmo/wijmo.react.viewer"],function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"!=typeof window?window:self,s=n||t;i.wijmo=i.wijmo||{},i.wijmo.react=i.wijmo.react||{},i.wijmo.react.viewer=s;var c=function(e){function t(t){return e.call(this,t,o.ReportViewer,{objectProps:["requestHeaders","parameters"]})||this}return __extends(t,e),t}(r.ComponentBase);t.ReportViewer=c;var a=function(e){function t(t){return e.call(this,t,o.PdfViewer,{objectProps:["requestHeaders"]})||this}return __extends(t,e),t}(r.ComponentBase);t.PdfViewer=a});