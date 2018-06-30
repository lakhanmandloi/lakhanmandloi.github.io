/* Sticky Navigation start */

function scrollDynamics(){
  headerHeight = jQuery('#header').outerHeight();
  scrolledHeight = jQuery(window).scrollTop();
  dynamicLogoHeight = 80 - (scrolledHeight / 4);
  jQuery('.logo').css('height',dynamicLogoHeight);
}

$(document).ready(function() {
	scrollDynamics();
	jQuery('#headerFix').css('height',headerHeight);
});

$(window).on('scroll',function(e) {
	scrollDynamics();
    if( scrolledHeight > 0){
		$('#header').addClass('header-sticky');	
    } else {
		$('#header').removeClass('header-sticky');
    }
});

/* Sticky Navigation ends */
