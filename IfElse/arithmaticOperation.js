var readlineSync = require('readline-sync');
 
var a = readlineSync.question('enter the number value : ');
var b = readlineSync.question('enter the number value : ');
var c = readlineSync.question('enter the number value : ');

var myArray = new Array();

myArray[0] = a+b*c;
myArray[1] = a%b+c;
myArray[2] = c+a/b;
myArray[3] = a*b+c;

var max = myArray[0];
var min = myArray[0];

for (var i = 0; i<4; i++){
	if(myArray[i] > max){
	max=myArray[i];
	}
	if(myArray[i] < min){
	min=myArray[i];
	}
}
console.log("Array list is : "+myArray);
console.log("Max : "+max);
console.log("Min : "+min);



