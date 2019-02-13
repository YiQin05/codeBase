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
define(["require","exports","wijmo/wijmo.chart","wijmo/wijmo","wijmo/wijmo.chart.render"],function(t,e,n,i,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="undefined"!=typeof window?window:self,l=a||e;o.wijmo=o.wijmo||{},o.wijmo.chart=o.wijmo.chart||{},o.wijmo.chart.render=l;var r=function(){function t(t,e){void 0===e&&(e=!1),this._strokeWidth=1,this._fontSize=null,this._fontFamily=null,this._applyCanvasClip=function(t,e){var n=this._canvasRect[e];n&&(t.beginPath(),t.rect(n.left,n.top,n.width,n.height),t.clip(),t.closePath())},this._applyCanvasStyles=function(t,e,n,i,a){var o,l,r,s=this,p=s._canvas.getContext("2d"),h=s.stroke,f=s.fill,c=s.strokeWidth;e&&void 0!==e.stroke&&(h=e.stroke),e&&void 0!==e.fill&&(f=s._getOpacityColor(e.fill,e["fill-opacity"])),t&&(l=window.getComputedStyle(t),r=t.getBBox()),a?l?(p.fillStyle=l.fill,o=l.fontStyle+" "+l.fontSize+" "+l.fontFamily,p.font=o,p.font.replace(/\"/g,"'")!==o.replace(/\"/g,"'")&&(o=l.fontStyle+" "+l.fontSize+" "+(p.font.split(" ")[1]||"sans-serif"),p.font=o)):s.fontSize?(p.fillStyle=s.textFill,p.font=s.fontSize+" "+(s.fontFamily||"sans-serif")):s._canvasDefaultFont&&(p.fillStyle=s._canvasDefaultFont.textFill,o=s._canvasDefaultFont.fontSize+" "+s._canvasDefaultFont.fontFamily,p.font=o,p.font.replace(/\"/g,"'")!==o.replace(/\"/g,"'")&&(o=s._canvasDefaultFont.fontSize+" "+(p.font.split(" ")[1]||"sans-serif"),p.font=o)):(l&&(h=l.stroke&&"none"!==l.stroke?l.stroke:h,f=l.fill&&"none"!==l.fill?s._getOpacityColor(l.fill,l["fill-opacity"]):f,c=l.strokeWidth?l.strokeWidth:c),"none"!==h&&null!=h&&(this._applyColor("strokeStyle",h,r),p.lineWidth=+c.replace(/px/g,""),p.stroke()),i&&null!=f&&"transparent"!==f&&"none"!==f&&(this._applyColor("fillStyle",f,r),p.fill()))};var i=this;i._element=t,i._canvas=document.createElement("canvas"),i._svgEngine=new n._SvgRenderEngine(t),i._element.appendChild(i._canvas),i._applyCSSStyles=e}return t.prototype.beginRender=function(){var t,e=this,n=e._svgEngine.element,i=e._element;e._applyCSSStyles&&(e._svgEngine.beginRender(),i=n),e._element.appendChild(n),e._canvasRect={},t=window.getComputedStyle(i),e._canvasDefaultFont={fontSize:t.fontSize,fontFamily:t.fontFamily,textFill:t.color}},t.prototype.endRender=function(){this._applyCSSStyles&&this._svgEngine.endRender(),this._svgEngine.element.parentNode.removeChild(this._svgEngine.element)},t.prototype.setViewportSize=function(t,e){var n,i,a=this,o=a._canvas,l=(o.getContext("2d"),a.fill);a._applyCSSStyles&&a._svgEngine.setViewportSize(t,e),o.width=t,o.height=e,n=window.getComputedStyle(a._element).backgroundColor,i=a.stroke,n&&(a.stroke=null,a.fill=n,a.drawRect(0,0,t,e),a.fill=l,a.stroke=i)},Object.defineProperty(t.prototype,"element",{get:function(){return this._canvas},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fill",{get:function(){return this._fill},set:function(t){this._svgEngine.fill=t,this._fill=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._svgEngine.fontSize=t;var e=null==t||isNaN(t)?t:t+"px";this._fontSize=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(t){this._svgEngine.fontFamily=t,this._fontFamily=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stroke",{get:function(){return this._stroke},set:function(t){this._svgEngine.stroke=t,this._stroke=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"strokeWidth",{get:function(){return this._strokeWidth},set:function(t){this._svgEngine.strokeWidth=t,this._strokeWidth=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textFill",{get:function(){return this._textFill},set:function(t){this._svgEngine.textFill=t,this._textFill=t},enumerable:!0,configurable:!0}),t.prototype.addClipRect=function(t,e){t&&e&&(this._applyCSSStyles&&this._svgEngine.addClipRect(t,e),this._canvasRect[e]=t.clone())},t.prototype.drawEllipse=function(t,e,n,i,a,o){var l,r=this._canvas.getContext("2d");return this._applyCSSStyles&&(l=this._svgEngine.drawEllipse(t,e,n,i,a,o)),r.save(),r.beginPath(),r.ellipse?r.ellipse(t,e,n,i,0,0,2*Math.PI):(r.translate(t,e),r.scale(1,i/n),r.translate(-t,-e),r.arc(t,e,n,0,2*Math.PI),r.scale(1,1)),this._applyCanvasStyles(l,o,a,!0),r.restore(),l},t.prototype.drawRect=function(t,e,n,i,a,o,l){var r,s=this._canvas.getContext("2d");return this._applyCSSStyles&&(r=this._svgEngine.drawRect(t,e,n,i,a,o,l)),s.save(),this._applyCanvasClip(s,l),s.beginPath(),s.rect(t,e,n,i),this._applyCanvasStyles(r,o,a,!0),s.restore(),r},t.prototype.drawLine=function(t,e,n,i,a,o){var l,r=this._canvas.getContext("2d");return this._applyCSSStyles&&(l=this._svgEngine.drawLine(t,e,n,i,a,o)),r.save(),r.beginPath(),r.moveTo(t,e),r.lineTo(n,i),this._applyCanvasStyles(l,o,a),r.restore(),l},t.prototype.drawLines=function(t,e,n,i,a){if(t&&e&&0!==t.length&&0!==e.length){var o,l,r=this._canvas.getContext("2d"),s=Math.min(t.length,e.length);for(this._applyCSSStyles&&(o=this._svgEngine.drawLines([0,1],[1,0],n,i,a)),r.save(),this._applyCanvasClip(r,a),r.beginPath(),r.moveTo(t[0],e[0]),l=1;l<s;l++)r.lineTo(t[l],e[l]);return this._applyCanvasStyles(o,i,n),r.restore(),o}},t.prototype.drawSplines=function(t,e,i,a,o){if(t&&e&&0!==t.length&&0!==e.length){var l,r,s=this._canvas.getContext("2d"),p=new n._Spline(t,e).calculate(),h=p.xs,f=p.ys,c=Math.min(h.length,f.length);for(this._applyCSSStyles&&(l=this._svgEngine.drawSplines([0,1],[1,0],i,a,o)),s.save(),this._applyCanvasClip(s,o),s.beginPath(),s.moveTo(h[0],f[0]),r=1;r<c;r++)s.lineTo(h[r],f[r]);return this._applyCanvasStyles(l,a,i),s.restore(),l}},t.prototype.drawPolygon=function(t,e,n,i,a){if(t&&e&&0!==t.length&&0!==e.length){var o,l,r=this._canvas.getContext("2d"),s=Math.min(t.length,e.length);for(this._applyCSSStyles&&(o=this._svgEngine.drawPolygon(t,e,n,i,a)),r.save(),this._applyCanvasClip(r,a),r.beginPath(),r.moveTo(t[0],e[0]),l=1;l<s;l++)r.lineTo(t[l],e[l]);return r.closePath(),this._applyCanvasStyles(o,i,n,!0),r.restore(),o}},t.prototype.drawPieSegment=function(t,e,n,i,a,o,l,r){var s,p=this._canvas.getContext("2d"),h=i,f=i+a;return this._applyCSSStyles&&(s=this._svgEngine.drawPieSegment(t,e,n,i,a,o,l,r)),p.save(),this._applyCanvasClip(p,r),p.beginPath(),p.moveTo(t,e),p.arc(t,e,n,h,f,!1),p.lineTo(t,e),this._applyCanvasStyles(s,l,o,!0),p.restore(),s},t.prototype.drawDonutSegment=function(t,e,n,a,o,l,r,s,p){var h,f,c,y=this._canvas.getContext("2d"),g=o,u=o+l;return this._applyCSSStyles&&(h=this._svgEngine.drawDonutSegment(t,e,n,a,o,l,r,s,p)),f=new i.Point(t,e),f.x+=a*Math.cos(g),f.y+=a*Math.sin(g),c=new i.Point(t,e),c.x+=a*Math.cos(u),c.y+=a*Math.sin(u),y.save(),this._applyCanvasClip(y,p),y.beginPath(),y.moveTo(f.x,f.y),y.arc(t,e,n,g,u,!1),y.lineTo(c.x,c.y),y.arc(t,e,a,u,g,!0),this._applyCanvasStyles(h,s,r,!0),y.restore(),h},t.prototype.drawString=function(t,e,n,i){var a,o=this._canvas.getContext("2d");return this._applyCSSStyles&&(a=this._svgEngine.drawString(t,e,n,i)),o.save(),o.textBaseline="bottom",this._applyCanvasStyles(a,i,n,!0,!0),o.fillText(t,e.x,e.y),o.restore(),a},t.prototype.drawStringRotated=function(t,e,n,i,a,o){var l,r=this._canvas.getContext("2d");r.measureText(t);return this._applyCSSStyles&&(l=this._svgEngine.drawStringRotated(t,e,n,i,a,o)),r.save(),r.textBaseline="bottom",r.translate(n.x,n.y),r.rotate(Math.PI/180*i),r.translate(-n.x,-n.y),this._applyCanvasStyles(l,o,a,!0,!0),r.fillText(t,e.x,e.y),r.restore(),l},t.prototype.measureString=function(t,e,n,a){var o,l=l=this._canvas.getContext("2d");return this._applyCSSStyles?this._svgEngine.measureString(t,e,n,a):(this._applyCanvasStyles(null,null,e,!0,!0),o=l.measureText(t).width,new i.Size(o,1.5*parseInt(l.font)))},t.prototype.startGroup=function(t,e,n){void 0===n&&(n=!1);var i,a=this._canvas.getContext("2d");return this._applyCSSStyles&&(i=this._svgEngine.startGroup(t,e,n)),a.save(),this._applyCanvasClip(a,e),i},t.prototype.endGroup=function(){this._applyCSSStyles&&this._svgEngine.endGroup(),this._canvas.getContext("2d").restore()},t.prototype.drawImage=function(t,e,n,i,a){var o,l=this._canvas.getContext("2d"),r=new Image;return this._applyCSSStyles&&(o=this._svgEngine.drawImage(t,e,n,i,a)),r.onload=function(){l.drawImage(r,e,n,i,a)},r.src=t,o},t.prototype._getOpacityColor=function(t,e){var n=new i.Color(t);return t.indexOf("url")>-1?this.fill:t.indexOf("-")>-1?(this.fill=t,t):(null!=e&&1===n.a&&(n.a=isNaN(e)?1:Number(e)),n.toString())},t.prototype._applyColor=function(t,e,n){var a=s.tryParse(e),o=this._canvas.getContext("2d");if(null!=a)if(i.isString(a)||null==n)o[t]=a;else{var l;if(null!=a.x1)l=a.relative?o.createLinearGradient(n.x+a.x1*n.width,n.y+a.y1*n.height,n.x+a.x2*n.width,n.y+a.y2*n.height):o.createLinearGradient(a.x1,a.y1,a.x2,a.y2);else if(null!=a.r)if(a.relative){var r=n.x+a.cx*n.width,p=n.y+a.cy*n.height,h=a.r*n.width,f=a.r*n.height/h,c=n.x+(null==a.fx?a.cx:a.fx)*n.width,y=n.y+(null==a.fy?a.cy:a.fy)*n.height,g=(null==a.fr?0:a.fr)*n.width,u=(null==a.fr?0:a.fr)*n.height,v=Math.min(g,u);l=o.createRadialGradient(c,y/f,v,r,p/f,h),o.setTransform(1,0,0,f,0,0)}else l=o.createRadialGradient(null==a.fx?a.cx:a.fx,null==a.fy?a.cy:a.fy,a.fr||0,a.cx,a.cy,a.r);a.colors&&a.colors.length>0&&null!=l&&a.colors.forEach(function(t){var e=new i.Color("#000000");null!=t.color&&(e=t.color),null!=t.opacity&&(e.a=t.opacity),l.addColorStop(t.offset,e.toString())}),o[t]=l}},t}();e._CanvasRenderEngine=r;var s=function(){function t(){}return t.tryParse=function(e){if(t.parsedColor[e])return t.parsedColor[e];if(null==e||-1===e.indexOf("-"))return e;var n,a=e.replace(/\s+/g,"").split(/\-/g),o=a[0][0],l=!1,r=a[0].match(/\(\S+\)/)[0].replace(/[\(\\)]/g,"").split(/\,/g);"l"===o||"L"===o?(n={x1:"0",y1:"0",x2:"0",y2:"0",colors:[]},"l"===o&&(l=!0),["x1","y1","x2","y2"].forEach(function(t,e){null!=r[e]&&(n[t]=+r[e])})):"r"!==o&&"R"!==o||(n={cx:"0",cy:"0",r:"0",colors:[]},"r"===o&&(l=!0),["cx","cy","r","fx","fy","fr"].forEach(function(t,e){null!=r[e]&&""!==r[e]&&(n[t]=+r[e])})),n.relative=l,t.parsedColor[e]=n;var s=a.length-1;return a.forEach(function(t,e){t.indexOf(")")>-1&&(t=t.match(/\)\S+/)[0].replace(")",""));var a=t.split(":"),o={color:new i.Color("#000000")};null!=a[0]&&(o.color=i.Color.fromString(a[0])),null!=a[1]?o.offset=+a[1]:o.offset=e/s,null!=a[2]&&(o.opacity=+a[2]),n.colors.push(o)}),n},t.parsedColor={},t}();if(n.FlexChartBase&&n.FlexChartBase.prototype&&n.FlexChartBase.prototype._exportToImage){var p=n.FlexChartBase.prototype._exportToImage;n.FlexChartBase.prototype._exportToImage=function(t,e){if("svg"!==t){var n,a,o=new r(this.hostElement,!0),l=this.rendered;this.rendered=new i.Event,this._render(o,!1),(a=o.element).parentNode.removeChild(a),n=a.toDataURL("image/"+t),e.call(null,n),a=null,o=null,this.rendered=l}else p.call(this,t,e)}}});