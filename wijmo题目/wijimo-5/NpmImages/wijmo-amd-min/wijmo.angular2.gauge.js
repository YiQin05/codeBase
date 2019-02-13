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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();define(["require","exports","wijmo/wijmo.gauge","@angular/core","@angular/core","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(e,t,n,o,a,r,i,s,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});"undefined"!=typeof window?window:self;t.wjLinearGaugeMeta={selector:"wj-linear-gauge",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:s.NG_VALUE_ACCESSOR,useFactory:u.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var p=function(e){function n(t,n,o){var a=e.call(this,u.WjDirectiveBehavior.getHostElement(t,n))||this;a.isInitialized=!1,a.wjModelProperty="value";a._wjBehaviour=u.WjDirectiveBehavior.attach(a,t,n,o);return a.created(),a}return __extends(n,e),n.prototype.created=function(){},n.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},n.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},n.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},n.prototype.addEventListener=function(t,n,o,a){var r=this;void 0===a&&(a=!1);var i=u.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[n]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(r,t,n,o,a)}):e.prototype.addEventListener.call(this,t,n,o,a)},n.meta={outputs:t.wjLinearGaugeMeta.outputs,changeEvents:{valueChanged:["value"]}},n.decorators=[{type:o.Component,args:[{selector:t.wjLinearGaugeMeta.selector,template:t.wjLinearGaugeMeta.template,inputs:t.wjLinearGaugeMeta.inputs,outputs:t.wjLinearGaugeMeta.outputs,providers:[{provide:"WjComponent",useExisting:a.forwardRef(function(){return n})}].concat(t.wjLinearGaugeMeta.providers)}]}],n.ctorParameters=function(){return[{type:a.ElementRef,decorators:[{type:r.Inject,args:[a.ElementRef]}]},{type:a.Injector,decorators:[{type:r.Inject,args:[a.Injector]}]},{type:void 0,decorators:[{type:r.Inject,args:["WjComponent"]},{type:r.SkipSelf},{type:a.Optional}]}]},n}(n.LinearGauge);t.WjLinearGauge=p,t.wjBulletGraphMeta={selector:"wj-bullet-graph",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showRanges","stackRanges","thumbSize","tickSpacing","getText","direction","target","good","bad"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:s.NG_VALUE_ACCESSOR,useFactory:u.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var c=function(e){function n(t,n,o){var a=e.call(this,u.WjDirectiveBehavior.getHostElement(t,n))||this;a.isInitialized=!1,a.wjModelProperty="value";a._wjBehaviour=u.WjDirectiveBehavior.attach(a,t,n,o);return a.created(),a}return __extends(n,e),n.prototype.created=function(){},n.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},n.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},n.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},n.prototype.addEventListener=function(t,n,o,a){var r=this;void 0===a&&(a=!1);var i=u.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[n]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(r,t,n,o,a)}):e.prototype.addEventListener.call(this,t,n,o,a)},n.meta={outputs:t.wjBulletGraphMeta.outputs,changeEvents:{valueChanged:["value"]}},n.decorators=[{type:o.Component,args:[{selector:t.wjBulletGraphMeta.selector,template:t.wjBulletGraphMeta.template,inputs:t.wjBulletGraphMeta.inputs,outputs:t.wjBulletGraphMeta.outputs,providers:[{provide:"WjComponent",useExisting:a.forwardRef(function(){return n})}].concat(t.wjBulletGraphMeta.providers)}]}],n.ctorParameters=function(){return[{type:a.ElementRef,decorators:[{type:r.Inject,args:[a.ElementRef]}]},{type:a.Injector,decorators:[{type:r.Inject,args:[a.Injector]}]},{type:void 0,decorators:[{type:r.Inject,args:["WjComponent"]},{type:r.SkipSelf},{type:a.Optional}]}]},n}(n.BulletGraph);t.WjBulletGraph=c,t.wjRadialGaugeMeta={selector:"wj-radial-gauge",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjModelProperty","isDisabled","value","min","max","origin","isReadOnly","step","format","thickness","hasShadow","isAnimated","showText","showTicks","showRanges","stackRanges","thumbSize","tickSpacing","getText","autoScale","startAngle","sweepAngle"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","valueChangedNg: valueChanged","valueChangePC: valueChange"],providers:[{provide:s.NG_VALUE_ACCESSOR,useFactory:u.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var l=function(e){function n(t,n,o){var a=e.call(this,u.WjDirectiveBehavior.getHostElement(t,n))||this;a.isInitialized=!1,a.wjModelProperty="value";a._wjBehaviour=u.WjDirectiveBehavior.attach(a,t,n,o);return a.created(),a}return __extends(n,e),n.prototype.created=function(){},n.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},n.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},n.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},n.prototype.addEventListener=function(t,n,o,a){var r=this;void 0===a&&(a=!1);var i=u.WjDirectiveBehavior,s=i.ngZone;s&&i.outsideZoneEvents[n]?s.runOutsideAngular(function(){e.prototype.addEventListener.call(r,t,n,o,a)}):e.prototype.addEventListener.call(this,t,n,o,a)},n.meta={outputs:t.wjRadialGaugeMeta.outputs,changeEvents:{valueChanged:["value"]}},n.decorators=[{type:o.Component,args:[{selector:t.wjRadialGaugeMeta.selector,template:t.wjRadialGaugeMeta.template,inputs:t.wjRadialGaugeMeta.inputs,outputs:t.wjRadialGaugeMeta.outputs,providers:[{provide:"WjComponent",useExisting:a.forwardRef(function(){return n})}].concat(t.wjRadialGaugeMeta.providers)}]}],n.ctorParameters=function(){return[{type:a.ElementRef,decorators:[{type:r.Inject,args:[a.ElementRef]}]},{type:a.Injector,decorators:[{type:r.Inject,args:[a.Injector]}]},{type:void 0,decorators:[{type:r.Inject,args:["WjComponent"]},{type:r.SkipSelf},{type:a.Optional}]}]},n}(n.RadialGauge);t.WjRadialGauge=l,t.wjRangeMeta={selector:"wj-range",template:"",inputs:["wjProperty","color","min","max","name","thickness"],outputs:["initialized"],providers:[]};var d=function(e){function n(t,n,o){var a=e.call(this)||this;a.isInitialized=!1,a.wjProperty="ranges";a._wjBehaviour=u.WjDirectiveBehavior.attach(a,t,n,o);return a.created(),a}return __extends(n,e),n.prototype.created=function(){},n.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},n.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},n.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},n.meta={outputs:t.wjRangeMeta.outputs},n.decorators=[{type:o.Component,args:[{selector:t.wjRangeMeta.selector,template:t.wjRangeMeta.template,inputs:t.wjRangeMeta.inputs,outputs:t.wjRangeMeta.outputs,providers:[{provide:"WjComponent",useExisting:a.forwardRef(function(){return n})}].concat(t.wjRangeMeta.providers)}]}],n.ctorParameters=function(){return[{type:a.ElementRef,decorators:[{type:r.Inject,args:[a.ElementRef]}]},{type:a.Injector,decorators:[{type:r.Inject,args:[a.Injector]}]},{type:void 0,decorators:[{type:r.Inject,args:["WjComponent"]},{type:r.SkipSelf},{type:a.Optional}]}]},n}(n.Range);t.WjRange=d;var g=[p,c,l,d],v=function(){function e(){}return e.decorators=[{type:o.NgModule,args:[{imports:[u.WjDirectiveBaseModule,i.CommonModule],declarations:g.slice(),exports:g.slice()}]}],e.ctorParameters=function(){return[]},e}();t.WjGaugeModule=v});