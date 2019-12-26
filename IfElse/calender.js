var readlineSync = require('readline-sync');
 
var day = readlineSync.question('please enter day : ');
console.log("date : "+day);
var month = readlineSync.question('please enter month  : ');
console.log("Month : "+month);

if (day >= 20 && day <= 31 && month == 3)
	console.log("True");
else if (day >= 1 && day <= 29 && month == 4)
	console.log("True");
else if (day >= 1 && day <= 31 && month == 5)
	console.log("True");
else if (day >= 1 && day <= 20 && month == 6)
	console.log("True");
else
	console.log("false");

