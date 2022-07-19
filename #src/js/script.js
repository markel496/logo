
/*JS-функция определения поддержки WebP*/

// function testWebP(callback) {

// 	var webP = new Image();
// 	webP.onload = webP.onerror = function () {
// 		callback(webP.height == 2);
// 	};
// 	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {

// 	if (support == true) {
// 		document.querySelector('body').classList.add('webp');
// 	}
// 	else{
// 		document.querySelector('body').classList.add('no-webp');
// 	}
// });

/*Выполнение js кода после формирования DOM*/
// document.addEventListener('DOMContentLoaded', function() {
//    // Ваш скрипт
// }, false);

/*Проверка на устройство*/
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     // код для мобильных устройств
//   } else {
//     // код для обычных устройств
// }

@@include('scrolling.js')
@@include('dynamic_adapt.js')
@@include('sliders.js')

//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duratin');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if(!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Бургер
let burger_icon = document.querySelector('.icon-menu');
let menu_body = document.querySelector('.menu__body');
let logo = document.querySelector('.top-header__column:nth-child(2)');
burger_icon.addEventListener("click", function(e) {
	burger_icon.classList.toggle('_active');
	menu_body.classList.toggle('_active');
	logo.classList.toggle('_top');
	document.body.classList.toggle('lock');
});

//menu-page__burger
let menuPage_icon = document.querySelector('.menu-page__burger');
let menuPage = document.querySelector('.menu-page__body');

menuPage_icon.addEventListener("click", function(e) {
	if (!menuPage.classList.contains('_slide')) {
		menuPage_icon.classList.toggle('_active');
		_slideToggle(menuPage);
	}
	//  menuPage_icon.classList.toggle('_active');
	// if (!menuPage.classList.contains('_slide')) {
 //    menuPage.classList.add('_slide');
 //    menuPage.style.maxHeight = menuPage.scrollHeight + 'px';
 //  } else {
 //  	menuPage.classList.remove('_slide');
 //  	menuPage.style.maxHeight = 0;
 //  }
});



//submenu-page
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

   	let menuParents = document.querySelectorAll('.menu-page__parent>a');
   	let submenuPageItems = document.querySelectorAll('.submenu-page__item');

   	for (let i = 0; i < menuParents.length; i++) {
   		const menuParent = menuParents[i];
   		const submenuPageItem = submenuPageItems[i];
   		menuParent.addEventListener("click", function(e) {
   			e.preventDefault();
   			if (!submenuPageItem.classList.contains('_slide')) {
					menuParent.parentElement.classList.toggle('_active');
					_slideToggle(submenuPageItem);
				}
			});
   	}
  	} else {

   	let menuParents = document.querySelectorAll('.menu-page__parent');
	
		for (let i = 0; i < menuParents.length; i++) {
			const menuParent = menuParents[i];
			menuParent.addEventListener("mouseenter", function(e) {
				menuParent.classList.add('_active');
			});
			menuParent.addEventListener("mouseleave", function(e) {
				menuParent.classList.remove('_active');
			});
		}
}

//search-page__select
let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');

searchSelect.addEventListener("click", function(e) {
	if (!categoriesSearch.classList.contains('_slide')) {
		searchSelect.classList.toggle('_active');
		_slideToggle(categoriesSearch);
	}
});

//checkbox
let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let i = 0; i < checkboxCategories.length; i++) {
	const checkboxCategory = checkboxCategories[i];
	checkboxCategory.addEventListener("change", function(e) {
		checkboxCategory.classList.toggle('_active');

		let checkboxCategoriesActive = document.querySelectorAll('.categories-search__checkbox._active');

		if (checkboxCategoriesActive.length > 0) {
			searchSelect.classList.add('_categories');
			let searchQuantity = searchSelect.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxCategoriesActive.length;
		} else {
			searchSelect.classList.remove('_categories');
		}
	});
}

//hover-item-product
if (document.querySelector('.products-slider__items')) {

	let productsSlider = document.querySelector('.products-slider__item');
	let itemProducts = productsSlider.querySelectorAll('.item-product');
	let productImgs = productsSlider.querySelectorAll('.item-product__image');
	
		if (screen.width > 992) {
			for (let i = 0; i < itemProducts.length; i++) {
				let productImg = productImgs[i]; 
				let itemProduct = itemProducts[i];
  				productImg.onmouseenter = function() { // курсор зашёл на элемент-productImg
  				  // this.classList.add("_hover");
  				  this.parentNode.parentElement.classList.add("_hover")
  				}
  				itemProduct.onmouseleave = function() { // курсор ушёл с элемента
  				  this.classList.remove("_hover")
  				}
			}
		}
}

//section-filter_arrow
if (document.querySelector('.filter')) {
	let filterSpoilers = document.querySelectorAll('.section-filter__title._spoiler');
	
	for (let i = 0; i < filterSpoilers.length; i++) {
		const filterSpoiler = filterSpoilers[i];
		const filterSpoilerWrapper = filterSpoiler.nextElementSibling;//следующий элемент ('.section-filter__wrapper')
		filterSpoiler.addEventListener("click", function(e) {
			if (!filterSpoilerWrapper.classList.contains('_slide')) {
				filterSpoiler.classList.toggle('_active');
				_slideToggle(filterSpoilerWrapper);
			}
		});
	}
}

	// window.addEventListener('resize', function(event) {
	// 	console.log(screen.width);
	// });


//quantity
if (document.querySelector('.product')) {
	let quantityButtons = document.querySelectorAll('.quantity-product__arrow');
	if (quantityButtons.length > 0) {
		for (let i = 0; i < quantityButtons.length; i++) {
			const quantityButton = quantityButtons[i];
			const priceElement = document.querySelector('.action-product__current-price')
				
			const productPrice = parseInt(priceWithoutSpaces(priceElement.firstChild.data))
			quantityButton.addEventListener("click", function(e) {
	
				let value = parseInt(quantityButton.closest('.quantity-product').querySelector('input').value);
	
				if (quantityButton.classList.contains('quantity-product__arrow_plus')) {
					value++;
					priceElement.innerHTML = `${normalPrice(productPrice * value)} <span>₽</span>`
				} else {
					if (value > 1) {
						value = value - 1;
						priceElement.innerHTML = `${normalPrice(productPrice * value)} <span>₽</span>`
					}
				}
				quantityButton.closest('.quantity-product').querySelector('input').value = value;
			});
		}
	}
}


/*Убирает пробелы*/
function priceWithoutSpaces(str) {
	return str.replace(/\s/g, '');
};

/*Функция добавляет пробелы между разрядами числа*/
function normalPrice(str) {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};


// window.addEventListener('resize', function(event) {
// 	let actionProduct = document.querySelector('.action-product');
// 	for (var i = 0; i < actionProduct.children.length; i++) {
// 		const actionProductChild = actionProduct.children[i];
// 		if (actionProductChild.classList.contains('body-product__compare')) {
// 			const compareBtn = actionProductChild;
// 			compareBtn.classList.remove('_dynamic_adapt_');
// 			compareBtn.setAttribute("data-da", "body-product__top,450,1");
// 			da.init();
// 		}
// 	}
// });



//tabs
if (document.querySelector('._tabs')) {

	let tabTitles = document.querySelector('._tabs');
	let tabTitle = document.querySelectorAll('.info-product__title');
	let tabContent = document.querySelectorAll('.info-product__text');
	
	
	//скрывает содержимое всех вкладок кроме активной
	function hideTabContent(a) { 
	 	for (let i = a; i < tabContent.length; i++) {
	 		tabContent[i].classList.remove('_show');
	 		tabContent[i].classList.add('_hide');
	 		tabTitle[i].classList.remove('_active');
	 	}
	}
	
	hideTabContent(1);
	
	//показывает содержимое только выбранной вкладки
	function showTabContent(b) {
	  	if(tabContent[b].classList.contains('_hide')) {
			tabContent[b].classList.remove('_hide');
			tabContent[b].classList.add('_show');
			tabTitle[b].classList.add('_active');
	  	}
	}
	
	
	tabTitles.addEventListener('click', function(event) {
		let target = event.target;
		if (target && (target.closest('.info-product__title'))) {
			for(let i = 0; i < tabTitle.length; i++) {
				if (target == tabTitle[i] || target == tabTitle[i].firstChild) {
					hideTabContent(0);
					showTabContent(i);
					let productBody = document.querySelector('.info-product__body');
					if (target == tabTitle[1] || target == tabTitle[1].firstChild) {
						productBody.classList.add('_transparent');
					} else {
						productBody.classList.remove('_transparent');
					}
					break;
				}
			}
		}
	});
}


//same-products__items
if (document.querySelector('.same-products__items')) {

	let productSame = document.querySelector('.product__same');
	let itemProducts = productSame.querySelectorAll('.item-product');
	let productTitles = productSame.querySelectorAll('.item-product__title');
	// let itemProductHovers = document.querySelectorAll('.item-product__hover');
	
	if (screen.width > 992) {
		for (let i = 0; i < itemProducts.length; i++) {
			let productTitle = productTitles[i]; 
			let itemProduct = itemProducts[i];
			productTitle.addEventListener("click", function(e) {
				e.preventDefault();
				for (let a = 0; a < itemProducts.length; a++) {//проверяю наличие класса _click у каждого элемента с классом item-product
					let itemProductCheck = itemProducts[a];
					if (itemProductCheck.classList.contains('_click')) {
						itemProductCheck.classList.remove('_click');
					}
				}
				itemProduct.classList.add('_click');
			});
			document.documentElement.addEventListener("click", function (e) { //Слушаю клик на любую область всего документа
				if(!e.target.closest('.item-product')) { //Нету ли родителя с классом .item-product у кликнутого элемента
					itemProduct.classList.remove('_click');
				}
			});
		}
	}
}

//item-order__delete

if (document.querySelector('.checkout__order')) {
	let orderItems = document.querySelector('.order-checkout__items');
	let deleteIcons = orderItems.querySelectorAll('.item-order__delete')
	for (var i = 0; i < deleteIcons.length; i++) {
		let orderItem = deleteIcons[i].parentNode;
		let deleteIcon = deleteIcons[i];
		deleteIcon.addEventListener("click", function(e) {
			e.preventDefault();
			orderItem.classList.add('animate__animated', 'animate__bounceOut');
			setTimeout(function() {
    			orderItem.style.display = "none";
  			}, 1000); // 10000 мсек = 10 сек
		});
	}
}

//tabs checkout

	const tabs = document.querySelector(".content-checkout__nav");
	const tabsBtn = document.querySelectorAll(".content-checkout__item");
	const tabsContent = document.querySelectorAll(".content-checkout__block");

	const tabsHandler = (path) => {
		tabsBtn.forEach(el => {el.classList.remove('_active')});//Проходим по всем элементам .content-checkout__item и удаляем у всех класс _active
		document.querySelector(`[data-tabs-path="${path}"]`).classList.add('_active');//Находим текущий tab

		tabsContent.forEach(el => {el.classList.remove('_active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('_active');
	};

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains("content-checkout__item")) { //Если мы кликаем по .content-checkout__item
				const tabsPath = e.target.dataset.tabsPath; //находим data-атрибут у кликнутого элемента
				tabsHandler(tabsPath);
			}
		});
	}




