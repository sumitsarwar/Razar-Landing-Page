$(document).ready(function () {
  // Sticky-top menu
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $(".sticky-top");
    if (scrolling >= 150) {
      sticky.addClass("nav-bg");
    } else {
      sticky.removeClass("nav-bg");
    }
  });

  // Smooths scrolling
  $('body').scrollspy({ target: ".navbar", offset: 50 });
  var html_body = $('html, body');
  $('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 50
        }, 1500);
        return false;
      }
    }
  });


  // Banner-slider
  $('.banner-slider-1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    speed: 1000,
    fade: false,
    cssEase: 'linear',
    autoplaySpeed: 1500,
    prevArrow: '.banner-arrow-left',
    nextArrow: '.banner-arrow-right',
  });

  // Team-slider
  $('.team-slider-1').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1000,
    fade: false,
    cssEase: 'linear',
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 576,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
},
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
    }
},
           
      {
          breakpoint: 992,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      }
},
]
  });

  //service slider
  $('.service-slider-1').slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.service-arrow-left',
    nextArrow: '.service-arrow-right',
    responsive: [
      {
        breakpoint: 576,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
},
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
    }
},
           
      {
          breakpoint: 992,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      }
},
]

});


  //about-us-slider
  $('.about-us-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    cssEase: 'linear',
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '.about-us-arrow-left',
    nextArrow: '.about-us-arrow-right',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          autoplay: true,
    }
},
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
    }
},
]
  });


  //   Video part
  $('.venobox').venobox({
    border: '10px',

  });

  //employee info slider start
  $('.employee_info_slider_text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.employee_info_slider_images'
  });
  $('.employee_info_slider_images').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.employee_info_slider_text',
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: '.employee_info_arrow_left',
    nextArrow: '.employee_info_arrow_right',
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
},
           
      {
          breakpoint: 992,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      }
},
]
  });

  //wow js activation code
  new WOW().init();

  //ytplayer video 
  jQuery("#bgndVideo-one").YTPlayer();

  // typing text animation script
  var typed = new Typed(".typed-1", {
    strings: ["ABOUT US"],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true
  })

  // particles.js config
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 380,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // Scrool to top
  var scrolltotop = { setting: { startline: 100, scrollto: 0, scrollduration: 1e3, fadeduration: [500, 100] }, controlHTML: '<img src="assets/images/logo/btu.png" />', controlattrs: { offsetx: 5, offsety: 5 }, anchorkeyword: "#top", state: { isvisible: !1, shouldvisible: !1 }, scrollup: function () { this.cssfixedsupport || this.$control.css({ opacity: 0 }); var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto); t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({ scrollTop: t }, this.setting.scrollduration) }, keepfixed: function () { var t = jQuery(window), o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx, s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety; this.$control.css({ left: o + "px", top: s + "px" }) }, togglecontrol: function () { var t = jQuery(window).scrollTop(); this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline ? !0 : !1, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({ opacity: 1 }, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({ opacity: 0 }, this.setting.fadeduration[1]), this.state.isvisible = !1) }, init: function () { jQuery(document).ready(function (t) { var o = scrolltotop, s = document.all; o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>").css({ position: o.cssfixedsupport ? "fixed" : "absolute", bottom: o.controlattrs.offsety, right: o.controlattrs.offsetx, opacity: 0, cursor: "pointer" }).attr({ title: "Scroll to Top" }).click(function () { return o.scrollup(), !1 }).appendTo("body"), document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({ width: o.$control.width() }), o.togglecontrol(), t('a[href="' + o.anchorkeyword + '"]').click(function () { return o.scrollup(), !1 }), t(window).bind("scroll resize", function (t) { o.togglecontrol() }) }) } }; scrolltotop.init();

  // preloader js
  $(window).on('load', function () {
    $('.preloader').delay(2000).fadeOut(500);
  });





});