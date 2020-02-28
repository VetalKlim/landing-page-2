! function(t) {
    var e = {};

    function o(r) { if (e[r]) return e[r].exports; var i = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, o), i.l = !0, i.exports }
    o.m = t, o.c = e, o.d = function(t, e, r) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(r, i, function(e) { return t[e] }.bind(null, i));
        return r
    }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 2)
}([, , function(t, e, o) { t.exports = o(3) }, function(t, e) {
    $(document).ready(function() {
        let t = [{ pfoto: "foto1.png", text1: "Lorem lpsum is simplyt dummy text of ", text2: "We work with investors to make managing your investments easy!  " }, { pfoto: "foto2.jpg", text1: "Lorem lpsum is simplyt", text2: "We wortor to make 2! " }, { pfoto: "foto3.jpg", text1: "Lorem ipsum dolor sit amet.", text2: "We wortor to make managing 3! " }, { pfoto: "foto4.jpg", text1: "Lorem ipsum dolor.", text2: "We wortor to make 4! " }, { pfoto: "foto5.jpg", text1: "Lorem ipsum dolor  amet.", text2: "We wortor to make 5! " }];
        ! function() {
            let e = t.map(t => t.pfoto);
            console.log(e);
            let o = {};
            for (let e in t) o[t[e].text1] = null;
            o = Object.keys(o), console.log(o);
            let r = {};
            for (let e in t) r[t[e].text2] = null;
            r = Object.keys(r), console.log(r);
            let i = 0,
                l = 0,
                n = $("#introSlider .slider_container"),
                c = $("#introSlider .slider_controls"),
                s = $("#introSlider .textSlider"),
                d = function() { $("#introSlider .buttonSlider").removeClass("buttonSlider--isActive"), $('#introSlider .buttonSlider[data-id="' + i + '"]').addClass("buttonSlider--isActive"), n.css({ "background-image": "url(img/" + e[i], width: "96.3%" }), $('#introSlider .buttonSlider[data-id="' + l + '"]'), s.html('<p class="textInsideTheSlider1">' + o[l] + '<p class="textInsideTheSlider2">' + r[l]) };
            d();
            for (let t = 0; t < e.length; t++) c.append('<div data-id="' + t + '"class="buttonSlider">');
            $("#introSlider .buttonSlider").click(function() { i = +$(this).attr("data-id"), l = +$(this).attr("data-id"), d() })
        }(),
        function() {
            let t = $("#blockLiForm1"),
                e = $("#blockLiForm2"),
                o = $("#blockForm1"),
                r = $("#blockForm2");
            $("#blockLiForm1").css({ background: "#5192BA", color: "white" }), e.click(function() { o.slideUp("searthBlock1"), r.show("theWishlist"), $("#blockLiForm1").css({ background: "#C2F2ED", color: "#4B83A6" }), $("#blockLiForm2").css({ background: "#5192BA", color: "white" }) }), t.click(function() { r.slideUp("theWishlist"), o.show("searthBlock1"), $("#blockLiForm2").css({ background: "#C2F2ED", color: "#4B83A6" }), $("#blockLiForm1").css({ background: "#5192BA", color: "white" }) })
        }();
        $("#bottomLeft").click(function() {
            let t = $(".listSlider.curry"),
                e = $(".listSlider.curry").index() + 1,
                o = $(".listSlider").eq(e);
            t.fadeOut(0), t.removeClass("curry"), e == $(".listSlider:last").index() + 1 ? ($(".listSlider").eq(0).fadeIn(0), $(".listSlider").eq(0).addClass("curry")) : (o.fadeIn(500), o.addClass("curry"))
        });
        $("#bottomRight").click(function() {
            let t = $(".listSlider.curry"),
                e = $(".listSlider.curry").index() - 1,
                o = $(".listSlider").eq(e);
            t.fadeOut(0), t.removeClass("curry"), o.fadeIn(500), o.addClass("curry")
        });
        ! function() {
            let t = $("#menu-link"),
                e = $(".menuAdaptiveBlock");
            t.click(function() { e.toggleClass("hiddenMenuAdaptive"), t.toggleClass("menuClickAktive") })
        }();
        $(".photoShow").click(function() {
            let t = $(this).attr("src");
            $("body").append("<div class='popup'><div class='popup_bg'></div><img src=" + t + " class='popup_img'/></div>"), $(".popup").fadeIn(500), $(".popup_bg").click(function() { $(".popup").fadeOut(500), setTimeout(function() { $(".popup").remove() }, 500) })
        })
    })
}]);