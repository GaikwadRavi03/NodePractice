var readlineSync = require('readline-sync');
 
var num = readlineSync.question('please enter the number : ');
console.log("Entered number is : "+num);

if (num == 0)
	text = "zero";
else if (num == 1)
	text = "one";
else if (num == 2)
	text = "two";
else if (num == 3)
	text = "three";
else if (num == 4)
	text = "four";
else if (num == 5)
	text = "five";
else if (num == 6)
	text = "six";
else if (num == 7)
	text = "seven";
else if (num == 8)
	text = "eight";
else if (num == 9)
	text = "nine";
console.log(text); 

