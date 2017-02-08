var Popup = new PopupClass();

function PopupClass() {
	var globalScope = this;

	/*--- init popup ---*/
	/*---------------------------------------------------------------------*/
	this.initMultyPopup = function(opt) {
		var $window = $(window);
		var $body = $('body');

		var $width = ($('html').hasClass('mobile')) ? $window.width(): opt.options.width;

		var $height = ($('html').hasClass('mobile')) ? $window.height(): opt.options.height;



		var $main_content = $('.popup_class');
		var main_content__height = $main_content.height();
		var $popup = $(opt.popup);
		var $popupCurrent = $(opt.popupCurrent);
		var $popupCurrent__multi;
		var $popupCurrent_wrap = $(opt.popupCurrent_wrap);
		var $popupCurrent_btnWrap__open = $(opt.popupCurrent_btnWrap__open);
		var $popupCurrent_btn__open = $(opt.popupCurrent_btn__open);
		var $popupCurrent_btn__close;

		if($popupCurrent.length) {
			opt.options.closeClass = opt.options.closeClass || '';

			$popupCurrent.dialog({


				modal: opt.options.modal,
				width: $width,
				height: $height,
				autoOpen: opt.options.autoOpen,
				resizable: opt.options.resizable,
				appendTo: $main_content,
				show: {
					effect: opt.options.show.effect,
					duration: opt.options.show.duration,
					delay: 200
				},
				overlayClasses: opt.options.overlayClasses,
				closeOnEscape: opt.options.closeOnEscape,
				multiPopups: opt.options.multiPopups,
				open: function() {
					var $overlay = $('.ui-widget-overlay');

					$overlay.addClass(opt.options.overlayClasses + ' ' + opt.popupCurrent_btn__close.slice(1));

					var $popupCurrent_btn__close = $(opt.popupCurrent_btn__close);

					if(opt.options.addBlur) {
						$body.addClass('blur');
					}

					if(opt.options.multiPopups) {
						$popupCurrent__multi
							.find(opt.popupCurrent_btn__next)
							.addClass(opt.popupCurrent_btn__open.slice(1));

						if(!$popupCurrent.filter('[data-index= ' + ($popupCurrent__multi.data('index') + 1) + ']').length) {
							$popupCurrent__multi
								.find(opt.popupCurrent_btn__next)
								.attr('data-index', 0);
						}
						else {
							$popupCurrent__multi
								.find(opt.popupCurrent_btn__next)
								.attr('data-index', $popupCurrent__multi.data('index') + 1);
						}

						$popupCurrent__multi
							.find(opt.popupCurrent_btn__prev)
							.addClass(opt.popupCurrent_btn__open.slice(1));

						if(!$popupCurrent.filter('[data-index= ' + ($popupCurrent__multi.data('index') - 1) + ']').length) {
							$popupCurrent__multi
								.find(opt.popupCurrent_btn__prev)
								.attr('data-index', $popupCurrent.length - 1);
						}
						else {
							$popupCurrent__multi
								.find(opt.popupCurrent_btn__prev)
								.attr('data-index', $popupCurrent__multi.data('index') - 1);
						}
					}

					if(opt.options.closeOnClick) {
						$popupCurrent_btn__close.one('click', function(event) {
							event.preventDefault();

							$popupCurrent.dialog('close');
						});
					}


					$window.scrollTop($main_content.offset().top);
			    },
			    focus: function() {
			    	$window.scrollTop($main_content.offset().top);

			    	if(opt.options.multiPopups) {
				    	var popupCurrent__multi__height = $popupCurrent__multi.height();

				    	if(main_content__height < popupCurrent__multi__height) {
				    		$main_content.css({
				    			'height': popupCurrent__multi__height + 300
				    		});
				    	}
			    	}
			    },
			    close: function() {
			    	$popupCurrent_btn__open.removeClass('is_active');

						if(opt.options.addBlur) {
							$body.removeClass('blur');
						}

						$main_content.css({
				    		'height': 'auto'
				    	});
			    }
			});

			if(opt.options.multiPopups) {
				$popupCurrent_btn__open.each(function(index) {
					$(this).attr('data-index', index);
					$popupCurrent.eq(index).attr('data-index', index);
				});

				if(opt.options.openOnClick) {
					$popupCurrent_btnWrap__open.on('click', opt.popupCurrent_btn__open, function(event) {
						event.preventDefault();

						var $popupCurrent_btn__open__this = $(this);

						$popupCurrent_btn__open__this.addClass('is_active');

						$popup.dialog('close');

						$popupCurrent__multi = $popupCurrent.filter('[data-index= ' + $popupCurrent_btn__open__this.data('index') + ']');

						/* --- limit text ---*/
						var $limitConteiner = $popupCurrent__multi.find('.subject__section_desc_limit');
						var $limitConteinerText = $limitConteiner.text();
						var $limitConteinerLimited;
						var regexRemoveLeadEndBR = regex = /^\s*(?:<br\s*\/?\s*>)+|(?:<br\s*\/?\s*>)+\s*$/gi;

						$limitConteiner.find('.subject__section_more').remove();

						if($limitConteinerText.length > 500){
							$limitConteiner .addClass('is_limited');
							$limitConteinerLimited = $limitConteinerText.slice(0, 501).replace(/\n/g, '<br/>').replace(regexRemoveLeadEndBR, '')  + ' ...';
							$limitConteiner.html($limitConteinerLimited);
							$("<p class='subject__section_more'>читать далее</p>").insertAfter($limitConteiner);
						} else {
							$limitConteiner.html($limitConteinerText.replace(/\n/g, '<br/>').replace(regexRemoveLeadEndBR, ''));
						}

						$('.subject__section_more').on('click', function(){
							$(this).text(function(i, text){
								return text === "читать далее" ? "свернуть" : "читать далее";
							}).toggleClass('js-limit');

							if($(this).hasClass('js-limit')){
								$limitConteiner.html($limitConteinerText.replace(/\n/g, '<br/>').replace(regexRemoveLeadEndBR, ''));
							} else {
								$limitConteiner.html($limitConteinerLimited);
							}

							return false;
						});

						/*--------------------------------------------------------------------*/

						$popupCurrent__multi.dialog('open');
					});
				}
			}
			else {
				if(opt.options.openOnClick) {
					$popupCurrent_btn__open.on('click', function(event) {
						event.preventDefault();

						var $popupCurrent_btn__open__this = $(this);

						$popupCurrent_btn__open__this.addClass('is_active');

						$popup.dialog('close');

						$popupCurrent.dialog('open');
					});
				}
			}

			$window.on('resize', function() {
				$popupCurrent.dialog('option', 'position', {
					my: opt.options.position.my,
					at: opt.options.position.at,
					of: $main_content,
					collision: 'none'
				});
			}).trigger('resize');
		}
	}
}