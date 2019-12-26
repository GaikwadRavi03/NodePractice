var readlineSync = require('readline-sync');
 
var num = readlineSync.questionInt('please enter the number : ');
console.log("Entered number is : "+num);

switch (num) {
	case 1 :
		text = "one";
		break;
	case 10:
		text = "ten";
		break;
	case 100:
		text = "hundred";
		break;
	case 1000:
		text = "thousand";
		break;
	case 10000 :
		text = "ten thousand";
		break;
	case 100000:
		text = "million";
		break;
	case 1000000:
		text = "ten million";
		break;
	case 10000000:
		text = "one hundred million";
		break;
	case 100000000:
		text = "bilion";
		break;
	case 1000000000:
		text = "ten bilion";
		break;
	case 10000000000:
		text = "one hundred bilion";
		break;
	default:                  
	        text = "Whatever";
	}
console.log(text);
