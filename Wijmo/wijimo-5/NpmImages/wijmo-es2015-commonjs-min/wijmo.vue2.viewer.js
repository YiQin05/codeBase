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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcViewer=require("wijmo/wijmo.viewer");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.viewer");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.viewer=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjReportViewerBehavior extends wjcVue2Base.WjComponentBehavior{}WjReportViewerBehavior.tag="wj-report-viewer",WjReportViewerBehavior.className="wijmo.viewer.ReportViewer",WjReportViewerBehavior.classCtor=function(){return wjcViewer.ReportViewer},exports.WjReportViewer=WjReportViewerBehavior.register();class WjPdfViewerBehavior extends wjcVue2Base.WjComponentBehavior{}WjPdfViewerBehavior.tag="wj-pdf-viewer",WjPdfViewerBehavior.className="wijmo.viewer.PdfViewer",WjPdfViewerBehavior.classCtor=function(){return wjcViewer.PdfViewer},exports.WjPdfViewer=WjPdfViewerBehavior.register();