(function ($) {
  "use strict";

  /* ---------------------------------------------

  Navigation menu

  --------------------------------------------- */

  // dropdown for mobile
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };

  $(window).load(function () {});

  // start fugu text infinite slider
  var FuguTextSlider = function ($scope, $) {
    var wrapper = $scope.find(".fugu-text-slider");
    if (wrapper.length === 0) return;
    // var settings = wrapper.data('settings');

    wrapper.slick({
      rtl: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      cssEase: "linear",
      pauseOnHover: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  };

  // start fugu slider one
  var FuguSliderOne = function ($scope, $) {
    var wrapper = $scope.find(".fugu-slider-one");
    if (wrapper.length === 0) return;
    // var settings = wrapper.data('settings');
    wrapper.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      dots: false,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  };

  // start nft slider one
  var FuguNftSlider = function ($scope, $) {
    var wrapper = $scope.find(".fugu-nft-slider");
    if (wrapper.length === 0) return;
    // var settings = wrapper.data('settings');
    wrapper.slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      cssEase: "linear",
      pauseOnHover: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  };

  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu_text_slider_widget.default",
      FuguTextSlider
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu_project_card.default",
      FuguSliderOne
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu_nft_slider.default",
      FuguNftSlider
    );
  });
})(jQuery);
