var readlineSync = require('readline-sync');
 
var num = readlineSync.questionInt('please enter the number : ');
console.log("Entered number is : "+num);
var flag = 0;

for (var i = 2; i <= num / 2; i++) {
	if (num % i == 0) {
		flag = 1;
		break;
	}
}
if (num == 0) {
console.log("no is not prime nor composite");
} else {
	if (flag == 0)
		console.log("prime");
	else
		console.log("not prime");
}

