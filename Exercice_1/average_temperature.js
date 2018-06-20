function maxAverage (array) {
	var max = null,
	arrayMax = [],
	soustraction = 0
	;

	if (array.length < 2) {
		max += 0;
	} else {

		array.map(function(elem, i) {
			if (array[i + 1] > array[i]) {
				soustraction += array[i + 1] - array[i]	
			}
			if (array[i + 2] < array[i + 1]) {
				arrayMax.push(soustraction);
				soustraction = 0;
			} else if (array[i + 2] == undefined) {
				arrayMax.push(soustraction);
				soustraction = 0;
			}
		})

		if (arrayMax.length == 0) {
			max = soustraction;
		} else if (arrayMax.length > 0) {
			max = Math.max(...arrayMax);
		}
	}
	console.log(max);
}

// var array = [10, 20, 30, 40, 50];
var array = [10, 20, 9, 16, 17];
// var array = [5, 4, 3];
// var array = [1];
// var array = [5, 2, 1, 4, 9, 2, 15];
// var array = [5, 3, 1, 8, 9, 6, 20, 21, 34, 20, 15, 14, 17, 16, 16, 10, 5, 6, 8, 10, 11, 20, 22, 24, 29, 30, 34, 28, 20, 12, 8, 15, 14, 10, 36, 20];

maxAverage(array);