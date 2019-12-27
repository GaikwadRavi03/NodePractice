var arr = new Array();

for (var i = 0; i<10; i++){
	let randomNum = Math.floor(Math.random() * 900)+100;
	arr[i] = randomNum;
}
console.log(arr);

function find2ndLargestNumber(arr) {
    var n = arr.length;
    var temp;
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr[n - 2];
}

console.log(find2ndLargestNumber(arr));
console.log(arr);
