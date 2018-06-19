$(document).ready(function() {

	// slick slider

	if ($('.products__slider').length > 0) {
		$('.products__slider').slick({
			infinite: true,
			slidesToShow: 5
		});
	}

	//end slick slider





	// end opportunities slider

	if ($('.opportunities__slider').length > 0) {
		doubleSlider($('.opportunities__slider-img'), $('.opportunities__next'));
		doubleSlider($('.opportunities__slider-text'), $('.opportunities__next'));
	}

	// end opportunities slider
});