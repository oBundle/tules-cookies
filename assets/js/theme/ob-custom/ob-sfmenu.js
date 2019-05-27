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

}
/* eslint-enable */
