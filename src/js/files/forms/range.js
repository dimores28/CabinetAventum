// Підключення з node_modules
import * as noUiSlider from 'nouislider';
import  '../../libs/wNumb.min.js';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: 750, // [0,200000]
			connect: [true, false],
			step: 50,
			tooltips: [wNumb({
				decimals: 0, 
				thousand: '.',
				suffix: ' $'})
			],
			range: {
				'min': [300],
				'max': [5000]
			},

			pips: {
				mode: 'values',
				values: [300, 5000],
				density: 1000
		  },
			
			format: wNumb({
				decimals: 0
			})
			
		});
		/*
		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		*/
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
	}
}
rangeInit();
