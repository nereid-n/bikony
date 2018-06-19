//opportunities slider

function doubleSlider(slider, next) {
	var sliderWrapper = $(slider).find('.slider-wrapper');
	var scroll = $(slider).width() * (-1);
	$(next).click(function() {
		$(sliderWrapper).animate({left: scroll}, 500, function() {
			$(sliderWrapper)
			.find('.slider-item:first')
			.appendTo($(sliderWrapper))
			.parent()
			.css({'left': 0});
		});
	});
}

//end opportunities slider





//block mobile tabs

// function tabsMobileBlock(elem) {
// 	var tab = false;
// 	var btn = false;
// 	$('.mobile__text-tabs .tab:not(.active)').click(function() {
// 		var tab = true;
// 	});
// 	$('.mobile__next').click(function() {
// 		var btn = true;
// 	});
// 	if (tab || btn) {
		
// 	}
// }

//end block mobile tabs