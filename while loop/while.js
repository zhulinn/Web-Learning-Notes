console.log("Print all nums between -10 ~ 19");
var n = -10;
while(n < 20) console.log(n++);
console.log("Print all even nums between 10 ~ 40");
n = 10;
while(n <=40) {
	console.log(n);
	n += 2;
}
console.log("Print all odd nums between 300 ~ 333");
n = 301;
while(n <= 333) {
	console.log(n);
	n += 2;
}
console.log("Print all nums divisible by 5 and 3 between 5 and 50");
n = 5;
while(n <= 50) {
	if(n%3 == 0) console.log(n);
	n += 5;
}
