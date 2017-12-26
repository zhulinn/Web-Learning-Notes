function printReverse(a) {
	for(var i = a.length - 1; i>=0; i--) console.log(a[i]);
}
function isUniform(a) {
	var one = a[0];
	for(var i = 1; i < a.length; i++) {
		if(a[i] !== one) return false;
	}
	return true;
}
function sumArray(a) {
	var sum = 0;
	a.forEach(function(each) {
		sum += each;
	})
	return sum;
}
function max(a) {
	var max = Number.MIN_VALUE;
	a.forEach(function(each) {
		if(each > max) max = each;
	})
	return max;
}