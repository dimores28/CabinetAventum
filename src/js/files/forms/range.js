// Підключення з node_modules
import * as noUiSlider from 'nouislider';
import  '../../libs/wNumb.min.js';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	const inputNumber = document.querySelector('#ownSum');
	const investSlider = document.querySelector('#rangeRandom');
	const ownSumRandom = document.querySelector('#ownSumRandom');


	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		const range = [];

		range.push(parseInt(textFrom));
		range.push(parseInt(textTo));

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
				'min': range[0],
				'max': range[1]
			},

			pips: {
				mode: 'values',
				values: range,
				density: 1000,
				format: wNumb({
					decimals: 0, 
					thousand: '.',
					suffix: ' $'}),
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

	if(investSlider) {
		let textFrom = investSlider.getAttribute('data-from');
		let textTo = investSlider.getAttribute('data-to');
		const range = [];

		range.push(parseInt(textFrom));
		range.push(parseInt(textTo));

		noUiSlider.create(investSlider, {
			start: 750, // [0,200000]
			connect: [true, false],
			step: 50,
			tooltips: [wNumb({
				decimals: 0, 
				thousand: '.',
				suffix: ' $'})
			],
			range: {
				'min': range[0],
				'max': range[1]
			},

			pips: {
				mode: 'values',
				values: range,
				density: 1000,
				format: wNumb({
					decimals: 0, 
					thousand: '.',
					suffix: ' $'}),
		  },
			
			format: wNumb({
				decimals: 0
			})
			
		});
	}

	inputNumber?.addEventListener('change', function (event) {
		event.stopPropagation();
		priceSlider.noUiSlider.set(this.value);
	});

	inputNumber?.addEventListener('input', function (event) {
		event.stopPropagation();
	});


	priceSlider?.noUiSlider.on('update', function (values, handle) {
		inputNumber.value =  values[handle];
	});

	investSlider?.noUiSlider.on('update', function (values, handle) {
		ownSumRandom.value =  values[handle];
	});

	ownSumRandom?.addEventListener('change', function (event) {
		event.stopPropagation();
		investSlider.noUiSlider.set(this.value);
	});
}
rangeInit();
