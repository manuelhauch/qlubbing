jQuery(document).ready(function(){
    jQuery(window).scroll(function() {
        if (jQuery('body').height() <= (jQuery(window).height() + jQuery(window).scrollTop())) {
            jQuery('#emailBar').hide();
        }else{
            jQuery("#emailBar").show();
        }
    });
});