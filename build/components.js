!function(e,l){if("object"==typeof exports&&"object"==typeof module)module.exports=l();else if("function"==typeof define&&define.amd)define([],l);else{var o=l();for(var t in o)("object"==typeof exports?exports:e)[t]=o[t]}}(this,function(){return function(e){function l(t){if(o[t])return o[t].exports;var s=o[t]={exports:{},id:t,loaded:!1};return e[t].call(s.exports,s,s.exports,l),s.loaded=!0,s.exports}var o={};return l.m=e,l.c=o,l.p="",l(0)}({0:function(e,l,o){e.exports=o(34)},14:function(e,l){"use strict";var o={},t=function(e,l){var t=e+JSON.stringify(l);if(o[t])return o[t];var s;l.padding?(s=l.padding.split(" "),s=s.map(function(e){return parseInt(e)}),s[1]=+(s[1]||s[0]),s[2]=+(s[2]||s[0]),s[3]=+(s[3]||s[1])):s=[0,0,0,0];var r=l.minWidth||l.width||(l.size||16)*e.length+s[1]+s[3]+100,n=(l.size||16)*Math.round(e.length)/r*(l.lineHeight||l.size)+s[0]+s[2]+100,i=document.createElement("canvas");i.width=r,i.height=n;var c=i.getContext("2d");window.tempCanvas=i,window.tempCtx=c,c.textBaseline="middle",c.font=l.size+"px "+(l.family||"serif"),c.fillStyle=l.color||"#000",c.textAlign=l.textAlign||"left";for(var a=0,u=l.lineHeight?(l.lineHeight-l.size)/2:0,p=0,d=1,f=0;;){var h=c.measureText(e.slice(p,d)).width;if(h>l.width&&" "!==e[d]){if("ellipsis"===l.overflow){d-=2,c.fillText(e.slice(p,d)+"...",a,u+l.size/2),u+=l.size+(l.lineHeight?(l.lineHeight-l.size)/2:0),f=l.width-s[1]-s[3];break}if(1>=d-p){console.error("Width not enough.");break}d-=1,c.fillText(e.slice(p,d),a,u+l.size/2),p=d," "===e[p]&&p++,d=p+1,u+=l.size+(l.lineHeight?(l.lineHeight-l.size)/2:10)}else{if(d>e.length-1){h>f&&(f=h),c.fillText(e.slice(p,d),a,u+l.size/2),u+=l.size+(l.lineHeight?(l.lineHeight-l.size)/2:0);break}h>f&&(f=h),d++}}u+=Math.floor(.1*l.size);var v=document.createElement("canvas");v.width=Math.max(f+s[1]+s[3],l.minWidth||0),v.height=u+s[0]+s[2];var g=v.getContext("2d");if(l.backgroundColor&&(g.fillStyle=l.backgroundColor,g.fillRect(0,0,v.width,v.height)),g.drawImage(i,(v.width-f)/2,s[0]),l.border){var m=l.border.split(" ");g.beginPath(),g.moveTo(0,0),g.lineWidth=parseInt(m[0]),g.strokeStyle=m[2]||m[1],g.lineTo(v.width,0),g.lineTo(v.width,v.height),g.lineTo(0,v.height),g.lineTo(0,0),g.stroke()}return o[t]=v,v};e.exports=t},34:function(e,l,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o(35),r=t(s),n=o(36),i=t(n),c=o(37),a=t(c);e.exports={button:r.default,scroll:i.default,text:a.default}},35:function(e,l,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var l=1;arguments.length>l;l++){var o=arguments[l];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r=o(14),n=t(r),i="undefined"!=typeof window,c={padding:0,width:300,family:'"Helvetica Neue",Helvetica,Arial,sans-serif'},a=void 0,u=function(e){var l=void 0;e.props=e.props||{};var o=s(c,{minWidth:e.style.tw,lineHeight:e.style.th,padding:0},e.props.normal),t=s({},o,e.props.hovered),r=s({},o,e.props.pressed),i=(0,n.default)(e.props.text||"",o),u=e.props.hovered&&(0,n.default)(e.props.text||"",t),p=e.props.pressed&&(0,n.default)(e.props.text||"",r),d={};return e.events=e.events||{},d.touchmove=d.mousemove=function(){l.content.img=u||i},d.touchstart=d.mousedown=function(){l.content.img=p||u||i},d.touchend=d.touchout=d.mouseout=function(){l.content.img=i},d.mouseup=function(){l.content.img=u||i},d.click=function(o){e.events.click&&e.events.click.call(l,o)},l=new a.class.sprite({name:e.name||"button",content:{img:i},style:e.style,props:e.props,events:d,hooks:e.hooks})},p=function(e,l){return a=e,l&&(e.class[l]=u),u};i&&window.Easycanvas?(a=Easycanvas,Easycanvas.class.button=u):e.exports=p},36:function(e,l){"use strict";var o=Object.assign||function(e){for(var l=1;arguments.length>l;l++){var o=arguments[l];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},t="undefined"!=typeof window,s=window.devicePixelRatio||1,r=void 0,n=void 0,i={loose:function(e){e.$scroll.touching=!1},looper:function(e){if(e.$scroll&&e.$scroll.$scrolling){if(Math.abs(e.$scroll.speedX)>1?e.$scroll.speedX*=e.scroll.smooth||.8:e.$scroll.speedX=0,Math.abs(e.$scroll.speedY)>1?e.$scroll.speedY*=e.scroll.smooth||.8:e.$scroll.speedY=0,Math.abs(e.$scroll.speedX)<=2&&Math.abs(e.$scroll.speedY)<=2)return void(e.$scroll.$scrolling=!1);if(!e.$scroll.touching){e.scroll.scrollY-=e.$scroll.speedY,e.scroll.scrollX-=e.$scroll.speedX;var l=r.utils.funcOrValue(e.scroll.minScrollX,e),o=r.utils.funcOrValue(e.scroll.maxScrollX,e),t=r.utils.funcOrValue(e.scroll.minScrollY,e),s=r.utils.funcOrValue(e.scroll.maxScrollY,e);!isNaN(t)&&t>e.scroll.scrollY?e.scroll.scrollY=t:!isNaN(s)&&e.scroll.scrollY>s&&(e.scroll.scrollY=s),!isNaN(l)&&l>e.scroll.scrollX?e.scroll.scrollX=l:!isNaN(o)&&e.scroll.scrollX>o&&(e.scroll.scrollX=o)}}},touch:function(e,l){if(!e.scroll.scrollable)return!1;var o=Date.now();if(e.$scroll.touching){e.$scroll.$scrolling=!0;var t=e.$scroll.startPos.x-l.canvasX,r=e.$scroll.startPos.y-l.canvasY,n=o-e.$scroll.touching;if(e.$scroll.touching=o,(e.scroll.minScrollX>e.scroll.scrollX+t||e.scroll.scrollX+t>e.scroll.maxScrollX)&&(e.scroll.flexibleX?t>>=3:t=0),(e.scroll.minScrollY>e.scroll.scrollY+r||e.scroll.scrollY+r>e.scroll.maxScrollY)&&(e.scroll.flexibleY?r>>=3:r=0),Math.abs(t)>=1&&n>1){var i=6*(l.canvasX-e.$scroll.startPos.x)/s;e.$scroll.speedY=Math.abs(i/2)>Math.abs(e.$scroll.speedX)?i:e.$scroll.speedX,e.scroll.scrollX+=t}if(Math.abs(r)>=1&&n>1){var c=6*(l.canvasY-e.$scroll.startPos.y)/s;e.$scroll.speedY=Math.abs(c/2)>Math.abs(e.$scroll.speedY)?c:e.$scroll.speedY,e.scroll.scrollY+=r}if(e.$scroll.startPos.x=l.canvasX,e.$scroll.startPos.y=l.canvasY,Math.abs(t)>Math.abs(r)+1)return 1;if(Math.abs(t)<Math.abs(r)-1)return 2}else e.$scroll.touching=o,e.$scroll.quickTouch=o,e.$scroll.startPos.x=l.canvasX,e.$scroll.startPos.y=l.canvasY,e.$scroll.speedX=0,e.$scroll.speedY=0},wheel:function(e,l){return!!e.scroll.scrollable&&(e.$scroll.$scrolling=!0,e.$scroll.speedX=l.event.wheelDeltaX,e.$scroll.speedY=l.event.wheelDeltaY,void l.stopPropagation())}},c=function(e){var l=!1,t=e||{};t.scroll=o({scrollX:0,scrollY:0,scrollable:!0,minScrollX:0,maxScrollX:0,minScrollY:0,maxScrollY:0,propagationX:!1,propagationY:!1},e.scroll);var s=function e(){l?a.scroll.scrollY=l():a.off("ticked",e)},c=!1;t.events=o({touchstart:function(e){i.loose(this),c=!0,n=!1,i.touch(this,e),a.scroll.propagationX||a.scroll.propagationY||e.stopPropagation()},touchmove:function(e){if(c&&(!n||this===n)){var l=i.touch(this,e);1===l&&a.scroll.propagationY?(e.stopPropagation(),n=this):2===l&&a.scroll.propagationX&&(e.stopPropagation(),n=this)}},mousewheel:function(e){c=!0,i.wheel(this,e),e.stopPropagation()},touchend:function(){c=!1,i.loose(this)},mouseup:function(){c=!1,i.loose(this)}},t.events||{}),t.scroll.capture&&(t.events.interceptor=function(e){return a.events[e.type]?(a.events[e.type].call(a,e),!1):e});var a=new r.class.sprite(t);a.on("ticked",function(){i.looper(a)}),a.on("scrollTo",function(e,o,t){l=r.transition.pendulum(a.scroll.scrollY,e,2*(o||200),{cycle:.5}).then(function(){l=!1,t&&t()}),a.on("ticked",s)}),a.$scroll={speedX:0,speedY:0,touching:!1,startPos:{}};var u=a.add({name:"scrolling-element",style:{tx:function(){return-this.$parent.scroll.scrollX},ty:function(){return-this.$parent.scroll.scrollY}}});return a.add=u.add.bind(u),a.clear=u.clear.bind(u),a.getChildren=function(){return u.children},a},a=function(e,l){return r=e,l&&(e.class[l]=c),c};t&&window.Easycanvas?(r=Easycanvas,Easycanvas.class.scroll=c):e.exports=a},37:function(e,l,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var l=1;arguments.length>l;l++){var o=arguments[l];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r=o(14),n=t(r),i="undefined"!=typeof window,c={padding:0,width:300,lineHeight:100,height:100,family:'"Helvetica Neue",Helvetica,Arial,sans-serif'},a=void 0,u=function(e){var l=void 0;return l=new a.class.sprite({name:e.name||"text",content:{img:(0,n.default)(e.content.text,s({},c,{lineHeight:e.props.size},e.props))},style:e.style,events:e.events,hooks:e.hooks})},p=function(e,l){return a=e,l&&(e.class[l]=u),u};i&&window.Easycanvas?(a=Easycanvas,Easycanvas.class.text=u):e.exports=p}})});