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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();define(["require","exports","wijmo/wijmo.chart.finance","@angular/core","@angular/core","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(e,t,n,i,r,o,a,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});"undefined"!=typeof window?window:self;t.wjFinancialChartMeta={selector:"wj-financial-chart",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","binding","footer","header","selectionMode","palette","plotMargin","footerStyle","headerStyle","tooltipContent","itemsSource","bindingX","interpolateNulls","legendToggle","symbolSize","options","selection","itemFormatter","labelContent","chartType"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","renderingNg: rendering","renderedNg: rendered","selectionChangedNg: selectionChanged","selectionChangePC: selectionChange","seriesVisibilityChangedNg: seriesVisibilityChanged"],providers:[{provide:s.NG_VALUE_ACCESSOR,useFactory:c.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var l=function(e){function n(t,n,i){var r=e.call(this,c.WjDirectiveBehavior.getHostElement(t,n))||this;r.isInitialized=!1;r._wjBehaviour=c.WjDirectiveBehavior.attach(r,t,n,i);return r.created(),r}return __extends(n,e),n.prototype.created=function(){},n.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},n.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},n.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},n.prototype.addEventListener=function(t,n,i,r){var o=this;void 0===r&&(r=!1);var a=c.WjDirectiveBehavior,s=a.ngZone;s&&a.outsideZoneEvents[n]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(o,t,n,i,r)}):e.prototype.addEventListener.call(this,t,n,i,r)},Object.defineProperty(n.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(e){this.tooltip.content=e},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(e){this.dataLabel.content=e},enumerable:!0,configurable:!0}),n.meta={outputs:t.wjFinancialChartMeta.outputs,changeEvents:{selectionChanged:["selection"]}},n.decorators=[{type:i.Component,args:[{selector:t.wjFinancialChartMeta.selector,template:t.wjFinancialChartMeta.template,inputs:t.wjFinancialChartMeta.inputs,outputs:t.wjFinancialChartMeta.outputs,providers:[{provide:"WjComponent",useExisting:r.forwardRef(function(){return n})}].concat(t.wjFinancialChartMeta.providers)}]}],n.ctorParameters=function(){return[{type:r.ElementRef,decorators:[{type:o.Inject,args:[r.ElementRef]}]},{type:r.Injector,decorators:[{type:o.Inject,args:[r.Injector]}]},{type:void 0,decorators:[{type:o.Inject,args:["WjComponent"]},{type:o.SkipSelf},{type:r.Optional}]}]},n}(n.FinancialChart);t.WjFinancialChart=l,t.wjFinancialChartSeriesMeta={selector:"wj-financial-chart-series",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","axisX","axisY","binding","bindingX","cssClass","name","style","altStyle","symbolMarker","symbolSize","symbolStyle","visibility","itemsSource","interpolateNulls","chartType"],outputs:["initialized","renderingNg: rendering","renderedNg: rendered","visibilityChangePC: visibilityChange"],providers:[]};var p=function(e){function n(t,n,i){var r=e.call(this)||this;r.isInitialized=!1,r.wjProperty="series";r._wjBehaviour=c.WjDirectiveBehavior.attach(r,t,n,i);return r.created(),r}return __extends(n,e),n.prototype.created=function(){},n.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},n.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},n.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},n.meta={outputs:t.wjFinancialChartSeriesMeta.outputs,changeEvents:{"chart.seriesVisibilityChanged":["visibility"]},siblingId:"series"},n.decorators=[{type:i.Component,args:[{selector:t.wjFinancialChartSeriesMeta.selector,template:t.wjFinancialChartSeriesMeta.template,inputs:t.wjFinancialChartSeriesMeta.inputs,outputs:t.wjFinancialChartSeriesMeta.outputs,providers:[{provide:"WjComponent",useExisting:r.forwardRef(function(){return n})}].concat(t.wjFinancialChartSeriesMeta.providers)}]}],n.ctorParameters=function(){return[{type:r.ElementRef,decorators:[{type:o.Inject,args:[r.ElementRef]}]},{type:r.Injector,decorators:[{type:o.Inject,args:[r.Injector]}]},{type:void 0,decorators:[{type:o.Inject,args:["WjComponent"]},{type:o.SkipSelf},{type:r.Optional}]}]},n}(n.FinancialSeries);t.WjFinancialChartSeries=p;var u=[l,p],d=function(){function e(){}return e.decorators=[{type:i.NgModule,args:[{imports:[c.WjDirectiveBaseModule,a.CommonModule],declarations:u.slice(),exports:u.slice()}]}],e.ctorParameters=function(){return[]},e}();t.WjChartFinanceModule=d});