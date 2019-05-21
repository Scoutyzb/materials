var __bind = function (t, e) {
    return function () {
        return t.apply(e, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (t, e) {
    function i() {
        this.constructor = t
    }

    for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
}, __slice = [].slice, __indexOf = [].indexOf || function (t) {
    for (var e = 0, i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
    return -1
};
define("PeriodicTable", ["backbone"], function () {
    var t;
    return t = function (t) {
        function e() {
            return this.getElement = __bind(this.getElement, this), this.replace = __bind(this.replace, this), this.highlightElements = __bind(this.highlightElements, this), this.updateSelection = __bind(this.updateSelection, this), this.clear = __bind(this.clear, this), this.show = __bind(this.show, this), this.toggle = __bind(this.toggle, this), this.removeSelection = __bind(this.removeSelection, this), this.select = __bind(this.select, this), this.render = __bind(this.render, this), e.__super__.constructor.apply(this, arguments)
        }

        return __extends(e, t), e.prototype.events = function () {
            return {"click .face": "select", "click .numpad a": "clickNumber"}
        }, e.prototype.initialize = function (t) {
            var e, i, n, s;
            this.selections = new Backbone.Model({}), this.numbers = new Backbone.Model({}), s = this.data;
            for (i in s) n = s[i], n["Oxidation states"] && (this.data[i]["Oxidation states"] = n["Oxidation states"].map(function (t) {
                return t > 0 ? t + "+" : Math.abs(t) + "-"
            }));
            return e = ["Po", "At", "Rn", "Fr", "Ra", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"], this.blacklistedElements = _.uniq(["Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "La-Lu", "Ac-Lr"].concat(e)), this.render()
        }, e.prototype.render = function () {
            var t;
            return $(".pt-icon").click(this.toggle), t = _.map(this.$(".front strong"), function (t) {
                return $(t).text()
            }), this.elements = _.without.apply(_, [t].concat(__slice.call(this.blacklistedElements))), this.disable([])
        }, e.prototype.select = function (t) {
            return this.lastClicked = $(t.currentTarget).find("strong").text(), this.updateSelection(this.lastClicked)
        }, e.prototype.removeSelection = function (t) {
            return this.getElement(t).removeClass("active"), this.selections.unset(t)
        }, e.prototype.toggle = function () {
            return this.$el.is(":hidden") ? this.show() : this.$el.slideUp()
        }, e.prototype.show = function () {
            return this.$el.slideDown(), $(".pt-icon").css("visibility", "visible")
        }, e.prototype.reset = function (t) {
            return this.enableOnly(this.elements), this.removeNumpad(), t ? this.hide() : this.show(), this.clear(), this.trigger("reset")
        }, e.prototype.clickNumber = function (t) {
            var e, i, n;
            return e = $(t.currentTarget).text(), i = null != (n = this.numbers.get("numbers")) ? n : "", this.numbers.set({
                numbers: i + e,
                lastClicked: e
            })
        }, e.prototype.addNumpad = function () {
            var t, e, i;
            if (this.$(".numpad").isEmpty()) {
                for (this.$el.prepend("<div class='pagination pagination-large numpad'><ul></ul></div>"), i = [], t = e = 0; 10 > e; t = ++e) i.push(this.$(".pagination ul").append("<li class='disabled'><a href='javascript:void(0)'>" + t + "</a></li>"));
                return i
            }
        }, e.prototype.removeNumpad = function () {
            return this.numbers.clear(), this.$(".numpad").remove()
        }, e.prototype.clear = function () {
            return this.selections.clear({silent: !0}), this.$(".front").removeClass("active")
        }, e.prototype.updateSelection = function (t) {
            return this.selections.has(t) ? this.removeSelection(t) : (this.selections.set(t, !0), this.highlightElements())
        }, e.prototype.hide = function () {
            return this.$el.is(":hidden") || this.$el.slideUp(), $(".pt-icon").css("visibility", "hidden")
        }, e.prototype.highlightElements = function () {
            var t, e, i, n, s;
            for (e = this.selections.keys(), n = 0, s = e.length; s > n; n++) i = e[n], this.selections.has(i) && (t = this.getElement(i), $(t).hasClass("disabled") || $(t).addClass("active"));
            return this.$(".numpad li").toggleClass("disabled", _.isEmpty(e))
        }, e.prototype.replace = function (t) {
            var e, i, n, s, o;
            for (this.clear(), e = {}, o = _.splitElements(t), n = 0, s = o.length; s > n; n++) i = o[n], this.isValidElement(i) && (e[i] = !0);
            return this.selections.set(e, {silent: !0}), this.highlightElements()
        }, e.prototype.disable = function (t) {
            var e, i, n, s, o;
            for (i = t.concat(this.blacklistedElements), o = [], n = 0, s = i.length; s > n; n++) e = i[n], o.push($(this.getElement(e)).addClass("disabled"));
            return o
        }, e.prototype.enableOnly = function (t) {
            return this.$(".face").each(function () {
                var e;
                return e = $(this).find("strong").text(), _.contains(t, e) ? _.contains(this.blacklistedElements, e) ? $(this).addClass("disabled") : $(this).removeClass("disabled") : $(this).addClass("disabled")
            })
        }, e.prototype.getElement = function (t) {
            var e;
            return e = _.find(this.$(".front strong"), function (e) {
                return function (e) {
                    return $(e).text() === t
                }
            }(this)), $(e).parent()
        }, e.prototype.isValidElement = function (t) {
            return __indexOf.call(this.elements, t) >= 0
        }, e
    }(Backbone.View)
}), function (t) {
    t.event.special.textchange = {
        setup: function (e, i) {
            t(this).data("lastValue", "true" === this.contentEditable ? t(this).html() : t(this).val()), t(this).bind("keyup.textchange", t.event.special.textchange.handler), t(this).bind("cut.textchange paste.textchange input.textchange", t.event.special.textchange.delayedHandler)
        }, teardown: function (e) {
            t(this).unbind(".textchange")
        }, handler: function (e) {
            t.event.special.textchange.triggerIfChanged(t(this))
        }, delayedHandler: function (e) {
            var i = t(this);
            setTimeout(function () {
                t.event.special.textchange.triggerIfChanged(i)
            }, 25)
        }, triggerIfChanged: function (t) {
            var e = "true" === t[0].contentEditable ? t.html() : t.val();
            e !== t.data("lastValue") && (t.trigger("textchange", [t.data("lastValue")]), t.data("lastValue", e))
        }
    }, t.event.special.hastext = {
        setup: function (e, i) {
            t(this).bind("textchange", t.event.special.hastext.handler)
        }, teardown: function (e) {
            t(this).unbind("textchange", t.event.special.hastext.handler)
        }, handler: function (e, i) {
            "" === i && i !== t(this).val() && t(this).trigger("hastext")
        }
    }, t.event.special.notext = {
        setup: function (e, i) {
            t(this).bind("textchange", t.event.special.notext.handler)
        }, teardown: function (e) {
            t(this).unbind("textchange", t.event.special.notext.handler)
        }, handler: function (e, i) {
            "" === t(this).val() && t(this).val() !== i && t(this).trigger("notext")
        }
    }
}(jQuery), define("textchange", ["jquery"], function () {
}), !function (t, e) {
    function i(e, i) {
        var s, o, r, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (r = t("img[usemap=#" + o + "]")[0], !!r && n(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
    }

    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
            return "hidden" === t.css(this, "visibility")
        }).length
    }

    var s = 0, o = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function (e) {
            return function (i, n) {
                return "number" == typeof i ? this.each(function () {
                    var e = this;
                    setTimeout(function () {
                        t(e).focus(), n && n.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus), scrollParent: function () {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        }, zIndex: function (i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length) for (var n, s, o = t(this[0]); o.length && o[0] !== document;) {
                if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                o = o.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++s)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                o.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (i) {
                return !!t.data(i, e)
            }
        }) : function (e, i, n) {
            return !!t.data(e, n[3])
        }, focusable: function (e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        }, tabbable: function (e) {
            var n = t.attr(e, "tabindex"), s = isNaN(n);
            return (s || n >= 0) && i(e, !s)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (i, n) {
        function s(e, i, n, s) {
            return t.each(o, function () {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }

        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], r = n.toLowerCase(), a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + n] = function (i) {
            return i === e ? a["inner" + n].call(this) : this.each(function () {
                t(this).css(r, s(this, i) + "px")
            })
        }, t.fn["outer" + n] = function (e, i) {
            return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function () {
                t(this).css(r, s(this, e, !0, i) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
        return function (i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
        disableSelection: function () {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
                t.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function (e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            }, call: function (t, e, i) {
                var n, s = t.plugins[e];
                if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (n = 0; s.length > n; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
            }
        }, hasScroll: function (e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
            return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        }
    })
}(jQuery), function (t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (d.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? i / 100 : 1)]
    }

    function n(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function s(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {top: 0, left: 0}
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {top: e.scrollTop(), left: e.scrollLeft()}
        } : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }

    t.ui = t.ui || {};
    var o, r = Math.max, a = Math.abs, l = Math.round, u = /left|center|right/, h = /top|center|bottom/,
        c = /[\+\-]\d+(\.[\d]+)?%?/, p = /^\w+/, d = /%$/, f = t.fn.position;
    t.position = {
        scrollbarWidth: function () {
            if (o !== e) return o;
            var i, n,
                s = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                r = s.children()[0];
            return t("body").append(s), i = r.offsetWidth, s.css("overflow", "scroll"), n = r.offsetWidth, i === n && (n = s[0].clientWidth), s.remove(), o = i - n
        }, getScrollInfo: function (e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x"), n = e.isWindow ? "" : e.element.css("overflow-y"),
                s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
            return {width: o ? t.position.scrollbarWidth() : 0, height: s ? t.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (e) {
            var i = t(e || window), n = t.isWindow(i[0]);
            return {
                element: i,
                isWindow: n,
                offset: i.offset() || {left: 0, top: 0},
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: n ? i.width() : i.outerWidth(),
                height: n ? i.height() : i.outerHeight()
            }
        }
    }, t.fn.position = function (e) {
        if (!e || !e.of) return f.apply(this, arguments);
        e = t.extend({}, e);
        var o, d, m, g, v, y, b = t(e.of), _ = t.position.getWithinInfo(e.within), x = t.position.getScrollInfo(_),
            w = (e.collision || "flip").split(" "), C = {};
        return y = s(b), b[0].preventDefault && (e.at = "left top"), d = y.width, m = y.height, g = y.offset, v = t.extend({}, g), t.each(["my", "at"], function () {
            var t, i, n = (e[this] || "").split(" ");
            1 === n.length && (n = u.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = u.test(n[0]) ? n[0] : "center", n[1] = h.test(n[1]) ? n[1] : "center", t = c.exec(n[0]), i = c.exec(n[1]), C[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [p.exec(n[0])[0], p.exec(n[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += d : "center" === e.at[0] && (v.left += d / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), o = i(C.at, d, m), v.left += o[0], v.top += o[1], this.each(function () {
            var s, u, h = t(this), c = h.outerWidth(), p = h.outerHeight(), f = n(this, "marginLeft"),
                y = n(this, "marginTop"), $ = c + f + n(this, "marginRight") + x.width,
                k = p + y + n(this, "marginBottom") + x.height, T = t.extend({}, v),
                E = i(C.my, h.outerWidth(), h.outerHeight());
            "right" === e.my[0] ? T.left -= c : "center" === e.my[0] && (T.left -= c / 2), "bottom" === e.my[1] ? T.top -= p : "center" === e.my[1] && (T.top -= p / 2), T.left += E[0], T.top += E[1], t.support.offsetFractions || (T.left = l(T.left), T.top = l(T.top)), s = {
                marginLeft: f,
                marginTop: y
            }, t.each(["left", "top"], function (i, n) {
                t.ui.position[w[i]] && t.ui.position[w[i]][n](T, {
                    targetWidth: d,
                    targetHeight: m,
                    elemWidth: c,
                    elemHeight: p,
                    collisionPosition: s,
                    collisionWidth: $,
                    collisionHeight: k,
                    offset: [o[0] + E[0], o[1] + E[1]],
                    my: e.my,
                    at: e.at,
                    within: _,
                    elem: h
                })
            }), e.using && (u = function (t) {
                var i = g.left - T.left, n = i + d - c, s = g.top - T.top, o = s + m - p, l = {
                    target: {element: b, left: g.left, top: g.top, width: d, height: m},
                    element: {element: h, left: T.left, top: T.top, width: c, height: p},
                    horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > o ? "top" : s > 0 ? "bottom" : "middle"
                };
                c > d && d > a(i + n) && (l.horizontal = "center"), p > m && m > a(s + o) && (l.vertical = "middle"), l.important = r(a(i), a(n)) > r(a(s), a(o)) ? "horizontal" : "vertical", e.using.call(this, t, l)
            }), h.offset(t.extend(T, {using: u}))
        })
    }, t.ui.position = {
        fit: {
            left: function (t, e) {
                var i, n = e.within, s = n.isWindow ? n.scrollLeft : n.offset.left, o = n.width,
                    a = t.left - e.collisionPosition.marginLeft, l = s - a, u = a + e.collisionWidth - o - s;
                e.collisionWidth > o ? l > 0 && 0 >= u ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : t.left = u > 0 && 0 >= l ? s : l > u ? s + o - e.collisionWidth : s : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = r(t.left - a, t.left)
            }, top: function (t, e) {
                var i, n = e.within, s = n.isWindow ? n.scrollTop : n.offset.top, o = e.within.height,
                    a = t.top - e.collisionPosition.marginTop, l = s - a, u = a + e.collisionHeight - o - s;
                e.collisionHeight > o ? l > 0 && 0 >= u ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : t.top = u > 0 && 0 >= l ? s : l > u ? s + o - e.collisionHeight : s : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = r(t.top - a, t.top)
            }
        }, flip: {
            left: function (t, e) {
                var i, n, s = e.within, o = s.offset.left + s.scrollLeft, r = s.width,
                    l = s.isWindow ? s.scrollLeft : s.offset.left, u = t.left - e.collisionPosition.marginLeft,
                    h = u - l, c = u + e.collisionWidth - r - l,
                    p = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                    d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                    f = -2 * e.offset[0];
                0 > h ? (i = t.left + p + d + f + e.collisionWidth - r - o, (0 > i || a(h) > i) && (t.left += p + d + f)) : c > 0 && (n = t.left - e.collisionPosition.marginLeft + p + d + f - l, (n > 0 || c > a(n)) && (t.left += p + d + f))
            }, top: function (t, e) {
                var i, n, s = e.within, o = s.offset.top + s.scrollTop, r = s.height,
                    l = s.isWindow ? s.scrollTop : s.offset.top, u = t.top - e.collisionPosition.marginTop, h = u - l,
                    c = u + e.collisionHeight - r - l, p = "top" === e.my[1],
                    d = p ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                    m = -2 * e.offset[1];
                0 > h ? (n = t.top + d + f + m + e.collisionHeight - r - o, t.top + d + f + m > h && (0 > n || a(h) > n) && (t.top += d + f + m)) : c > 0 && (i = t.top - e.collisionPosition.marginTop + d + f + m - l, t.top + d + f + m > c && (i > 0 || c > a(i)) && (t.top += d + f + m))
            }
        }, flipfit: {
            left: function () {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function () {
        var e, i, n, s, o, r = document.getElementsByTagName("body")[0], a = document.createElement("div");
        e = document.createElement(r ? "div" : "body"), n = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, r && t.extend(n, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (o in n) e.style[o] = n[o];
        e.appendChild(a), i = r || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", s = t(a).offset().left, t.support.offsetFractions = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e)
    }()
}(jQuery), function (t, e) {
    var i = 0, n = Array.prototype.slice, s = t.cleanData;
    t.cleanData = function (e) {
        for (var i, n = 0; null != (i = e[n]); n++) try {
            t(i).triggerHandler("remove")
        } catch (o) {
        }
        s(e)
    }, t.widget = function (i, n, s) {
        var o, r, a, l, u = {}, h = i.split(".")[0];
        i = i.split(".")[1], o = h + "-" + i, s || (s = n, n = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
            return !!t.data(e, o)
        }, t[h] = t[h] || {}, r = t[h][i], a = t[h][i] = function (t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new a(t, i)
        }, t.extend(a, r, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), l = new n, l.options = t.widget.extend({}, l.options), t.each(s, function (i, s) {
            return t.isFunction(s) ? (u[i] = function () {
                var t = function () {
                    return n.prototype[i].apply(this, arguments)
                }, e = function (t) {
                    return n.prototype[i].apply(this, t)
                };
                return function () {
                    var i, n = this._super, o = this._superApply;
                    return this._super = t, this._superApply = e, i = s.apply(this, arguments), this._super = n, this._superApply = o, i
                }
            }(), e) : (u[i] = s, e)
        }), a.prototype = t.widget.extend(l, {widgetEventPrefix: r ? l.widgetEventPrefix : i}, u, {
            constructor: a,
            namespace: h,
            widgetName: i,
            widgetFullName: o
        }), r ? (t.each(r._childConstructors, function (e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, a, i._proto)
        }), delete r._childConstructors) : n._childConstructors.push(a), t.widget.bridge(i, a)
    }, t.widget.extend = function (i) {
        for (var s, o, r = n.call(arguments, 1), a = 0, l = r.length; l > a; a++) for (s in r[a]) o = r[a][s], r[a].hasOwnProperty(s) && o !== e && (i[s] = t.isPlainObject(o) ? t.isPlainObject(i[s]) ? t.widget.extend({}, i[s], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function (i, s) {
        var o = s.prototype.widgetFullName || i;
        t.fn[i] = function (r) {
            var a = "string" == typeof r, l = n.call(arguments, 1), u = this;
            return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r, a ? this.each(function () {
                var n, s = t.data(this, o);
                return s ? t.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, l), n !== s && n !== e ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : e) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'")
            }) : this.each(function () {
                var e = t.data(this, o);
                e ? e.option(r || {})._init() : t.data(this, o, new s(r, this))
            }), u
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (i, n) {
            var s, o, r, a = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i) if (a = {}, s = i.split("."), i = s.shift(), s.length) {
                for (o = a[i] = t.widget.extend({}, this.options[i]), r = 0; s.length - 1 > r; r++) o[s[r]] = o[s[r]] || {}, o = o[s[r]];
                if (i = s.pop(), n === e) return o[i] === e ? null : o[i];
                o[i] = n
            } else {
                if (n === e) return this.options[i] === e ? null : this.options[i];
                a[i] = n
            }
            return this._setOptions(a), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (i, n, s) {
            var o, r = this;
            "boolean" != typeof i && (s = n, n = i, i = !1), s ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (s = n, n = this.element, o = this.widget()), t.each(s, function (s, a) {
                function l() {
                    return i || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? r[a] : a).apply(r, arguments) : e
                }

                "string" != typeof a && (l.guid = a.guid = a.guid || l.guid || t.guid++);
                var u = s.match(/^(\w+)\s*(.*)$/), h = u[1] + r.eventNamespace, c = u[2];
                c ? o.delegate(c, h, l) : n.bind(h, l)
            })
        },
        _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }

            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                }, focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, s, o) {
            "string" == typeof s && (s = {effect: s});
            var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
            s = s || {}, "number" == typeof s && (s = {duration: s}), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function (i) {
                t(this)[e](), o && o.call(n[0]), i()
            })
        }
    })
}(jQuery), function (t) {
    t.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-carat-1-e"},
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function (t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (t) {
                    t.preventDefault()
                }, "click .ui-state-disabled > a": function (t) {
                    t.preventDefault()
                }, "click .ui-menu-item:has(a)": function (e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                }, blur: function (e) {
                    this._delay(function () {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            var n, s, o, r, a, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, s = this.previousFilter || "", o = String.fromCharCode(e.keyCode), r = !1, clearTimeout(this.filterTimer), o === s ? r = !0 : o = s + o, a = RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return a.test(t(this).children("a").text())
                    }), n = r && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (o = String.fromCharCode(e.keyCode), a = RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return a.test(t(this).children("a").text())
                    })), n.length ? (this.focus(e, n), n.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function (t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var e, i = this.options.icons.submenu, n = this.element.find(this.options.menus);
            n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var e = t(this), n = e.prev("a"),
                    s = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                n.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", n.attr("id"))
            }), e = n.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function () {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function (t, e) {
            var i, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        },
        _scrollIntoView: function (e) {
            var i, n, s, o, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.height(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {item: this.active}))
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (e) {
            var i = t.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, n)
        },
        nextPage: function (e) {
            var i, n, s;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = t(this), 0 > i.offset().top - n - s
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function (e) {
            var i, n, s;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - n + s > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
}(jQuery), function (t) {
    var e = 0;
    t.widget("ui.autocomplete", {
        version: "1.10.3", defaultElement: "<input>", options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom", collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        }, pending: 0, _create: function () {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(), o = "textarea" === s, r = "input" === s;
            this.isMultiLine = o ? !0 : r ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                    e = !1, n = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (s.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", s);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", s);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", s);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", s);
                            break;
                        case o.ENTER:
                        case o.NUMPAD_ENTER:
                            this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(s)
                    }
                }, keypress: function (n) {
                    if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                        }
                    }
                }, input: function (t) {
                    return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function (e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                        var e = this;
                        this.document.one("mousedown", function (n) {
                            n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                        })
                    })
                }, menufocus: function (e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function () {
                        t(e.target).trigger(e.originalEvent)
                    });
                    var n = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {item: n}) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
                }, menuselect: function (t, e) {
                    var i = e.item.data("ui-autocomplete-item"), n = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function () {
                        this.previous = n, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {item: i}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        }, _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        }, _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        }, _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        }, _initSource: function () {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
                n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                    url: i, data: e, dataType: "json", success: function (t) {
                        s(t)
                    }, error: function () {
                        s([])
                    }
                })
            }) : this.source = this.options.source
        }, _searchTimeout: function (t) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        }, search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        }, _search: function (t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
        }, _response: function () {
            var t = this, i = ++e;
            return function (n) {
                i === e && t.__response(n), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
            }
        }, __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        }, close: function (t) {
            this.cancelSearch = !0, this._close(t)
        }, _close: function (t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        }, _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
        }, _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? {label: e, value: e} : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        }, _suggest: function (e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
        }, _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        }, _renderMenu: function (e, i) {
            var n = this;
            t.each(i, function (t, i) {
                n._renderItemData(e, i)
            })
        }, _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        }, _renderItem: function (e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        }, _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        }, widget: function () {
            return this.menu.element
        }, _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        }, _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (e, i) {
            var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return n.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }
    })
}(jQuery), define("jqueryui", ["jquery"], function (t) {
    return function () {
        var e;
        return e || t.$
    }
}(this));
var __bind = function (t, e) {
    return function () {
        return t.apply(e, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (t, e) {
    function i() {
        this.constructor = t
    }

    for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
}, __indexOf = [].indexOf || function (t) {
    for (var e = 0, i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
    return -1
};
define("SearchFieldView", ["teacup", "selectpicker", "textchange", "backbone", "jqueryui", "base"], function (t) {
    var e;
    return e = function (e) {
        function i() {
            return this.enableButton = __bind(this.enableButton, this), this.showButton = __bind(this.showButton, this), this.hideButton = __bind(this.hideButton, this), this.disableButton = __bind(this.disableButton, this), this.getSelectedQueryAttribute = __bind(this.getSelectedQueryAttribute, this), this.setSelection = __bind(this.setSelection, this), this.submit = __bind(this.submit, this), this.insertInput = __bind(this.insertInput, this), this.bindTextChange = __bind(this.bindTextChange, this), this.setPlaceholder = __bind(this.setPlaceholder, this), this.triggerInputChange = __bind(this.triggerInputChange, this), this.render = __bind(this.render, this), i.__super__.constructor.apply(this, arguments)
        }

        return __extends(i, e), i.prototype.events = function () {
            return {
                "submit form": "submit",
                "change select": "onSelectChange",
                "click .btn-group li a": "onSelectChange",
                autocompleteclose: "triggerInputChange",
                "focus input": "setActiveInput",
                "autocompleteclose #input-primary": "triggerInputChange",
                "click #input-clear": function () {
                    return this.replaceInput("")
                }
            }
        }, i.prototype.initialize = function (t) {
            var e;
            return e = t.Apps, this.render(e), this.listOfKeys = _.compact(_.toArray(this.$("option[data-key]").map(function () {
                return $(this).data("key")
            }))), this.model.set({input: ""}), this.on("valid", this.valid), this.on("invalid", this.invalid), this.$input = this.$("input:not(.hidden)"), this.$button = this.$("#submit-search"), this.setSelection(), this.bindTextChange()
        }, i.prototype.render = function (e) {
            return this.$(".input-prepend").html(function () {
                return t.render(function () {
                    return t.select(".selectpicker", {"data-width": "190px"}, function () {
                        var i, n, s, o, r, a, l, u, h, c;
                        for (c = [], l = 0, u = e.length; u > l; l++) i = e[l], n = i.iconClass.replace(".", ""), s = "<span class='" + n + " menu-icon'></span> ", null != i.optgroup ? c.push(t.optgroup({
                            label: i.optgroup,
                            "data-route": i.route
                        }, function () {
                            var e, n, o, r, a, l, u, h;
                            for (l = i.options, h = [], r = 0, a = l.length; a > r; r++) u = l[r], e = u.key, n = u.placeholder, o = u.text, h.push(t.option({
                                "data-placeholder": n,
                                "data-key": e,
                                "data-content": s + o
                            }));
                            return h
                        })) : null != i.option ? (h = i.option, r = h.placeholder, a = h.text, o = h.key, c.push(t.option({
                            "data-placeholder": r,
                            "data-route": i.route,
                            "data-key": o,
                            "data-content": s + a
                        }))) : c.push(void 0);
                        return c
                    }), t.input("#input-primary.search-query.chemform", {type: "text"}), t.i("#input-clear.icon-cancel"), t.button("#submit-search.btn", {type: "submit"}, "search")
                })
            }), this.$(".selectpicker").selectpicker()
        }, i.prototype.triggerInputChange = function () {
            var t;
            return t = this.getInputValue(), _.isString(t) && (t = t.trim()), this.model.get("input") !== t ? this.model.set("input", t) : void 0
        }, i.prototype.getInputValue = function () {
            var t, e;
            return e = 1 === this.$input.length ? this.$input.val() : function () {
                var e, i, n, s;
                for (n = this.$input, s = [], e = 0, i = n.length; i > e; e++) t = n[e], s.push($(t).val().trim());
                return s
            }.call(this)
        }, i.prototype.setPlaceholder = function () {
            var t;
            return t = this.getSelected().data("placeholder"), null == t && (t = ""), 1 === this.$input.length ? (this.$input.val("").attr("placeholder", t), _.delay(function (t) {
                return function () {
                    return t.$input.get(0).value = ""
                }
            }(this), 100)) : void 0
        }, i.prototype.bindTextChange = function () {
            return this.$input.bind("textchange", this.triggerInputChange).bind("hastext", function (t) {
                return function () {
                    return t.trigger("hastext", t.model)
                }
            }(this)).bind("notext", function (t) {
                return function () {
                    return t.trigger("notext", t.model), t.trigger("valid")
                }
            }(this))
        }, i.prototype.multipleFields = function (t) {
            var e, i, n, s, o;
            return n = t.number, e = t.helpTexts, s = t.placeholders, i = t.maxLength, this.hideInput(), null == e && (e = []), null == s && (s = []), null == i && (i = ""), o = function () {
                switch (!1) {
                    case!(3 > n):
                        return "span3";
                    case!(5 > n):
                        return "span2";
                    case!(n > 4):
                        return "span1";
                    default:
                        return "span2"
                }
            }(), this.$input.after(function () {
                var t;
                return function () {
                    t = [];
                    for (var e = 0, i = n - 1; i >= 0 ? i >= e : e >= i; i >= 0 ? e++ : e--) t.push(e);
                    return t
                }.apply(this).map(function (t) {
                    var n, r, a, l;
                    return a = null != (l = s[t]) ? l : "", n = "<input id='input-" + t + "' maxlength='" + i + "' type='text' class='" + o + " search-query' placeholder='" + a + "'>", r = null != e[t] ? "<span class='" + o + " help-inline'>" + e[t] + "</span>" : "", n + r
                })
            }), this.$input = this.$("input:not(.hidden)"), this.bindTextChange(), this.bindEnterKey(), this.setActiveInput()
        }, i.prototype.reset = function () {
            return this.$el.show(), this.model.set("input", "", {silent: !0}), this.$("input:not(#input-primary)").remove(), this.$input = this.$("input"), this.autocomplete({destroy: !0}), this.$input.val(""), this.$(".help-inline").remove(), this.showInput(), this.showButton(), this.button("disabled btn", "search"), this.bindTextChange(), this.unbindEnterKey(), _.delay(this.setPlaceholder, 200)
        }, i.prototype.setActiveInput = function (t) {
            return this.$input.length > 1 ? null != t ? ($(t.currentTarget).siblings().removeClass("active"), $(t.currentTarget).addClass("active")) : $(this.$input[0]).addClass("active") : void 0
        }, i.prototype.hideInput = function () {
            return this.$input.addClass("hidden"), this.$("#input-clear").addClass("hidden")
        }, i.prototype.showInput = function () {
            return this.$("#input-clear").removeClass("hidden"), this.$input.removeClass("hidden")
        }, i.prototype.insertInput = function (e, i) {
            var n, s, o, r, a, l, u, h;
            return null != i && i ? (a = _.find(this.$input, function (t) {
                return _.isEmpty($(t).val())
            }), s = _.filter(this.$input, function (t) {
                return $(t).val() === e
            }), _.isEmpty(s) ? $(a).val(e) : $(s).each(function () {
                return $(this).val("")
            })) : (a = this.$input.length > 1 ? this.$(".active") : this.$input, n = $(a).val(), _.isEmpty(n.trim()) && (n = ""), t = e.trim(), h = !(_.isEmpty(n) && $.isNumeric(t)), h && (_.isEmpty(n) || (r = _.unitcellFormula(_.stripParens(n))), l = _.splitElements(n, !0)), null != l && ($.isNumeric(t) ? $(a).val(n + t) : (o = t.replace(/-/g, ""), __indexOf.call(_.keys(r), o) >= 0 ? (null != r && 1 !== r[o] && (o += r[o]), u = new RegExp("" + t + "(?![a-z])", "g"), n = n.replace(u, ""), $(a).val(n)) : $(a).val(n + e))), this.triggerInputChange())
        }, i.prototype.replaceInput = function (t) {
            return this.$input.val(t), this.triggerInputChange()
        }, i.prototype.onSelectChange = function () {
            return this.routeSelection(), this.setPlaceholder()
        }, i.prototype.routeSelection = function (t) {
            var e, i;
            return null == t && (t = !0), _.isEmpty(this.getSelected().parent("optgroup")) ? (this.model.unset("key"), i = this.getSelected().text(), e = this.getSelected().data("route")) : (this.model.set("key", this.getSelectedQueryAttribute()), i = this.getSelected().parent("optgroup").attr("label"), e = this.getSelected().parent("optgroup").data("route")), t ? this.model.set({
                selection: i,
                route: e
            }) : void 0
        }, i.prototype.submit = function () {
            return this.model.set({
                key: null != this.getSelectedQueryAttribute() ? this.getSelectedQueryAttribute() : void 0,
                input: this.getInputValue()
            }, {silent: !0}), this.valid && !_.isEmpty(this.getInputValue()) && ("reduced_cell_formula" === this.model.get("key") && this.replaceInput(this.model.get("input").replace(/\s/g, "")), this.trigger("submit", this.model)), !1
        }, i.prototype.setSelection = function (t) {
            var e, i;
            return null != t && (_.isArray(t) && (t = t[0]), this.model.set("key", t)), e = this.$("optgroup[data-route='" + this.model.get("route") + "']"), _.isEmpty(e) ? (this.$("#search-label").text(""), this.$("option[data-route='" + this.model.get("route") + "']").prop("selected", !0), this.$(".selectpicker").selectpicker("render")) : (this.$("#search-label").text($(e).attr("label")), this.$("#search-label").trigger("searchlabel:change", $(e).attr("label")), this.model.has("key") && (i = $(e).find("option[data-key='" + this.model.get("key") + "']")), _.isEmpty(i) && (i = $(e[0].children[0])), i.prop("selected", !0), this.$(".selectpicker").selectpicker("render"), this.model.set("key", this.getSelectedQueryAttribute())), this.routeSelection(!1)
        }, i.prototype.getSelectedQueryAttribute = function () {
            return _.has(this.getSelected().data(), "key") ? this.getSelected().data("key") : void 0
        }, i.prototype.getSelected = function () {
            return this.$("select").find(":selected")
        }, i.prototype.bindEnterKey = function () {
            return $(window).bind("keypress", function (t) {
                return function (e) {
                    return e.keyCode === $.ui.keyCode.ENTER && t.$input.length > 1 ? t.submit() : void 0
                }
            }(this))
        }, i.prototype.unbindEnterKey = function () {
            return $(window).unbind("keypress")
        }, i.prototype.button = function (t, e) {
            return this.$button.attr("class", t).html(e)
        }, i.prototype.disableButton = function () {
            return this.$button.addClass("disabled"), this.unbindEnterKey()
        }, i.prototype.hideButton = function () {
            return this.$button.addClass("hidden"), this.unbindEnterKey()
        }, i.prototype.showButton = function () {
            return this.$button.removeClass("hidden"), this.bindEnterKey()
        }, i.prototype.enableButton = function () {
            return this.$button.removeClass("disabled"), this.bindEnterKey()
        }, i.prototype.toggleSubmit = function () {
            return this.valid && !_.isEmpty(this.$input.val()) ? this.enableButton() : this.$input.hasClass("hidden") && this.valid ? this.enableButton() : this.disableButton()
        }, i.prototype.valid = function () {
            return this.$input.each(function () {
                return $(this).removeClass("invalid")
            }), this.valid = !0
        }, i.prototype.invalid = function () {
            return this.$input.each(function () {
                return $(this).addClass("invalid")
            }), this.valid = !1
        }, i.prototype.autocomplete = function (t) {
            var e, i;
            return e = t.destroy, i = t.source, null != i ? (this.autocompleteOn = !0, this.$input.autocomplete({
                source: function (t, e) {
                    var n, s, o;
                    return n = 10, s = i.filter(function (e) {
                        return 0 === e.indexOf(t.term)
                    }), o = results.length >= n ? [] : i.filter(function (e) {
                        return e.indexOf(t.term) > 0
                    }), e(_.first(s.concat(o), n))
                }
            })) : null != e && this.autocompleteOn ? (this.autocompleteOn = !1, this.$input.autocomplete("destroy")) : void 0
        }, i
    }(Backbone.View)
}), function (t, e, i, n) {
    "use strict";
    var s = 0, o = function () {
        var t, e = n.userAgent, i = /msie\s\d+/i;
        return e.search(i) > 0 && (t = i.exec(e).toString(), t = t.split(" ")[1], 9 > t) ? !0 : !1
    }(), r = function () {
        try {
            return e.createEvent("TouchEvent"), !0
        } catch (t) {
            return !1
        }
    }(), a = {
        init: function (n) {
            var a = '<span class="irs"><span class="irs-line"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><input class="irs-from" value="0"/><input value="0" class="irs-to"/><input class="irs-single" value="0" /></span><span class="irs-grid"></span>',
                l = '<input class="irs-slider single"/>',
                u = '<span class="irs-diapason"></span><input class="irs-slider from"/><input class="irs-slider to"/>';
            return this.each(function () {
                var h = t.extend({
                    min: 10,
                    max: 100,
                    from: null,
                    to: null,
                    type: "single",
                    step: 1,
                    prefix: "",
                    postfix: "",
                    hasGrid: !1,
                    hideMinMax: !1,
                    hideFromTo: !1,
                    prettify: !0,
                    onChange: null,
                    onLoad: null,
                    onFinish: null
                }, n), c = t(this), p = this;
                if (!c.data("isActive")) {
                    c.data("isActive", !0), s += 1, this.pluginCount = s, c.prop("value") && (h.min = parseInt(c.prop("value").split(";")[0], 10), h.max = parseInt(c.prop("value").split(";")[1], 10)), "number" != typeof h.from && (h.from = h.min), "number" != typeof h.to && (h.to = h.max), "number" == typeof c.data("from") && (h.from = parseFloat(c.data("from"))), "number" == typeof c.data("to") && (h.to = parseFloat(c.data("to"))), c.data("step") && (h.step = parseFloat(c.data("step"))), c.data("type") && (h.type = c.data("type")), c.data("prefix") && (h.prefix = c.data("prefix")), c.data("postfix") && (h.postfix = c.data("postfix")), c.data("hasgrid") && (h.hasGrid = c.data("hasgrid")), c.data("hideminmax") && (h.hideMinMax = c.data("hideminmax")), c.data("hidefromto") && (h.hideFromTo = c.data("hidefromto")), c.data("prettify") && (h.prettify = c.data("prettify")), h.from < h.min && (h.from = h.min), h.to > h.max && (h.to = h.max), "double" === h.type && (h.from > h.to && (h.from = h.to), h.to < h.from && (h.to = h.from));
                    var d = function (t) {
                        var e;
                        return h.prettify ? (e = t.toString(), e = e.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ")) : e = t, e
                    }, f = '<span class="irs" id="irs-' + this.pluginCount + '"></span>';
                    c[0].style.display = "none", c.before(f);
                    var m, g, v, y, b, _, x, w, C, $, k, T, E = t("#irs-" + this.pluginCount), A = t(e.body), F = t(i),
                        N = !1, S = !1, P = !0, I = {}, O = 0, M = 0, D = 0, B = 0, W = 0, R = 0, V = 0, L = 0, H = 0,
                        q = 0, j = 0;
                    parseInt(h.step, 10) !== parseFloat(h.step) && (j = String(h.step).split(".")[1], j = Math.pow(10, j.length)), this.updateData = function (e) {
                        P = !0, h = t.extend(h, e), X()
                    }, this.setData = function (t) {
                        var e = !1;
                        null !== t.from && t.from <= I.toNumber && t.from >= h.min ? e = !0 : null == t.from && (t.from = I.fromNumber), null !== t.to && t.to > I.fromNumber && t.to <= h.max ? e = !0 : null == t.to && (t.to = I.toNumber), e && (this.updateData(t), null !== h.onFinish && h.onFinish.call(this, I, c))
                    }, this.removeSlider = function () {
                        E.find("*").off(), F.off("mouseup.irs" + p.pluginCount), A.off("mouseup.irs" + p.pluginCount), A.off("mousemove.irs" + p.pluginCount), E.html("").remove(), c.data("isActive", !1), c.show()
                    };
                    var X = function () {
                        E.find("*").off(), F.off("mouseup.irs" + p.pluginCount), A.off("mouseup.irs" + p.pluginCount), A.off("mousemove.irs" + p.pluginCount), E.html(""), U()
                    }, U = function () {
                        E.html(a), m = E.find(".irs"), g = m.find(".irs-min"), v = m.find(".irs-max"), y = m.find(".irs-from"), b = m.find(".irs-to"), _ = m.find(".irs-single"), T = E.find(".irs-grid"), h.hideMinMax && (g[0].style.display = "none", v[0].style.display = "none", M = 0, D = 0), h.hideFromTo && (y[0].style.display = "none", b[0].style.display = "none", _[0].style.display = "none"), h.hideMinMax || (g.val(h.prefix + d(h.min) + h.postfix), v.val(h.prefix + d(h.max) + h.postfix), M = g.outerWidth(), D = v.outerWidth()), "single" === h.type ? (m.append(l), x = m.find(".single"), x.on("mousedown", function (e) {
                            e.preventDefault(), e.stopPropagation(), K(e, t(this), null), N = !0, S = !0, o && t("*").prop("unselectable", !0)
                        }), r && x.on("touchstart", function (e) {
                            e.preventDefault(), e.stopPropagation(), K(e.originalEvent.touches[0], t(this), null), N = !0, S = !0
                        })) : "double" === h.type && (m.append(u), w = m.find(".from"), C = m.find(".to"), k = m.find(".irs-diapason"), G(), w.on("mousedown", function (e) {
                            e.preventDefault(), e.stopPropagation(), t(this).addClass("last"), C.removeClass("last"), K(e, t(this), "from"), N = !0, S = !0, o && t("*").prop("unselectable", !0)
                        }), C.on("mousedown", function (e) {
                            e.preventDefault(), e.stopPropagation(), t(this).addClass("last"), w.removeClass("last"), K(e, t(this), "to"), N = !0, S = !0, o && t("*").prop("unselectable", !0)
                        }), r && (w.on("touchstart", function (e) {
                            e.preventDefault(), e.stopPropagation(), t(this).addClass("last"), C.removeClass("last"), K(e.originalEvent.touches[0], t(this), "from"), N = !0, S = !0
                        }), C.on("touchstart", function (e) {
                            e.preventDefault(), e.stopPropagation(), t(this).addClass("last"), w.removeClass("last"), K(e.originalEvent.touches[0], t(this), "to"), N = !0, S = !0
                        })), h.to === h.max && w.addClass("last"));
                        var e = function () {
                            N && (S = !1, N = !1, $.removeAttr("id"), $ = null, "double" === h.type && G(), Q(), o && t("*").prop("unselectable", !1))
                        };
                        A.on("mouseup.irs" + p.pluginCount, function () {
                            e()
                        }), F.on("mouseup.irs" + p.pluginCount, function () {
                            e()
                        }), A.on("mousemove.irs" + p.pluginCount, function (t) {
                            N && (O = t.pageX, J())
                        }), r && (F.on("touchend", function () {
                            N && (S = !1, N = !1, $.removeAttr("id"), $ = null, "double" === h.type && G(), Q())
                        }), F.on("touchmove", function (t) {
                            N && (O = t.originalEvent.touches[0].pageX, J())
                        })), z(), Y(), h.hasGrid && tt()
                    }, z = function () {
                        B = m.width(), R = x ? x.width() : w.width(), W = B - R
                    }, K = function (t, e, i) {
                        z(), P = !1, $ = e, $.attr("id", "irs-active-slider");
                        var n = $.offset().left, s = t.pageX - n;
                        q = n + s - $.position().left, "single" === h.type ? V = m.width() - R : "double" === h.type && ("from" === i ? (L = 0, H = parseInt(C.css("left"), 10)) : (L = parseInt(w.css("left"), 10), H = m.width() - R))
                    }, G = function () {
                        var e = w.width(), i = t.data(w[0], "x") || parseInt(w[0].style.left, 10) || w.position().left,
                            n = t.data(C[0], "x") || parseInt(C[0].style.left, 10) || C.position().left, s = i + e / 2,
                            o = n - i;
                        k[0].style.left = s + "px", k[0].style.width = o + "px"
                    }, J = function () {
                        var e, i = O - q;
                        "single" === h.type ? (0 > i && (i = 0), i > V && (i = V)) : "double" === h.type && (L > i && (i = L), i > H && (i = H), G()), t.data($[0], "x", i), Q(), e = Math.round(i), $[0].style.left = e + "px"
                    }, Q = function () {
                        var e, i, n = {fromNumber: 0, toNumber: 0, fromPers: 0, toPers: 0, fromX: 0, toX: 0},
                            s = h.max - h.min;
                        "single" === h.type ? (n.fromX = t.data(x[0], "x") || parseInt(x[0].style.left, 10) || x.position().left, n.fromPers = n.fromX / W * 100, e = s / 100 * n.fromPers + parseInt(h.min, 10), n.fromNumber = Math.round(e / h.step) * h.step, j && (n.fromNumber = parseInt(n.fromNumber * j, 10) / j)) : "double" === h.type && (n.fromX = t.data(w[0], "x") || parseInt(w[0].style.left, 10) || w.position().left, n.fromPers = n.fromX / W * 100, e = s / 100 * n.fromPers + parseInt(h.min, 10), n.fromNumber = Math.round(e / h.step) * h.step, n.toX = t.data(C[0], "x") || parseInt(C[0].style.left, 10) || C.position().left, n.toPers = n.toX / W * 100, i = s / 100 * n.toPers + parseInt(h.min, 10), n.toNumber = Math.round(i / h.step) * h.step, j && (n.fromNumber = parseInt(n.fromNumber * j, 10) / j, n.toNumber = parseInt(n.toNumber * j, 10) / j)), I = n, Z()
                    }, Y = function () {
                        var e = {
                            fromNumber: h.from,
                            toNumber: h.to,
                            fromPers: 0,
                            toPers: 0,
                            fromX: 0,
                            fromX_pure: 0,
                            toX: 0,
                            toX_pure: 0
                        }, i = h.max - h.min;
                        "single" === h.type ? (e.fromPers = (e.fromNumber - h.min) / i * 100, e.fromX_pure = W / 100 * e.fromPers, e.fromX = Math.round(e.fromX_pure), x[0].style.left = e.fromX + "px", t.data(x[0], "x", e.fromX_pure)) : "double" === h.type && (e.fromPers = (e.fromNumber - h.min) / i * 100, e.fromX_pure = W / 100 * e.fromPers, e.fromX = Math.round(e.fromX_pure), w[0].style.left = e.fromX + "px", t.data(w[0], "x", e.fromX_pure), e.toPers = (e.toNumber - h.min) / i * 100, e.toX_pure = W / 100 * e.toPers, e.toX = Math.round(e.toX_pure), C[0].style.left = e.toX + "px", t.data(C[0], "x", e.toX_pure), G()), I = e, Z()
                    }, Z = function () {
                        var t, e, i, n, s, o, r, a, l, u = R / 2;
                        "single" === h.type ? (h.hideText || (y[0].style.display = "none", b[0].style.display = "none", r = h.prefix + d(I.fromNumber) + h.postfix, _.val(r), a = _.outerWidth(), l = I.fromX - a / 2 + u, 0 > l && (l = 0), l > B - a && (l = B - a), _[0].style.left = l + "px", h.hideMinMax || h.hideFromTo || (M > l ? g[0].style.display = "none" : g[0].style.display = "block", l + a > B - D ? v[0].style.display = "none" : v[0].style.display = "block")), c.attr("value", parseInt(I.fromNumber, 10))) : "double" === h.type && (I.fromNumber = parseFloat(I.fromNumber), I.toNumber = parseFloat(I.toNumber), h.hideText || (t = h.prefix + d(I.fromNumber) + h.postfix, n = h.prefix + d(I.toNumber) + h.postfix, r = I.fromNumber !== I.toNumber ? h.prefix + d(I.fromNumber) + " — " + h.prefix + d(I.toNumber) + h.postfix : h.prefix + d(I.fromNumber) + h.postfix, y.val(t), b.val(n), _.val(r), e = y.outerWidth(), i = I.fromX - e / 2 + u, 0 > i && (i = 0), i > B - e && (i = B - e), y[0].style.left = i + "px", s = b.outerWidth(), o = I.toX - s / 2 + u, 0 > o && (o = 0), o > B - s && (o = B - s), b[0].style.left = o + "px", a = _.outerWidth(), l = I.fromX + (I.toX - I.fromX) / 2 - a / 2 + u, 0 > l && (l = 0), l > B - a && (l = B - a), -81 === l && (l = 0), _[0].style.left = l + "px", o > i + e ? (_[0].style.display = "none", y[0].style.display = "block", b[0].style.display = "block") : (_[0].style.display = "block", _.addClass("irs-range-single"), y[0].style.display = "none", b[0].style.display = "none"), h.hideMinMax || h.hideFromTo || (M > l || M > i ? g[0].style.display = "none" : g[0].style.display = "block", l + a > B - D || o + s > B - D ? v[0].style.display = "none" : v[0].style.display = "block")), c.attr("value", parseInt(I.fromNumber, 10) + ";" + parseInt(I.toNumber, 10))), "function" == typeof h.onChange && h.onChange.call(this, I, c), "function" != typeof h.onFinish || S || P || h.onFinish.call(this, I, c), "function" == typeof h.onLoad && !S && P && h.onLoad.call(this, I, c)
                    }, tt = function () {
                        E.addClass("irs-with-grid");
                        var t, e = "", i = 0, n = 0, s = "", o = 20, r = 4;
                        for (t = 0; o >= t; t += 1) i = Math.floor(B / o * t), i >= B && (i = B - 1), s += '<span class="irs-grid-pol small" style="left: ' + i + 'px;"></span>';
                        for (t = 0; r >= t; t += 1) i = Math.floor(B / r * t), i >= B && (i = B - 1), s += '<span class="irs-grid-pol" style="left: ' + i + 'px;"></span>', j ? (e = h.min + (h.max - h.min) / r * t, e = e / h.step * h.step, e = parseInt(e * j, 10) / j) : (e = Math.round(h.min + (h.max - h.min) / r * t), e = Math.round(e / h.step) * h.step, e = d(e)), 0 === t ? (n = i, s += '<span class="irs-grid-text" style="left: ' + n + 'px; text-align: left;">' + e + "</span>") : t === r ? (n = i - 100, s += '<span class="irs-grid-text" style="left: ' + n + 'px; text-align: right;">' + e + "</span>") : (n = i - 50, s += '<span class="irs-grid-text" style="left: ' + n + 'px;">' + e + "</span>");
                        T.html(s)
                    };
                    U()
                }
            })
        }, update: function (t) {
            return this.each(function () {
                this.updateData(t)
            })
        }, updateTrigger: function (t) {
            return this.each(function () {
                this.setData(t)
            })
        }, remove: function () {
            return this.each(function () {
                this.removeSlider()
            })
        }
    };
    t.fn.ionRangeSlider = function (e) {
        return a[e] ? a[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist for jQuery.ionRangeSlider") : a.init.apply(this, arguments)
    }
}(jQuery, document, window, navigator), define("ionslider", ["jquery"], function () {
});
var __bind = function (t, e) {
    return function () {
        return t.apply(e, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (t, e) {
    function i() {
        this.constructor = t
    }

    for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
}, __indexOf = [].indexOf || function (t) {
    for (var e = 0, i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
    return -1
};
define("SliderView", ["backbone", "ionslider"], function () {
    var t;
    return t = function (t) {
        function e() {
            return this.bindInputEvent = __bind(this.bindInputEvent, this), this.parseSlider = __bind(this.parseSlider, this), e.__super__.constructor.apply(this, arguments)
        }

        return __extends(e, t), e.prototype.initialize = function () {
            return this.$el.each(function (t) {
                return function (e, i) {
                    return $(i).ionRangeSlider(t.generateOptions(i))
                }
            }(this))
        }, e.prototype.generateOptions = function (t) {
            var e, i, n;
            return n = parseFloat($(t).data("step")), e = parseFloat($(t).data("from")), i = {
                type: $(t).hasClass("range") ? "double" : "single",
                max: $(t).data("max"),
                prettify: !1,
                from: _.isNaN(e) ? null : e,
                min: $(t).data("min"),
                hideMinMax: !0,
                step: _.isNaN(n) ? void 0 : n,
                onFinish: this.parseSlider,
                onLoad: this.bindInputEvent
            }
        }, e.prototype.parseSlider = function (t, e) {
            var i, n;
            return i = $(e).data("key"), n = function () {
                switch (!1) {
                    case!$(e).hasClass("range"):
                        return {$gte: t.fromNumber, $lte: t.toNumber};
                    case!$(e).hasClass("max"):
                        return {$lte: t.fromNumber};
                    default:
                        return t.fromNumber
                }
            }(), this.slideChange(i, n)
        }, e.prototype.slideChange = function (t, e) {
            var i;
            return i = {}, i[t] = e, this.trigger("slide", i)
        }, e.prototype.reset = function (t) {
            return $(t).ionRangeSlider("remove").ionRangeSlider(this.generateOptions(t))
        }, e.prototype.updateSlider = function (t) {
            var e, i, n, s, o, r, a;
            return o = t.target, a = $(o).val(), i = $(o).attr("class"), n = function () {
                var t;
                switch (!1) {
                    case"irs-from" !== i:
                        return {from: parseFloat(a)};
                    case"irs-to" !== i:
                        return {to: parseFloat(a)};
                    case __indexOf.call(o.classList, "irs-range-single") < 0:
                        return t = a.split(" — ").map(parseFloat), e = t[0], r = t[1], {from: e, to: r};
                    case"irs-single" !== i:
                        return {from: parseFloat(a)}
                }
            }(), s = $(o).parents(".irs").next(".slider")[0], null == s || _.isNaN(a) ? void 0 : $(s).ionRangeSlider("updateTrigger", n)
        }, e.prototype.bindInputEvent = function (t, e) {
            var i;
            return i = _.debounce(this.updateSlider, 1e3), $(e).parent().find(".irs-from, .irs-to, .irs-single").keyup(i)
        }, e
    }(Backbone.View)
}), !function (t) {
    "use strict";

    function e(e, i) {
        this.options = this.mergeOptions(i), this.$select = t(e), this.originalOptions = this.$select.clone()[0].options, this.query = "", this.searchTimeout = null, this.options.multiple = "multiple" == this.$select.attr("multiple"), this.options.onChange = t.proxy(this.options.onChange, this), this.buildContainer(), this.buildButton(), this.buildSelectAll(), this.buildDropdown(), this.buildDropdownOptions(), this.buildFilter(), this.updateButtonText(), this.$select.hide().after(this.$container)
    }

    "undefined" != typeof ko && ko.bindingHandlers && !ko.bindingHandlers.multiselect && (ko.bindingHandlers.multiselect = {
        init: function (t, e, i, n, s) {
        }, update: function (e, i, n, s, o) {
            var r = t(e).data("multiselect");
            r ? n().options && n().options().length !== r.originalOptions.length && (r.updateOriginalOptions(), t(e).multiselect("rebuild")) : t(e).multiselect(ko.utils.unwrapObservable(i()))
        }
    }), e.prototype = {
        defaults: {
            buttonText: function (e, i) {
                if (0 == e.length) return this.nonSelectedText + ' <b class="caret"></b>';
                if (e.length > 3) return e.length + " " + this.nSelectedText + ' <b class="caret"></b>';
                var n = "";
                return e.each(function () {
                    var e = void 0 !== t(this).attr("label") ? t(this).attr("label") : t(this).html();
                    n += e + ", "
                }), n.substr(0, n.length - 2) + ' <b class="caret"></b>'
            },
            buttonTitle: function (e, i) {
                var n = "";
                return e.each(function () {
                    n += t(this).text() + ", "
                }), n.substr(0, n.length - 2)
            },
            onChange: function (t, e) {
            },
            buttonClass: "btn",
            dropRight: !1,
            selectedClass: "active",
            buttonWidth: "auto",
            buttonContainer: '<div class="btn-group" />',
            maxHeight: !1,
            includeSelectAllOption: !1,
            selectAllText: " Select all",
            selectAllValue: "multiselect-all",
            enableFiltering: !1,
            enableCaseInsensitiveFiltering: !1,
            filterPlaceholder: "Search",
            filterBehavior: "text",
            preventInputChangeEvent: !1,
            nonSelectedText: "None selected",
            nSelectedText: "selected"
        }, templates: {
            button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
            ul: '<ul class="multiselect-container dropdown-menu"></ul>',
            filter: '<div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div>',
            li: '<li><a href="javascript:void(0);"><label><input /></label></a></li>',
            liGroup: '<li><label class="multiselect-group"></label></li>'
        }, constructor: e, buildContainer: function () {
            this.$container = t(this.options.buttonContainer)
        }, buildButton: function () {
            this.$button = t(this.templates.button).addClass(this.options.buttonClass), void 0 == this.$select.attr("disabled") ? this.$button.removeClass("disabled") : this.$button.addClass("disabled"), this.options.buttonWidth && this.$button.css({width: this.options.buttonWidth});
            var e = this.$select.attr("tabindex");
            e && this.$button.attr("tabindex", e), this.$container.prepend(this.$button)
        }, buildDropdown: function () {
            this.$ul = t(this.templates.ul), this.options.dropRight && this.$ul.addClass("pull-right"), this.options.maxHeight && this.$ul.css({
                "max-height": this.options.maxHeight + "px",
                "overflow-y": "auto",
                "overflow-x": "hidden"
            }), this.$container.append(this.$ul)
        }, buildDropdownOptions: function () {
            this.$select.children().each(t.proxy(function (e, i) {
                var n = t(i).prop("tagName").toLowerCase();
                "optgroup" == n ? this.createOptgroup(i) : "option" == n && this.createOptionValue(i)
            }, this)), t("li input", this.$ul).on("change", t.proxy(function (e) {
                var i = t(e.target).prop("checked") || !1, n = t(e.target).val() == this.options.selectAllValue;
                this.options.selectedClass && (i ? t(e.target).parents("li").addClass(this.options.selectedClass) : t(e.target).parents("li").removeClass(this.options.selectedClass));
                var s = t(e.target).val(), o = this.getOptionByValue(s), r = t("option", this.$select).not(o),
                    a = t("input", this.$container).not(t(e.target));
                return n && a.filter(function () {
                    return t(this).is(":checked") != i
                }).trigger("click"), i ? (o.prop("selected", !0), this.options.multiple ? o.attr("selected", "selected") : (this.options.selectedClass && t(a).parents("li").removeClass(this.options.selectedClass), t(a).prop("checked", !1), r.removeAttr("selected").prop("selected", !1), this.$button.click()), "active" == this.options.selectedClass && r.parents("a").css("outline", "")) : o.removeAttr("selected").prop("selected", !1), this.updateButtonText(), this.options.onChange(o, i), this.$select.change(), this.options.preventInputChangeEvent ? !1 : void 0
            }, this)), t("li a", this.$ul).on("touchstart click", function (e) {
                e.stopPropagation(), t(e.target).blur()
            }), this.$container.on("keydown", t.proxy(function (e) {
                if (!t('input[type="text"]', this.$container).is(":focus")) if (9 != e.keyCode && 27 != e.keyCode || !this.$container.hasClass("open")) {
                    var i = t(this.$container).find("li:not(.divider):visible a");
                    if (!i.length) return;
                    var n = i.index(i.filter(":focus"));
                    38 == e.keyCode && n > 0 ? n-- : 40 == e.keyCode && n < i.length - 1 ? n++ : ~n || (n = 0);
                    var s = i.eq(n);
                    if (s.focus(), 32 == e.keyCode || 13 == e.keyCode) {
                        var o = s.find("input");
                        o.prop("checked", !o.prop("checked")), o.change()
                    }
                    e.stopPropagation(), e.preventDefault()
                } else this.$button.click()
            }, this))
        }, createOptionValue: function (e) {
            t(e).is(":selected") && t(e).attr("selected", "selected").prop("selected", !0);
            var i = t(e).attr("label") || t(e).html(), n = t(e).val(), s = this.options.multiple ? "checkbox" : "radio",
                o = t(this.templates.li);
            t("label", o).addClass(s), t("input", o).attr("type", s);
            var r = t(e).prop("selected") || !1, a = t("input", o);
            a.val(n), n == this.options.selectAllValue && a.parent().parent().addClass("multiselect-all"), t("label", o).append(" " + i), this.$ul.append(o), t(e).is(":disabled") && a.attr("disabled", "disabled").prop("disabled", !0).parents("li").addClass("disabled"), a.prop("checked", r), r && this.options.selectedClass && a.parents("li").addClass(this.options.selectedClass)
        }, createOptgroup: function (e) {
            var i = t(e).prop("label"), n = t(this.templates.liGroup);
            t("label", n).text(i), this.$ul.append(n), t("option", e).each(t.proxy(function (t, e) {
                this.createOptionValue(e)
            }, this))
        }, buildSelectAll: function () {
            var t = this.$select[0][0] ? this.$select[0][0].value == this.options.selectAllValue : !1;
            this.options.includeSelectAllOption && this.options.multiple && !t && this.$select.prepend('<option value="' + this.options.selectAllValue + '">' + this.options.selectAllText + "</option>")
        }, buildFilter: function () {
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var e = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);
                this.$select.find("option").length >= e && (this.$filter = t(this.templates.filter).attr("placeholder", this.options.filterPlaceholder), this.$ul.prepend(this.$filter), this.$filter.val(this.query).on("click", function (t) {
                    t.stopPropagation()
                }).on("keydown", t.proxy(function (e) {
                    clearTimeout(this.searchTimeout), this.searchTimeout = this.asyncFunction(t.proxy(function () {
                        this.query != e.target.value && (this.query = e.target.value, t.each(t("li", this.$ul), t.proxy(function (e, i) {
                            var n = t("input", i).val();
                            if (n != this.options.selectAllValue) {
                                var s = t("label", i).text(), n = t("input", i).val();
                                if (n && s && n != this.options.selectAllValue) {
                                    var o = !1, r = "";
                                    ("text" == this.options.filterBehavior || "both" == this.options.filterBehavior) && (r = s), ("value" == this.options.filterBehavior || "both" == this.options.filterBehavior) && (r = n), this.options.enableCaseInsensitiveFiltering && r.toLowerCase().indexOf(this.query.toLowerCase()) > -1 ? o = !0 : r.indexOf(this.query) > -1 && (o = !0), o ? t(i).show() : t(i).hide()
                                }
                            }
                        }, this)))
                    }, this), 300, this)
                }, this)))
            }
        }, destroy: function () {
            this.$container.remove(), this.$select.show()
        }, refresh: function () {
            t("option", this.$select).each(t.proxy(function (e, i) {
                var n = t("li input", this.$ul).filter(function () {
                    return t(this).val() == t(i).val()
                });
                t(i).is(":selected") ? (n.prop("checked", !0), this.options.selectedClass && n.parents("li").addClass(this.options.selectedClass)) : (n.prop("checked", !1), this.options.selectedClass && n.parents("li").removeClass(this.options.selectedClass)), t(i).is(":disabled") ? n.attr("disabled", "disabled").prop("disabled", !0).parents("li").addClass("disabled") : n.removeAttr("disabled").prop("disabled", !1).parents("li").removeClass("disabled")
            }, this)), this.updateButtonText()
        }, select: function (e) {
            e && !t.isArray(e) && (e = [e]);
            for (var i = 0; i < e.length; i++) {
                var n = e[i], s = this.getOptionByValue(n), o = this.getInputByValue(n);
                this.options.selectedClass && o.parents("li").addClass(this.options.selectedClass), o.prop("checked", !0), s.attr("selected", "selected").prop("selected", !0), this.options.onChange(s, !0)
            }
            this.updateButtonText()
        }, deselect: function (e) {
            e && !t.isArray(e) && (e = [e]);
            for (var i = 0; i < e.length; i++) {
                var n = e[i], s = this.getOptionByValue(n), o = this.getInputByValue(n);
                this.options.selectedClass && o.parents("li").removeClass(this.options.selectedClass), o.prop("checked", !1), s.removeAttr("selected").prop("selected", !1), this.options.onChange(s, !1)
            }
            this.updateButtonText()
        }, rebuild: function () {
            this.$ul.html(""), t('option[value="' + this.options.selectAllValue + '"]', this.$select).remove(), this.options.multiple = "multiple" == this.$select.attr("multiple"), this.buildSelectAll(), this.buildDropdownOptions(), this.updateButtonText(), this.buildFilter()
        }, dataprovider: function (t) {
            var e = "";
            t.forEach(function (t) {
                e += '<option value="' + t.value + '">' + t.label + "</option>"
            }), this.$select.html(e), this.rebuild()
        }, setOptions: function (t) {
            this.options = this.mergeOptions(t)
        }, mergeOptions: function (e) {
            return t.extend({}, this.defaults, e)
        }, updateButtonText: function () {
            var e = this.getSelected();
            t("button", this.$container).html(this.options.buttonText(e, this.$select)), t("button", this.$container).attr("title", this.options.buttonTitle(e, this.$select))
        }, getSelected: function () {
            return t('option:selected[value!="' + this.options.selectAllValue + '"]', this.$select)
        }, getOptionByValue: function (e) {
            return t("option", this.$select).filter(function () {
                return t(this).val() == e
            })
        }, getInputByValue: function (e) {
            return t("li input", this.$ul).filter(function () {
                return t(this).val() == e
            })
        }, updateOriginalOptions: function () {
            this.originalOptions = this.$select.clone()[0].options
        }, asyncFunction: function (t, e, i) {
            var n = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function () {
                t.apply(i || window, n)
            }, e)
        }
    }, t.fn.multiselect = function (i, n) {
        return this.each(function () {
            var s = t(this).data("multiselect"), o = "object" == typeof i && i;
            s || t(this).data("multiselect", s = new e(this, o)), "string" == typeof i && s[i](n)
        })
    }, t.fn.multiselect.Constructor = e, t(function () {
        t("select[data-role=multiselect]").multiselect()
    })
}(window.jQuery), define("multiselect", ["bootstrap"], function () {
});
var __bind = function (t, e) {
    return function () {
        return t.apply(e, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (t, e) {
    function i() {
        this.constructor = t
    }

    for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
};
define("SidebarView", ["SliderView", "teacup", "multiselect"], function (t, e) {
    var i;
    return i = function (i) {
        function n() {
            return this.parseDropdown = __bind(this.parseDropdown, this), n.__super__.constructor.apply(this, arguments)
        }

        return __extends(n, i), n.prototype.events = function () {
            return {
                "click .advanced": "toggleAdvanced",
                "change select:not(.multiselect)": "parseDropdown",
                "change input[type='checkbox']": "checkBox",
                "change form.radio": "checkRadio",
                "click .sidebar-title": "changePanel"
            }
        }, n.prototype.initialize = function (e) {
            return this.router = e.router, this.Apps = e.Apps, this.configureMultiselect(), this.$(".selectpicker").selectpicker(), this.$el.removeClass("hidden"), this.sliders = new t({el: this.$(".slider")}), this.sliders.on("slide", function (t) {
                return function (e) {
                    return t.model.set(e)
                }
            }(this)), this.refresh(), this.listenTo(this.model, "change", this.onFilterChange)
        }, n.prototype.onFilterChange = function (t) {
            var e, i, n;
            return this.allkeys = this.$(".slider").map(function () {
                return $(this).data("key")
            }), e = t.changedAttributes(), null == _.values(e)[0] ? (i = _.keys(e)[0], n = this.$(".slider[data-key='" + i + "']"), this.sliders.reset(n)) : void 0
        }, n.prototype.refresh = function () {
            return _.delay(function (t) {
                return function () {
                    return t.$(".slider").ionRangeSlider("update")
                }
            }(this), 0)
        }, n.prototype.show = function () {
            return this.$el.slideDown("swing"), this.refresh()
        }, n.prototype.collapse = function () {
            return this.$el.slideUp()
        }, n.prototype.configureMultiselect = function () {
            return this.$(".multiselect").multiselect({
                buttonWidth: "70px", onChange: function (t) {
                    return function (e, i) {
                        var n, s;
                        return n = e.parent().data("key"), s = _.pluck($(e.parent()).find("option:selected"), "text"), _.isEmpty(s) ? t.model.unset(n) : t.model.set(n, {$in: _.clone(s)})
                    }
                }(this), buttonText: function (t) {
                    return 0 === t.length ? 'Any <b class="caret"></b>' : t.length + ' <b class="caret"></b>'
                }
            })
        }, n.prototype.reset = function () {
            return this.$(".temp-filters").remove()
        }, n.prototype.openPanel = function (t) {
            var e;
            return e = "[data-route='" + t + "']", this.$(e).isEmpty() ? this.collapse() : (this.show(), this.refresh(), this.$(e).show().siblings().hide()), this.model.clear(), _.delay(function (t) {
                return function () {
                    return t.$('[data-toggle="tooltip"]').tooltip()
                }
            }(this), 0)
        }, n.prototype.parseDropdown = function (t) {
            var e, i;
            return e = $(t.currentTarget).data("key"), i = t.currentTarget.value, this.model.set(e, i)
        }, n.prototype.toggleAdvanced = function (t) {
            var e, i;
            return i = t.currentTarget, e = $(i).next(), e.toggleClass("hidden"), this.$(".ui-accordion-content").css("height", "auto"), _.delay(function (t) {
                return function () {
                    return e.find(".slider").ionRangeSlider("update")
                }
            }(this), 0)
        }, n.prototype.checkRadio = function (t) {
            var e;
            return e = {}, $(t.currentTarget).find("input").each(function () {
                var t;
                return t = $(this).data("key"), e[t] = this.checked
            }), this.model.set(e)
        }, n.prototype.checkBox = function (t) {
            var e;
            return e = $(t.currentTarget).data("key"), t.currentTarget.checked ? this.model.set(e, !0) : this.model.unset(e)
        }, n.prototype.addTextFields = function (t, i) {
            var n;
            return n = this.$(".sb-content[data-route='" + i + "']"), n.find(".temp-filters").isEmpty() && n.prepend(function () {
                return e.render(function () {
                    return e.form(".temp-filters", function () {
                        var i, n, s, o, r, a, l, u;
                        for (l = 0, u = t.length; u > l; l++) n = t[l], a = n.title, s = n.key, r = n.placeholder, i = n.extraClass, i = i ? "." + i : "", e.div(".label", a), o = {
                            type: "text",
                            placeholder: r,
                            name: s
                        }, e.input(".text-field" + i, o);
                        return e.button(".btn.btn-small.pull-down", {type: "submit"}, "Submit")
                    })
                })
            }), n.find(".temp-filters")
        }, n
    }(Backbone.View)
});
var __bind = function (t, e) {
    return function () {
        return t.apply(e, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (t, e) {
    function i() {
        this.constructor = t
    }

    for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
};
define("AppsNavigation", ["backbone", "teacup"], function (t, e) {
    var i;
    return i = function (t) {
        function i() {
            return this.routeApp = __bind(this.routeApp, this), i.__super__.constructor.apply(this, arguments)
        }

        return __extends(i, t), i.prototype.el = ".apps-nav", i.prototype.events = function () {
            return {
                "click li": function (t) {
                    return t.route = $(t.currentTarget).data("route"), document.location = "#" + t.route, this.routeApp(t)
                }
            }
        }, i.prototype.initialize = function (t) {
            return this.Apps = t.Apps, this.sidebar = t.sidebar, this.router = t.router, this.render()
        }, i.prototype.render = function () {
            return this.$(".nav").append(function (t) {
                return function () {
                    return e.render(function () {
                        var i, n, s, o, r, a, l;
                        for (r = t.Apps, l = [], s = 0, o = r.length; o > s; s++) i = r[s], n = null != (a = i.optgroup) ? a : i.option.text, l.push(e.li(i.iconClass, {
                            "data-route": i.route,
                            title: n
                        }));
                        return l
                    })
                }
            }(this)), this.$(".nav").listRadio(), this.$("li").each(function () {
                return $(this).tooltip({title: $(this).attr("title"), placement: "bottom"})
            })
        }, i.prototype.routeApp = function (t) {
            var e, i;
            return e = t.currentTarget, i = t.route, null == i && (i = $(e).data("route")), this.setDescription(i), this.toggle(i), this.trigger("change:route", i), this.sidebar.openPanel(i)
        }, i.prototype.setDescription = function (t) {
            var e;
            return e = _.find(this.Apps, function (e) {
                return e.route === t
            }).description, this.$(".app-desc").html(e)
        }, i.prototype.toggle = function (t) {
            return this.$("[data-route='" + t + "']").addClass("active").siblings().removeClass("active")
        }, i
    }(t.View)
});
var __bind = function (t, e) {
    return function () {
        return t.apply(e, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (t, e) {
    function i() {
        this.constructor = t
    }

    for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
};
define("App", ["backbone", "PeriodicTable", "SearchFieldView", "SidebarView", "AppsNavigation"], function (t, e, i, n, s) {
    var o;
    return o = function (o) {
        function r() {
            return this.showWarning = __bind(this.showWarning, this), this.setView = __bind(this.setView, this), this.routeApp = __bind(this.routeApp, this), this.fetchResultsByRouter = __bind(this.fetchResultsByRouter, this), this.listen = __bind(this.listen, this), r.__super__.constructor.apply(this, arguments)
        }

        return __extends(r, o), r.prototype.el = "#main-content", r.prototype.initialize = function (o) {
            return this.router = o.router, this.Apps = o.Apps, this.model = new t.Model({}), this.model.set("input", ""), this.searchField = new i({
                model: new t.Model({}),
                el: "#searchfield",
                Apps: this.Apps
            }), this.periodicTable = new e({el: "#pt-section"}), this.sidebar = new n({
                el: "#sidebar",
                model: new t.Model({}),
                router: this.router,
                Apps: this.Apps
            }), this.AppsNav = new s({
                router: this.router,
                sidebar: this.sidebar,
                Apps: this.Apps
            }), this.listenTo(this.searchField.model, {
                "change:route": function (t) {
                    return function (e) {
                        return t.routeApp(e.get("route"))
                    }
                }(this)
            }), this.searchField.on({
                submit: function (t) {
                    return function (e) {
                        return t.view.trigger("submit", e)
                    }
                }(this)
            }), this.AppsNav.on("change:route", this.routeApp), $(".apps-nav li").each(function () {
                return $(this).tooltip({title: $(this).attr("title"), placement: "bottom"})
            })
        }, r.prototype.listen = function () {
            return this.periodicTable.on("reset", function (t) {
                return function () {
                    return t.view.trigger("ptable:reset")
                }
            }(this)), this.listenTo(this.view.model, "change", this.fetchResultsByRouter), this.listenTo(this.view.collection, "sync", function () {
                return this.view.collection.isEmpty() ? void 0 : $("#results").scrollTo()
            }), this.view.on("warning", this.showWarning)
        }, r.prototype.fetchResultsByRouter = function (t) {
            return _.isEmpty(t.toJSON()) ? void 0 : this.router.navigate("" + this.view.route + "/" + _.encode(t), !0)
        }, r.prototype.routeApp = function (t) {
            return t !== this.view.route ? this.router.navigate(t, !0) : void 0
        }, r.prototype.setView = function (e, i, n) {
            return $("#init-loading").remove(), _.browserSupported() ? (null != this.view && this.close(), this.searchField.reset(), this.sidebar.reset(), this.view = new e({
                dispatcher: this.dispatcher,
                periodicTable: this.periodicTable,
                searchField: this.searchField,
                sidebar: this.sidebar,
                route: i,
                collection: new t.Collection,
                model: new t.Model(n ? JSON.parse(n) : {})
            }), this.AppsNav.routeApp({route: i}), null != this.view.note ? this.setNote(this.view.note) : this.setNote(""), this.searchField.model.set({route: i}), this.setMenuSelection(n), null == this.view.searchField && (this.searchField.hideInput(), this.searchField.hideButton()), this.listen(), this.periodicTable.reset(null == this.view.periodicTable)) : (this.$el.html(_.simpleModal({
                title: "Your browser is not currently supported",
                text: "Please upgrade your browser to IE9+ to use the website",
                id: "browser-modal",
                includeCloseBtn: !1
            })), $("#browser-modal").modal("show"))
        }, r.prototype.showWarning = function (t) {
            return t === !1 ? this.setNote(this.view.note || "") : this.setNote("<span class='label-bg label-bg-warning'>" + t + "</span>")
        }, r.prototype.setNote = function (t) {
            return $("#note").html(t)
        }, r.prototype.setMenuSelection = function (t) {
            var e, i;
            return null != t ? (e = _.keys(JSON.parse(t)), i = _.intersection(e, _.uniq(this.searchField.listOfKeys)), this.searchField.setSelection(i)) : this.searchField.setSelection()
        }, r.prototype.close = function () {
            var t, e, i, n;
            if (this.view.off(), null != this.view.subViews) for (n = this.view.subViews, e = 0, i = n.length; i > e; e++) t = n[e], t.remove();
            return this.view.remove()
        }, r
    }(t.View)
}), define("text!../json/Apps.json", [], function () {
    return '[\n  {\n    "filename": "MaterialsExplorer",\n    "route": "searchMaterials",\n    "optgroup": "Explore Materials",\n    "query": true,\n    "iconClass": ".fontastic-search",\n    "options": [\n      {\n        "key": "elements",\n        "placeholder": "Na-O",\n        "text": "by Elements"\n      },\n      {\n        "key": "reduced_cell_formula",\n        "placeholder": "Fe2O3",\n        "text": "by Formula"\n      },\n      {\n        "key": "task_id",\n        "placeholder": "mp-203 mp-604",\n        "text": "by IDs"\n      },\n      {\n        "key": "mpquery",\n        "placeholder": "{\'elements\':{\'$in\':[\'Li\']}, \'nelements\':2}",\n        "text": "by mpquery"\n      },\n      {\n        "key": "structure",\n        "text": "by Structure"\n      }\n    ],\n    "description": "Search for materials information by chemistry, composition, or property",\n    "intro": "Explore materials via a number of chemistries, structures, and properties. Narrow down your search by combining these filters via sliders and buttons in the sidebar on the right. Finally, click on a material id (\\"mp-123\\") to explore that material in detail."\n  },\n  {\n    "filename": "BatteryExplorer",\n    "route": "search/batteries",\n    "optgroup": "Explore Batteries",\n    "query": true,\n    "iconClass": ".fontastic-battery",\n    "options": [\n      {\n        "key": "elements",\n        "placeholder": "Co-O",\n        "text": "by Elements"\n      },\n      {\n        "key": "reduced_cell_formula",\n        "placeholder": "LiCoO3",\n        "text": "by Formula"\n      },\n      {\n        "key": "material_ids",\n        "placeholder": "mp-715480",\n        "text": "by Material IDs"\n      },\n      {\n        "key": "battid",\n        "placeholder": "mp-300585354",\n        "text": "by Battery IDs"\n      }\n    ],\n    "description": "Find candidate materials for lithium batteries. Get voltage profiles and oxygen evolution data.",\n    "intro": "Evaluate electrode performance metrics like voltage and capacity, and stability via energy above hull and oxygen evolution.  We group insertion electrodes based on structural similarity of the host framework, and conversion electrodes based only on chemistry."\n  },\n  {\n    "filename": "CrystalToolkit",\n    "route": "apps/xtaltoolkit",\n    "optgroup": "Crystal Toolkit",\n    "iconClass": ".fontastic-tools",\n    "options": [\n      {\n        "key": "materialIDs",\n        "placeholder": "mp-604 mp-203",\n        "text": "by Material IDs"\n      },\n      {\n        "key": "battIDs",\n        "placeholder": "mp-300764362 mp-30000000490",\n        "text": "by Battery IDs"\n      }\n    ],\n    "description": "Convert between CIF, MP-JSON, and VASP input files. Generate new crystals by substituting or removing species.",\n    "intro": "Visualize and transform crystal structures, and then submit them to us to calculate using our MPComplete service. Upload your crystal structure in any of a number of common file formats and perform transformations such as replacing one element for another."\n  },\n  {\n    "filename": "StructurePredictor",\n    "route": "apps/structurepredictor",\n    "iconClass": ".fontastic-struct-predictor",\n    "option": {\n      "text": "Structure Predictor"\n    },\n    "description": "Use data-mined knowledge of experimental crystal data to generate potential new compounds (ionic systems only)",\n    "intro": "Use data-mined knowledge of experimental crystal data to generate potential new compounds (ionic systems only). Pick elements constituting your chemical space of interest, and pick desired oxidation states (run several times for different choices). Check your dashboard for results."\n  },\n  {\n    "filename": "PhaseDiagramApp",\n    "route": "apps/phasediagram",\n    "iconClass": ".fontastic-phase-diagram-2",\n    "option": {\n      "text": "Phase Diagram",\n      "placeholder": "Li2O Ni Fe"\n    },\n    "description": "Use DFT calculations to generate 0K compositional and grand potential phase diagrams",\n    "intro": "Construct phase diagrams between elements or between compounds using computed data. Visualize both compositional phase diagrams and grand canonical (open wrt an element) phase diagrams. Analyze energy above hull (Ehull), an important metric of stability of a phase."\n  },\n  {\n    "filename": "PourbaixDiagramApp",\n    "route": "apps/pourbaixdiagram",\n    "iconClass": ".fontastic-pourbaix-diagram",\n    "option": {\n      "text": "Pourbaix Diagram"\n    },\n    "description": "Generate stability diagrams in aqueous solutions using DFT calculations on solids, and experimental data on ions",\n    "intro": "Predict the standard-conditions phase diagram between an arbitrary number of solids, aqueous ions, solvated phases and gases using phases available in our database. Aqueous ion concentration and solid compositions can be varied."\n  },\n  {\n    "filename": "ReactionCalculator",\n    "route": "apps/reactioncalculator",\n    "iconClass": ".fontastic-beaker",\n    "option": {\n      "text": "Calculate Reaction"\n    },\n    "description": "Determine energies of solid state reactions using a database of Density Functional Theory calculations",\n    "intro": "Predict reaction enthalpies between an arbitrary number of reactants and products as long as those compounds are in our database. The reaction calculator will balance the reaction if feasible. If available, known experimental enthalpies (at 298K and 1atm) are reported."\n  },\n  {\n    "filename": "Thermo",\n    "route": "search/thermo",\n    "iconClass": ".fontastic-thermometer-1",\n    "description": "Search for thermodynamical data compiled from external sources",\n    "option": {\n      "text": "Thermo",\n      "key": "formula",\n      "placeholder": "Fe2O3"\n    },\n    "intro": "Look up known experimental thermodynamic data of elements and compounds, such as heat capacity, standard enthalpy, and standard entropy. Type a composition (e.g., \\"Fe2O3\\") to begin."\n  },\n  {\n    "filename": "Compare",\n    "route": "compare",\n    "iconClass": ".fontastic-git-compare",\n    "description": "Compare and contrast experimental properties of elemental compounds",\n    "option": {\n      "text": "Compare Elements"\n    },\n    "intro": "List properties of up to 3 elements side-by-side. Over 25 properties are listed, such as Mendeleev Number, Melting and Boiling Point, and Bulk Modulus. This information can also be accessed through our pymatgen codebase."\n  },\n  {\n    "filename": "PorousExplorer",\n    "route": "search/porous",\n    "query": true,\n    "iconClass": ".fontastic-nanoporous",\n    "description": "Explore the structure and adsorption properties of nanoporous materials",\n    "option": {\n      "text": "Nanoporous Explorer"\n    },\n    "intro": "View structure and associated gas (methane, hydrogen) absorption data for over 500K hypothetical nanoporous materials including MOFs, ZIFs, PPNs, and Zeolites. Uses a faceted visual search for the multidimensional property space."\n  },\n  {\n    "filename": "MoleculeExplorer",\n    "route": "search/molecules",\n    "optgroup": "Explore Molecules",\n    "query": true,\n    "iconClass": ".fontastic-molecule-2",\n    "options": [\n      {\n        "key": "elements",\n        "placeholder": "H-C-O-P",\n        "text": "by Elements"\n      },\n      {\n        "key": "reduced_cell_formula",\n        "placeholder": "H2C3O3",\n        "text": "by Formula"\n      },\n      {\n        "key": "inchi",\n        "placeholder": "InChI=1S/C2H6O/c1-2-3/h3H,2H2,1H3",\n        "text": "by Inchi"\n      }\n    ],\n    "description": "Search for data on molecular compounds",\n    "intro": "Explore the Electrolyte Genome. Search molecules by computed ionization energy (IE), electron affinity (EA), element, charge, symmetry, or structural motif. Submit missing structures that we should simulate and add to the database."\n  },\n  {\n    "filename": "NRFSolubilityTool",\n    "route": "apps/rfbdashboard",\n    "query": true,\n    "iconClass": ".fontastic-beaker-science-flask",\n    "option": {\n      "text": "RFB Dashboard"\n    },\n    "description": "Link redox potential, molecular weight, and solubility to (non-)aqueous redox flow battery cost",\n    "intro": "Select redox active materials for use in nonaqueous and aqueous redox flow batteries (RFBs), a promising pathway towards low-cost grid-scale energy storage devices. Explore a techno-economic model displaying individual materials along with regions of economic viability."\n  },\n  {\n    "filename": "XASMatcher",\n    "route": "apps/xas",\n    "iconClass": ".yt-icon-xas-match",\n    "option": {\n      "text": "XAS Matcher"\n    },\n    "description": "Plot computed x-ray absorption spectra. Upload your spectrum and automatically find matches.",\n    "intro": "Display computed and uploaded X-ray absorption spectra (XAS). Automatically search the Materials Project database of computed XAS for matches to an uploaded spectrum using ensemble learning."\n  },\n  {\n    "filename": "InterfaceReactions",\n    "route": "apps/interfacereactions",\n    "iconClass": ".yt-icon-interface",\n    "option": {\n      "text": "Interface Reactions"\n    },\n    "description": "Examine reaction energy as a function of mixing ratio for two solid substances in contact.",\n    "intro": "Predict likely reaction products for two solid substances in contact. Examine reaction energies and equations as a function of mixing ratio at this interface. Optionally, open the system to an elemental reservoir to simulate flowing gas, a battery charge/discharge process, etc."\n  }\n]'
});
var __hasProp = {}.hasOwnProperty, __extends = function (t, e) {
    function i() {
        this.constructor = t
    }

    for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
}, __indexOf = [].indexOf || function (t) {
    for (var e = 0, i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
    return -1
};
define("SearchRouter", ["backbone", "App", "text!../json/Apps.json", "base"], function (t, e, i) {
    var n;
    return n = function (n) {
        function s() {
            return s.__super__.constructor.apply(this, arguments)
        }

        return __extends(s, n), s.prototype.initialize = function (n) {
            var s, o, r, a, l, u, h;
            for (this.Apps = _.filter(JSON.parse(i), _.isAuthorized), this.route("", "default", this.launchDefault), u = this.Apps, a = 0, l = u.length; l > a; a++) h = u[a], r = h.route, s = h.filename, this.route("" + r + "(/*querysplat)", s, this.search);
            return o = t.history.start(), o || (document.location = "", this.trigger("change:route", "")), this.bind("route", this._trackPageview), window.App = new e({
                router: this,
                Apps: this.Apps
            })
        }, s.prototype._routeToRegExp = function (t) {
            var e, i, n, s;
            return n = /\((.*?)\)/g, i = /(\(\?)?:\w+/g, s = /\*\w+/g, e = /[\-{}\[\]+?.,\\\^$|#\s]/g, t = t.replace(e, "\\$&").replace(n, "(?:$1)?").replace(i, function (t, e) {
                return e ? t : "([^/?]+)"
            }).replace(s, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$", "i")
        }, s.prototype.launchDefault = function (t) {
            return $.get("/get_default_app", function (e) {
                return function (i) {
                    return null != i ? (i = _.find(e.Apps, function (t) {
                        return t.filename.toLowerCase() === _.stripWhitespace(i)
                    }), null == i && (i = _.first(e.Apps))) : i = _.first(e.Apps), e.search(t, i)
                }
            }(this))
        }, s.prototype.search = function (e, i) {
            var n, s;
            return s = t.history.getFragment().toLowerCase(), null == i && (i = _.find(this.Apps, function (t) {
                return _.startsWith(s, t.route)
            })), require([i.filename], function (t) {
                return function (n) {
                    var s;
                    if (null != e) {
                        s = decodeURIComponent(e), s = s.replace(/“|”/g, '"');
                        try {
                            JSON.parse(s)
                        } catch (o) {
                            return App.setView(n, i.route), void(t._view = n)
                        }
                        (t._view !== n || null == t._view) && App.setView(n, i.route, s), null != i.query && i.query === !0 ? t.fetch({query: s}) : t.fetch(JSON.parse(s))
                    } else App.setView(n, i.route);
                    return t._view = n
                }
            }(this)), _.isEmpty(window.newsfeed_items) ? void 0 : (n = _.simpleModal({
                title: "News",
                text: window.newsfeed_items,
                id: "user-newsfeed",
                includeCloseBtn: !0
            }), $("body").append(n), $("#user-newsfeed").modal("show"), window.newsfeed_items = "")
        }, s.prototype.fetch = _.debounce(function (t) {
            return App.view.collection.fetch({
                type: "GET", data: t, complete: function (t, e) {
                    return console.log(e)
                }, error: function (t) {
                    return function (t, e) {
                        var i;
                        return i = e.responseJSON, null != i.error ? App.view.trigger("error", i.error) : void 0
                    }
                }(this)
            })
        }, 300, !0), s.prototype._trackPageview = function () {
            var e;
            return e = this.getBareUrl(t.history.getFragment().toLowerCase()), _gaq.push(["_trackPageview", "/" + e])
        }, s.prototype.getBareUrl = function (t) {
            return __indexOf.call(t, "{") >= 0 && (t = t.substring(0, t.indexOf("{"))), __indexOf.call(t, "%") >= 0 && (t = t.substring(0, t.indexOf("%"))), t
        }, s
    }(t.Router)
});
var __bind = function (t, e) {
    return function () {
        return t.apply(e, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (t, e) {
    function i() {
        this.constructor = t
    }

    for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
}, __slice = [].slice, __indexOf = [].indexOf || function (t) {
    for (var e = 0, i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
    return -1
};
define("ResultsView", ["backbone"], function () {
    var t;
    return t = function (t) {
        function e() {
            return this.showDetails = __bind(this.showDetails, this), this.formatTableData = __bind(this.formatTableData, this), this.clearFilters = __bind(this.clearFilters, this), this.loading = __bind(this.loading, this), this.render = __bind(this.render, this), e.__super__.constructor.apply(this, arguments)
        }

        return __extends(e, t), e.prototype.events = function () {
            return {
                "click .filters li": "clearFilters", "click tbody > tr": function (t) {
                    return null != this.detailPageHref ? this.showDetails(t) : void 0
                }, "change .dataTables_length select": "setDisplayLength"
            }
        }, e.prototype.template = _.template($("#results-template").html()), e.prototype.initialize = function (t) {
            return this.detailPageHref = t.detailPageHref, this.idRegexFunction = t.idRegexFunction, this.sortColumn = t.sortColumn, this.sortOrder = t.sortOrder, this.silentKeys = t.silentKeys, this.listenTo(this.collection, "request", this.loading), this.listenTo(this.collection, "sync", function (t) {
                return function () {
                    return require(["dt-bootstrap", "tabletools", "colvis"], t.render)
                }
            }(this))
        }, e.prototype.render = function () {
            var t;
            return t = this.collection.first(), !this.collection.isEmpty() && t.has("error_message") ? this.$el.html(function () {
                return tc.render(function () {
                    return tc.div(".row", function () {
                        return tc.div(".alert.alert-error.span7.offset1", t.get("error_message"))
                    })
                })
            }) : (this.$el.html(this.template({
                dataExists: !this.collection.isEmpty(),
                query: _.without.apply(_, [this.model.keys()].concat(__slice.call(this.silentKeys))),
                loading: !1
            })), this.collection.isEmpty() || this.createResultsTable(), this.$("select").selectpicker({
                style: "dropdown",
                width: "70px"
            }))
        }, e.prototype.createResultsTable = function () {
            var t, e;
            return t = this.collection.map(function (t) {
                return t.keys()
            }), e = this.getTitles(t), this.resultsTable = $(this.$("table")).dataTable({
                bScrollCollapse: !0,
                bSort: !0,
                bAutoWidth: !1,
                bRetrieve: !0,
                bFilter: !1,
                bInfo: !0,
                bLengthChange: !0,
                iDisplayLength: this.displayLength || 100,
                columnDefs: this.formatColumnHeaders(e),
                aaData: this.formatTableData(e, this.collection),
                sDom: 'TC<"clear">lfrtip',
                fnFormatNumber: function (t) {
                    return Number(t)
                },
                oTableTools: {
                    sSwfPath: "/static/components/datatables-tabletools/media/swf/copy_csv_xls_pdf.swf",
                    aButtons: ["copy", "print", {
                        sExtends: "collection",
                        sButtonText: "Export",
                        aButtons: ["csv", {sExtends: "xls", sButtonText: "excel", sFileName: "*.xls"}]
                    }]
                },
                aaSorting: [[this.sortColumn, this.sortOrder]]
            }), this.$(".DTTT_button").addClass("btn"), this.$(".ColVis_Button").addClass("btn")
        }, e.prototype.setDisplayLength = function () {
            return this.displayLength = parseInt(this.$(".dataTables_length option:selected").text())
        }, e.prototype.loading = function () {
            return null == this.loadingIcon && (this.loadingIcon = '<div class="fontastic-molecule icon rotating"></div>'), this.$el.html(this.template({
                loading: !0,
                loadingIcon: this.loadingIcon
            }))
        }, e.prototype.clearFilters = function (t) {
            var e, i;
            return e = t.currentTarget, $(e).remove(), i = $(e).data("attribute"), "elements" === i && this.model.unset("nelements"), this.model.unset(i)
        }, e.prototype.getTitles = function (t) {
            var e;
            return this.titles = _.uniq(_.flatten(t)), e = _.first(_.remove(this.titles, function (t) {
                return _.contains(t, "formula")
            })), this.titles.unshift(e), this.titles
        }, e.prototype.formatTableData = function (t, e) {
            var i;
            return i = e.map(function (e) {
                return e = e.toJSON(), t.map(function (t) {
                    var i, n;
                    return i = null != (n = e[t]) ? n : "", i = function () {
                        switch (!1) {
                            case!_.isObject(i):
                                return i[_.keys(i)[0]];
                            case!_.isNumber(i):
                                return _.cleanDecimals(i, 3, !1);
                            case!_.contains(t, "formula"):
                                return _.htmlFormula(i);
                            default:
                                return i
                        }
                    }()
                })
            }), i.filter(function (t) {
                return _.contains(_.values(t), "mol-") === !1
            })
        }, e.prototype.formatColumnHeaders = function (t) {
            return null == this.hiddenColumns && (this.hiddenColumns = []), t.map(function (t) {
                return function (e, i) {
                    var n;
                    return n = {
                        sTitle: t.formatHeaderTitle(e),
                        aTargets: [i],
                        bVisible: !(__indexOf.call(t.hiddenColumns, e) >= 0),
                        width: _.startsWith(e, "<span") ? "4%" : void 0,
                        bSortable: !_.startsWith(e, "<span")
                    }
                }
            }(this))
        }, e.prototype.formatHeaderTitle = function (t) {
            return _.prettyName(t)
        }, e.prototype.showDetails = function (t) {
            var e, i, n, s;
            return e = t.currentTarget, s = t.target, n = this.resultsTable.fnGetData(e), $(s).find("input").is("input") || $(s).is("input") ? void 0 : (i = _.find(n, this.idRegexFunction), window.open(this.detailPageHref + i))
        }, e.prototype.updateBatch = function (t) {
            var e;
            return e = this.$("input:checked").length, 0 === e ? this.$("#edit").attr("disabled", !0).text(" Edit Structures") : this.$("#edit").attr("disabled", !1).text(" Edit " + e + " Structures")
        }, e.prototype.addBatchButtons = function () {
            var t;
            return t = tc.render(function () {
                return tc.div(".btn-group", function () {
                    return tc.button("#select.btn.btn-small.fontastic-check-1", " Batch Structures"), tc.button("#edit.btn.btn-small.fontastic-edit-pen-1", " Edit Structures", {disabled: !0})
                })
            }), this.$("label").after(t)
        }, e.prototype.checkAllResults = function () {
            return this.$("input[type='checkbox']").each(function (t) {
                return 11 > t ? $(this).prop("checked", !this.checked) : void 0
            }), this.updateBatch()
        }, e
    }(Backbone.View)
});
var __bind = function (t, e) {
    return function () {
        return t.apply(e, arguments)
    }
}, __hasProp = {}.hasOwnProperty, __extends = function (t, e) {
    function i() {
        this.constructor = t
    }

    for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
    return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
}, __indexOf = [].indexOf || function (t) {
    for (var e = 0, i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
    return -1
};
define("SearchView", ["ResultsView", "teacup", "bootstrap"], function (t, e) {
    var i;
    return i = function (e) {
        function i() {
            return this.setModel = __bind(this.setModel, this), this.insertInput = __bind(this.insertInput, this), this.toggleInputs = __bind(this.toggleInputs, this), this.listen = __bind(this.listen, this), this.remove = __bind(this.remove, this), i.__super__.constructor.apply(this, arguments)
        }

        return __extends(i, e), i.prototype.initialize = function (e) {
            var i, n, s;
            return this.periodicTable = e.periodicTable, this.searchField = e.searchField, this.sidebar = e.sidebar, this.route = e.route, this.collection.url = this.collectionURL, n = null != (s = this.resultsSubclass) ? s : t, null == this.sortColumn && (this.sortColumn = 3), null == this.sortOrder && (this.sortOrder = "asc"), i = this.sidebar.$el.find("input[type='radio']").map(function () {
                return $(this).data("key")
            }), this.results = new n({
                collection: this.collection,
                model: this.model,
                sortOrder: this.sortOrder,
                sortColumn: this.sortColumn,
                idRegexFunction: this.idRegexFunction,
                detailPageHref: this.detailPageHref,
                silentKeys: null != i ? i : [],
                el: _.backboneEl("#results")
            }), this.subViews = [this.results], this.listen(), this.toggleInputs(), this.searchField.$input.focus(function (t) {
                return function () {
                    return t.searchField.$input.hasClass("ui-autocomplete-input") ? void 0 : "search/molecules" === t.route ? require(["text!../json/mol_formulas.json"], function (e) {
                        return t.formulas = JSON.parse(e), t.toggleInputs()
                    }) : require(["text!../json/formulas.json"], function (e) {
                        return t.formulas = JSON.parse(e), t.toggleInputs()
                    })
                }
            }(this)), this.searchField.$input.focus()
        }, i.prototype.remove = function () {
            return this.searchField.$input.off("focus"), i.__super__.remove.apply(this, arguments)
        }, i.prototype.listen = function () {
            return this.listenTo(this.model, "change", this.onTagRemove), this.on("ptable:reset", this.toggleInputs), this.on("submit", this.setModel), this.listenTo(this.sidebar.model, "change", this.mergeModel), this.listenTo(this.periodicTable.selections, "change", this.insertInput), this.listenTo(this.periodicTable.numbers, "change", this.insertInput), this.listenTo(this.searchField.model, {
                "change:input": function (t) {
                    var e, i, n;
                    return t.hasChanged() && (n = t.toJSON(), e = n.input, i = n.key, _.isFormula(e) && "reduced_cell_formula" !== i ? this.searchField.setSelection("reduced_cell_formula") : /^[a-z]{2,3}-/.test(e) ? this.searchField.setSelection(this.idKey) : _.contains(e, "InChI") || _.contains(e, "-") && "elements" !== i && this.searchField.setSelection("elements"), this.validateInput(e), this.periodicTable.replace(_.stripParens(e)), _.isEmpty(e)) ? this.clearKeys() : void 0
                }, "change:key": this.toggleInputs
            })
        }, i.prototype.onTagRemove = function () {
            var t, e, i;
            return t = _.difference(this.sidebar.model.keys(), this.model.keys()), (i = this.sidebar.model).unset.apply(i, t), e = _.keys(this.model.changed).some(function (t) {
                return function (e) {
                    return __indexOf.call(t.searchField.listOfKeys, e) >= 0 && !t.model.has(e)
                }
            }(this)), e ? this.searchField.replaceInput("") : void 0
        }, i.prototype.mergeModel = function (t) {
            var e, i;
            return this.model.keys() !== t.keys() ? (e = t.toJSON(), this.sidebarUnset(t), i = this.searchField.model.toJSON().input, null == i || _.isEmpty(i.trim()) || this.setModel(this.searchField.model), this.model.set(e)) : void 0
        }, i.prototype.sidebarUnset = function (t) {
            var e;
            return _.isEmpty(t.changed) || (e = _.keys(t.changed)[0], null != t.changed[e]) ? void 0 : this.model.unset(e)
        }, i.prototype.toggleInputs = function () {
            var t, e, i;
            return i = this.searchField.model.toJSON(), e = i.key, t = i.input, this.togglePeriodicTable(e), "elements" === e ? (this.addFilters(), _.isEmpty(t) || this.searchField.replaceInput(_.splitElements(t).join("-") + "-")) : null != this.$elementFilters && this.$elementFilters.remove(), _.contains(e, "formula") ? (this.periodicTable.addNumpad(), this.searchField.autocomplete({source: this.formulas}), this.searchField.replaceInput(_.without(t, " ").join(""))) : (this.periodicTable.removeNumpad(), this.searchField.autocomplete({destroy: !0}))
        }, i.prototype.insertInput = function (t) {
            var e;
            return e = t.has("numbers") ? t.get("lastClicked") : this.periodicTable.lastClicked, "elements" === this.searchField.model.get("key") && (e += "-"), this.searchField.insertInput(e)
        }, i.prototype.setModel = function (t) {
            var e, i, n, s, o, r;
            return s = t.toJSON(), i = s.input, n = s.key, this.clearKeys(!0), e = {}, this.model.unset("nelements", {silent: !0}), n === this.idKey ? i = {$in: _.compact(i.split(/[\s,]/))} : "elements" === n ? ("-" === _.last(i) && (i = i.slice(0, i.length - 1)), o = this.parseElementFilters(e, i), e = o.data, i = o.input) : "anonymous_formula" === n && (i = _.unitcellFormula(i)), e[n] = i, r = this.searchField.model.toJSON(), i = r.input, n = r.key, "elements" === n && _.isEmpty(i.trim()) && delete e.elements, this.model.set(e)
        }, i.prototype.parseElementFilters = function (t, e) {
            var i, n, s, o, r;
            for (s = this.$elementFilters.serializeArray(), o = 0, r = s.length; r > o; o++) n = s[o], _.isEmpty(n.value) || ("notelements" === n.name ? (i = this.parseElements(n.value), t[n.name] = i) : "nelements" === n.name ? t[n.name] = _.parseNumRange(n.value) : t[n.name] = n.value);
            return _.isValidWildcard(e) || null == t.nelements && (t.nelements = this.getNumElements(e)), {
                data: t,
                input: e
            }
        }, i.prototype.getNumElements = function (t) {
            return _.splitElements(t).length
        }, i.prototype.parseElements = function (t) {
            var e, i;
            return e = _.uniq(t.split(/[\s,-]/)), i = _.keys(this.periodicTable.data), e.map(function (t) {
                return _.contains(e, t) ? t : void 0
            })
        }, i.prototype.clearKeys = function (t) {
            var e, i, n, s, o, r;
            for (i = this.searchField.listOfKeys.concat(_.pluck(this.filters, "key")), null == t && (t = _.isEmpty((o = this.model).omit.apply(o, i))), r = [], n = 0, s = i.length; s > n; n++) e = i[n], r.push(this.model.unset(e, {silent: t}));
            return r
        }, i.prototype.validateInput = function (t) {
            var e, i, n;
            return e = this.searchField.model.get("key"), i = ["formula", "elements", "pretty_formula", "reduced_cell_formula"], n = _.any(i, function (t) {
                return function (t) {
                    return e === t
                }
            }(this)) ? _.validFormula(t) : "task_id" === e || "battid" === e ? t.split(" ").every(_.isMaterialId) : !0, n ? (this.searchField.trigger("valid"), this.searchField.toggleSubmit()) : (this.searchField.trigger("invalid"), this.searchField.toggleSubmit()), n
        }, i.prototype.togglePeriodicTable = function (t) {
            var e;
            return this.periodicTable.clear(), e = ["anonymous_formula", "task_id", "battid", "structure"], _.contains(e, t) ? this.periodicTable.hide() : this.periodicTable.show()
        }, i.prototype.addFilters = function () {
            return this.filters = [{
                title: this.nelementsTitle || "# of elements",
                placeholder: "e.g., 4 or >2 & <6",
                key: "nelements"
            }, {
                title: "excluded elements",
                placeholder: "Cl Br",
                key: "notelements",
                extraClass: "chemform"
            }], this.$elementFilters = this.sidebar.addTextFields(this.filters, this.route), this.$elementFilters.submit(function (t) {
                return function () {
                    return t.setModel(t.searchField.model), !1
                }
            }(this))
        }, i
    }(Backbone.View)
});