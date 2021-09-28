$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
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