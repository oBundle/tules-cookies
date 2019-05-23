/* eslint-disable */
import $ from 'jquery';
import Instafeed from 'instafeed.js/instafeed.min';

export default function() {

  

jQuery(document).ready(function() {

    /* ============ INSTAGRAM SCRIPT START ============ */

    function InstaFeedSlick() {
        jQuery('#instafeed').slick({
          dots: false,
          //infinite: false,
          centerMode: false,
          centerPadding: '100px',
          slidesToShow: 6,
          arrows: false,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg><use xlink:href="#icon-angle-right"></use></svg></button>',
          prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg><use xlink:href="#icon-angle-left"></use></svg></button>',
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 668,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 569,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
  
      let loadingImg = $('[data-loading]').data('loading');
      var countLimit = 20;
      let feed = new Instafeed({
        get: 'user',
        limit: countLimit,
        userId: jQuery("#instafeed").attr("data-id"),
        accessToken: jQuery("#instafeed").attr("data-key"),
        resolution: "low_resolution",
        template: '<div class="insta-item-wrap {{orientation}}"><div class="insta-item"><a class="animation" href="{{link}}" target="_blank"><img class="lazyload" src="' + loadingImg + '" data-src="{{image}}" /></a></div></div>',
        after: function () {
          InstaFeedSlick();
        },
        success: function (data) {
          
        }
      });
  
   if (jQuery("#instafeed").length && jQuery("#instafeed").attr("data-id") != "" && jQuery("#instafeed").attr("data-key") != "") { 
            feed.run();
    }

    /* ============ INSTAGRAM SCRIPT END ============ */


}); // Ready End


jQuery(window).resize(function() {
 
});

jQuery(document).ajaxComplete(function() {

});

}
/* eslint-enable */
