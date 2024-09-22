(function($) {

  "use strict";

  // Page loading animation
  $(window).on('load', function() {
    $("#js-preloader").addClass('loaded');
  });

  // Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() {	
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }

  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);	
        }				
        $('html,body').animate({
          scrollTop: (target.offset().top) - 80
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    // Smooth scrolling
    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('.scroll-to-section a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
      menu = target;
      var target = $(this.hash);
      $('html, body').stop().animate({
        scrollTop: (target.offset().top) - 79
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav ul li a').removeClass("active");
        currLink.addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
    });
  }

  // Page loading animation
  $(window).on('load', function() {
    if($('.cover').length){
      $('.cover').parallax({
        imageSrc: $('.cover').data('image'),
        zIndex: '1'
      });
    }

    $("#preloader").animate({
      'opacity': '0'
    }, 600, function(){
      setTimeout(function(){
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    });
  });

  // Window Resize Mobile Menu Fix
  $(window).on('resize', function() {
    mobileNav();
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

  // Isotope js
  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  // Modal functionality
  var modal = document.getElementById("imageModal");
  var modalIframe = document.getElementById("modalIframe")
  var closeBtn = document.getElementsByClassName("close")[0];

  // Open modal
  $('.modal-trigger').on('click', function(e) {
    e.preventDefault();
    modal.style.display = "block";

    modalIframe.src = this.href
  });

  // Close modal
  closeBtn.onclick = function() {
    modal.style.display = "none";

  }

  // Close modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

})(window.jQuery);
