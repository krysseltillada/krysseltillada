function OwlCarousel() {
    $(".testimonials-slider").length > 0 && $(".testimonials-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !0,
            navigation: !1,
            dots: !1,
            pagination: !0,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            transitionStyle: "backSlide",
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [1024, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".partner-slider").length > 0 && $(".partner-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !1,
            navigation: !1,
            dots: !1,
            pagination: !1,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".boxicon-slider").length > 0 && $(".boxicon-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !0,
            navigation: !0,
            dots: !1,
            pagination: !1,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".boxicon-slider-2").length > 0 && $(".boxicon-slider-2").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !0,
            navigation: !1,
            dots: !0,
            pagination: !0,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".image-slider").length > 0 && $(".image-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !1,
            navigation: !0,
            dots: !1,
            pagination: !1,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".process-slider").length > 0 && $(".process-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !1,
            navigation: !1,
            dots: !1,
            pagination: !0,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".portfolio-slider").length > 0 && $(".portfolio-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !1,
            navigation: !0,
            dots: !1,
            pagination: !1,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".team-slider").length > 0 && $(".team-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !1,
            navigation: !0,
            dots: !1,
            pagination: !1,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".categories-slider").length > 0 && $(".categories-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !1,
            navigation: !0,
            dots: !1,
            pagination: !1,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".blog-slider").length > 0 && $(".blog-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !0,
            navigation: !1,
            dots: !0,
            pagination: !0,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $("#product-detail-slider").length > 0 && ($("#product-detail-slider").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
            items: $(this).attr("data-desktop"),
            loop: !0,
            mouseDrag: !1,
            navigation: !0,
            dots: !1,
            pagination: !1,
            autoPlay: e,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            smartSpeed: 1e3,
            autoplayHoverPause: !0,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            itemsDesktop: [1199, $(this).attr("data-desktop")],
            itemsDesktopSmall: [979, $(this).attr("data-laptop")],
            itemsTablet: [768, $(this).attr("data-tablet")],
            itemsMobile: [479, $(this).attr("data-mobile")]
        })
    }), $(".item-img:first-child").addClass("t-active"), $(".images").on("click", ".item-img", function (e) {
        e.preventDefault(), $(".item-img").removeClass("t-active"), $(this).addClass("t-active");
        var t = $(".item-img").index(this);
        $("#product-detail-slider").trigger("owl.goTo", t)
    }), $(".owl-next").on("click", function () {
        $(".item-img").removeClass("t-active");
        var e = $(".owl-item").index($(".active"));
        $(".item-img").eq(e).addClass("t-active")
    }), $(".owl-prev").on("click", function () {
        $(".item-img").removeClass("t-active");
        var e = $(".owl-item").index($(".active"));
        $(".item-img").eq(e).addClass("t-active")
    }))
}

function introHeight() {
    var e = $(window).height();
    $(".section-fullscreen").css({
        height: e
    }), $(".fullheight").css({
        height: e
    })
}

function preSlider() {
    var e = $("#presentation");
    $("#presentation").fullpage({
        sectionsColor: ["#fff", "#fff", "#1a237e", "#fff", "#fff"],
        anchors: ["section-introduction", "section-about-us", "section-our-services", "section-our-projects", "section-contact-us"],
        menu: "#presentation-menu",
        slidesNavigation: !0,
        slidesToSections: !0,
        responsiveWidth: 900,
        responsiveSlides: !0,
        responsiveSlidesKey: "YWx2YXJvdHJpZ28uY29tX3RoVWNtVnpjRzl1YzJsMlpWTnNhV1JsY3c9PUVZdg==",
        afterLoad: function (t, a) {
            var o = e.children(".active"),
                i = o.attr("data-skin");
            $("body").attr("data-row-skin", i)
        }
    })
}

function ProgressBar() {
    $(".group-progressbar").each(function () {
        var e = $(this);
        e.waypoint({
            handler: function (t) {
                e.find(".progressbar").progressbar({
                    display_text: "center"
                })
            },
            offset: "80%"
        })
    })
}

function RevolutionInit() {
    $("#rev_slider").show().revolution({
        sliderType: "standard",
        jsFileLocation: "js/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 9e3,
        navigation: {
            onHoverStop: "off"
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [1080, 768, 960, 720],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "enterpoint",
            speed: 400,
            speedbg: 0,
            speedls: 0,
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
            disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "spinner3",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    })
}

function RevolutionInit2() {
    $("#rev_slider_2").show().revolution({
        sliderType: "standard",
        jsFileLocation: "js/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 9e3,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
                style: "uranus",
                enable: !0,
                hide_onmobile: !1,
                hide_onleave: !0,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: "",
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1440, 1024, 778, 480],
        gridheight: [1080, 768, 960, 720],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "enterpoint",
            speed: 400,
            speedbg: 0,
            speedls: 0,
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
            disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "spinner3",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    })
}

function RevolutionInit3() {
    $("#rev_slider_3").show().revolution({
        sliderType: "standard",
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9e3,
        navigation: {
            onHoverStop: "off"
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1440, 1024, 778, 480],
        gridheight: [1080, 768, 960, 720],
        lazyType: "none",
        shadow: 0,
        spinner: "spinner3",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    })
}

function RevolutionInit4() {
    $("#rev_slider_4").show().revolution({
        sliderType: "standard",
        jsFileLocation: "js/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 9e3,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
                style: "uranus",
                enable: !0,
                hide_onmobile: !1,
                hide_onleave: !0,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: "",
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1440, 1024, 778, 480],
        gridheight: [800, 768, 960, 720],
        lazyType: "none",
        shadow: 0,
        spinner: "spinner3",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    })
}

function RevolutionInit5() {
    $("#rev_slider_5").show().revolution({
        sliderType: "standard",
        jsFileLocation: "js/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 9e3,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            tabs: {
                style: "moody-tab-01",
                enable: !0,
                width: 293,
                height: 100,
                min_width: 100,
                wrapper_padding: 0,
                wrapper_color: "transparent",
                tmp: '<div class="tp-tab-content">  <span class="tp-tab-number">{{param1}}</span>  <span class="tp-tab-title">{{title}}</span></div>',
                visibleAmount: 4,
                hide_onmobile: !0,
                hide_under: 1006,
                hide_onleave: !1,
                hide_delay: 200,
                direction: "horizontal",
                span: !0,
                position: "outer-bottom",
                space: 0,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 0
            }
        },
        viewPort: {
            enable: !0,
            outof: "wait",
            visible_area: "80%",
            presize: !1
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1230, 1024, 778, 480],
        gridheight: [700, 700, 800, 800],
        lazyType: "none",
        shadow: 0,
        spinner: "spinner3",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    })
}

function RevolutionInit6() {
    $("#rev_slider_6").show().revolution({
        sliderType: "standard",
        jsFileLocation: "js/",
        sliderLayout: "auto",
        dottedOverlay: "none",
        delay: 9e3,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
                style: "uranus",
                enable: !0,
                hide_onmobile: !1,
                hide_onleave: !1,
                tmp: "",
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                }
            }
        },
        viewPort: {
            enable: !0,
            outof: "wait",
            visible_area: "80%",
            presize: !1
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1440, 1024, 778, 480],
        gridheight: [650, 550, 400, 350],
        lazyType: "none",
        shadow: 0,
        spinner: "spinner3",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: !1,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: !1
        }
    })
}

function initPortfolioFullscreenCenterSlider() {
    var e = $("#fullscreen-center-slider"),
        t = e.children(".swiper-container").first(),
        a = e.find(".swiper-button-prev"),
        o = e.find(".swiper-button-next");
    $pageContent = $(".swiper-background-fade-wrapper .inner");
    new Swiper(t, {
        nextButton: o,
        prevButton: a,
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 0,
        mousewheelControl: !0,
        loop: !0,
        loopedSlides: 1,
        onSlideChangeStart: function (e) {
            slideChangeCallback(e, $pageContent)
        },
        onSlideChangeEnd: function (e) {}
    });
    e.find(".panr").each(function () {
        var e = $(this),
            t = $("img", e),
            a = 1.05;
        t.panr({
            moveTarget: e,
            sensitivity: 50,
            scale: !1,
            scaleOnHover: !0,
            scaleTo: a,
            scaleDuration: .8,
            panDuration: 3,
            resetPanOnMouseLeave: !1
        })
    })
}

function slideChangeCallback(e, t) {
    var a = $(e.wrapper).parent().siblings(".swiper-navigation-wrap").find(".swiper-button-prev"),
        o = $(e.wrapper).parent().siblings(".swiper-navigation-wrap").find(".swiper-button-next"),
        i = $(e.wrapper).find(".swiper-slide:not(.swiper-slide-duplicate)").length,
        s = e.realIndex + "/" + i,
        l = e.realIndex + 2 + "/" + i,
        n = "",
        r = "";
    e.realIndex < 1 && (n = "first", s = i + "/" + i), e.realIndex + 2 > i && (r = "last", l = "1/" + i), a.removeClass("first").addClass(n).find(".counter").text(s), o.removeClass("last").addClass(r).find(".counter").text(l), e.previousIndex > e.activeIndex ? $(e.wrapper).removeClass("swiper-to-next-slide").addClass("swiper-to-prev-slide") : $(e.wrapper).removeClass("swiper-to-prev-slide").addClass("swiper-to-next-slide"), t.css("backgroundImage", "url(" + $(e.wrapper).find(".swiper-slide").eq(e.activeIndex).find(".portfolio-item").data("background") + ")")
}

function marqueBackground() {
    $(".background-marque").each(function () {
        var e = $(this),
            t = 0,
            a = 1,
            o = 10;
        e.hasClass("to-left") && (a = -1), e.css("background-repeat", "repeat-x");
        var i = setInterval(function () {
            t += a, e.css("background-position-x", t + "px")
        }, o);
        1 == e.data("marque-pause-on-hover") && $(this).hover(function () {
            clearInterval(i)
        }, function () {
            i = setInterval(function () {
                t += a, e.css("background-position-x", t + "px")
            }, o)
        })
    })
}

function googleMap() {
    function e() {
        var e = {
                center: a,
                zoom: 16,
                scrollwheel: !1,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
                }
            },
            t = new google.maps.Map(document.getElementById("googleMap"), e),
            i = new google.maps.Marker({
                position: o,
                icon: $obj.data("icon")
            });
        i.setMap(t)
    }

    function t() {
        var e = {
                zoom: 11,
                scrollwheel: !1,
                center: new google.maps.LatLng(40.67, -73.94),
                styles: [{
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#d3d3d3"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        color: "#808080"
                    }, {
                        visibility: "off"
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#b3b3b3"
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#ffffff"
                    }, {
                        weight: 1.8
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#d7d7d7"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#ebebeb"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry",
                    stylers: [{
                        color: "#a7a7a7"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#efefef"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#696969"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#737373"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#d6d6d6"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {}, {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#dadada"
                    }]
                }]
            },
            t = document.getElementById("map"),
            a = new google.maps.Map(t, e);
        new google.maps.Marker({
            position: new google.maps.LatLng(40.6, -73.94),
            map: a,
            title: "Megatron",
            icon: marker_image
        }), new google.maps.Marker({
            position: new google.maps.LatLng(40.68, -73.8),
            map: a,
            title: "Megatron",
            icon: marker_image
        }), new google.maps.Marker({
            position: new google.maps.LatLng(40.73, -74.128),
            map: a,
            title: "Megatron",
            icon: marker_image
        })
    }
    if ($("#googleMap").length > 0) {
        $obj = $("#googleMap");
        var a = new google.maps.LatLng($obj.data("lat"), $obj.data("lon")),
            o = new google.maps.LatLng($obj.data("lat"), $obj.data("lon"));
        google.maps.event.addDomListener(window, "load", e)
    }
    $("#map").length > 0 && (void 0 != $("#map").attr("data-marker-image") && (marker_image = $("#map").attr("data-marker-image")), google.maps.event.addDomListener(window, "load", t))
}

function Countdown() {
    $(".pl-clock").length > 0 && $(".pl-clock").each(function () {
        var e = $(this).attr("data-time");
        $(this).countdown(e, function (e) {
            $(this).html(e.strftime('<div class="countdown-item"><div class="countdown-item-value">%D</div><div class="countdown-item-label">Days</div></div><div class="separator"><span>:</span></div><div class="countdown-item"><div class="countdown-item-value">%H</div><div class="countdown-item-label">Hours</div></div><div class="separator"><span>:</span></div><div class="countdown-item"><div class="countdown-item-value">%M</div><div class="countdown-item-label">Minutes</div></div><div class="separator"><span>:</span></div><div class="countdown-item"><div class="countdown-item-value">%S</div><div class="countdown-item-label">Seconds</div></div>'))
        })
    })
}! function (e, t, a) {
    "use strict";
    a(e).on("load", function () {
        a(".noo-spinner").fadeOut(500, function () {
            a(".noo-spinner").remove()
        })
    }), a(e).on("resize", function () {}), a(e).on("scroll", function () {
        a(this).scrollTop() > 100 ? a("#backtotop").addClass("show") : a("#backtotop").removeClass("show")
    }), a(t).ready(function (a) {
        if (introHeight(), ProgressBar(), a("body").on("click", "#backtotop", function () {
                return a("html, body").animate({
                    scrollTop: 0
                }, 800), !1
            }), a(".popup-video").magnificPopup({
                type: "iframe",
                iframe: {
                    patterns: {
                        youtube: {
                            index: "youtube.com/",
                            id: function (e) {
                                var t = e.match(/[\\?\\&]v=([^\\?\\&]+)/);
                                return t && t[1] ? t[1] : null
                            },
                            src: "//www.youtube.com/embed/%id%?autoplay=1"
                        },
                        vimeo: {
                            index: "vimeo.com/",
                            id: function (e) {
                                var t = e.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                                return t && t[5] ? t[5] : null
                            },
                            src: "//player.vimeo.com/video/%id%?autoplay=1"
                        }
                    }
                }
            }), a(".gallery-item").length > 0 && a(".gallery-item").magnificPopup({
                gallery: {
                    enabled: !0
                }
            }), a(".rotate-box.style-1").each(function () {
                "" != a(this).find(".front").attr("data-image") && a(this).find(".front").css("background-image", 'url("' + a(this).find(".front").attr("data-image") + '")')
            }), OwlCarousel(), 0 == a(".left-menu-content").length && a(".header").headroom(), a(".footer").length > 0) {
            var o = a(".footer").innerHeight();
            a("#main").css("margin-bottom", o)
        }
        a("#mini-cart").on("click", function () {
            a(this).toggleClass("open")
        }), a(".btn-open-popup-search").on("click", function () {
            a(this).toggleClass("show-search"), a(".header-search").toggleClass("show-search"), a("body").toggleClass("show-search")
        }), a(".search-close").on("click", function () {
            a("body").toggleClass("show-search")
        }), a(".smooth-scroll-link").on("click", function (t) {
            if ("" !== this.hash) {
                t.preventDefault();
                var o = this.hash;
                a("html, body").animate({
                    scrollTop: a(o).offset().top
                }, 800, function () {
                    e.location.hash = o
                })
            }
        }), a(".counter-item").each(function () {
            var e = a(this).find(".number"),
                t = a(this).data("animation") ? a(this).data("animation") : "counterUp";
            if ("odometer" === t) {
                var o = e.html(),
                    i = new Odometer({
                        el: e[0],
                        value: 0
                    });
                i.render(), a(this).waypoint(function () {
                    i.update(o)
                }, {
                    offset: "90%",
                    triggerOnce: !0
                })
            } else e.counterUp({
                delay: 10,
                time: 1e3
            })
        }), a("#page-open-main-menu").on("click", function () {
            a("#toggle-menu").toggleClass("open")
        }), a("#hide-mainnav").on("click", function () {
            a("#toggle-menu").removeClass("open")
        }), a(".cms-menu-toggle").click(function () {
            a(this).prev().hasClass("submenu-open") ? a(this).prev().toggleClass("submenu-open") : (a(".sub-menu").removeClass("submenu-open"), a(this).prev().toggleClass("submenu-open"), a(this).parent("li").parent(".sub-menu").addClass("submenu-open"))
        }), a(".tab-process ul.nav-tabs li").click(function () {
            a(".tab-process .tab-pane").hide();
            var e = a(this).children("a").attr("rel");
            a("#" + e).fadeIn(), a(".tab-process ul.nav-tabs li").removeClass("active"), a(this).addClass("active"), a(".tab-pane-heading").removeClass("active"), a(".tab-pane-heading[rel^='" + e + "']").addClass("active")
        }), a(".tab-pane-heading").on("click", function () {
            if (!a(this).hasClass("active")) {
                a(".tab-pane-heading").removeClass("active"), a(this).addClass("active"), a(".tab-pane").removeClass("show").slideUp(1e3);
                var e = a(this).attr("rel");
                a("#" + e).addClass("show").slideDown(1e3)
            }
        }), a(t).on("show.bs.collapse hide.bs.collapse", ".accordion", function (e) {
            var t = a(e.target);
            "show" == e.type && a(".accordion-header").removeClass("active"), t.prev(".accordion-header").addClass("active"), "hide" == e.type && t.prev(".accordion-header").removeClass("active")
        }), a(".media").length > 0 && a(".media").fitVids(), a("#typed").length > 0 && a("#typed").typed({
            stringsElement: a("#typed-strings"),
            typeSpeed: 30,
            backDelay: 500,
            loop: !0,
            contentType: "html",
            loopCount: !1,
            cursorChar: "|"
        }), a("#presentation").length > 0 && preSlider(), a("#multiScroll").length > 0 && (a("#multiScroll").multiscroll({
            sectionsColor: [],
            menu: !1,
            navigation: !0,
            loopBottom: !0,
            loopTop: !0,
            navigationPosition: "right"
        }), a("#multiscroll-nav > ul > li ").each(function (e) {
            a(this).children("a").attr("href", "javascript:void()")
        })), a(".portfolio-fullscreen-slider-center").length > 0 && initPortfolioFullscreenCenterSlider(), marqueBackground(), googleMap(), Countdown(), a(".page-open-mobile-menu, .page-close-mobile-menu").on("click", function () {
            a(".page-mobile-main-menu").toggleClass("open")
        }), a(".toggle-sub-menu").on("click", function () {
            a(this).parent("a").next().hasClass("open") ? (a(this).parent("a").next().toggleClass("open"), a(this).toggleClass("open")) : (a(".sub-menu").removeClass("open"), a(this).parent("a").next().toggleClass("open"), a(this).parent("a").parent("li").parent(".sub-menu").addClass("open"), a(".toggle-sub-menu").removeClass("open"), a(this).parent("a").parent("li").parent(".sub-menu").siblings("a").children(".toggle-sub-menu").toggleClass("open"), a(this).toggleClass("open"))
        }), a("#rev_slider").length > 0 && RevolutionInit(), a("#rev_slider_2").length > 0 && RevolutionInit2(), a("#rev_slider_3").length > 0 && RevolutionInit3(), a("#rev_slider_4").length > 0 && RevolutionInit4(), a("#rev_slider_5").length > 0 && RevolutionInit5(), a("#rev_slider_6").length > 0 && RevolutionInit6()
    })
}(window, document, jQuery);