var readlineSync = require('readline-sync');
 
var num = readlineSync.question('please enter the number : ');
console.log("Entered number is : "+num);

if (num == 1)
	text = "one";
else if (num == 10)
	text = "ten";
else if (num == 100)
	text = "hundred";
else if (num == 1000)
	text = "thousand";
else if (num == 10000)
	text = "ten thousand";
else if (num == 1000000)
	text = "million";
else if (num == 10000000)
	text = "ten million";
else if (num == 100000000)
	text = "one hundred million";
else if (num == 1000000000)
	text = "bilion";
else if (num == 10000000000)
	text = "ten bilion";
console.log(text); 
