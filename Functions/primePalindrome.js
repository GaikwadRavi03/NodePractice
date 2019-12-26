var readlineSync = require('readline-sync');
 
var num = readlineSync.questionInt('please enter the number : ');

function checkForPrime(num){
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
}

function checkForPalindrome(num){
	var d;
	var rev = 0;
	var temp = num;
	while (num > 0) {
		d = num % 10;
		rev = rev * 10 + d;
		num = parseInt(num / 10);
	}
	if (temp == rev)
		console.log("palindrome");
	else
		console.log("not palindrome");
}

function primePalindrome(num){
	var flag;
	for (var n = 2; n <= num; n++) {
		flag = 0;
		for (var i = 2; i <= n / 2; i++) {
			if (n % i == 0) {
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			var pnum = n;
			// pnum stores prime numbers till 1000.
			for (var i = 0; i < pnum; i++) {
				var d;
				var rev = 0;
				var temp = pnum;
				while (pnum > 0) {
					d = pnum % 10;
					rev = rev * 10 + d;
					pnum = parseInt(pnum / 10);
				}
				if (temp == rev) {
					console.log("prime & palindrome :" + n);
				} else {
					console.log("");
				}
			}
		}
	}
}

checkForPrime(num);
checkForPalindrome(num);
primePalindrome(num);
