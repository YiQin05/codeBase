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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcReactBase=require("wijmo/wijmo.react.base"),wjcViewer=require("wijmo/wijmo.viewer");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.react.viewer");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.react=__glob.wijmo.react||{},__glob.wijmo.react.viewer=wjcSelf;class ReportViewer extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcViewer.ReportViewer,{objectProps:["requestHeaders","parameters"]})}}exports.ReportViewer=ReportViewer;class PdfViewer extends wjcReactBase.ComponentBase{constructor(e){super(e,wjcViewer.PdfViewer,{objectProps:["requestHeaders"]})}}exports.PdfViewer=PdfViewer;var Wj=wjcReactBase;