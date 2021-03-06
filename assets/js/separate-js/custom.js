/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-SETTING
-Preloader
-Sticky Header
-Scroll Animation
-Animated WOW
-Dropdown Menu Fade
-Menu Android
-Disable Mobile Animated
-Animated Entrances
-Scroll Top
-Video player
-Loader blocks
-Accordion
-Tooltip
-Zoom Images
-Main slider
-OWL Sliders
-Map
*/



$(document).ready(function() {

    "use strict";


/////////////////////////////////////////////////////////////////
// SETTING
/////////////////////////////////////////////////////////////////

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();


    var tabletWidth = 767;
    var mobileWidth = 640;



/////////////////////////////////////////////////////////////////
// Preloader
/////////////////////////////////////////////////////////////////


    var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');




   

/////////////////////////////////////
//  Scroll Animation
/////////////////////////////////////


if ($('.wow').length > 0) {
    window.sr = ScrollReveal({
        reset:true
    });

    sr.reveal('.wow');
  }



/////////////////////////////////////////////////////////////////
//   Dropdown Menu Fade
/////////////////////////////////////////////////////////////////


    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );


    $(".yamm .navbar-nav>li").hover(
        function() {
            $('.dropdown-menu', this).fadeIn("fast");
        },
        function() {
            $('.dropdown-menu', this).fadeOut("fast");
        });


    window.prettyPrint && prettyPrint();
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation();
    });


    $(".yamm .navbar-collapse .nav > li > a").hover(
        function() {
            $('.navbar-collapse').addClass("open");
        },
        function() {
            $('.navbar-collapse').removeClass("open");
        });


/////////////////////////////////////
//  Menu Android
/////////////////////////////////////

$( '.navbar-nav li:has(ul)' ).doubleTapToGo();



/////////////////////////////////////
//  Search Animation
/////////////////////////////////////



    $('.search-open, .search-close').on('click', function(e) {
        e.preventDefault();
        $('.header-search ').toggleClass('open-search');
        $('.header-search').toggleClass('open');
    });




/////////////////////////////////////
//  Disable Mobile Animated
/////////////////////////////////////

    if (windowWidth < mobileWidth) {

        $("body").removeClass("animated-css");

    }


        $('.animated-css .animated:not(.animation-done)').waypoint(function() {

                var animation = $(this).data('animation');

                $(this).addClass('animation-done').addClass(animation);

        }, {
                        triggerOnce: true,
                        offset: '90%'
        });



//////////////////////////////
// Animated Entrances
//////////////////////////////



    if (windowWidth > 1200) {

        $(window).scroll(function() {
                $('.animatedEntrance').each(function() {
                        var imagePos = $(this).offset().top;

                        var topOfWindow = $(window).scrollTop();
                        if (imagePos < topOfWindow + 400) {
                                        $(this).addClass("slideUp"); // slideUp, slideDown, slideLeft, slideRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
                        }
                });
        });

    }




/////////////////////////////////////
//  SCROLL TOP
/////////////////////////////////////


    $('.link-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });



/////////////////////////////////////
//  Video player
/////////////////////////////////////


if ($('.player').length > 0) {
  $(".player").flowplayer();
}



/////////////////////////////////////
//  Loader blocks
/////////////////////////////////////


    $( ".scroll-next" ).on( "click", function() {

        var hiddenContent =  $( ".scroll-next + .content") ;

        $(".scroll-next").hide() ;
        hiddenContent.show() ;
        hiddenContent.addClass("animated");
        hiddenContent.addClass("animation-done");
        hiddenContent.addClass("bounceInUp");

    });



/////////////////////////////////////////////////////////////////
// Accordion
/////////////////////////////////////////////////////////////////

    $(".btn-collapse").on('click', function () {
            $(this).parents('.panel-group').children('.panel').removeClass('panel-default');
            $(this).parents('.panel').addClass('panel-default');
            if ($(this).is(".collapsed")) {
                $('.panel-title').removeClass('panel-passive');
            }
            else {$(this).next().toggleClass('panel-passive');
        };
    });




/////////////////////////////////////
//  Tooltip
/////////////////////////////////////


    $('.link-tooltip-1').tooltip({
    template: '<div class="tooltip tooltip-1" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  });
    $('.link-tooltip-2').tooltip({
    template: '<div class="tooltip tooltip-2" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  });





/////////////////////////////////////
//  Zoom Images
/////////////////////////////////////



if ($('.zoom-gallery').length > 0) {
    $('.zoom-gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.zoom-gallery__item', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            },
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below

      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
        });
    });
  }


if ($('.zoom-images').length > 0) {
    $('.zoom-images').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below

      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });

  }




////////////////////////////////////////////
// Main slider
///////////////////////////////////////////


    if ($('#main-slider').length > 0) {

            var sliderWidth = $("#main-slider").data("slider-width");
            var sliderHeigth = $("#main-slider").data("slider-height");

            $( '#main-slider' ).sliderPro({
                width:  sliderWidth,
                height: sliderHeigth,
                aspectRatio: 1.5,
                visibleSize: '100%',
                forceSize: 'fullWidth',
                autoplay: true,
                buttons: false
            });
    }



    if ($('#main-slider-2').length > 0) {


            var sliderWidth = $("#main-slider-2").data("slider-width");
            var sliderHeigth = $("#main-slider-2").data("slider-height");
            var sliderArrows = $("#main-slider-2").data("slider-arrows");
            var sliderButtons = $("#main-slider-2").data("slider-buttons");

            $( '#main-slider-2' ).sliderPro({
                width:  sliderWidth,
                height: sliderHeigth,
                arrows: sliderArrows,
                buttons: sliderButtons,
                fade: true,
                fullScreen: true,
                autoplay: true
            });
    }



    if ($('#main-slider-3').length > 0) {


            var sliderWidth = $("#main-slider-3").data("slider-width");
            var sliderHeigth = $("#main-slider-3").data("slider-height");
            var sliderArrows = $("#main-slider-3").data("slider-arrows");
            var sliderButtons = $("#main-slider-3").data("slider-buttons");

            $('#main-slider-3').sliderPro({
                width:  sliderWidth,
                height: sliderHeigth,
                arrows: sliderArrows,
                buttons: sliderButtons,
                waitForLayers: true,
                thumbnailWidth: 555,
                thumbnailHeight: 250,
                thumbnailPointer: true,
                autoplay: true,
                autoScaleLayers: false,
                breakpoints: {
                  500: {
                    thumbnailWidth: 120,
                    thumbnailHeight: 50
                  }
                }

            });
    }



/////////////////////////////////////////////////////////////////
// OWL Sliders
/////////////////////////////////////////////////////////////////

    var Core = {

        initialized: false,

        initialize: function() {

                if (this.initialized) return;
                this.initialized = true;

                this.build();

        },

        build: function() {

        // Owl Carousel

            this.initOwlCarousel();
        },
        initOwlCarousel: function(options) {

            $(".enable-owl-carousel").each(function(i) {
                var $owl = $(this);

                var itemsData = $owl.data('items');
                var navigationData = $owl.data('navigation');
                var paginationData = $owl.data('pagination');
                var singleItemData = $owl.data('single-item');
                var autoPlayData = $owl.data('auto-play');
                var transitionStyleData = $owl.data('transition-style');
                var mainSliderData = $owl.data('main-text-animation');
                var afterInitDelay = $owl.data('after-init-delay');
                var stopOnHoverData = $owl.data('stop-on-hover');
                var min480 = $owl.data('min480');
                var min768 = $owl.data('min768');
                var min992 = $owl.data('min992');
                var min1200 = $owl.data('min1200');

                $owl.owlCarousel({
                    navigation : navigationData,
                    pagination: paginationData,
                    singleItem : singleItemData,
                    autoPlay : autoPlayData,
                    transitionStyle : transitionStyleData,
                    stopOnHover: stopOnHoverData,
                    navigationText : ["<i></i>","<i></i>"],
                    items: itemsData,
                    itemsCustom:[
                                    [0, 1],
                                    [465, min480],
                                    [750, min768],
                                    [975, min992],
                                    [1185, min1200]
                    ],
                    afterInit: function(elem){
                                if(mainSliderData){
                                        setTimeout(function(){
                                                $('.main-slider_zoomIn').css('visibility','visible').removeClass('zoomIn').addClass('zoomIn');
                                                $('.main-slider_fadeInLeft').css('visibility','visible').removeClass('fadeInLeft').addClass('fadeInLeft');
                                                $('.main-slider_fadeInLeftBig').css('visibility','visible').removeClass('fadeInLeftBig').addClass('fadeInLeftBig');
                                                $('.main-slider_fadeInRightBig').css('visibility','visible').removeClass('fadeInRightBig').addClass('fadeInRightBig');
                                        }, afterInitDelay);
                                    }
                    },
                    beforeMove: function(elem){
                        if(mainSliderData){
                                $('.main-slider_zoomIn').css('visibility','hidden').removeClass('zoomIn');
                                $('.main-slider_slideInUp').css('visibility','hidden').removeClass('slideInUp');
                                $('.main-slider_fadeInLeft').css('visibility','hidden').removeClass('fadeInLeft');
                                $('.main-slider_fadeInRight').css('visibility','hidden').removeClass('fadeInRight');
                                $('.main-slider_fadeInLeftBig').css('visibility','hidden').removeClass('fadeInLeftBig');
                                $('.main-slider_fadeInRightBig').css('visibility','hidden').removeClass('fadeInRightBig');
                        }
                    },
                    afterMove: sliderContentAnimate,
                    afterUpdate: sliderContentAnimate,
                });
            });

            function sliderContentAnimate(elem){
                var $elem = elem;
                var afterMoveDelay = $elem.data('after-move-delay');
                var mainSliderData = $elem.data('main-text-animation');
                if(mainSliderData){
                    setTimeout(function(){
                        $('.main-slider_zoomIn').css('visibility','visible').addClass('zoomIn');
                        $('.main-slider_slideInUp').css('visibility','visible').addClass('slideInUp');
                        $('.main-slider_fadeInLeft').css('visibility','visible').addClass('fadeInLeft');
                        $('.main-slider_fadeInRight').css('visibility','visible').addClass('fadeInRight');
                        $('.main-slider_fadeInLeftBig').css('visibility','visible').addClass('fadeInLeftBig');
                        $('.main-slider_fadeInRightBig').css('visibility','visible').addClass('fadeInRightBig');
                    }, afterMoveDelay);
                }
            }
        },

    };

    Core.initialize();



});

