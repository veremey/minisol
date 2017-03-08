$(function () {
	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/
	$(window).on('load', function() {

		Animation.initGlobalAnimations({
			container: '.out',
			selfTriggeredElems: {
				el1: {
					selector: '.header',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.jumbotron',
					triggerHook: 1,
					class: 'is_animated'
				},
				el3: {
					selector: '.info',
					triggerHook: 1,
					class: 'is_animated'
				},
				el4: {
					selector: '.collection',
					triggerHook: 1,
					class: 'is_animated'
				},
				el5: {
					selector: '.gallery',
					triggerHook: 1,
					class: 'is_animated'
				},
				el6: {
					selector: '.magazin',
					triggerHook: 1,
					class: 'is_animated'
				},
				el7: {
					selector: '.news',
					triggerHook: 1,
					class: 'is_animated'
				},
				el8: {
					selector: '.footer',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.jumbotron',
			selfTriggeredElems: {
				el1: {
					selector: '.jumbotron__figure',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.jumbotron__mark',
					triggerHook: 1,
					class: 'is_animated'
				},
				el3: {
					selector: '.jumbotron__title',
					triggerHook: 1,
					class: 'is_animated'
				},
				el4: {
					selector: '.jumbotron__footer',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.info',
			selfTriggeredElems: {
				el1: {
					selector: '.info__item',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.info__content',
					triggerHook: 1,
					class: 'is_animated'
				},
				el3: {
					selector: '.btn',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.collection',
			selfTriggeredElems: {
				el1: {
					selector: '.title__article',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.collection__wrap',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.gallery',
			selfTriggeredElems: {
				el1: {
					selector: '.title__article',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.gallery__item',
					triggerHook: 1,
					class: 'is_animated'
				},
				el3: {
					selector: '.btn',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.magazin',
			selfTriggeredElems: {
				el1: {
					selector: '.magazin__pic',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.magazin__content',
					triggerHook: 1,
					class: 'is_animated'
				},
				el3: {
					selector: '.btn',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});
		Animation.initGlobalAnimations({
			container: '.news',
			selfTriggeredElems: {
				el1: {
					selector: '.title__article',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.news__link',
					triggerHook: 1,
					class: 'is_animated'
				},
				el3: {
					selector: '.btn',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});
		// comlect
		Animation.initGlobalAnimations({
			container: '.complectations',
			selfTriggeredElems: {
				el1: {
					selector: '.title__article',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.complect',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});

		// section
		Animation.initGlobalAnimations({
			container: '.section',
			selfTriggeredElems: {
				el1: {
					selector: '.title__article',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.new',
					triggerHook: 1,
					class: 'is_animated'
				},
				el3: {
					selector: '.title__subtitle',
					triggerHook: 1,
					class: 'is_animated'
				},
				el4: {
					selector: '.title__middle',
					triggerHook: 1,
					class: 'is_animated'
				},
				el5: {
					selector: '.garant__fieldset',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});
		// specifications
		Animation.initGlobalAnimations({
			container: '.specifications',
			selfTriggeredElems: {
				el1: {
					selector: '.specifications__title',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.specifications__table tr',
					triggerHook: 1,
					class: 'is_animated'
				}
			}
		});

	});


});
