
$(document).ready(function(){
  
    $('.parallax').parallax();
    
      $('.carousel').carousel();
      
      $('.modal').modal();
      // DROPDOWNS
      $(".dropdown-button").dropdown(
        {
          belowOrigin: true,
          hover: false
        }
      );

      var options = [
   
        {selector: '#card1', offset: 600, callback: function(el) {
          Materialize.fadeInImage($(el));
        } 
      ];
      Materialize.scrollFire(options);
      // TABS
      $('ul.tabs').tabs();
      // SCROLLSPY
      $('.scrollspy').scrollSpy();
      //SIDENAV

  
  // Show sideNav
  $('.button-collapse').sideNav();
 
 
	

    });
      