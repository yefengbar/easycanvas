!function(l,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var s=o();for(var r in s)("object"==typeof exports?exports:l)[r]=s[r]}}(this,function(){return function(l){function o(r){if(s[r])return s[r].exports;var c=s[r]={exports:{},id:r,loaded:!1};return l[r].call(c.exports,c,c.exports,o),c.loaded=!0,c.exports}var s={};return o.m=l,o.c=s,o.p="",o(0)}({0:function(l,o,s){l.exports=s(30)},30:function(l,o){"use strict";var s=Object.assign||function(l){for(var o=1;arguments.length>o;o++){var s=arguments[o];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(l[r]=s[r])}return l},r="undefined"!=typeof window,c=void 0,t=void 0,e={loose:function(l){l.$scroll.touching=!1},looper:function(l){if(l.$scroll&&l.$scroll.$scrolling){if(Math.abs(l.$scroll.speedX)>1?l.$scroll.speedX*=l.scroll.smooth||.8:l.$scroll.speedX=0,Math.abs(l.$scroll.speedY)>1?l.$scroll.speedY*=l.scroll.smooth||.8:l.$scroll.speedY=0,Math.abs(l.$scroll.speedX)<=2&&Math.abs(l.$scroll.speedY)<=2)return void(l.$scroll.$scrolling=!1);if(!l.$scroll.touching){l.scroll.scrollY-=l.$scroll.speedY,l.scroll.scrollX-=l.$scroll.speedX;var o=c.utils.funcOrValue(l.scroll.minScrollX,l),s=c.utils.funcOrValue(l.scroll.maxScrollX,l),r=c.utils.funcOrValue(l.scroll.minScrollY,l),t=c.utils.funcOrValue(l.scroll.maxScrollY,l);!isNaN(r)&&r>l.scroll.scrollY?l.scroll.scrollY=r:!isNaN(t)&&l.scroll.scrollY>t&&(l.scroll.scrollY=t),!isNaN(o)&&o>l.scroll.scrollX?l.scroll.scrollX=o:!isNaN(s)&&l.scroll.scrollX>s&&(l.scroll.scrollX=s)}}},touch:function(l,o){if(!l.scroll.scrollable)return!1;var s=Date.now();if(l.$scroll.touching){l.$scroll.$scrolling=!0;var r=l.$scroll.startPos.x-o.canvasX,c=l.$scroll.startPos.y-o.canvasY,t=s-l.$scroll.touching;if(l.$scroll.touching=s,(l.scroll.minScrollX>l.scroll.scrollX+r||l.scroll.scrollX+r>l.scroll.maxScrollX)&&(l.scroll.flexibleX?r>>=3:r=0),(l.scroll.minScrollY>l.scroll.scrollY+c||l.scroll.scrollY+c>l.scroll.maxScrollY)&&(l.scroll.flexibleY?c>>=3:c=0),Math.abs(r)>=1&&t>1&&(l.$scroll.speedX=3*(o.canvasX-l.$scroll.startPos.x),l.scroll.scrollX+=r),Math.abs(c)>=1&&t>1&&(l.$scroll.speedY=3*(o.canvasY-l.$scroll.startPos.y),l.scroll.scrollY+=c),l.$scroll.startPos.x=o.canvasX,l.$scroll.startPos.y=o.canvasY,Math.abs(r)>Math.abs(c)+1)return 1;if(Math.abs(r)<Math.abs(c)-1)return 2}else l.$scroll.touching=s,l.$scroll.quickTouch=s,l.$scroll.startPos.x=o.canvasX,l.$scroll.startPos.y=o.canvasY,l.$scroll.speedX=0,l.$scroll.speedY=0},wheel:function(l,o){return!!l.scroll.scrollable&&(l.$scroll.$scrolling=!0,l.$scroll.speedX=o.event.wheelDeltaX,l.$scroll.speedY=o.event.wheelDeltaY,void o.stopPropagation())}},n=function(l){var o=!1,r=l||{};r.scroll=s({scrollX:0,scrollY:0,scrollable:!0,minScrollX:0,maxScrollX:0,minScrollY:0,maxScrollY:0,propagationX:!1,propagationY:!1},l.scroll);var n=function l(){o?i.scroll.scrollY=o():i.off("ticked",l)},a=!1;r.events=s({touchstart:function(l){e.loose(this),a=!0,t=!1,e.touch(this,l),i.scroll.propagationX||i.scroll.propagationY||l.stopPropagation()},touchmove:function(l){if(a&&(!t||this===t)){var o=e.touch(this,l);1===o&&i.scroll.propagationY?(l.stopPropagation(),t=this):2===o&&i.scroll.propagationX&&(l.stopPropagation(),t=this)}},mousewheel:function(l){a=!0,e.wheel(this,l),l.stopPropagation()},touchend:function(){a=!1,e.loose(this)},mouseup:function(){a=!1,e.loose(this)}},r.events||{});var i=new c.class.sprite(r);i.on("ticked",function(){e.looper(i)}),i.on("scrollTo",function(l,s){o=c.transition.pendulum(i.scroll.scrollY,l,2*(s||200),{cycle:.5}).then(function(){o=!1}),i.on("ticked",n)}),i.$scroll={speedX:0,speedY:0,touching:!1,startPos:{}};var u=i.add({name:"scrolling-element",style:{tx:function(){return-this.$parent.scroll.scrollX},ty:function(){return-this.$parent.scroll.scrollY}}});return i.add=u.add.bind(u),i.clear=u.clear.bind(u),i.getChildren=function(){return u.children},i},a=function(l,o){return c=l,o&&(l.class[o]=n),n};r&&window.Easycanvas?(c=Easycanvas,Easycanvas.class.scroll=n):l.exports=a}})});