$(function () {

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-filter__item-num').styler();

  $(".star").rateYo({
    rating: 3.6,
    starWidth: "12px",
    readOnly: true,
    spacing: "7px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="11px" viewBox="0 0 12 11" version="1.1"><path d="M 5.402344 0.382812 L 4.042969 3.226562 L 0.996094 3.683594 C 0.453125 3.765625 0.234375 4.460938 0.628906 4.859375 L 2.832031 7.070312 L 2.308594 10.195312 C 2.214844 10.761719 2.792969 11.183594 3.277344 10.921875 L 6 9.445312 L 8.722656 10.921875 C 9.207031 11.183594 9.785156 10.761719 9.691406 10.195312 L 9.167969 7.070312 L 11.371094 4.859375 C 11.765625 4.460938 11.546875 3.765625 11.003906 3.683594 L 7.957031 3.226562 L 6.597656 0.382812 C 6.355469 -0.125 5.648438 -0.132812 5.402344 0.382812 Z M 5.402344 0.382812 " /></svg>'
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.top-slider__inner').slick({
    dots: false,
    arrows: false,
    fade: true,
  });

  $('.related__content').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow-right.svg"></button>',
  });

  var containerEl1 = document.querySelector('[data-ref="products__mix"]');
  var containerEl2 = document.querySelector('[data-ref="design__mix"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer1 = mixitup(containerEl2, config);

});