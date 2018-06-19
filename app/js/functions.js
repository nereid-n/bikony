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
function tabsMobileBlock(elem1, elem2, elem3) {
	var tabClick = false;
	var btnClick = false;
	var tabWrapper1 = $(elem1).find('.mobile__change-wrapper');
	var tabWrapper2 = $(elem2).find('.mobile__change-wrapper');
	var tabWrapper3 = $(elem3).find('.mobile__change-wrapper');
	var scroll1 = $(elem1).width();
	var scroll2 = $(elem2).width();
	var scroll3 = $(elem3).width();
	var btn = $('.mobile__next');
	$('.mobile__text-tabs .tab:not(.active)').click(function() {
		tabClick = true;
	});
	$('.mobile__next').click(function() {
		btnClick = true;
	});
	$('.mobile').click(function() {
		if (tabClick || btnClick) {
			$('.mobile__text-tabs .tab:not(.active)').addClass('active').siblings().removeClass('active');
			if($(btn).hasClass('reverse')) {
				$(btn)
				.animate({opacity : 0}, 500);
				setTimeout(function() {
					$(btn)
					.removeClass('reverse')
					.animate({opacity : 1}, 500);
				}, 500);
				$(tabWrapper1).animate({left: 0}, 500);
				$(tabWrapper2).animate({left: 0}, 500);
				$(tabWrapper3).animate({left: 0}, 500);
			}
			else {
				$(btn)
				.animate({opacity : 0}, 500);
				setTimeout(function() {
					$(btn)
					.addClass('reverse')
					.animate({opacity : 1}, 500);
				}, 500);
				$(tabWrapper1).animate({left: scroll1 * (-1)}, 500);
				$(tabWrapper2).animate({left: scroll2 * (-1)}, 500);
				$(tabWrapper3).animate({left: scroll3 * (-1)}, 500);
			}
		}
	});
}

//end block mobile tabs