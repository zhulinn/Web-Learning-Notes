function isEven(x) {
	return x%2 == 0;
}
function factorial(x) {
	var res = 1;
	while(x > 0) res *= x--;
	return res;
}
function kebabToSnake(s) {
	return s.replace(/-/g, "_");
}