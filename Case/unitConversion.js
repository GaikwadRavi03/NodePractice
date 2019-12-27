var readlineSync = require('readline-sync');
 
var choice = readlineSync.questionInt("1.Feet to inch\n2.Feet to meter\n3.Inch to feet\n4.Meter to feet\nEnter your chice:")
switch (choice) {
  case 1:
    var feet = readlineSync.questionInt('Enter the feet : ');
    var feetToInch = feet * 12;
    console.log(feet+" Feet = "+feetToInch+" Inch");
    break;
  case 2:
    var feet = readlineSync.questionInt('Enter the feet : ');
    var feetTometer = feet / 3.2808;
    console.log(feet+" Feet = "+feetTometer+" meter");
    break;
  case 3:
    var inch = readlineSync.questionInt('Enter the inch : ');
    var inchTofeet = inch / 12;
    console.log(inch+" Inch = "+inchTofeet+" Feet");
    break;
  case 4:
    var meter = readlineSync.questionInt('Enter the meter : ');
    var meterTofeet = meter / 0.3048;
    console.log(meter+" Meter = "+meterTofeet+" Feet");
    break;
  default :
    console.log("Please Enter valid choice");
}
