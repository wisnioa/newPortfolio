
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
      // TABS
      $('ul.tabs').tabs();
      // SCROLLSPY
      $('.scrollspy').scrollSpy();
      //SIDENAV

  
  // Show sideNav
  $('.button-collapse').sideNav();
 
 
	

    });
      