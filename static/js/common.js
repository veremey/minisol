$(document).ready(function() {

	// check select

	function select() {
		$(".js-select").each(function(){
			var select_list = $(this).parent().find(".js-select-list");
			var content = select_list.find("li").first().html();
			$(this).find(".js-select-text").html(content);//.text(text);//content
			$(this).click(function(event){
				if ($(this).hasClass("is-active")) {
						$(this).removeClass("is-active");
						select_list.slideUp("fast");
				}
				else {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").hide();
						select_list.slideDown("fast");
						$(this).addClass("is-active");
				}
				event.stopPropagation();
			});
			select_list.find("li").click(function(event) {
				var id = $(this).attr("data-id");
				var content = $(this).html();
				$(this).parent().parent().find(".js-select-text").html(content);
				$(this).parent().parent().find(".js-select-input").val(id);
				$(this).parent().hide();
				$(this).parents(".js-select").removeClass("is-active");
				event.stopPropagation();
			});
		});
	}
	select();

	$('.js-select').click(function(event){
		event.stopPropagation();
	});

	$('.js-question').on('click', function () {
		$('.popup__question').addClass('is_opened').find('.btn__close').addClass('is_active');
		return false;
	});

	$('.btn__close').on('click', function () {
		$(this).removeClass('is_active');
		$(this).parents('.js_close').removeClass('is_opened');
		return false;
	});

	$('.btn__open').on('click', function () {
		$(this).toggleClass('is_active');
		$('.js_open').toggleClass('is_opened');
		$('.header__menu, .subWrapper').css({
			'left': ''
		});
		return false;
	});

	// --- .has__subnav > header__menu_link
	//  ---- do not move
	$('.has_subnav').on('click', function() {
		var $moveLeft = 0;
		$moveLeft -= 100;
		$('.header__menu').css({
			'left': $moveLeft+'vw'
		});
		$(this).children('.subWrapper').css({
			'height': 'auto'
		});
		// console.log($moveLeft);
		return false;
	});


	if($('.jumbotron__wrap').length > 1){
		$('.jumbotron').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			autoplay: true,
			speed: 800,
			arrows: false,
			autoplaySpeed: 8000
			});
	}
	/* --- slider collection ---*/
	/*--------------------------------------------------------------------*/


	$('.preview img').on('click', function() {
		var shown = $(this).attr('src');
		$('.subject__pic img').attr('src', shown);
		return false;
	});

	$('.mod_normal .present').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,
	arrows: false,
	asNavFor: '.mod_normal .propose'
	});

	$('.mod_normal .propose').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rtl: true,
		dots: true,
		arrows: false,
		customPaging : function(slider, i) {
			var itm = $(slider.$slides).length - 1;
			var thumb = $(slider.$slides[itm - i]).data('thumb');
			return '<a><img src="'+thumb+'"></a>';
		},
		asNavFor: '.mod_normal .present',
	});

	$('.mod_reverse .present').slick({
		slidesToShow: 1,
		slidesToScroll: -1,
		// autoplay: true,
		rtl: true,
		arrows: false,
		asNavFor: '.mod_reverse .propose'
	});

	$('.mod_reverse .propose').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		customPaging : function(slider, i) {
			// var itm = $(slider.$slides).length - 1;
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<a><img src="'+thumb+'"></a>';
		},
		asNavFor: '.mod_reverse .present',
	});

	$('.js-filter-roof').on('click', function(){
		$(this).parents('.collection__wrap').find('.js-roof').css({
			'transform': 'translateY(-725px)'
		});
	});
	$('.js-filter-house').on('click', function(){
		$(this).parents('.collection__wrap').find('.js-roof').css({
			'transform': 'translateY(0)'
		});
	});

	// // new section fix jump


	// var height = $('.news__section').height();
	// $('.news__section').css({
	// 	'height' : height
	// });

	// var rtime;
	// var timeout = false;
	// var delta = 200;
	// $(window).resize(function() {
	// 	rtime = new Date();
	// 	if (timeout === false) {
	// 			timeout = true;
	// 			setTimeout(resizeend, delta);
	// 	}
	// });
	// function resizeend() {
	// 	if (new Date() - rtime < delta) {
	// 			setTimeout(resizeend, delta);
	// 			$('.news__section').css({
	// 				'height' : 'auto'
	// 			});
	// 	} else {
	// 			timeout = false;
	// 			var height = $('.news__section').height();
	// 			$('.news__section').css({
	// 				'height' : height
	// 			});
	// 			alert('Done resizing');
	// 	}
	// }

	// $(window).on('resize', function () {
	// 	var $height = $('.news__section').height();
	// 	$('.news__section').height($height);
	// 	var winw = $(window).width();
	// 	console.log(winw);
	// });




});