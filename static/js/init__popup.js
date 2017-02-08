$(function () {
	Popup.initMultyPopup({
		popup: '.popup',
		popup_wrap: '.popup-wrap',
		popupCurrent: '.popupPeople',
		popupCurrent_wrap: '.popupEnter-wrap',
		popupCurrent_btn__open: '.popupPeople-btn__open',
		popupCurrent_btnWrap__open: '.popupPeople-btnWrap__open',
		popupCurrent_btn__close: '.popupPeople-btn__close',
		popupCurrent_btn__next: '.popup-btn__next',
		popupCurrent_btn__prev: '.popup-btn__prev',

		options: {
			modal: true,
			width: 780,
			height: 'auto',
			autoOpen: false,
			resizable: false,
			position: {
				my: 'center top',
				at: 'center top'
			},
			show: {
				effect: 'fade',
				duration: 300
			},
			addBlur: true,
			openOnClick: true,
			overlayClasses: 'mod_bg',
			closeOnEscape: true,
			closeOnClick: true,
			multiPopups: true
		}
	});

});
