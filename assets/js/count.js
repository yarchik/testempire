(window.webpackJsonp = window.webpackJsonp || []).push([[110], {
    1065: function(t, n, e) {
        "use strict";
        e.r(n);
        e(216),
            e(41);
        var r = e(54)
            , o = {
            props: {
                list: {
                    type: Array,
                    require: !0
                }
            },
            methods: {
                increase: function(t) {
                    var n, e;
                    function r(i, e, o) {
                        i <= e ? (o.innerHTML = i,
                            setTimeout((function() {
                                    r(i + 1, e, o)
                                }
                            ), n)) : t.closest(".js-finish").classList.add("finish")
                    }
                    e = Number(t.innerHTML),
                        n = t.dataset.speed,
                        r(0, e, t)
                }
            },
            mounted: function() {
                r.b.addVueLoopRefs(this.$refs),
                    window.$oyiAnimateIndicator = this.increase
            },
            destroyed: function() {}
        }
            , d = (e(901),
            e(5))
            , l = Object(d.a)(o, (function() {
                var t = this
                    , n = t.$createElement
                    , e = t._self._c || n;
                return e("div", {
                    staticClass: "s-indi"
                }, [e("div", {
                    staticClass: "wrap"
                }, [e("div", {
                    staticClass: "s-indi__wrap"
                }, [e("ul", {
                    staticClass: "s-indi__letters"
                }, t._l(t.list, (function(i, n) {
                        return e("li", {
                            staticClass: "s-indi__letter js-finish"
                        }, [e("span", {
                            staticClass: "s-indi__value"
                        }, [e("b", {
                            ref: "value" + n,
                            refInFor: !0,
                            attrs: {
                                "data-speed": i.speed,
                                "data-callback": "AnimateIndicator"
                            }
                        }, [t._v(t._s(i.value))]), i.showPlus ? e("span", {
                            staticClass: "s-indi__plus"
                        }, [t._v("+")]) : t._e()]), t._v(" "), e("span", {
                            staticClass: "s-indi__title"
                        }, [t._v(t._s(i.title))])])
                    }
                )), 0)])])])
            }
        ), [], !1, null, null, null).exports;
        n.default = l
    },
    601: function(t, n, e) {
        var content = e(902);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            e(20).default)("16afcd91", content, !0, {
            sourceMap: !1
        })
    },
    901: function(t, n, e) {
        "use strict";
        e(601)
    },
    902: function(t, n, e) {
        var r = e(19)(!1);
        r.push([t.i, '@-webkit-keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.2)}to{transform:scale(1)}}@-webkit-keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@-webkit-keyframes shake-min{10%,90%{transform:translate3d(-.5px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}@keyframes shake-min{10%,90%{transform:translate3d(-.5px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}@-webkit-keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}@keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}.s-indi{position:relative;z-index:1;padding:0;height:0;background-color:#fff}@media only screen and (max-width:1200px){.s-indi{height:100px}}@media only screen and (max-width:960px){.s-indi{height:auto;padding-top:80px;padding-bottom:80px}}@media only screen and (max-width:480px){.s-indi{height:auto}}.s-indi:after{content:"";position:absolute;bottom:200px;left:0;height:1px;background-color:#e0e0e0;width:100%}@media only screen and (max-width:960px){.s-indi:after{background-color:transparent}}.s-indi__wrap{position:relative;bottom:200px;z-index:1}@media only screen and (max-width:1200px){.s-indi__wrap{bottom:100px}}@media only screen and (max-width:960px){.s-indi__wrap{bottom:auto}}.s-indi__letters{display:flex;justify-content:space-between;transform:translateY(-50%);margin:0;padding:0}@media only screen and (max-width:960px){.s-indi__letters{flex-wrap:wrap;transform:none}}.s-indi__letter{position:relative;display:flex;padding:0 30px;flex-direction:column;align-items:center;width:25%}@media only screen and (max-width:960px){.s-indi__letter{margin-bottom:0;margin-top:80px;padding:0;width:100%}.s-indi__letter:first-child{margin-top:0}}.s-indi__letter:after{content:"";position:absolute;transition:all .5s;top:calc(50% - 3px);left:50%;transform:translate(-50%,-50%);width:24px;height:24px;border:6px solid #fff;border-radius:50%;box-shadow:0 6px 6px rgba(0,0,0,.25);background-color:#f9f9fb}@media only screen and (max-width:960px){.s-indi__letter:after{display:none}}.s-indi__letter.finish:after{background-color:#ffdb00;box-shadow:0 4px 4px rgba(0,0,0,.25)}.s-indi__plus{display:inline-block;opacity:0;transition:opacity .2s,transform .6s cubic-bezier(.17,.67,.12,1.54);transform:translateX(-10px) scale(.5)}.s-indi__letter.finish .s-indi__plus{opacity:1;transform:none}.s-indi__value{display:block;font-size:40px;margin-bottom:45px}@media only screen and (max-width:960px){.s-indi__value{margin-bottom:20px}}.s-indi__title{max-width:190px;font-size:14px;line-height:18px;font-family:"GothamBold",-apple-system,BlinkMacSystemFont,Verdana,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;text-transform:uppercase;margin-top:45px;text-align:center}@media only screen and (max-width:960px){.s-indi__title{margin-top:0}}', ""]),
            t.exports = r
    }
}]);
