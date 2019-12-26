var randomArray = new Array();

for (var i = 0; i<5; i++){
	let random1 = Math.floor(Math.random() * 900)+100;
	randomArray[i] = random1;
}

var max = randomArray[0];
var min = randomArray[0];

console.log("Array : "+randomArray);

for (var i = 0; i<5; i++){
	if(randomArray[i] > max){
	max=randomArray[i];
	}
	if(randomArray[i] < min){
	min=randomArray[i];
	}
}
console.log("max : "+ max);
console.log("min : "+ min);


