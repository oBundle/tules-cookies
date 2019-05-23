/* eslint-disable */
import 'slick-carousel';

export default function() {
  const $carousel = $('[data-slick]');
  if ($carousel.length) {
    const multipleSlides = $carousel[0].childElementCount > 1;
    $carousel.slick({
      dots: multipleSlides,
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg><use xlink:href="#icon-arrow-2-right"></use></svg></button>',
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg><use xlink:href="#icon-arrow-2-left"></use></svg></button>',
    });
  }

  // Alternative image styling for IE, which doesn't support objectfit
  if (typeof document.documentElement.style.objectFit === 'undefined') {
    $('.heroCarousel-slide').each((index, element) => {
      const $container = $(element);
      const imgUrl = $container.find('img').data('lazy');

      if (imgUrl) {
        $container.css('backgroundImage', `url(${imgUrl})`).addClass('compat-object-fit');
      }
    });
  }
}
/* eslint-enable */
