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
"use strict";var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var wjcReactBase=require("wijmo/wijmo.react.base"),wjcChartAnnotation=require("wijmo/wijmo.chart.annotation"),__glob="undefined"!=typeof window?window:self,wjcSelfRef=require("wijmo/wijmo.react.chart.annotation"),wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.chart=__glob.wijmo.react.chart||{},__glob.wijmo.react.chart.annotation=wjcSelf;var FlexChartAnnotationLayer=function(t){function o(o){var e=t.call(this,o,wjcChartAnnotation.AnnotationLayer)||this;return e._parentInCtor=!0,e}return __extends(o,t),o}(wjcReactBase.ComponentBase);exports.FlexChartAnnotationLayer=FlexChartAnnotationLayer;var FlexChartAnnotation=function(t){function o(o){var e=t.call(this,o,null,{objectProps:["point","offset","style","start","end"]})||this;return e._parentProp="items",e}return __extends(o,t),o.prototype._createControl=function(){return new wjcChartAnnotation[this.props.type]},o}(wjcReactBase.ComponentBase);exports.FlexChartAnnotation=FlexChartAnnotation;var Wj=wjcReactBase;