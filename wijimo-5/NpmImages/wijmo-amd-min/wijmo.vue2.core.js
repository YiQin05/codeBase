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
define(["require","exports","wijmo/wijmo","wijmo/wijmo.vue2.core","vue","vue"],function(e,o,i,n,u,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t="undefined"!=typeof window?window:self,c=n||o;t.wijmo=t.wijmo||{},t.wijmo.vue2=t.wijmo.vue2||{},t.wijmo.vue2.core=c,o.Vue=u.default||r,o.WjInclude=o.Vue.component("wj-include",{render:function(e){return e("div")},props:["src"],mounted:function(){var e=this;i.httpRequest(this.src,{success:function(o){e.$el.innerHTML=o.response}})}}),o.WjFormat=o.Vue.filter("wj-format",function(e,o){return i.Globalize.format(e,o)})});