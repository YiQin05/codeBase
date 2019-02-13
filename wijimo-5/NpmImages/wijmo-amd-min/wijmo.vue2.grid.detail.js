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
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.grid.detail","wijmo/wijmo.vue2.grid.detail","vue","vue"],function(e,t,o,r,i,n,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d="undefined"!=typeof window?window:self,a=i||t;d.wijmo=d.wijmo||{},d.wijmo.vue2=d.wijmo.vue2||{},d.wijmo.vue2.grid=d.wijmo.vue2.grid||{},d.wijmo.vue2.grid.detail=a,t.Vue=n.default||u;var l=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t._openedComponents=[],t}return __extends(o,e),o.render=function(e){return e("div")},o.prototype._createControl=function(){var o=this,r=e.prototype._createControl.call(this);return r.createDetailCell=function(e){var r=new(t.Vue.extend({data:function(){return{childVN:null}},render:function(e){return e("div",[this.childVN])}}));return r.childVN=o.component.$scopedSlots.default({row:e,item:e.dataItem}),r.$mount(),o._openedComponents.push(r),r.$el},r.disposeDetailCell=function(e){var t=e.detail,r=o._openedComponents;if(t)for(var i=0;i<r.length;i++)if(t===r[i].$el){r[i].$destroy(),r.splice(i,1);break}},r},o.tag="wj-flex-grid-detail",o.className="wijmo.grid.detail.FlexGridDetailProvider",o.parentInCtor=!0,o.classCtor=function(){return r.FlexGridDetailProvider},o}(o.WjComponentBehavior);t.WjFlexGridDetail=l.register()});