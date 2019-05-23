/* eslint-disable */
import $ from 'jquery';
import superfish from 'superfish/src/js/superfish';

export default function() {

  

jQuery(document).ready(function() {

    jQuery('.userSummary, .navPages .navPages-list').superfish({
        delay: 8,
        speed: "fast"
    });

    /* MOBILE MENU SCRIPT */

    jQuery(".mobile-menu-btn").click(function () {
        jQuery("body").addClass("mobile-menu-open");
      });
  
      jQuery(".mobile-menu-close-btn a").click(function () {
        jQuery("body").removeClass("mobile-menu-open");
      });
  
      jQuery(".menu-open-overlay").click(function () {
        jQuery("body").removeClass("mobile-menu-open");
      });


}); // Ready End


jQuery(window).resize(function() {
 
});

jQuery(document).ajaxComplete(function() {

});

}
/* eslint-enable */
