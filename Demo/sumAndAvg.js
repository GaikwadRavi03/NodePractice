let total=0;

for(var i=1;i<=5;i++){
	let random1=Math.floor(Math.random() * 90)+10;
	total+=random1;
	console.log(random1);
}

console.log("Total Sum : "+total);
average=total/5;
console.log("Average : "+average);

