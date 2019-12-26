var random1 = new Array();

for (var i = 0; i<5; i++){
	let randomNum = Math.floor(Math.random() * 900)+100;
	random1[i] = randomNum;
}
console.log("Array : "+random1);
if (random1[0] > random1[1] && random1[0] > random1[2] && random1[0] > random1[3] && random1[0] > random1[4]){
	console.log("max : "+random1[0]);
}else if (random1[1] > random1[0] && random1[1] > random1[2] && random1[1] > random1[3] && random1[1] > random1[4]){
	console.log("max : "+random1[1]);
}else if (random1[2] > random1[0] && random1[2] > random1[1] && random1[2] > random1[3] && random1[2] > random1[4]){
	console.log("max : "+random1[2]);
}else if (random1[3] > random1[0] && random1[3] > random1[2] && random1[3] > random1[1] && random1[3] > random1[4]){
	console.log("max : "+random1[3]);
}else if (random1[4] > random1[0] && random1[4] > random1[2] && random1[4] > random1[3] && random1[4] > random1[1]){
	console.log("max : "+random1[4]);
}if (random1[0] < random1[1] && random1[0] < random1[2] && random1[0] < random1[3] && random1[0] < random1[4]){
	console.log("min : "+random1[0]);
} else if (random1[1] < random1[0] && random1[1] < random1[2] && random1[1] < random1[3] && random1[1] < random1[4]){
	console.log("min : "+random1[1]);
} else if (random1[2] < random1[0] && random1[2] < random1[1] && random1[2] < random1[3] && random1[2] < random1[4]){
	console.log("min : "+random1[2]);
} else if (random1[3] < random1[0] && random1[3] < random1[1] && random1[3] < random1[2] && random1[3] < random1[4]){
	console.log("min : "+random1[3]);
}else if (random1[4] < random1[0] && random1[4] < random1[2] && random1[4] < random1[3] && random1[4] < random1[1]){
	console.log("min : "+random1[4]);
}


