"use strict";

function solveEquation(a, b, c) {
	let arr;
	let D = (b ** 2) - (4 * a * c);

	if (D < 0) {
		arr = [];
	}
	else if (D === 0) {
		let x = -b / (2 * a);
		arr = [x];
	}
	else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);
		arr = [x1, x2];
	}

	// код для задачи №1 писать здесь
	return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;

	let percentExamination = parseInt(percent);
	if (isNaN(percentExamination)) {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	}

	let contributionExamination = parseInt(contribution);
	if (isNaN(contributionExamination)) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	}

	let amountExamination = parseInt(amount);
	if (isNaN(amountExamination)) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	}

	let S = +(amount - contribution); // тело кредита

	let dateStartMonth = (new Date()).getMonth();
	let dateEndMonth = (new Date(date)).getMonth();
	let dateStartYear = (new Date()).getFullYear();
	let dateEndYear = (new Date(date)).getFullYear();

	let n = +(dateEndMonth - dateStartMonth + (12 * (dateEndYear - dateStartYear))); // количество месяцев

	let P = +(percent / 100 / 12); // 1/12 процентной ставки

	let payment = S * (P + P / (((1 + P) ** n) - 1));
	let sum = (payment * n).toFixed(2);
	console.log(sum);
	totalAmount = +sum;

	// код для задачи №2 писать здесь

	return totalAmount;
}
