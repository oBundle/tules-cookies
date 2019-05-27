/* eslint-disable */

export default function () {

    $(document).on('click', '.qtybox_wrap .inc', function () {
      var incval = parseInt($(this).next().val()) + 1;
      $(this).next().val(incval);
      var href = $(this).parents('.qtybox_wrap').next().attr('href');
      href = href.split('qty=');
      $(this).parents('.qtybox_wrap').next().attr('href', href[0] + 'qty=' + incval);
    });

    $(document).on('click', '.qtybox_wrap .dec', function () {
      if (parseInt($(this).prev().val()) > 1) {
        var incval = parseInt($(this).prev().val()) - 1;
        $(this).prev().val(incval);
        var href = $(this).parents('.qtybox_wrap').next().attr('href');
        href = href.split('qty=');
        $(this).parents('.qtybox_wrap').next().attr('href', href[0] + 'qty=' + incval);
      }
    });

    $(document).on('keyup', '.qty_box_cat', function () {
      var href = $(this).parents('.qtybox_wrap').next().attr('href');
      href = href.split('qty=');
      if (parseInt($(this).val()) >= 1 && $(this).val() != "") {
        $(this).parents('.qtybox_wrap').next().attr('href', href[0] + 'qty=' + $(this).val());
      } else {
        $(this).parents('.qtybox_wrap').next().attr('href', href[0] + 'qty=1');
      }
    });

    /* dynamic products using Ids */

    function getProducts(requestqueue) {
      if (requestqueue.length == 0) {
        $('.bulk-edit-block').addClass('content-loaded');
      } else {
        let arraylength = requestqueue.length;
        let productid = requestqueue[arraylength - 1];

        let request = new XMLHttpRequest();
        request.open('GET', '/products.php?productId=' + productid);
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');

        request.onreadystatechange = function () {
          if (this.readyState === 4) {
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(this.responseText, "text/html");

            const productTitle = htmlDoc.querySelector('.productView-title').innerHTML;
            const productPrice = htmlDoc.querySelector('.productView-details .productView-price [data-product-price-with-tax]').innerHTML;

            $('.bulk-edit-block-section').append(`
                <div class="subscription-block">
                   <div class="block-heading">
                       <h3>${productTitle}</h3>
                   </div>
                   <div class="block-cart-item">
                      <div class="productView-price">
                          <span>${productPrice}</span>
                      </div>
                      <div class="product-quantity-block">
                      <div class="qty-label">
                          <label for="">Qty</label>
                      </div>
                      <div class="form-increment">
                          <button class="button button--icon button--icon-dec" data-action="dec">
                              <svg>
                                  <use xlink:href="#icon-remove" />
                              </svg>
                          </button>
                          <input class="form-input form-input--incrementTotal" id="qty[]" name="qty[]" type="tel" value="1">
                          <button class="button button--icon button--icon-inc" data-action="inc">
                                <svg>
                                    <use xlink:href="#icon-add" />
                                </svg>
                          </button>
                      </div>
                  </div>
                  <div class="product-add-to-cart">
                  <a class="button" href="/cart.php?action=add&amp;product_id=${productid}&qty[]=1">Add To Cart</a>
              </div>
                   </div>
                </div>
            `);

            requestqueue.pop();
            getProducts(requestqueue);
          }
        }

        request.send();

      }
    }

    getProducts(productIds);


    // inc and dec functionality
    $(document).on('click', '.form-increment button', event => {
      event.preventDefault();
      const $target = $(event.currentTarget);
      let qty = parseInt($target.parent('.form-increment').find('.form-input--incrementTotal').val(), 10);

      if ($target.data('action') === 'inc') {
        if (qty > 0) {
          qty++;
        }
      } else {
        if (qty > 1) {
          qty--;
        }
      }

      $target.parent('.form-increment').find('.form-input--incrementTotal').val(qty);

      const pattern = /[^=]+$/;
      const $addToCartLink = $target.parent().parent().next().find('a');

      const getUrlBeforeQty = $addToCartLink.attr('href').split(pattern)[0];
      const updateUrl = getUrlBeforeQty + qty;
      $addToCartLink.attr('href', updateUrl);

    });

    $(document).on('keyup', '.form-increment .form-input--incrementTotal', function () {
      const pattern = /[^=]+$/;
      const $addToCartLink = $(this).parent().parent().next().find('a');

      const getUrlBeforeQty = $addToCartLink.attr('href').split(pattern)[0];
      const updateUrl = getUrlBeforeQty + this.value;
      $addToCartLink.attr('href', updateUrl);
    });

}
/* eslint-unable */

