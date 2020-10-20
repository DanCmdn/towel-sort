module.exports = function towelSort(matrix) {
	if (arguments.length === 0) {
		return [];
	}

	let i = 2;
	let arr = [];
	for (let item of matrix) {
		if (i % 2 == 0) {
			for (let deepItem of item) {
				arr.push(deepItem);
			};
			i++
		} else {
			for (let deepItem of item.reverse()) {
				arr.push(deepItem);
			};
			i++
		}
	}
	
	return arr;
}