/* Sticky Navigation start */

function scrollDynamics(){
  pageHeight = jQuery('body').outerHeight();
  headerHeight = jQuery('#header').outerHeight();
  footerHeight = jQuery('#footer').outerHeight();
  scrolledHeight = jQuery(window).scrollTop();
  dynamicLogoHeight = 80 - (scrolledHeight / 4);
  dynamicNameFont = 30 - (scrolledHeight / 10);
  jQuery('.logo').css('height',dynamicLogoHeight);
  jQuery('.name').css('font-size',dynamicNameFont);
}

$(document).ready(function() {
	scrollDynamics();
	jQuery('#headerFix').css('height',headerHeight);
});

$(window).on('scroll',function(e) {
	scrollDynamics();
    if( scrolledHeight > headerHeight){
		$('#header').addClass('header-sticky');	
    } else {
		$('#header').removeClass('header-sticky');
    }
});

/* Sticky Navigation ends */

/* Emoji start */
$(document).ready(function() {
    $(".emoji").each(function() {
        var original = $(this).html();
        // use .shortnameToImage if only converting shortnames (for slightly better performance)
        var converted = emojione.shortnameToImage(original);
        $(this).html(converted);
    });
});
/* Emoji ends */
