console.log("Print all nums between -10 ~ 19");

for(var n = -10; n < 20; n++) console.log(n);
console.log("Print all even nums between 10 ~ 40");

for(var n = 10; n <=40; n+= 2) {
	console.log(n);
	
}
console.log("Print all odd nums between 300 ~ 333");
for(var n = 301;n <= 333;n+=2) {
	console.log(n);

}
console.log("Print all nums divisible by 5 and 3 between 5 and 50");

for(var n = 5;n <= 50; n+=5) {
	if(n%3 == 0) console.log(n);

}
