function parseCount(value) {
	let parseValue;
	parseValue = Number.parseInt(value);
	if (Number.isNaN(parseValue)) {
		throw e = new Error("Невалидное значение");
	}
	return parseValue;
}

function validateCount(count) {
	try {
		return parseCount(count);
	} catch (e) {
		return e;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	getPerimeter() {
		return (this.a + this.b + this.c);
	}

	getArea() {
		let p = this.getPerimeter() / 2;
		let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
		return +S;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		return {
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}