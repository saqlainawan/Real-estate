 AOS.init({
   duration: 800,
   easing: 'slide',
   once: true
 });

 jQuery(document).ready(function($) {

   "use strict";

   // Loading page
   var loaderPage = function() {
     $(".site-loader").fadeOut("slow");
   };
   loaderPage();


   var siteMenuClone = function() {

     $('.js-clone-nav').each(function() {
       var $this = $(this);
       $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
     });


     setTimeout(function() {

       var counter = 0;
       $('.site-mobile-menu .has-children').each(function() {
         var $this = $(this);

         $this.prepend('<span class="arrow-collapse collapsed">');

         $this.find('.arrow-collapse').attr({
           'data-toggle': 'collapse',
           'data-target': '#collapseItem' + counter,
         });

         $this.find('> ul').attr({
           'class': 'collapse',
           'id': 'collapseItem' + counter,
         });

         counter++;

       });

     }, 1000);

     $('body').on('click', '.arrow-collapse', function(e) {
       var $this = $(this);
       if ($this.closest('li').find('.collapse').hasClass('show')) {
         $this.removeClass('active');
       } else {
         $this.addClass('active');
       }
       e.preventDefault();

     });

     $(window).resize(function() {
       var $this = $(this),
         w = $this.width();

       if (w > 768) {
         if ($('body').hasClass('offcanvas-menu')) {
           $('body').removeClass('offcanvas-menu');
         }
       }
     })

     $('body').on('click', '.js-menu-toggle', function(e) {
       var $this = $(this);
       e.preventDefault();

       if ($('body').hasClass('offcanvas-menu')) {
         $('body').removeClass('offcanvas-menu');
         $this.removeClass('active');
       } else {
         $('body').addClass('offcanvas-menu');
         $this.addClass('active');
       }
     })

     // click outisde offcanvas
     $(document).mouseup(function(e) {
       var container = $(".site-mobile-menu");
       if (!container.is(e.target) && container.has(e.target).length === 0) {
         if ($('body').hasClass('offcanvas-menu')) {
           $('body').removeClass('offcanvas-menu');
         }
       }
     });
   };
   siteMenuClone();


   var sitePlusMinus = function() {
     $('.js-btn-minus').on('click', function(e) {
       e.preventDefault();
       if ($(this).closest('.input-group').find('.form-control').val() != 0) {
         $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
       } else {
         $(this).closest('.input-group').find('.form-control').val(parseInt(0));
       }
     });
     $('.js-btn-plus').on('click', function(e) {
       e.preventDefault();
       $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
     });
   };
   // sitePlusMinus();


   var siteSliderRange = function() {
     $("#slider-price").slider({
       range: true,
       min: 10000,
       max: 1000000,
       values: [20000, 700000],
       slide: function(event, ui) {
         $("#slider_amount").val(ui.values[0] + "PKR" + " - " + ui.values[1] + " PKR");
         $('#min_price_tb').val(ui.values[0]);
         $('#max_price_tb').val(ui.values[1]);
       }
     });
     $("#slider_amount").val($("#slider-price").slider("values", 0) + " PKR" +
       " - " + $("#slider-price").slider("values", 1) + " PKR");
     $('#min_price_tb').val($("#slider-price").slider("values", 0));
     $('#max_price_tb').val($("#slider-price").slider("values", 1));
   };
   siteSliderRange();
   var areaSliderRange = function() {
     $("#slider-area").slider({
       range: true,
       min: 10000,
       max: 1000000,
       values: [20000, 700000],
       slide: function(event, ui) {
         $("#area_amount").val(ui.values[0] + "PKR" + " - " + ui.values[1] + " PKR");
       }
     });
     // $("#area_amount").val($("#slider-area").slider("values", 0) + " PKR" +
     // 	" - " + $("#slider-area").slider("values", 1) + " PKR");
     areaSliderRange();
     //  $("#slider-area").slider();
   };

   var siteMagnificPopup = function() {
     $('.image-popup').magnificPopup({
       type: 'image',
       closeOnContentClick: true,
       closeBtnInside: false,
       fixedContentPos: true,
       mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
       gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
       },
       image: {
         verticalFit: true
       },
       zoom: {
         enabled: true,
         duration: 300 // don't foget to change the duration also in CSS
       }
     });

     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
       disableOn: 700,
       type: 'iframe',
       mainClass: 'mfp-fade',
       removalDelay: 160,
       preloader: false,

       fixedContentPos: false
     });
   };
   siteMagnificPopup();


   var siteCarousel = function() {
     if ($('.nonloop-block-13').length > 0) {
       $('.nonloop-block-13').owlCarousel({
         center: false,
         items: 1,
         loop: true,
         stagePadding: 0,
         autoplay: true,
         margin: 20,
         nav: false,
         dots: true,
         navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
         responsive: {
           600: {
             margin: 20,
             stagePadding: 0,
             items: 1
           },
           1000: {
             margin: 20,
             stagePadding: 0,
             items: 2
           },
           1200: {
             margin: 20,
             stagePadding: 0,
             items: 3
           }
         }
       });
     }

     if ($('.slide-one-item').length > 0) {
       $('.slide-one-item').owlCarousel({
         center: false,
         items: 1,
         loop: true,
         stagePadding: 0,
         margin: 0,
         autoplay: true,
         pauseOnHover: false,
         nav: true,
         animateOut: 'fadeOut',
         animateIn: 'fadeIn',
         navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
       });
     }


     if ($('.nonloop-block-4').length > 0) {
       $('.nonloop-block-4').owlCarousel({
         center: true,
         items: 1,
         loop: false,
         margin: 10,
         nav: true,
         navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
         responsive: {
           600: {
             items: 1
           }
         }
       });
     }

   };
   siteCarousel();

   var siteStellar = function() {
     $(window).stellar({
       responsive: false,
       parallaxBackgrounds: true,
       parallaxElements: true,
       horizontalScrolling: false,
       hideDistantElements: false,
       scrollProperty: 'scroll'
     });
   };
   siteStellar();

   var siteCountDown = function() {

     if ($('#date-countdown').length > 0) {
       $('#date-countdown').countdown('2020/10/10', function(event) {
         var $this = $(this).html(event.strftime('' +
           '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
           '<span class="countdown-block"><span class="label">%d</span> days </span>' +
           '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
           '<span class="countdown-block"><span class="label">%M</span> min </span>' +
           '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
       });
     }

   };
   siteCountDown();
   var siteDatePicker = function() {

     if ($('.datepicker').length > 0) {
       $('.datepicker').datepicker();
     }

   };
   siteDatePicker();

   var searchForm = function() {
     $('.main-search-form').submit(function(e) {
       var purpose = $('.main-search .nav-tabs .nav-link.active').data('purpose');
       $('#purpose_tb').val(purpose);
       $(this).submit();
       // $(this).sub
     });
   };
   searchForm();
   var searchResultSlider = function() {
     $(".search-result-slider").owlCarousel({

       navigation: true, // Show next and prev buttons
       slideSpeed: 300,
       paginationSpeed: 400,
       singleItem: true,
       items: 1,
       dots: false,
       lazyLoad: true,
       autoplay: false,
       nav: true
       // "singleItem:true" is a shortcut for:
       // items : 1,
       // itemsDesktop : false,
       // itemsDesktopSmall : false,
       // itemsTablet: false,
       // itemsMobile : false

     });
     $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
     $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
   }
   searchResultSlider();
   var singlePageSlider = function() {
     $(".single-property-slider").owlCarousel({

       navigation: true, // Show next and prev buttons
       slideSpeed: 300,
       paginationSpeed: 400,
       singleItem: true,
       items: 1,
       dots: false,
       lazyLoad: true,
       autoplay: true,
       nav: true,
       autoHeight: true,
       autowidth: true
       // "singleItem:true" is a shortcut for:
       // items : 1,
       // itemsDesktop : false,
       // itemsDesktopSmall : false,
       // itemsTablet: false,
       // itemsMobile : false

     });
     $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
     $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
   }
   singlePageSlider();
   var singlePageSlider = function() {
     var carousel = $(".content-slider-wrap").owlCarousel({

       navigation: true, // Show next and prev buttons
       slideSpeed: 300,
       paginationSpeed: 400,
       singleItem: true,
       items: 1,
       dots: false,
       lazyLoad: true,
       autoplay: false,
       nav: true,
       autoHeight: true

     });
     console.log(carousel);
     $('.action-group .next').click(function() {
       carousel.trigger('next.owl.carousel');
     });
     $('.action-group .prev').click(function() {
       carousel.trigger('prev.owl.carousel');
     });
     // $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
     // $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
   }
   singlePageSlider();
   var homeSlider = function(){
     var carousel = $(".home-slider").owlCarousel({
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       navigation: true, // Show next and prev buttons
       slideSpeed: 300,
       paginationSpeed: 400,
       singleItem: true,
       items: 1,
       dots: false,
       lazyLoad: true,
       nav: false,
       autoplay: true,
       loop:true
     });
   }
   homeSlider();
   var initMap = function() {
     // The location of Uluru
     var uluru = {
       lat: 33.6752747,
       lng: 72.98627062747398
     };
     // The map, centered at Uluru
     var map = new google.maps.Map(
       document.getElementById('map'), {
         zoom: 11,
         center: uluru
       });
     // The marker, positioned at Uluru
     var marker = new google.maps.Marker({
       position: uluru,
       map: map
     });

   }
   initMap();
 });
