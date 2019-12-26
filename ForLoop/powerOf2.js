
var num = parseInt(process.argv[2]);

console.log("Entered number is : "+ num);

var power = 1;
for (var i = 0; i <= num; i++) {
	console.log("2^" + i + "=" + power);
	power *= 2;
}
