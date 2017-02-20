$(document).ready(function() {

	picturefill();

	// ppp tel mask

	$('.popup__fieldset_tel').formatter({
		'pattern': '+7({{999}}) {{999}}-{{99}}-{{99}}',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});

	//ppp email mask
	$('.popup__fieldset_data').formatter({
		'pattern': '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});


	$('[data-fancybox]').fancybox({
		helpers : {
			buttons: {
				position : 'top'
			},
			thumbs: {
				width  : 50,
				height : 50
			}
		}
	});

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
		$('.subWrapper').removeClass('is_open')
		$('.js-back').hide();
		$('.header__menu, .subWrapper').css({
			'left': ''
		});
		return false;
	});

	// submenu open mobile
	// -------------------------
	// --- .has__subnav > header__menu_link
	if($(document).width() < 1000 ){
		// var $moveLeft = 0;
		$('.has_subnav').on('click', function() {
			var $this = $(this);
			var childSubMenu = $this.children('.subWrapper');

			$('.has_subnav, .subWrapper').removeClass('is_open');
			childSubMenu.toggleClass('is_open');
			$this.toggleClass('is_open');

			return false;
		});
	}


	// submenu scroll
	// ----------------

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

	// var activeSlide = $('.mod_normal .propose__item').length;

	$('.mod_normal .present').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000,
	// autoplay: true,
	arrows: false,
	asNavFor: '.mod_normal .propose'
	});

	$('.mod_normal .propose').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
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


	$('.mod_normal .present').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		var activeSlide = $('.mod_normal .propose__item').length - nextSlide - 1;
		$('.mod_normal .propose').find('.slick-slide').removeClass('yes-slick-current').eq(activeSlide).addClass('yes-slick-current');
	});

	if($(document).width() < 1000){

		$('.mod_normal .present').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var activeSlide = $('.mod_normal .propose__item').length - nextSlide - 2;
			$('.mod_normal .propose').find('.slick-slide').removeClass('yes-slick-current').eq(activeSlide).addClass('yes-slick-current');
		});


	}

	$('.mod_reverse .present').slick({
		slidesToShow: 1,
		slidesToScroll: -1,
		// autoplay: true,
		speed: 1000,
		rtl: true,
		arrows: false,
		asNavFor: '.mod_reverse .propose'
	});

	$('.mod_reverse .propose').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
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

	// // new section


	if($(document).width() < 1050){
		newsSlider();
	}




});

function newsSlider() {
	$('.news__section').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
}

function newsUnSlider() {
	$('.news__section').slick('unslick');
}
