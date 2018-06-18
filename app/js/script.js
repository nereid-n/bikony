$(document).ready(function() {
	if ($('.products__slider').length > 0) {
		$('.products__slider').slick({
			infinite: true,
			slidesToShow: 5
		});
	}
	if ($('.opportunities__slider').length > 0) {

	}
	doubleSlider($('.opportunities__slider-img'), $('.opportunities__slider-text'));
	function doubleSlider(sliderFirst, sliderSecond) {
		var scrollFirst = $(sliderFirst).width;
		var scrollSecond = $(sliderSecond).width;
		$('.next').click(function() {
			$(sliderFirst, ' .slider-wrapper').animate({left: scrollFirst}, 500, function() {
				var sliderWrapper = $(' .slider-wrapper', this);
				$(sliderFirst, ' .slider-wrapper')
					.find(' .slider-item:first')
					.appendTo($(sliderWrapper))
					.parent()
      				.css({'left': 0});
			});
			$(sliderSecond, ' .slider-wrapper').animate({left: scrollSecond}, 500, function() {
				var sliderWrapper = $(' .slider-wrapper', this);
				$(sliderSecond, ' .slider-wrapper')
					.find(' .slider-item:first')
					.appendTo($(sliderWrapper))
					.parent()
      				.css({'left': 0});
			});
		});
	}
});