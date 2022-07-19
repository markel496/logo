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