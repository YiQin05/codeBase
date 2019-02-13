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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGridDetail=require("wijmo/wijmo.grid.detail");var __glob="undefined"!=typeof window?window:self;const wjcSelfRef=require("wijmo/wijmo.vue2.grid.detail");var wjcSelf=wjcSelfRef||exports;__glob.wijmo=__glob.wijmo||{},__glob.wijmo.vue2=__glob.wijmo.vue2||{},__glob.wijmo.vue2.grid=__glob.wijmo.vue2.grid||{},__glob.wijmo.vue2.grid.detail=wjcSelf;const vue_1=require("vue"),VueModule=require("vue");exports.Vue=vue_1.default||VueModule;class WjFlexGridDetailBehavior extends wjcVue2Base.WjComponentBehavior{constructor(){super(...arguments),this._openedComponents=[]}static render(e){return e("div")}_createControl(){let e=super._createControl();return e.createDetailCell=(e=>{let i=new(exports.Vue.extend({data:function(){return{childVN:null}},render:function(e){return e("div",[this.childVN])}}));return i.childVN=this.component.$scopedSlots.default({row:e,item:e.dataItem}),i.$mount(),this._openedComponents.push(i),i.$el}),e.disposeDetailCell=(e=>{let i=e.detail,r=this._openedComponents;if(i)for(let e=0;e<r.length;e++)if(i===r[e].$el){r[e].$destroy(),r.splice(e,1);break}}),e}}WjFlexGridDetailBehavior.tag="wj-flex-grid-detail",WjFlexGridDetailBehavior.className="wijmo.grid.detail.FlexGridDetailProvider",WjFlexGridDetailBehavior.parentInCtor=!0,WjFlexGridDetailBehavior.classCtor=function(){return wjcGridDetail.FlexGridDetailProvider},exports.WjFlexGridDetail=WjFlexGridDetailBehavior.register();