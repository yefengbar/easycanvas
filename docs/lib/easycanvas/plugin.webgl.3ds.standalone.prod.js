!function(t,e){for(var r in e)t[r]=e[r]}(window,function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=85)}({4:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(o){"object"===("undefined"==typeof window?"undefined":n(window))&&(i=window)}t.exports=i},85:function(t,e,r){t.exports=r(86)},86:function(t,e,r){"use strict";var n,i=(n=r(87))&&n.__esModule?n:{"default":n};function o(t,e){var r=new XMLHttpRequest;r.overrideMimeType&&r.overrideMimeType("text/plain; charset=x-user-defined"),r.onreadystatechange=function(){if(4==r.readyState&&(0==r.status||200==r.status)){var t=new i["default"](!1,!1);t.readFile(r.responseText);for(var n=[],o=0;o<t.meshes.length;o++){for(var s=[],a=[],f=[],u=t.meshes[o],h=0;h<u.points;h++){var c=u.pointL[h];s.push(c[0]),s.push(c[1]),s.push(c[2])}for(h=0;h<u.faces;h++){var l=u.faceL[h],p=l.points[0],d=l.points[1],y=l.points[2];a.push(p),a.push(d),a.push(y)}for(h=0;h<u.texels;h++){var g=u.texelL[h],w=g[0],b=g[1];f.push(w),f.push(1-b)}n.push({vertices:s,indices:a,textures:f,img:u.faceL[0]&&u.faceL[0].material})}e(n,t)}},r.open("GET",t,!0),r.send(null)}var s=function(t){if(t.webgl&&t.webgl._3ds){var e=t.webgl._3ds,r=t.webgl._3dsImg,n=(t.webgl.cache,this);o(e,function(e){n.webgl={},delete t.webgl._3ds,delete t.webgl.cache,e.forEach(function(e){var i=r&&r[e.img];n.add({name:e.img,webgl:Object.assign(window.Easycanvas.webglShapes.custom({vertices:e.vertices,indices:e.indices,img:!(i instanceof Array)&&i,textures:e.textures,colors:i instanceof Array&&i}),t.webgl)})}),n.trigger("webgl-3ds-loaded")})}};"undefined"!=typeof window&&window.Easycanvas?(window.Easycanvas.loader3DS=o,Easycanvas.extend(s)):t.exports={loader3DS:o,classInit:s}},87:function(t,e,r){"use strict";(function(e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n,i,o=function(t,e){this.element=t,this.debug=e!=undefined&&e,this.position=0,this.meshes=[],this.materials={}};!function(t){var i=this,o={ArrayBuffer:"undefined"!=typeof ArrayBuffer,DataView:"undefined"!=typeof DataView&&("getFloat64"in DataView.prototype||"getFloat64"in new DataView(new ArrayBuffer(1))),NodeBuffer:void 0!==e&&"readInt16LE"in e.prototype},s={Int8:1,Int16:2,Int32:4,Uint8:1,Uint16:2,Uint32:4,Float32:4,Float64:8},a={Int8:"Int8",Int16:"Int16",Int32:"Int32",Uint8:"UInt8",Uint16:"UInt16",Uint32:"UInt32",Float32:"Float",Float64:"Double"};(n=function(t,r,f,u){if(!(this instanceof n))throw new Error("jDataView constructor may not be called as a function");if(this.buffer=t=n.wrapBuffer(t),this._isArrayBuffer=o.ArrayBuffer&&t instanceof ArrayBuffer,this._isDataView=o.DataView&&this._isArrayBuffer,this._isNodeBuffer=o.NodeBuffer&&t instanceof e,!(this._isNodeBuffer||this._isArrayBuffer||t instanceof Array))throw new TypeError("jDataView buffer has an incompatible type");this._littleEndian=Boolean(u);var h=this._isArrayBuffer?t.byteLength:t.length;if(r===undefined&&(r=0),this.byteOffset=r,f===undefined&&(f=h-r),this.byteLength=f,!this._isDataView){if("number"!=typeof r)throw new TypeError("jDataView byteOffset is not a number");if("number"!=typeof f)throw new TypeError("jDataView byteLength is not a number");if(r<0)throw new Error("jDataView byteOffset is negative");if(f<0)throw new Error("jDataView byteLength is negative")}if(this._isDataView&&(this._view=new DataView(t,r,f)),this._start=r,r+f>h)throw new Error("jDataView (byteOffset + byteLength) value is out of bounds");if(this._offset=0,this._isDataView)for(var c in s)s.hasOwnProperty(c)&&function(t,e){var r=s[t];e["get"+t]=function(n,i){return i===undefined&&(i=e._littleEndian),n===undefined&&(n=e._offset),e._offset=n+r,e._view["get"+t](n,i)},e["set"+t]=function(n,i,o){o===undefined&&(o=e._littleEndian),n===undefined&&(n=e._offset),e._offset=n+r,e._view["set"+t](n,i,o)}}(c,this);else if(this._isNodeBuffer)for(var c in s)s.hasOwnProperty(c)&&function(t,e){var r=s[t];e["get"+t]=function(n,i){var o;return i===undefined&&(i=e._littleEndian),n===undefined&&(n=e._offset),o="Int8"===t||"Uint8"===t?"read"+a[t]:i?"read"+a[t]+"LE":"read"+a[t]+"BE",e._offset=n+r,e.buffer[o](e._start+n)},e["set"+t]=function(n,i,o){var s;o===undefined&&(o=e._littleEndian),n===undefined&&(n=e._offset),s="Int8"===t||"Uint8"===t?"write"+a[t]:o?"write"+a[t]+"LE":"write"+a[t]+"BE",e._offset=n+r,e.buffer[s](i,e._start+n)}}(c,this);else if(this._isArrayBuffer)for(var c in s)s.hasOwnProperty(c)&&function(t,e){var r=s[t];e["get"+t]=function(n,o){var s,a;return o===undefined&&(o=e._littleEndian),n===undefined&&(n=e._offset),1===r||(e._start+n)%r==0&&o?(s=e.buffer,a=e._start+n,e._offset=n+r):(s=new Uint8Array(e.getBytes(r,n,o)).buffer,a=0),new i[t+"Array"](s,a,1)[0]},e["set"+t]=function(n,o,s){s===undefined&&(s=e._littleEndian),n===undefined&&(n=e._offset);var a=i[t+"Array"];if(1===r||(e._start+n)%r==0&&s)new a(e.buffer,e._start+n,1)[0]=o,e._offset=n+r;else{var f=new Uint8Array(r);new a(f.buffer,0,1)[0]=o,e.setBytes(n,f,s)}}}(c,this);else for(var c in s)s.hasOwnProperty(c)&&function(t,e){var r=s[t];e["get"+t]=function(n,i){if(i===undefined&&(i=e._littleEndian),n===undefined&&(n=e._offset),"number"!=typeof n)throw new TypeError("jDataView byteOffset is not a number");if(n+r>e.byteLength)throw new Error("jDataView (byteOffset + size) value is out of bounds");return e["_get"+t](n,i)},e["set"+t]=function(n,i,o){if(o===undefined&&(o=e._littleEndian),n===undefined&&(n=e._offset),e._offset=n+r,"number"!=typeof n)throw new TypeError("jDataView byteOffset is not a number");if(n+r>e.byteLength)throw new Error("jDataView (byteOffset + size) value is out of bounds");e["_set"+t.replace("Uint","Int")](n,i,o)}}(c,this);for(var c in s)s.hasOwnProperty(c)&&function(t,e){e["write"+t]=function(e,r){this["set"+t](undefined,e,r)}}(c,this)}).wrapBuffer=function(t){switch(r(t)){case"string":t=Array.prototype.map.call(t,function(t){return 255&t.charCodeAt(0)});break;case"number":t={length:t}}if("length"in t&&!(o.NodeBuffer&&t instanceof e||o.ArrayBuffer&&t instanceof ArrayBuffer))if(o.NodeBuffer)t=new e(t);else if(o.ArrayBuffer){t=(t instanceof Uint8Array?t:new Uint8Array(t)).buffer}else{t instanceof Array||(t=Array.prototype.slice.call(t));for(var n=0,i=t.length;n<i;n++)t[n]&=255}return t},n.createBuffer=function(){return n.wrapBuffer(arguments)},n.prototype={compatibility:o,_getBytes:function(t,e,r){var n;if(r===undefined&&(r=this._littleEndian),e===undefined&&(e=this._offset),t===undefined&&(t=this.byteLength-e),"number"!=typeof e)throw new TypeError("jDataView byteOffset is not a number");if(t<0||e+t>this.byteLength)throw new Error("jDataView length or (byteOffset+length) value is out of bounds");return e+=this._start,n=this._isArrayBuffer?new Uint8Array(this.buffer,e,t):this.buffer.slice(e,e+t),!r&&t>1&&(n instanceof Array||(n=Array.prototype.slice.call(n)),n.reverse()),this._offset=e-this._start+t,n},getBytes:function(t,e,r){var n=this._getBytes.apply(this,arguments);return n instanceof Array||(n=Array.prototype.slice.call(n)),n},setBytes:function(t,r,n){var i=r.length;if(n===undefined&&(n=this._littleEndian),t===undefined&&(t=this._offset),"number"!=typeof t)throw new TypeError("jDataView byteOffset is not a number");if(i<0||t+i>this.byteLength)throw new Error("jDataView length or (byteOffset+length) value is out of bounds");if(!n&&i>1&&(r=Array.prototype.slice.call(r).reverse()),t+=this._start,this._isArrayBuffer)new Uint8Array(this.buffer,t,i).set(r);else if(this._isNodeBuffer)new e(r).copy(this.buffer,t);else for(var o=0;o<i;o++)this.buffer[t+o]=r[o];this._offset=t-this._start+i},writeBytes:function(t,e){this.setBytes(undefined,t,e)},getString:function(t,e){return String.fromCharCode.apply(null,this._getBytes(t,e,!0))},setString:function(t,e){this.setBytes(t,Array.prototype.map.call(e,function(t){return 255&t.charCodeAt(0)}),!0)},writeString:function(t){this.setString(undefined,t)},getChar:function(t){return this.getString(1,t)},setChar:function(t,e){this.setString.apply(this,arguments)},writeChar:function(t){this.setChar(undefined,t)},tell:function(){return this._offset},seek:function(t){if("number"!=typeof t)throw new TypeError("jDataView byteOffset is not a number");if(t<0||t>this.byteLength)throw new Error("jDataView byteOffset value is out of bounds");return this._offset=t},slice:function(t,e,r){return r?new n(this.getBytes(e-t,t),undefined,undefined,!0):new n(this.buffer,this._start+t,e-t,this._littleEndian)},_getFloat64:function(t,e){var r=this._getBytes(8,t,e),n=1-2*(r[7]>>7),i=((r[7]<<1&255)<<3|r[6]>>4)-1023,o=(15&r[6])*Math.pow(2,48)+r[5]*Math.pow(2,40)+r[4]*Math.pow(2,32)+r[3]*Math.pow(2,24)+r[2]*Math.pow(2,16)+r[1]*Math.pow(2,8)+r[0];return 1024===i?0!==o?NaN:n*Infinity:-1023===i?n*o*Math.pow(2,-1074):n*(1+o*Math.pow(2,-52))*Math.pow(2,i)},_getFloat32:function(t,e){var r=this._getBytes(4,t,e),n=1-2*(r[3]>>7),i=(r[3]<<1&255|r[2]>>7)-127,o=(127&r[2])<<16|r[1]<<8|r[0];return 128===i?0!==o?NaN:n*Infinity:-127===i?n*o*Math.pow(2,-149):n*(1+o*Math.pow(2,-23))*Math.pow(2,i)},_getInt32:function(t,e){var r=this._getBytes(4,t,e);return r[3]<<24|r[2]<<16|r[1]<<8|r[0]},_getUint32:function(t,e){return this._getInt32(t,e)>>>0},_getInt16:function(t,e){return this._getUint16(t,e)<<16>>16},_getUint16:function(t,e){var r=this._getBytes(2,t,e);return r[1]<<8|r[0]},_getInt8:function(t){return this._getUint8(t)<<24>>24},_getUint8:function(t){return this._getBytes(1,t)[0]},_setBinaryFloat:function(t,e,r,n,i){var o,s,a=e<0?1:0,f=~(-1<<n-1),u=1-f;e<0&&(e=-e),0===e?(o=u-1,s=0):isNaN(e)?(o=f+1,s=1):e===Infinity?(o=f+1,s=0):(o=Math.floor(Math.log(e)/Math.LN2))>u&&o<=f?s=Math.floor((e*Math.pow(2,-o)-1)*Math.pow(2,r)):(s=Math.floor(e*Math.pow(2,r-u)),o=u-1),o+=f;for(var h=[];r>=8;)h.push(s%256),s=Math.floor(s/256),r-=8;for(o=o<<r|s,n+=r;n>=8;)h.push(255&o),o>>>=8,n-=8;h.push(a<<n|o),this.setBytes(t,h,i)},_setFloat32:function(t,e,r){this._setBinaryFloat(t,e,23,8,r)},_setFloat64:function(t,e,r){this._setBinaryFloat(t,e,52,11,r)},_setInt32:function(t,e,r){this.setBytes(t,[255&e,e>>>8&255,e>>>16&255,e>>>24],r)},_setInt16:function(t,e,r){this.setBytes(t,[255&e,e>>>8],r)},_setInt8:function(t,e){this.setBytes(t,[e])}}}(),(i=o.prototype).readFile=function(t){this.position=0,this.meshes=[],this.materials={};var e=new n(t,0,undefined,!0),r=this.readChunk(e),i=0;switch(r.id){case 15786:case 49725:case 19789:for(i=this.nextChunk(e,r);0!=i;){switch(i){case 2:this.mesh_version=this.readDWord(e),this.log("M3D_VERSION "+this.mesh_version);break;case 15677:this.resetPosition(e),this.log("MDATA"),this.readMDATA(e);break;case 45056:default:this.log("Unknown chunk: "+i.toString(16))}i=this.nextChunk(e,r)}break;default:this.log("Unknown main chunk: "+i.toString(16))}this.log("parsed #"+this.meshes.length+" meshes!")},i.readMDATA=function(t){for(var e=this.readChunk(t),r=this.nextChunk(t,e);0!=r;){switch(r){case 15678:this.mesh_version=this.readInt(t),this.log("MESH_VERSION: "+this.mesh_version);break;case 256:this.master_scale=this.readFloat(t),this.log("MASTER_SCALE: "+this.master_scale);break;case 16384:this.resetPosition(t),this.log("NAMED OBJECT"),this.readNamedObject(t);break;case 45055:this.resetPosition(t),this.log("MATERIAL ENTRY"),this.readMaterialEntry(t);break;default:this.log("Unknown MDATA chunk: "+r.toString(16))}r=this.nextChunk(t,e)}},i.readMaterialEntry=function(t){for(var e=this.readChunk(t),r=this.nextChunk(t,e),n=new u;0!=r;){switch(r){case 40960:n.name=this.readString(t,64),this.log(" -> name: "+n.name);break;case 40976:n.ambientColor=this.readColor(t),this.log(" -> ambientColor: "+n.ambientColor.toString(16));break;case 40992:n.diffuseColor=this.readColor(t),this.log(" -> diffuseColor: "+n.diffuseColor.toString(16));break;case 41008:n.specularColor=this.readColor(t),this.log(" -> specularColor: "+n.specularColor.toString(16));break;default:this.log(" -> Unknown material chunk: "+r.toString(16))}r=this.nextChunk(t,e)}this.endChunk(e),this.materials[n.name]=n},i.readColor=function(t){var e=this.readChunk(t),r=0;switch(e.id){case 17:case 18:r=(n=this.readByte(t))<<16|(i=this.readByte(t))<<8|(o=this.readByte(t));break;case 16:case 19:var n=this.readFloat(t),i=this.readFloat(t),o=this.readFloat(t);r=Math.floor(255*n)<<16|Math.floor(255*i)<<8|Math.floor(255*o);break;default:this.log("Unknown color chunk: "+c.toString(16))}return this.endChunk(e),r},i.readMesh=function(t){for(var e,r,n=this.readChunk(t),i=this.nextChunk(t,n),o=new f;0!=i;){switch(i){case 16741:o.color=this.readByte(t),this.log(" -> color: "+o.color);break;case 16656:for(o.points=this.readWord(t),o.pointL=[],this.log(" -> #points: "+o.points+" "+this.position),e=0;e<o.points;e++){var s=[];for(r=0;r<3;r++)s.push(this.readFloat(t));o.pointL.push(s)}break;case 16672:this.resetPosition(t),this.readFaceArray(t,o);break;case 16704:for(o.texels=this.readWord(t),o.texelL=[],this.log(" -> #texels: "+o.texels),e=0;e<o.texels;e++)o.texelL.push([this.readFloat(t),this.readFloat(t)]);break;case 16736:case 16657:case 16752:default:this.log(" -> Unknown mesh chunk: "+i.toString(16))}i=this.nextChunk(t,n)}return this.endChunk(n),o},i.readFaceArray=function(t,e){var r,n=this.readChunk(t);for(e.faces=this.readWord(t),e.faceL=[],this.log(" -> #faces: "+e.faces),r=0;r<e.faces;++r)(s=new a).points=[],s.points.push(this.readWord(t)),s.points.push(this.readWord(t)),s.points.push(this.readWord(t)),s.flags=this.readWord(t),e.faceL.push(s);for(;this.position<n.end;){switch((n=this.readChunk(t)).id){case 16688:this.log(" -> MATERIAL_GROUP"),this.resetPosition(t);var i=this.readMaterialGroup(t),o=i.faceIdxs;for(r=0;r<o.length;r++){var s;(s=e.faceL[o[r]]).material=i.name}break;case 16720:default:this.log(" -> Unknown face array chunk: "+c.toString(16))}this.endChunk(n)}this.endChunk(n)},i.readMaterialGroup=function(t){this.readChunk(t);var e=this.readString(t,64),r=this.readWord(t);this.log(" --\x3e material name: "+e),this.log(" --\x3e num faces: "+r);for(var n=[],i=0;i<r;++i)n.push(this.readWord(t));return{name:e,faceIdxs:n}},i.readNamedObject=function(t){var e=this.readChunk(t),r=this.readString(t,64);this.log(" -> "+r),e.cur=this.position;for(var n=this.nextChunk(t,e);0!=n;){switch(n){case 16640:this.resetPosition(t);var i=this.readMesh(t);this.meshes.push(i);break;default:this.log("Unknown named object chunk: "+n.toString(16))}n=this.nextChunk(t,e)}this.endChunk(e)},i.readChunk=function(t){var e=new s;return e.cur=this.position,e.id=this.readWord(t),e.size=this.readDWord(t),e.end=e.cur+e.size,e.cur+=6,e},i.endChunk=function(t){this.position=t.end},i.nextChunk=function(t,e){if(e.cur>=e.end)return 0;this.position=e.cur;try{var r=this.readChunk(t);return e.cur+=r.size,r.id}catch(n){return this.log("Unable to read chunk at "+this.position),0}},i.resetPosition=function(t,e){this.position-=6},i.readByte=function(t){var e=t.getUint8(this.position);return this.position+=1,e},i.readFloat=function(t){try{var e=t.getFloat32(this.position);return this.position+=4,e}catch(r){this.log(r+" "+this.position+" "+t.byteLength)}},i.readInt=function(t){var e=t.getInt32(this.position);return this.position+=4,e},i.readShort=function(t){var e=t.getInt16(this.position);return this.position+=2,e},i.readDWord=function(t){var e=t.getUint32(this.position);return this.position+=4,e},i.readWord=function(t){var e=t.getUint16(this.position);return this.position+=2,e},i.readString=function(t,e){for(var r="",n=0;n<e;n++){var i=this.readByte(t);if(!i)break;r+=String.fromCharCode(i)}return r},i.log=function(t){this.debug&&(console.log(t),this.element&&(this.element.innerHTML+=t+"<br/>"))};var s=function(){this.cur=0,this.id=0,this.size=0,this.end=0},a=function(){this.flags=0,this.points=[],this.material=""},f=function(){this.next=null,this.matrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this.name="",this.color=0,this.points=0,this.pointL=[],this.flags=0,this.flagL=[],this.texels=0,this.texelL=[],this.faces=0,this.faceL=[]},u=function(){this.name="",this.ambientColor=0,this.diffuseColor=0,this.spectralColor=0};t.exports=o}).call(this,r(88).Buffer)},88:function(t,e,r){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var n=r(89),i=r(90),o=r(91);function s(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=f.prototype:(null===t&&(t=new f(e)),t.length=e),t}function f(t,e,r){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return u(this,t,e,r)}function u(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=r===undefined&&n===undefined?new Uint8Array(e):n===undefined?new Uint8Array(e,r):new Uint8Array(e,r,n);f.TYPED_ARRAY_SUPPORT?(t=e).__proto__=f.prototype:t=l(t,e);return t}(t,e,r,n):"string"==typeof e?function(t,e,r){"string"==typeof r&&""!==r||(r="utf8");if(!f.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,r),i=(t=a(t,n)).write(e,r);i!==n&&(t=t.slice(0,i));return t}(t,e,r):function(t,e){if(f.isBuffer(e)){var r=0|p(e.length);return 0===(t=a(t,r)).length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?a(t,0):l(t,e);if("Buffer"===e.type&&o(e.data))return l(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,e){if(h(e),t=a(t,e<0?0:0|p(e)),!f.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function l(t,e){var r=e.length<0?0:0|p(e.length);t=a(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function d(t,e){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case undefined:return F(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return V(t).length;default:if(n)return F(t).length;e=(""+e).toLowerCase(),n=!0}}function y(t,e,r){var n=!1;if((e===undefined||e<0)&&(e=0),e>this.length)return"";if((r===undefined||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return P(this,e,r);case"utf8":case"utf-8":return R(this,e,r);case"ascii":return C(this,e,r);case"latin1":case"binary":return T(this,e,r);case"base64":return S(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function g(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,i);if("number"==typeof e)return e&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,i){var o,s=1,a=t.length,f=e.length;if(n!==undefined&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,f/=2,r/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var h=-1;for(o=r;o<a;o++)if(u(t,o)===u(e,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(r+f>a&&(r=a-f),o=r;o>=0;o--){for(var c=!0,l=0;l<f;l++)if(u(t,o+l)!==u(e,l)){c=!1;break}if(c)return o}return-1}function _(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[r+s]=a}return s}function v(t,e,r,n){return z(F(e,t.length-r),t,r,n)}function m(t,e,r,n){return z(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function A(t,e,r,n){return m(t,e,r,n)}function E(t,e,r,n){return z(V(e),t,r,n)}function B(t,e,r,n){return z(function(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function S(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function R(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,s,a,f,u=t[i],h=null,c=u>239?4:u>223?3:u>191?2:1;if(i+c<=r)switch(c){case 1:u<128&&(h=u);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&u)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(f=(15&u)<<12|(63&o)<<6|63&s)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],s=t[i+2],a=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(f=(15&u)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var e=t.length;if(e<=U)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=U));return r}(n)}e.Buffer=f,e.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},e.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=t.TYPED_ARRAY_SUPPORT!==undefined?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}(),e.kMaxLength=s(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,e,r){return u(null,t,e,r)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,e,r){return function(t,e,r,n){return h(e),e<=0?a(t,e):r!==undefined?"string"==typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}(null,t,e,r)},f.allocUnsafe=function(t){return c(null,t)},f.allocUnsafeSlow=function(t){return c(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,e){if(!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var r;if(e===undefined)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=f.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var s=t[r];if(!f.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},f.byteLength=d,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?R(this,0,t):y.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,e,r,n,i){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(e===undefined&&(e=0),r===undefined&&(r=t?t.length:0),n===undefined&&(n=0),i===undefined&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),a=Math.min(o,s),u=this.slice(n,i),h=t.slice(e,r),c=0;c<a;++c)if(u[c]!==h[c]){o=u[c],s=h[c];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(e===undefined)n="utf8",r=this.length,e=0;else if(r===undefined&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,n===undefined&&(n="utf8")):(n=r,r=undefined)}var i=this.length-e;if((r===undefined||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return _(this,t,e,r);case"utf8":case"utf-8":return v(this,t,e,r);case"ascii":return m(this,t,e,r);case"latin1":case"binary":return A(this,t,e,r);case"base64":return E(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function C(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function T(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function P(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=j(t[o]);return i}function k(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function I(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function M(t,e,r,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function L(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function x(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function D(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function O(t,e,r,n,o){return o||D(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function Y(t,e,r,n,o){return o||D(t,0,r,8),i.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=e===undefined?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),f.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=f.prototype;else{var i=e-t;r=new f(i,undefined);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},f.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},f.prototype.readUInt8=function(t,e){return e||I(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,e){return e||I(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,e){return e||I(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,e){return e||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,e){return e||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},f.prototype.readInt8=function(t,e){return e||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){e||I(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){e||I(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return e||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return e||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,e){return e||I(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return e||I(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return e||I(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return e||I(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||M(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||M(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):x(this,t,e,!0),e+4},f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):x(this,t,e,!1),e+4},f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);M(this,t,e,r,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);M(this,t,e,r,i-1,-i)}var o=r-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):x(this,t,e,!0),e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):x(this,t,e,!1),e+4},f.prototype.writeFloatLE=function(t,e,r){return O(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return O(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return Y(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return Y(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},f.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(n!==undefined&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=r===undefined?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=f.isBuffer(t)?t:F(new f(t,n).toString()),a=s.length;for(o=0;o<r-e;++o)this[o+e]=s[o%a]}return this};var N=/[^+\/0-9A-Za-z-_]/g;function j(t){return t<16?"0"+t.toString(16):t.toString(16)}function F(t,e){var r;e=e||Infinity;for(var n=t.length,i=null,o=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function V(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(N,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function z(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}}).call(this,r(4))},89:function(t,e,r){"use strict";e.byteLength=function(t){var e=u(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,n=u(t),s=n[0],a=n[1],f=new o(function(t,e,r){return 3*(e+r)/4-r}(0,s,a)),h=0,c=a>0?s-4:s;for(r=0;r<c;r+=4)e=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)],f[h++]=e>>16&255,f[h++]=e>>8&255,f[h++]=255&e;2===a&&(e=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4,f[h++]=255&e);1===a&&(e=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2,f[h++]=e>>8&255,f[h++]=255&e);return f},e.fromByteArray=function(t){for(var e,r=t.length,i=r%3,o=[],s=0,a=r-i;s<a;s+=16383)o.push(h(t,s,s+16383>a?a:s+16383));1===i?(e=t[r-1],o.push(n[e>>2]+n[e<<4&63]+"==")):2===i&&(e=(t[r-2]<<8)+t[r-1],o.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,f=s.length;a<f;++a)n[a]=s[a],i[s.charCodeAt(a)]=a;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function h(t,e,r){for(var i,o,s=[],a=e;a<r;a+=3)i=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},90:function(t,e,r){"use strict";e.read=function(t,e,r,n,i){var o,s,a=8*i-n-1,f=(1<<a)-1,u=f>>1,h=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=a;h>0;o=256*o+t[e+c],c+=l,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+t[e+c],c+=l,h-=8);if(0===o)o=1-u;else{if(o===f)return s?NaN:(p?-1:1)*Infinity;s+=Math.pow(2,n),o-=u}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,a,f,u=8*o-i-1,h=(1<<u)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===Infinity?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),(e+=s+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(s++,f/=2),s+c>=h?(a=0,s=h):s+c>=1?(a=(e*f-1)*Math.pow(2,i),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;t[r+p]=255&s,p+=d,s/=256,u-=8);t[r+p-d]|=128*y}},91:function(t,e,r){"use strict";var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}}}));