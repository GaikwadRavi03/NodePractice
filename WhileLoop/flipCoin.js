var head = 0;
var tail = 0;
while ( head <= 11 || tail <= 11){
var coin = Math.floor(Math.random() * 2)+1;
	if (coin == 1 ){
		 head++;
	         
	} else {
		 tail++;
	}
}
console.log("Head counter : "+head);
console.log("Tail counter : "+tail);
