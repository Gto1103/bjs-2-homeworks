function compareArrays(arr1, arr2) {
	let result, length;

	length = arr1.length === arr2.length ? true : false;

	result = arr1.every((item, idx) => {
		return (arr1[idx] === arr2[idx] && length)
	});

	// Ваш код

	return result; // boolean
}

function advancedFilter(arr) {
	let resultArr;

	resultArr = arr.filter((item) => item > 0)
		.filter((item) => item % 3 === 0)
		.map((item, idx) => item * 10);

	// Ваш код

	return resultArr; // array
}
