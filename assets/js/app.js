
$(document).ready(function(){
  
    $('.parallax').parallax();
    
      $('.carousel').carousel();
      
      $('.modal').modal();
      // DROPDOWNS
      $(".dropdown-button").dropdown(
        {
          belowOrigin: true
        }
      );
      // TABS
      $('ul.tabs').tabs();
      // SCROLLSPY
      $('.scrollspy').scrollSpy();
      //SIDENAV

  
  // Show sideNav
  $('.button-collapse').sideNav();
 
  jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});

    });
      