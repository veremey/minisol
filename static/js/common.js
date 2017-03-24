
$(document).ready(function() {


	$( ".tooltip" ).tooltip({
		show: {
			effect: "slideDown"
		},
		position: {
			my: "right-10 top+4",
			at: "left top"
		},
		tooltipClass: "utip"
	});

	$('.tooltip-r').tooltip({
		show: {
			effect: "slideDown"
		},
		position: {
			my: "left+10 top+4",
			at: "right top"
		},
		tooltipClass: "utip"
	});


	function usageTips(className) {

		$('.'+ className).on('mouseover', '.tooltip, .tooltip-r', function() {
			if($(document).width() < 700){
				var $top = $('.'+ className).offset().top - 80;

				$('.ui-tooltip.ui-corner-all.ui-widget-shadow.ui-widget.ui-widget-content.utip').css({
					'top': $top,
					'left': '50%',
					'transform' : 'translateX(-50%)'
				});

			}
		});
	}

	usageTips('usage-01');
	usageTips('usage-02');



	// dumpCSSText('ui-tooltip-content');

	/*gallery.html slider hide*/
	var t = $('.collage__pic').data('overlay');
	$('.' + t).addClass('hide');

	var widthScreen = $(window).width();


	adaptiveMark();
	$(window).on('resize', adaptiveMark);

	picturefill();


	function validate() {
			$('.js-validate').each(function(){
				if ($(this).length > 0) {
					$(this).validate({
						errorClass: 'has-error',
						rules: {
							name: {
								minlength: 2
							},
							city: {
								minlength: 2
							},
							// password: {
							// 	minlength: 5
							// },
							// confirm_password: {
							// 	minlength: 5,
							// 	equalTo: '#password'
							// },
							email: {
								email: true
							},
							tel: {
								minlength: 17
							},
							// sallerTel: {
							// 	minlength: 17
							// },
							address: {
								minlength: 2
							},
							message: {
								minlength: 4
							},
							date: {
								minlength: 4
							},
							productCode: {
								minlength: 2
							},
							sallerName: {
								minlength: 2
							},
							sallerPost: {
								minlength: 2
							},
							square: {
								minlength: 1
							},
							garantUserComment:{
								minlength: 4
							},
							client: {
								required: true
							},
							agree: {
								required: true
							}
						},
						messages: {
							firstname: '* Вас так зовут?',
							lastname: '* У вас такая фамилия?',
							fathername: '* У вас такое отчество?',
							password: {
								required: '* Введите пароль',
								minlength: '* Минимум 5 символов'
							},
							confirm_password: {
								 required: '* Пароли не совпадают',
								 minlength: '* Минимум 5 символов',
								 equalTo: '* Пароли не совпадают'
							},
							email: '* Неверный формат',
							address: '* Это Ваш адрес?',
							any: '* Заполните поле',
							company: '* Заполните поле',
							tel: {
								required: '* Введите Ваш терефон',
								minlength: '* Минимум 5 символов'
							},
							username: {
								required: '* Введите Ваше имя',
								minlength: 'Минимум 2 символa'
							},
							message: {
								required: '* Заполните поле',
								minlength: 'Заполните поле',
							},
							text_area: {
								required: '* Заполните поле',
								minlength: 'Заполните поле'
							}
						}
					});
				}
			});
		}
	validate();

	// ppp tel mask
	$('.popup__fieldset_tel').formatter({
		'pattern': '+7({{999}}) {{999}}-{{99}}-{{99}}',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});

	$('.garant_tel').formatter({
		'pattern': '+{{9}}({{999}}) {{999}}-{{99}}-{{99}}',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});
	// ppp tel mask
	$('.garant_sallerTel').formatter({
		'pattern': '+{{9}}({{999}}) {{999}}-{{99}}-{{99}}',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});

	$('.garant_date').formatter({
		'pattern': '{{99}}\/{{99}}\/{{9999}}',
		'persistent': false,
		'placeholder': '___ __ __ __'
	});

	$('.popup__fieldset_data').formatter({
			'pattern': '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i',
			'persistent': false,
			'placeholder': '___ __ __ __'
		});

	//ppp input file
	var inputs = document.querySelectorAll( '.popup__fieldset_file' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});
	});

	// ppp input label up on :focus

	(function() {
		if (!String.prototype.trim) {
			(function() {
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( 'input.input__item, .garant__inp, .helpSubsection__inp' ) ).forEach( function( inputEl ) {
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input--filled' );
			}
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input--filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input--filled' );
			}
		}
	})();
	// -----------------------


	// -- scroll at popup question mob
	var $window = $(window).height();
	var $header = $('.header').height();
	function pppQuestionScroll(){
		var $win = $(window).height();
		if($win < $('.popup__question').height() + $header) {
			var scrollHeight = $win - $header;
			$('.popup__question, .popup__question .mCustomScrollBox.mCS-light.mCSB_vertical.mCSB_inside').css({
				'max-height' : scrollHeight
			});
		} else if ($win > $window){
			scrollHeight = $win - $header;
			$('.popup__question, .popup__question .mCustomScrollBox.mCS-light.mCSB_vertical.mCSB_inside').css({
				'max-height' : scrollHeight
			});
		}
	}

	pppQuestionScroll();

	$(window).on('resize', pppQuestionScroll);
	// ----------------------------------------------

	$('[data-fancybox^="gallery"]').fancybox({
		buttons: {
			position : 'center'
		},
		thumbs: {
			showOnStart : false
		}
	});


	// check select

	function select() {
		$(".js-select").each(function(){
			var select_list = $(this).children(".js-select-list");
			var content = select_list.find("li").first().html();
			//$(this).find(".js-select-text").html(content);//.text(text);//content
			$(this).click(function(event){
					var $self = $(this);

				if ($(this).hasClass("is-active")) {

						setTimeout(function () {
							$self.removeClass('is-active');
						}, 400);

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

	// open question ppp

	$('.js-question').on('click', function () {
		$('.popup__question').toggleClass('is_opened');
		return false;
	});

	$('.btn__close').on('click', function () {
		$(this).removeClass('is_active');
		$(this).parents('.js_close').removeClass('is_opened');
		$('.js-btn__open').toggleClass('is_active');
		return false;
	});

	$('.js-spec').on('click', function () {
		if($('.specifications').hasClass('is_active')){
			$(this).text('Показать технические характеристики');
			$('.specifications').slideToggle('400').removeClass('is_active');
		} else {
			$(this).text('Скрыть технические характеристики');
			$('.specifications').addClass('is_active').slideToggle('400');

		}
		return false;
	});

	$('.btn__open').on('click', function () {
		$(this).toggleClass('is_active');
		$('.js_open').toggleClass('is_opened');
		$('.subWrapper').removeClass('is_open');
		$('.js-back').hide();
		$('.menu, .subWrapper').css({
			'left': ''
		});

		$('.popup__question').removeClass('is_opened');
		return false;
	});

	$('.js-btn__open').on('click', function () {
		$(this).toggleClass('is_active');
		$(this).parents('.helpSection').find('.js_open').toggleClass('is_opened');

		if($(document).width() <= 800 ) {
			$('html, body').animate({ scrollTop: $('.helpSubsection').offset().top - 70 }, 800 );
			return false;
		}
		return false;
	});

	$('.js-toForm').on('click', function () {
		$('html, body').animate({ scrollTop: $('#application').offset().top - 50 }, 800 );
		return false;
	});



	// header menu

	$(window).on('resize', function() {
		if($(document).width() >= 980){
			$('.subWrapper').removeClass('is_open');
		}
	});

	// submenu open mobile
	// -------------------------

	mobMen();

	// magazin picture width

	magazinImg();
	$(window).on('resize', magazinImg);

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


	dublSliderHeight();
	$(window).ready(dublSliderHeight(widthScreen)).resize(
		function () {
			var widthScreen = $(window).width();
			dublSliderHeight(widthScreen);
		}
	);

	// index.html collection slider adaptive pic

	function collectionPicHeight() {
		if($(document).width() <= 650){
			var textHeight = parseInt($('.present__text').outerHeight());
			var picHeight = 520 - textHeight;

			$('.present__pic').css({
				'height' : picHeight
			});
		} else {
			$('.present__pic').css({
				'height' : ''
			});
		}
	}

	collectionPicHeight();

	$(window).on('resize', function () {
		return collectionPicHeight();
	});

	/*--------------------------------------------------------------------*/

	// news section
	// --------------------------------------

	var $carousel = $('.news__section');


	// for current elipsis render
	if (typeof window.document.createElement('div').style.webkitLineClamp !== 'undefined') {
		document.querySelector('html').classList.add('webkit-line-clamp');
	}


	/* --- pre slider---*/
	$('.pre-left').slick({
		arrows: false,
		infinite: false,
		touchThreshold: 10,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.pre'
	});
	$('.presentation-hide .pre-right').slick({
		arrows: false,
		infinite: false,
		touchThreshold: 10,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.pre'
	});

	$('.presentation-short .pre-right').slick({
		arrows: false,
		infinite: false,
		touchThreshold: 10,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.pre'
	});
	$('.presentation-short .pre-center').slick({
		arrows: false,
		centerPadding: '0px',
		variableWidth: true,
		slidesToScroll: 1,
		slidesToShow: 9,
		focusOnSelect: true,
		infinite: false,
		centerMode: true,
		asNavFor: '.pre',
		responsive: [
			{
				breakpoint: 900,
				settings: {
					arrows: true,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 330,
				settings: {
					arrows: true,
					slidesToShow: 3/*,
					centerMode: false*/
				}
			}
		]
	});


	if($('.presentation .pre-center .presentation__item').length <= 9) {
		$(window).resize(function () {
			if($(document).width() >= 1000){
				$('.presentation .pre-center .slick-track').addClass('stop');
			}
		});

		if($(document).width() >= 1000){
			$('.presentation .pre-center .slick-track').addClass('stop');
		}
	}


	/*--------------------------------------------------------------------*/

	/* --- catalog bottom slider ---*/
	$('.component__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2
					}
				},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	/*--------------------------------------------------------------------*/

	/* --- doc slider ---*/
	$('.docs').slick({
	    autoplay: false,
	    infinite: true,
	    dots: false,
	    adaptiveHeight: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    responsive: [
	      {
	        breakpoint: 800,
	        settings: {
	          slidesToShow: 1
	        }
	      }
	    ]
	});

	/*--------------------------------------------------------------------*/


	$('.news__section').slick({
	    autoplay: false,
	    infinite: true,
	    dots: false,
	    adaptiveHeight: true,
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    responsive: [
	      {
	        breakpoint: 1000,
	        settings: {
	          slidesToShow: 2
	        }
	      },

	      {
	        breakpoint: 650,
	        settings: {
	          slidesToShow: 1
	        }
	      }
	    ]
	});


	/* --- gallery.html filter ---*/
	$('.filter .js-select-list li').on('click', function () {
		$('.filter__btn').removeClass('hiden').addClass('is_active');
	});

	$('.filter__btn').on('click', function () {
		var r = $('.filter .js-select-input').eq(0).attr('placeholder');
		var e = $('.filter .js-select-input').eq(1).attr('placeholder');

		$('.filter .js-select-text').eq(0).text(r);
		$('.filter .js-select-text').eq(1).text(e);
		$('.filter .js-select-input').val('0');
		$(this).removeClass('is_active').addClass('hiden');
	});

	/*--------------------------------------------------------------------*/


	/* --- gallery.html popup ---*/

	//todo all gallery pooopup


	function galleryPPPHeight() {
		var shown = $('.js-gallery').data('overlay');
		var h = $(window).width() >= 850 ? $(window).height() - 40 - 80 : $(window).height() - 40 - 140 - 70 ;

		$('.bigCarusel__item').each(function() {
			$(this).css({
											'height' : h,
										});
		});
		$('.popPic').each(function() {
			$(this).css({
											'height' : h,
										});
		});
	}
	galleryPPPHeight();
	$(window).on('resize', function () {
		return galleryPPPHeight();
	});



	// if($(document).width() >= 1000){
		$('.js-gallery').on('click', function() {
			event.preventDefault();
			var shown = $(this).data('overlay');
			var h = $(window).width() >= 850 ? $(window).height() - 40 - 80 : $(window).height() - 40 - 140 - 70 ;

			console.log('POPUP = '+ shown);


			$('.' + shown ).removeClass('hide');
			// $('body, html').addClass('dontMove');
			$('.overlay').addClass('is_active');
			$('header').addClass('at-top');
		});
	// }

	$('.overlay__wrap').on('click', function() {
		$('.overlay').removeClass('is_active');
		$('header').removeClass('at-top');
		// $('body, html').removeClass('dontMove');
	});

	$('.bigCarusel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		speed: 1000,
		dots: true,
		arrows: true,
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).children('.bigCarusel__item_img').attr('src');
			return '<a><img src="'+thumb+'"></a>';
		},
		responsive: [
			{
				breakpoint: 850,
				settings: {
					dots: false
				}
			}
		]
	});
	$('.bigCarusel').on('click', '.selector', function(event) {
		event.preventDefault();
		/* Act on the event */
	});

	/*--------------------------------------------------------------------*/




	function adaptiveMark() {
		if($(window).width() <= 800) {
			$('.jumbotron__mark strong').css({
				'display': 'block'
			});
		} else {
			$('.jumbotron__mark strong').css({
				'display': 'inline'
			});
		}
	}

	function mobMen() {
		$('.has_subnav .menu_link').on('click', function() {
				var $this = $(this);
				var $menuList = $this.parent('.has_subnav');
				var childSubMenu = $menuList.children('.subWrapper');
			if($(document).width() <= 1000 ){
				$menuList.siblings('.has_subnav').removeClass('is_open').find('.subWrapper').removeClass('is_open').slideUp('500');
				childSubMenu.toggleClass('is_open').slideToggle('500');
				$menuList.toggleClass('is_open');

				return false;
			}
		});
	}

	function magazinImg() {
		if($('.magazin__img').width() > $(document).width() || $(document).width() > 1000){
			$('.magazin__img').css({
				'right' : '0',
				'transform': 'translate(0, -50%)'
			});
		} else {
			$('.magazin__img').css({
				'right' : '50%',
				'transform': 'translate(50%, -50%)'
			});
		}
	}

	function dublSliderHeight($ws) {
		var $widthScreen = parseInt($ws);
		// console.log($widthScreen + ': ширина окна');
		if($widthScreen <= 650) {
			$('.js-filter-house').on('click', function(){
				$(this).addClass('is_active')
								.siblings('.tip').removeClass('is_active')
								.parents('.collection__wrap').find('.js-roof').css({
					'transform': 'translateY(-520px)'
				});
			});
			$('.js-filter-roof').on('click', function(){
				$(this).addClass('is_active')
								.siblings('.tip').removeClass('is_active')
								.parents('.collection__wrap').find('.js-roof').css({
					'transform': 'translateY(0)'
				});
			});
		} else {
			$('.js-filter-house').on('click', function(){
				$(this).addClass('is_active')
								.siblings('.tip').removeClass('is_active')
								.parents('.collection__wrap').find('.js-roof').css({
					'transform': 'translateY(-650px)'
				});
			});
			$('.js-filter-roof').on('click', function(){
				$(this).addClass('is_active')
								.siblings('.tip').removeClass('is_active')
								.parents('.collection__wrap').find('.js-roof').css({
					'transform': 'translateY(0)'
				});
			});
		}
	}


		//mount -tabs


	$('.tab').on('click', function () {
		var activeContainer = $(this).data('tab');
		console.log(activeContainer);

		$('.tab').removeClass('is_active');
		$('.mount-content').hide();
		$(this).addClass('is_active');
		$('#' + activeContainer).show();

		return false;
	});
	// mount-video.html video

	function videoSize() {
		if($(window).width() <= 900){
			var $docWidth = $(window).width() - 40;
			var $height = $docWidth * 0.56;

			$('.video-youtube').attr({
				width : $docWidth,
				height : $height
			});
		} else {
			$('.video-youtube').attr({
				width : 854,
				height : 480
			});
		}
	}

	videoSize();



	// $(window).on('resize', videoSize());
	$(window).on('resize', function () {
		if($(document).width() <= 900){
			var $docWidth = $(document).width() - 40;
			var $height = $docWidth * 0.56;

			$('.video-youtube').attr({
				width : $docWidth,
				height : $height
			});
		} else {
			$('.video-youtube').attr({
				width : 854,
				height : 480
			});
		}
	});




});//doc ready  < ------- new

