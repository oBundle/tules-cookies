/* eslint-disable */
import $ from 'jquery';
import fancybox from '@fancyapps/fancybox/dist/jquery.fancybox.min';
$.fancybox.defaults.hash = false;


export default function() {
  

jQuery(document).ready(function() {

     /* product image with fancybox */

    //Don't enable Cloud Zoom (product image zoom) on touch device
    //Mouseenter/Mouseover events are not ideal for touch devices
    //for more info search for this code in /script/main.js
    if (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)) {

        $('.productView-thumbnails li').each(function () {
          $(this).find("a").attr('href', 'javascript:void(0)');
          $(this).find("a").removeAttr('data-fancybox');
        });
  
        $(document).on('beforeShow.fb', function (e, instance, slide) {
          $('.productView-thumbnails li').each(function () {
            $(this).find("a").attr('href', $(this).find("a").attr('data-fancybox-href'));
            $(this).find("a").attr('data-fancybox', 'gallery');
          });
        });
        $(document).on('beforeClose.fb', function (e, instance, slide) {
          $('.productView-thumbnails li').each(function () {
            $(this).find("a").attr('href', 'javascript:void(0)');
            $(this).find("a").removeAttr('data-fancybox');
          });
        });
      }
  
  
  
  
      $(document).on('click', '.productView-image.main-product-page a', function (e) {
        e.preventDefault();
        $('ul.productView-thumbnails li a.is-active').attr('data-fancybox', 'gallery');
        $('ul.productView-thumbnails li a.is-active').attr('href', $('ul.productView-thumbnails li a.is-active').attr('data-fancybox-href'));
        $('.productView-thumbnails li').each(function () {
          $(this).find("a").attr('href', $(this).find("a").attr('data-fancybox-href'));
          $(this).find("a").attr('data-fancybox', 'gallery');
        });
        $('ul.productView-thumbnails li a.is-active').trigger('click');
      });
  
  
      $(document).on('click', '.main-product-page .easyzoom-flyout', function (e) {
        $('ul.productView-thumbnails li a.is-active').attr('data-fancybox', 'gallery');
        $('ul.productView-thumbnails li a.is-active').attr('href', $('ul.productView-thumbnails li a.is-active').attr('data-fancybox-href'));
        $('.productView-thumbnails li').each(function () {
          $(this).find("a").attr('href', $(this).find("a").attr('data-fancybox-href'));
          $(this).find("a").attr('data-fancybox', 'gallery');
        });
        $('ul.productView-thumbnails li a.is-active').trigger('click');
  
      });
  
      /*  Fancybox  */




}); // Ready End


jQuery(window).resize(function() {
 
});

jQuery(document).ajaxComplete(function() {

});

}
/* eslint-enable */
