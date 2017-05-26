$(function () {

	Scroll.initScroll({
		conteiner: '.popup__question'
	});


	Scroll.initScroll({
		conteiner: '.complect__text'
	});


});



$(document).ready(function () {

	function headerPlay () {

		$(document).on('scroll', function (e) {
			if($(window).width() >= 1000) {
				var scroll = $(window).scrollTop();
				if(scroll > 88) {
					$('.header').addClass('header-small');
				} else {
					$('.header').removeClass('header-small');
				}
			}
		});

	}

	headerPlay();

	$(window).on('resize', headerPlay());
});