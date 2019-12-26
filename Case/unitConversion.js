var readlineSync = require('readline-sync');
 
var feet = readlineSync.questionInt('Enter the feet : ');
var inch = readlineSync.questionInt('Enter the inch : ');
var meter = readlineSync.questionInt('Enter the meter : ');

var INCH = 12;
var feetToInch = feet * INCH;
var feetTometer = feet / 3.2808;
var inchTofeet = inch / 12;
var meterTofeet = meter / 0.3048;

console.log("Feet To Inch is : "+feetToInch);
console.log("Feet To Meter is : "+feetTometer);
console.log("Inch To Feet is : "+inchTofeet);
console.log("Meter To Feet is : "+meterTofeet);
