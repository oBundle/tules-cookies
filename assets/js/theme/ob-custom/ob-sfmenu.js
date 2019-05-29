/* eslint-disable */
import superfish from 'superfish/src/js/superfish';

export default function() {

  $('.userSummary, .navPages .navPages-list').superfish({
      delay: 8,
      speed: "fast"
  });

  /* MOBILE MENU SCRIPT */

  $(".mobile-menu-btn").click(function () {
      $("body").addClass("mobile-menu-open");
    });

    $(".mobile-menu-close-btn a").click(function () {
      $("body").removeClass("mobile-menu-open");
    });

    $(".menu-open-overlay").click(function () {
      $("body").removeClass("mobile-menu-open");
    });

    $(".tab.cookie-archive-tab").click(function () {
      if(!$('#tab-cookie-archive #allProducts').length){
        $('#tab-cookie-archive').load("/cookie-archive #allProducts");
      }
    });

    

}
/* eslint-enable */
