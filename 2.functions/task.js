// Задание 1
function getArrayParams(arr) {
	let min, max, sum, avg;

	min = Infinity;
	max = -Infinity;
	sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}

		sum += arr[i];
	}

	avg = +((sum / arr.length).toFixed(2));

	// Ваш код

	return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
	let sum;

	sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	// Ваш код

	return sum;
}

function makeWork(arrOfArr, func) {
	let max;

	max = 0;

	for (let i = 0; i < arrOfArr.length; i++) {
		if (func(arrOfArr[i]) > max) {
			max = func(arrOfArr[i]);
		}
	}

	// Ваш кода
	// for ...

	return max
}

// Задание 3
function worker2(arr) {

	let max, min, dif;
	max = -Infinity;
	min = Infinity;
	dif = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}
	}

	if (max > min) {
		dif = max - min;
	} else {
		dif = min - max;
	}

	return dif;

	// Ваш код
}
