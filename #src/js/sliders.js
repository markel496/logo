// BildSlider from Andrikanich:)
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-container')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-container');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('LightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }


if (document.querySelector('.main-slider')) {
	let mainSlider = new Swiper('.main-slider__body', {
		loop: true,
		speed: 800,
		breakpoints: {
   	// when window width is >= 320px
   		320: {
   			navigation: {
    				nextEl: '.main-slider__button-next',
    				prevEl: '.main-slider__button-prev',
  				}
   		},
   		570: {
   			//Dots
				pagination: {
					el: '.main-slider__dots',
					clickable: true
   			},
   			navigation: false
			}
		}
	})


	let dotsMainSlider = document.querySelector('.main-slider__dots');
	if (dotsMainSlider.classList.contains('swiper-pagination-bullets')) {

		let mainSliderImages = document.querySelectorAll('.main-slider__img');
		let mainSliderDots = document.querySelectorAll('.main-slider__dots .swiper-pagination-bullet');
		// console.log(mainSliderDots.length);
		// console.log(mainSliderImages.length);
		// for (let i = 0; i < mainSliderImages.length; i++) {
		// 	while (i < mainSliderImages.length) {
		// 		const mainSliderImg = mainSliderImages[i].querySelector('img').getAttribute('src');
		// 		mainSliderDots[i].style.backgroundImage = "url('" + mainSliderImg + "')";
		// 	}	
		// }
		let dotsNumber = 0;
		for (var i = 0; i < mainSliderImages.length; i++) {
			const parent = mainSliderImages[i].parentNode;
			if (!parent.classList.contains('swiper-slide-duplicate')) {
				const mainSliderImg = mainSliderImages[i].querySelector('img').getAttribute('src');
				mainSliderDots[dotsNumber].style.backgroundImage = "url('" + mainSliderImg + "')";
				// console.log(dotsNumber);
				dotsNumber = dotsNumber + 1;
			}
		}
		
	
		// let i = 0;
		// while (i < mainSliderDots.length && !mainSliderImages[i].parentNode.classList.contains('swiper-slide-duplicate')) {
		// 	const mainSliderImg = mainSliderImages[i].querySelector('img').getAttribute('src');
		// 	mainSliderDots[i].style.backgroundImage = "url('" + mainSliderImg + "')";
		// 	i++;
		// }
	}
}

if (document.querySelector('.products-slider')) {
	let productsSlider = new Swiper('.products-slider__item', {
		slidesPerView: 1,
		speed: 600,
		autoHeight: true,
		navigation: {
    		nextEl: '.products-slider__arrow_next',
    		prevEl: '.products-slider__arrow_prev'
  		},
  		pagination: {
        el: '.products-slider__info',
        type: 'fraction'
      }
	})
}

if (document.querySelector('.brands-slider')) {
	let brandsSlider = new Swiper('.brands-slider__body', {
		loop: true,
		slidesPerView: 1,
		navigation: {
    		nextEl: '.brands-slider__arrow__next',
    		prevEl: '.brands-slider__arrow__prev'
  		},
  		breakpoints: {
  			// when window width is >= 992px
   		992: {
   			slidesPerView: 5
   		},
   		870: {
   			slidesPerView: 4
   		},
   		650: {
   			slidesPerView: 3
   		},
   		440: {
   			slidesPerView: 2
   		}
  		}
	})
}

// nouislider
if (document.querySelector('.filter')) {

	var priceSlider = document.querySelector('.price-filter__slider');
	noUiSlider.create(priceSlider, {
	   start: [0, 100000],
	   connect: true,
	   step: 5000,
	   tooltips: [wNumb({decimals: 0, suffix: '&nbsp₽'}), wNumb({decimals: 0, suffix: '&nbsp₽'})],
	   range: {
	      'min': 0,
	      'max': 200000
	   }
	});
	
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	
	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
	
	
	
	//filter__title _slideToggle 
	
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		let filterTitle = document.querySelector('.filter__title');
		let filterContent = document.querySelector('.filter__content')
		let filterImg = document.querySelector('.filter__title img')
		filterTitle.addEventListener("click", function(e) {
			if (!filterContent.classList.contains('_slide')) {
				filterImg.classList.toggle('_active');
				if (!filterImg.classList.contains('_active')) {
					filterImg.classList.add('animate__animated', 'animate__fadeInDown', 'animate__infinite');
				} else {
					filterImg.className = '_active';  //удаляет все классы кроме _active
				}
				_slideToggle(filterContent);
			}
		});
	}
}


//images-product__mainslider

if (document.querySelector('.images-product__mainslider', '.images-product__subslider')) {
	let productSubSlider = new Swiper('.images-product__subslider', {
		slidesPerView: 4,
		speed: 700
	});
	let productMainSlider = new Swiper('.images-product__mainslider', {
		slidesPerView: 1,
		speed: 700,
		thumbs: {
			swiper: productSubSlider
		}
	});
}

