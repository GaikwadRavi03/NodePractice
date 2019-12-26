var num = parseInt(process.argv[2]);
console.log("Entered number is : "+ num);
var sum = 1;
var n = 8;
for (var i = 2; i <= n; i++) {
	sum += 1.0 / i;
	console.log("sum is : "+ sum);
}
console.log("total is:" + sum);

