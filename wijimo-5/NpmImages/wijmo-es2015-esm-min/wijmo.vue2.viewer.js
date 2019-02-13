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
import*as wjcVue2Base from"wijmo/wijmo.vue2.base";import*as wjcViewer from"wijmo/wijmo.viewer";var __glob="undefined"!=typeof window?window:self;import*as wjcSelfRef from"wijmo/wijmo.vue2.viewer";var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.viewer=wjcSelf;import VueModuleDefault from"vue";import*as VueModule from"vue";export var Vue=VueModuleDefault||VueModule;class WjReportViewerBehavior extends wjcVue2Base.WjComponentBehavior{}WjReportViewerBehavior.tag="wj-report-viewer",WjReportViewerBehavior.className="wijmo.viewer.ReportViewer",WjReportViewerBehavior.classCtor=function(){return wjcViewer.ReportViewer};export var WjReportViewer=WjReportViewerBehavior.register();class WjPdfViewerBehavior extends wjcVue2Base.WjComponentBehavior{}WjPdfViewerBehavior.tag="wj-pdf-viewer",WjPdfViewerBehavior.className="wijmo.viewer.PdfViewer",WjPdfViewerBehavior.classCtor=function(){return wjcViewer.PdfViewer};export var WjPdfViewer=WjPdfViewerBehavior.register();