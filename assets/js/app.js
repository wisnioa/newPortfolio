


// $(document).ready(function () {


//   // $('.sidenav').sidenav();
//   // $('.carousel').carousel();

 
//   var owl = $('.owl-carousel');
//   owl.owlCarousel({
//       items:5,
//       margin: 250,
//       loop:true,
//       autoplay:true,
//       autoplayTimeout:3000,
//       autoplayHoverPause:true
//   });
//   $('.play').on('click',function(){
//       owl.trigger('play.owl.autoplay',[1000])
//   })
//   $('.stop').on('click',function(){
//       owl.trigger('stop.owl.autoplay')
//   })
  
  
// });

(function() {

  


  var sr = ScrollReveal({ reset: true, duration: 5100 });

  // Custom Settings
  sr.reveal('.skill-1');
  sr.reveal('.skill-2');
  sr.reveal('.skill-3');
  sr.reveal('.skill-4');
  sr.reveal('.skill-5');
  sr.reveal('.skill-6');
  sr.reveal('.skill-7');
  sr.reveal('.skill-8');
  sr.reveal('.skill-9');
  sr.reveal('.skill-10');
  sr.reveal('.skill-11');
  sr.reveal('.skill-12');
  sr.reveal('.skill-13');
  sr.reveal('.skill-14');
  sr.reveal('.skill-15');
  sr.reveal('.skill-16');

  
  
})();


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); 





