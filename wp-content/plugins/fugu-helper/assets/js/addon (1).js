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

  var FuguGlobal = function ($scope, $) {
    if ($scope.hasClass("fugu-sticky-yes")) {
      var current_widget = $scope;
      current_widget.wrap('<div class="sticky-wrapper"></div>');
      var headerHeight = $(current_widget).parent(".sticky-wrapper").height(),
        stickyWrapper = $(current_widget).parent(".sticky-wrapper");
      stickyWrapper.css("height", headerHeight + "px");
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          if ($scope.hasClass("fugu-sticky-yes")) {
            stickyWrapper.addClass("is-sticky");
            console.log(stickyWrapper);
          }
        } else {
          if ($scope.hasClass("fugu-sticky-yes")) {
            stickyWrapper.removeClass("is-sticky");
          }
        }
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          if ($scope.hasClass("fugu-sticky-yes")) {
            $scope.addClass("reveal-sticky");
          }
        } else {
          if ($scope.hasClass("fugu-sticky-yes")) {
            $scope.removeClass("reveal-sticky");
          }
        }
      }
    }
  };

  var FuguductCategories = function () {
    if ($.fn.isotope) {
      var $gridMas = $(".product-categories-wrap.masonry");

      $gridMas.isotope({
        itemSelector: ".fugu-product-cat-wrap",
        percentPosition: true,
        layoutMode: "packery",
      });

      $gridMas.imagesLoaded().progress(function () {
        $gridMas.isotope();
      });
    }
  };

  var FuguPostLoop = function () {
    if ($.fn.isotope) {
      $(".fugu-post-widget-area.masonry").isotope({
        itemSelector: ".fugu-post-widget-area.masonry>div",
        percentPosition: true,
        layoutMode: "packery",
      });
    }
  };

  //portfolio gallery js start
  var Fugu_Portfolio_Gallery_Js = function ($scope, $) {
    if ($.fn.isotope) {
      var gridMas = $(".fugu-pf-gallery-wrap.layout-mode-masonry");

      gridMas
        .isotope({
          itemSelector: ".fugu-pf-gallery-wrap .fugu-portfolio-item-wrap",
          percentPosition: true,
          layoutMode: "packery",
        })
        .resize();

      gridMas.imagesLoaded().progress(function () {
        gridMas.isotope();
      });
    }

    if ($(".fugu-pf-gallery-slider").length > 0) {
      var wrapper = $scope.find(".fugu-pf-gallery-slider");
      if (wrapper.length === 0) return;
      var settings = wrapper.data("settings");

      wrapper.slick({
        infinite: settings["loop"],
        speed: 900,
        slidesToShow: settings["per_coulmn"],
        slidesToScroll: 1,
        autoplay: settings["autoplay"],
        autoplaySpeed: settings["autoplaytimeout"],
        arrows: settings["nav"],
        prevArrow:
          '<button type="button" class="fugu-slick-prev">' +
          settings.prev_icon +
          "</button>",
        nextArrow:
          '<button type="button" class="fugu-slick-next">' +
          settings.next_icon +
          "</button>",
        draggable: settings["mousedrag"],
        dots: settings["dots"],
        lazyLoad: "ondemand",
        dotsClass: "fugu-pf-gallery-slider-dots",
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: settings["per_coulmn_tablet"],
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: settings["per_coulmn_mobile"],
            },
          },
        ],
      });
    }
  };

  var Fugu_Team_Js = function ($scope, $) {
    var wrapper = $scope.find(".team-slider");
    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");
    wrapper.slick({
      infinite: true,
      speed: 900,
      slidesToShow: settings["per_coulmn"],
      slidesToScroll: 1,
      autoplay: settings["autoplay"],
      autoplaySpeed: settings["autoplaytimeout"],
      arrows: settings["nav"],
      draggable: settings["mousedrag"],
      dots: settings["dots"],
      lazyLoad: "ondemand",
      dotsClass: "team-slider-dot-list",
      swipe: true,
      appendArrows: ".team-slider-arrow",
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: settings["per_coulmn"],
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: settings["per_coulmn_tablet"],
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: settings["per_coulmn_mobile"],
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(document).ready(function () {
      $(".team-slider-arrow button").click(function () {
        $(".team-slider-arrow button").removeClass("slick-active");
        $(this).addClass("slick-active");
      });
    });
  };

  var Fugu_Testimonial_Js = function ($scope, $) {
    var wrapper = $scope.find(".testimonial-slider");
    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");
    wrapper.slick({
      infinite: true,
      speed: 900,
      slidesToShow: settings["per_coulmn"],
      slidesToScroll: 1,
      autoplay: settings["autoplay"],
      autoplaySpeed: settings["autoplaytimeout"],
      arrows: settings["nav"],
      draggable: settings["mousedrag"],
      dots: settings["dots"],
      lazyLoad: "ondemand",
      centerMode: settings["show_center_mode"],
      dotsClass: "testimonial-slider-dot-list",
      swipe: true,
      vertical: settings["show_vertical"],
      appendArrows: ".team-slider-arrow",
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: settings["per_coulmn"],
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: settings["per_coulmn_tablet"],
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: settings["per_coulmn_mobile"],
            slidesToScroll: 1,
            vertical: false,
          },
        },
      ],
    });
  };

  //portfolio js start
  var Fugu_Portfolio_Js = function ($scope, $) {
    if ($.fn.isotope) {
      var $gridMas = $(".fugu-portfolio-wrap.layout-mode-masonry");
      var $grid = $(
        ".fugu-portfolio-wrap.layout-mode-normal.enable-filter-yes"
      );

      $grid
        .isotope({
          itemSelector: ".fugu-portfolio-item-wrap",
          percentPosition: true,
          layoutMode: "fitRows",
        })
        .resize();

      $grid
        .imagesLoaded()
        .progress(function () {
          $grid.isotope("layout");
        })
        .resize();

      $gridMas.isotope({
        itemSelector: ".fugu-portfolio-item-wrap",
        percentPosition: true,
        layoutMode: "packery",
      });

      $gridMas.imagesLoaded().progress(function () {
        $gridMas.isotope("layout");
      });

      $grid.isotope().resize();
      $gridMas.isotope().resize();

      $(".pf-isotope-nav li").on("click", function () {
        $(".pf-isotope-nav li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $gridMas.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });

        var selector = $(this).attr("data-filter");
        $grid.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      });
    }

    //Portfolio slider

    var wrapper = $scope.find(".portfolio-slider");
    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");
    wrapper.slick({
      infinite: true,
      speed: 900,
      slidesToShow: settings["per_coulmn"],
      slidesToScroll: 1,
      autoplay: settings["autoplay"],
      autoplaySpeed: settings["autoplaytimeout"],
      arrows: settings["nav"],
      draggable: settings["mousedrag"],
      dots: settings["dots"],
      lazyLoad: "ondemand",
      dotsClass: "portfolio-slider-dot-list",
      swipe: true,
      appendArrows: ".portfolio-slider-arrow",
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: settings["per_coulmn"],
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: settings["per_coulmn_tablet"],
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: settings["per_coulmn_mobile"],
            slidesToScroll: 1,
          },
        },
      ],
    });

    // comment load more button click event
    $(".fugu-pf-loadmore-btn").on("click", function () {
      var button = $(this);

      // decrease the current comment page value
      var dpaged = button.data("paged"),
        total_pages = button.data("total-page"),
        nonce = button.data("referrar"),
        ajaxurl = button.data("url");

      dpaged++;
      // console.log(foio_portfolio_js_datas);
      $.ajax({
        url: ajaxurl, // AJAX handler, declared before
        dataType: "html",
        data: {
          action: "fugu_loadmore_callback", // wp_ajax_cloadmore
          // 'post_id': foio_portfolio_js_datas.parent_post_id, // the current post
          paged: dpaged, // current comment page
          folio_nonce: nonce,
          portfolio_settings: button.data("portfolio-settings"),
        },
        type: "POST",
        beforeSend: function (xhr) {
          button.text("Loading..."); // preloader here
        },
        success: function (data) {
          if (data) {
            $(".fugu-portfolio-wrap").append(data);
            $(".fugu-portfolio-wrap").isotope("reloadItems").isotope();
            button.text("More projects");
            button.data("paged", dpaged);
            // if the last page, remove the button
            if (total_pages == dpaged) button.remove();
          } else {
            button.remove();
          }
        },
      });
      return false;
    });

    $(".popup-icon").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  };

  //Job js start
  var Fugu_Job_Js = function () {
    if ($.fn.isotope) {
      var $gridMas = $(".fugu-job-wrap.layout-mode-masonry");
      var $grid = $(".fugu-job-wrap.layout-mode-normal");

      $grid
        .isotope({
          itemSelector: ".fugu-job-item-wrap",
          percentPosition: true,
        })
        .resize();

      $grid
        .imagesLoaded()
        .progress(function () {
          $grid.isotope("layout");
        })
        .resize();

      $gridMas.isotope({
        itemSelector: ".fugu-job-item-wrap",
        percentPosition: true,
      });

      $gridMas.imagesLoaded().progress(function () {
        $gridMas.isotope("layout");
      });

      $grid.isotope().resize();
      $gridMas.isotope().resize();

      $(".jf-isotope-nav li").on("click", function () {
        $(".jf-isotope-nav li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $gridMas.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });

        var selector = $(this).attr("data-filter");
        $grid.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      });
    }

    // comment load more button click event
    $(".fugu-jf-loadmore-btn").on("click", function () {
      var button = $(this);

      // decrease the current comment page value
      var dpaged = button.data("paged"),
        total_pages = button.data("total-page"),
        nonce = button.data("referrar"),
        ajaxurl = button.data("url");

      dpaged++;
      // console.log(foio_job_js_datas);
      $.ajax({
        url: ajaxurl, // AJAX handler, declared before
        dataType: "html",
        data: {
          action: "fugu_loadmore_callback", // wp_ajax_cloadmore
          // 'post_id': foio_job_js_datas.parent_post_id, // the current post
          paged: dpaged, // current comment page
          folio_nonce: nonce,
          job_settings: button.data("job-settings"),
        },
        type: "POST",
        beforeSend: function (xhr) {
          button.text("Loading..."); // preloader here
        },
        success: function (data) {
          if (data) {
            $(".fugu-job-wrap").append(data);
            $(".fugu-job-wrap").isotope("reloadItems").isotope();
            button.text("More projects");
            button.data("paged", dpaged);
            // if the last page, remove the button
            if (total_pages == dpaged) button.remove();
          } else {
            button.remove();
          }
        },
      });
      return false;
    });
  };

  var FuguTeam = function ($scope, $) {
    var postwrapper = $scope.find(".fugu--team");
    if (postwrapper.length === 0) return;

    var settings = postwrapper.data("settings");

    /*--------------------------------------------------------------
        fugu slider js
        --------------------------------------------------------------*/
    var postwrapper = $(".fugu--team"),
      rtl = $("body").hasClass("rtl") ? true : false;

    postwrapper.owlCarousel({
      rtl: rtl,
      stagePadding: 200,
      dots: settings["dots"],
      loop: settings["loop"],
      center: true,
      autoplay: settings["autoplay"],
      nav: settings["nav"],
      mouseDrag: settings["mousedrag"],
      autoplaytimeout: settings["autoplaytimeout"],
      items: settings["per_coulmn"],
      navText: [settings.prev_icon, settings.next_icon],
      responsive: {
        0: {
          items: settings["per_coulmn_mobile"],
          mouseDrag: settings["mousedrag"],
          stagePadding: 0,
        },
        768: {
          items: settings["per_coulmn_tablet"],
          mouseDrag: settings["mousedrag"],
          stagePadding: 0,
        },
        1025: {
          items: settings["per_coulmn"],
          mouseDrag: settings["mousedrag"],
          stagePadding: 100,
        },

        1400: {
          items: settings["per_coulmn"],
          mouseDrag: settings["mousedrag"],
          stagePadding: 200,
        },
      },
    });
  };

  var Fugu_Back_To_Top = function ($scope, $) {
    /*--------------------------------------------------------------
        fugu slider js
        --------------------------------------------------------------*/

    jQuery(".fugu-back-to-top-wraper").click(function () {
      jQuery("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });

    function stickyHeader($class) {
      jQuery(window).on("scroll", function () {
        var headerHeight = 600;
        if (jQuery(window).scrollTop() >= headerHeight) {
          jQuery(".fugu-back-to-top-wraper .fugu-icon").addClass(
            "sticky-active"
          );
        } else {
          jQuery(".fugu-back-to-top-wraper .fugu-icon").removeClass(
            "sticky-active"
          );
        }
      });
    }

    stickyHeader(".fugu-back-to-top-wraper");
  };

  var navMenu = function ($scope, $) {
    $(".fugu-mega-menu")
      .closest(".elementor-container")
      .addClass("megamenu-full-container");
    var count = 0;
    $(".main-navigation ul.navbar-nav>li.fugu-mega-menu>.sub-menu>li").each(
      function (index) {
        count++;
        if ($(this).is("li:last-child")) {
          $(this)
            .parent()
            .addClass("mg-column-" + count);
          count = 0;
        }
      }
    );

    $(".main-navigation ul.navbar-nav>li").each(function (i, v) {
      $(v).find("a").contents().wrap('<span class="menu-item-text"/>');
    });
    $(".menu-item-has-children > a").append(
      '<span class="dropdownToggle"><i class="fas fa-angle-down"></i></span>'
    );

    function navMenu() {
      if (jQuery(".fugu-main-menu-wrap").hasClass("menu-style-inline")) {
        if (jQuery(window).width() < 1115) {
          jQuery(".fugu-main-menu-wrap").addClass("menu-style-flyout");
          jQuery(".fugu-main-menu-wrap").removeClass("menu-style-inline");
        } else {
          jQuery(".fugu-main-menu-wrap").removeClass("menu-style-flyout");
          jQuery(".fugu-main-menu-wrap").addClass("menu-style-inline");
        }

        $(window).resize(function () {
          if (jQuery(window).width() < 1115) {
            jQuery(".fugu-main-menu-wrap").addClass("menu-style-flyout");
            jQuery(".fugu-main-menu-wrap").removeClass("menu-style-inline");
          } else {
            jQuery(".fugu-main-menu-wrap").removeClass("menu-style-flyout");
            jQuery(".fugu-main-menu-wrap").addClass("menu-style-inline");
          }
        });
      }

      // main menu toggleer icon (Mobile site only)
      $('[data-toggle="navbarToggler"]').on("click", function (e) {
        $(".navbar").toggleClass("active");
        $(".navbar-toggler-icon").toggleClass("active");
        $("body").toggleClass("offcanvas--open");
        e.stopPropagation();
        e.preventDefault();
      });
      $(".navbar-inner").on("click", function (e) {
        e.stopPropagation();
      });

      // Remove class when click on body
      $("body").on("click", function () {
        $(".navbar").removeClass("active");
        $(".navbar-toggler-icon").removeClass("active");
        $("body").removeClass("offcanvas--open");
      });
      $(".main-navigation ul.navbar-nav li.menu-item-has-children>a").on(
        "click",
        function (e) {
          e.preventDefault();
          $(this).siblings(".sub-menu").toggle();
          $(this).parent("li").toggleClass("dropdown-active");
        }
      );
    }

    navMenu();
  };

  //Portfolio slider

  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu-portfolio-gallery.default",
      Fugu_Portfolio_Gallery_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu-product-categories.default",
      FuguductCategories
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/blog-loop.default",
      FuguPostLoop
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu-testimonial-loop.default",
      Fugu_Testimonial_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu_team.default",
      FuguTeam
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu-back-to-top.default",
      Fugu_Back_To_Top
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu-portfolio.default",
      Fugu_Portfolio_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu-job.default",
      Fugu_Job_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu-main-menu.default",
      navMenu
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/fugu_team.default",
      Fugu_Team_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/global",
      FuguGlobal
    );
  });
})(jQuery);
