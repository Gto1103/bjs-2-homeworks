function Student(name, gender, age) {

	this.name = name;
	this.gender = gender;
	this.age = age;
	//ваш код
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
	//ваш код
}

Student.prototype.addMark = function (mark) {
	if (this.marks === undefined) {
		this.marks = [];
		this.marks.push(mark);
		// добавить первую оценку 
	} else {
		this.marks.push(mark);
		// добавить вторую и последующие оценки в массив
	}
}

Student.prototype.addMarks = function (...newMark) {
	if (this.marks === undefined) {
		this.marks = newMark;
	} else {
		this.marks = this.marks.concat(newMark);
	}
}

Student.prototype.getAverage = function () {
	return this.marks.reduce((acc, item) => (acc + item)) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMarks(2, 3, 2);
// ваш код для остальных методов