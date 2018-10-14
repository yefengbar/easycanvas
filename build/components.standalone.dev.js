(function e(l, r) {
    if (typeof exports === "object" && typeof module === "object") module.exports = r(); else if (typeof define === "function" && define.amd) define([], r); else {
        var t = r();
        for (var s in t) (typeof exports === "object" ? exports : l)[s] = t[s];
    }
})(this, function() {
    return function(e) {
        var l = {};
        function r(t) {
            if (l[t]) return l[t].exports;
            var s = l[t] = {
                exports: {},
                id: t,
                loaded: false
            };
            e[t].call(s.exports, s, s.exports, r);
            s.loaded = true;
            return s.exports;
        }
        r.m = e;
        r.c = l;
        r.p = "";
        return r(0);
    }({
        0: function(e, l, r) {
            e.exports = r(34);
        },
        14: function(e, l) {
            "use strict";
            var r = {};
            var t = function e(l, t) {
                var s = l + JSON.stringify(t);
                if (r[s]) {
                    return r[s];
                }
                var o;
                if (t.padding) {
                    o = t.padding.split(" ");
                    o = o.map(function(e) {
                        return parseInt(e);
                    });
                    o[1] = Number(o[1] || o[0]);
                    o[2] = Number(o[2] || o[0]);
                    o[3] = Number(o[3] || o[1]);
                } else {
                    o = [ 0, 0, 0, 0 ];
                }
                var n = t.minWidth || t.width || (t.size || 16) * l.length + o[1] + o[3] + 100;
                var i = (t.size || 16) * Math.round(l.length) / n * (t.lineHeight || t.size) + o[0] + o[2] + 100;
                var a = document.createElement("canvas");
                a.width = n;
                a.height = i;
                var c = a.getContext("2d");
                window.tempCanvas = a;
                window.tempCtx = c;
                c.textBaseline = "middle";
                c.font = t.size + "px " + (t.family || "serif");
                c.fillStyle = t.color || "#000";
                c.textAlign = t.textAlign || "left";
                var u = 0;
                var f = t.lineHeight ? (t.lineHeight - t.size) / 2 : 0;
                var v = 0;
                var p = 1;
                var d = false;
                var h = 0;
                while (true) {
                    var g = c.measureText(l.slice(v, p)).width;
                    if (g > t.width && l[p] !== " ") {
                        if (t.overflow === "ellipsis") {
                            p -= 2;
                            c.fillText(l.slice(v, p) + "...", u, f + t.size / 2);
                            f += t.size + (t.lineHeight ? (t.lineHeight - t.size) / 2 : 0);
                            h = t.width - o[1] - o[3];
                            break;
                        } else {
                            if (p - v <= 1) {
                                console.error("Width not enough.");
                                break;
                            }
                            p -= 1;
                            c.fillText(l.slice(v, p), u, f + t.size / 2);
                            v = p;
                            if (l[v] === " ") v++;
                            p = v + 1;
                            f += t.size + (t.lineHeight ? (t.lineHeight - t.size) / 2 : 10);
                        }
                    } else {
                        if (p > l.length - 1) {
                            if (g > h) h = g;
                            c.fillText(l.slice(v, p), u, f + t.size / 2);
                            f += t.size + (t.lineHeight ? (t.lineHeight - t.size) / 2 : 0);
                            break;
                        }
                        if (g > h) h = g;
                        p++;
                    }
                }
                f += Math.floor(t.size * .1);
                var m = document.createElement("canvas");
                m.width = Math.max(h + o[1] + o[3], t.minWidth || 0);
                m.height = f + o[0] + o[2];
                var w = m.getContext("2d");
                if (t.backgroundColor) {
                    w.fillStyle = t.backgroundColor;
                    w.fillRect(0, 0, m.width, m.height);
                }
                w.drawImage(a, (m.width - h) / 2, o[0]);
                if (t.border) {
                    var y = t.border.split(" ");
                    w.beginPath();
                    w.moveTo(0, 0);
                    w.lineWidth = parseInt(y[0]);
                    w.strokeStyle = y[2] || y[1];
                    w.lineTo(m.width, 0);
                    w.lineTo(m.width, m.height);
                    w.lineTo(0, m.height);
                    w.lineTo(0, 0);
                    w.stroke();
                }
                r[s] = m;
                return m;
            };
            e.exports = t;
        },
        34: function(e, l, r) {
            "use strict";
            var t = r(35);
            var s = c(t);
            var o = r(36);
            var n = c(o);
            var i = r(37);
            var a = c(i);
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e.exports = {
                button: s.default,
                scroll: n.default,
                text: a.default
            };
        },
        35: function(e, l, r) {
            "use strict";
            var t = Object.assign || function(e) {
                for (var l = 1; l < arguments.length; l++) {
                    var r = arguments[l];
                    for (var t in r) {
                        if (Object.prototype.hasOwnProperty.call(r, t)) {
                            e[t] = r[t];
                        }
                    }
                }
                return e;
            };
            var s = r(14);
            var o = n(s);
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var i = typeof window !== "undefined";
            var a = {
                padding: 0,
                width: 300,
                family: '"Helvetica Neue",Helvetica,Arial,sans-serif'
            };
            var c = void 0;
            var u = function e(l) {
                var r = void 0;
                var s = l || {};
                l.props = l.props || {};
                var n = t(a, {
                    minWidth: l.style.tw,
                    lineHeight: l.style.th,
                    padding: 0
                }, l.props.normal);
                var i = t({}, n, l.props.hovered);
                var u = t({}, n, l.props.pressed);
                var f = (0, o.default)(l.props.text || "", n);
                var v = l.props.hovered && (0, o.default)(l.props.text || "", i);
                var p = l.props.pressed && (0, o.default)(l.props.text || "", u);
                var d = {};
                l.events = l.events || {};
                d.touchmove = d.mousemove = function() {
                    r.content.img = v || f;
                };
                d.touchstart = d.mousedown = function() {
                    r.content.img = p || v || f;
                };
                d.touchend = d.touchout = d.mouseout = function() {
                    r.content.img = f;
                };
                d.mouseup = function() {
                    r.content.img = v || f;
                };
                d.click = function(e) {
                    l.events.click && l.events.click.call(r, e);
                };
                r = new c.class.sprite({
                    name: l.name || "button",
                    content: {
                        img: f
                    },
                    style: l.style,
                    props: l.props,
                    events: d,
                    hooks: l.hooks
                });
                return r;
            };
            var f = function e(l, r) {
                c = l;
                if (r) {
                    l.class[r] = u;
                }
                return u;
            };
            if (i && window.Easycanvas) {
                c = Easycanvas;
                Easycanvas.class.button = u;
            } else {
                e.exports = f;
            }
        },
        36: function(e, l) {
            "use strict";
            var r = Object.assign || function(e) {
                for (var l = 1; l < arguments.length; l++) {
                    var r = arguments[l];
                    for (var t in r) {
                        if (Object.prototype.hasOwnProperty.call(r, t)) {
                            e[t] = r[t];
                        }
                    }
                }
                return e;
            };
            var t = typeof window !== "undefined";
            var s = window.devicePixelRatio || 1;
            var o = void 0;
            var n = void 0;
            var i = {
                loose: function e(l) {
                    l.$scroll.touching = false;
                },
                looper: function e(l) {
                    if (!l.$scroll || !l.$scroll.$scrolling) return;
                    if (Math.abs(l.$scroll.speedX) > 1) {
                        l.$scroll.speedX *= l.scroll.smooth || .8;
                    } else {
                        l.$scroll.speedX = 0;
                    }
                    if (Math.abs(l.$scroll.speedY) > 1) {
                        l.$scroll.speedY *= l.scroll.smooth || .8;
                    } else {
                        l.$scroll.speedY = 0;
                    }
                    if (Math.abs(l.$scroll.speedX) <= 2 && Math.abs(l.$scroll.speedY) <= 2) {
                        l.$scroll.$scrolling = false;
                        return;
                    }
                    if (l.$scroll.touching) return;
                    l.scroll.scrollY -= l.$scroll.speedY;
                    l.scroll.scrollX -= l.$scroll.speedX;
                    var r = o.utils.funcOrValue(l.scroll.minScrollX, l);
                    var t = o.utils.funcOrValue(l.scroll.maxScrollX, l);
                    var s = o.utils.funcOrValue(l.scroll.minScrollY, l);
                    var n = o.utils.funcOrValue(l.scroll.maxScrollY, l);
                    if (!isNaN(s) && l.scroll.scrollY < s) {
                        l.scroll.scrollY = s;
                    } else if (!isNaN(n) && l.scroll.scrollY > n) {
                        l.scroll.scrollY = n;
                    }
                    if (!isNaN(r) && l.scroll.scrollX < r) {
                        l.scroll.scrollX = r;
                    } else if (!isNaN(t) && l.scroll.scrollX > t) {
                        l.scroll.scrollX = t;
                    }
                },
                touch: function e(l, r) {
                    var t = Date.now();
                    if (!l.$scroll.touching) {
                        l.$scroll.touching = t;
                        l.$scroll.quickTouch = t;
                        l.$scroll.startPos.x = r.canvasX;
                        l.$scroll.startPos.y = r.canvasY;
                        l.$scroll.speedX = 0;
                        l.$scroll.speedY = 0;
                    } else {
                        l.$scroll.$scrolling = true;
                        var n = l.$scroll.startPos.x - r.canvasX;
                        var i = l.$scroll.startPos.y - r.canvasY;
                        var a = t - l.$scroll.touching;
                        l.$scroll.touching = t;
                        var c = o.utils.funcOrValue(l.scroll.minScrollX, l);
                        var u = o.utils.funcOrValue(l.scroll.maxScrollX, l);
                        var f = o.utils.funcOrValue(l.scroll.minScrollY, l);
                        var v = o.utils.funcOrValue(l.scroll.maxScrollY, l);
                        if (l.scroll.scrollX + n < c || l.scroll.scrollX + n > u) {
                            if (l.scroll.flexible || l.scroll.flexibleX) n >>= 3; else n = 0;
                        }
                        if (l.scroll.scrollY + i < f || l.scroll.scrollY + i > v) {
                            if (l.scroll.flexible || l.scroll.flexibleY) i >>= 3; else i = 0;
                        }
                        if (Math.abs(n) >= 1 && a > 1) {
                            var p = (r.canvasX - l.$scroll.startPos.x) * 6 / s;
                            l.$scroll.speedY = Math.abs(p / 2) > Math.abs(l.$scroll.speedX) ? p : l.$scroll.speedX;
                            l.scroll.scrollX += n;
                        }
                        if (Math.abs(i) >= 1 && a > 1) {
                            var d = (r.canvasY - l.$scroll.startPos.y) * 6 / s;
                            l.$scroll.speedY = Math.abs(d / 2) > Math.abs(l.$scroll.speedY) ? d : l.$scroll.speedY;
                            l.scroll.scrollY += i;
                        }
                        l.$scroll.startPos.x = r.canvasX;
                        l.$scroll.startPos.y = r.canvasY;
                        if (Math.abs(n) > Math.abs(i) + 1) return 1; else if (Math.abs(n) < Math.abs(i) - 1) return 2;
                    }
                },
                wheel: function e(l, r) {
                    if (!o.utils.funcOrValue(l.scroll.scrollableY, l)) return false;
                    l.$scroll.$scrolling = true;
                    l.$scroll.speedX = r.event.wheelDeltaX;
                    l.$scroll.speedY = r.event.wheelDeltaY;
                    r.stopPropagation();
                }
            };
            var a = function e(l) {
                var t = false;
                var s = l || {};
                s.scroll = r({
                    scrollX: 0,
                    scrollY: 0,
                    scrollableX: function e() {
                        return this.style.overflowX === "scroll";
                    },
                    scrollableY: function e() {
                        return this.style.overflowY === "scroll";
                    },
                    minScrollX: 0,
                    maxScrollX: function e() {
                        var l = this;
                        var r = 0;
                        this.getChildren().forEach(function(e) {
                            var t = e.getSelfStyle("tx") + e.getOuterRect().tw - l.getStyle("tw");
                            if (t > r) r = t;
                        });
                        return r;
                    },
                    minScrollY: 0,
                    maxScrollY: function e() {
                        var l = this;
                        var r = 0;
                        this.getChildren().forEach(function(e) {
                            var t = e.getSelfStyle("ty") + e.getOuterRect().th - l.getStyle("th");
                            if (t > r) r = t;
                        });
                        return r;
                    },
                    propagationX: false,
                    propagationY: false
                }, l.scroll);
                s.style.overflow = "hidden";
                var a = function e() {
                    if (t) {
                        u.scroll.scrollY = t();
                    } else {
                        u.off("ticked", e);
                    }
                };
                var c = false;
                s.events = r({
                    touchstart: function e(l) {
                        i.loose(this);
                        c = true;
                        n = false;
                        i.touch(this, l);
                        if (!u.scroll.propagationX && !u.scroll.propagationY) {
                            l.stopPropagation();
                        }
                    },
                    touchmove: function e(l) {
                        if (!c) return;
                        if (n && this !== n) {
                            return;
                        }
                        var r = i.touch(this, l);
                        if (r === 1 && u.scroll.propagationY) {
                            l.stopPropagation();
                            n = this;
                        } else if (r === 2 && u.scroll.propagationX) {
                            l.stopPropagation();
                            n = this;
                        }
                    },
                    mousewheel: function e(l) {
                        c = true;
                        i.wheel(this, l);
                        l.stopPropagation();
                    },
                    touchend: function e() {
                        c = false;
                        i.loose(this);
                    },
                    mouseup: function e() {
                        c = false;
                        i.loose(this);
                    }
                }, s.events || {});
                if (s.scroll.capture) {
                    s.events.interceptor = function(e) {
                        if (u.events[e.type]) {
                            u.events[e.type].call(u, e);
                            return false;
                        }
                        return e;
                    };
                }
                var u = new o.class.sprite(s);
                u.on("ticked", function() {
                    i.looper(u);
                });
                u.on("scrollTo", function(e, l, r) {
                    t = o.transition.pendulum(u.scroll.scrollY, e, (l || 200) * 2, {
                        cycle: .5
                    }).then(function() {
                        t = false;
                        r && r();
                    });
                    u.on("ticked", a);
                });
                u.$scroll = {
                    speedX: 0,
                    speedY: 0,
                    touching: false,
                    startPos: {}
                };
                var f = u.add({
                    name: "scrolling-element",
                    style: {
                        tx: function e() {
                            return -this.$parent.scroll.scrollX;
                        },
                        ty: function e() {
                            return -this.$parent.scroll.scrollY;
                        }
                    }
                });
                u.add = f.add.bind(f);
                u.clear = f.clear.bind(f);
                u.getChildren = function() {
                    return f.children;
                };
                return u;
            };
            var c = function e(l, r) {
                o = l;
                if (r) {
                    l.class[r] = a;
                }
                return a;
            };
            if (t && window.Easycanvas) {
                o = Easycanvas;
                Easycanvas.class.scroll = a;
            } else {
                e.exports = c;
            }
        },
        37: function(e, l, r) {
            "use strict";
            var t = Object.assign || function(e) {
                for (var l = 1; l < arguments.length; l++) {
                    var r = arguments[l];
                    for (var t in r) {
                        if (Object.prototype.hasOwnProperty.call(r, t)) {
                            e[t] = r[t];
                        }
                    }
                }
                return e;
            };
            var s = r(14);
            var o = n(s);
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var i = typeof window !== "undefined";
            var a = {
                padding: 0,
                width: 300,
                lineHeight: 100,
                height: 100,
                family: '"Helvetica Neue",Helvetica,Arial,sans-serif'
            };
            var c = void 0;
            var u = function e(l) {
                var r = void 0;
                var s = l || {};
                r = new c.class.sprite({
                    name: l.name || "text",
                    content: {
                        img: (0, o.default)(l.content.text, t({}, a, {
                            lineHeight: l.props.size
                        }, l.props))
                    },
                    style: l.style,
                    events: l.events,
                    hooks: l.hooks
                });
                return r;
            };
            var f = function e(l, r) {
                c = l;
                if (r) {
                    l.class[r] = u;
                }
                return u;
            };
            if (i && window.Easycanvas) {
                c = Easycanvas;
                Easycanvas.class.text = u;
            } else {
                e.exports = f;
            }
        }
    });
});
