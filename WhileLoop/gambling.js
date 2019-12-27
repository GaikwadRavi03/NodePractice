var STAKE = 10;
var dailyBetAmount = STAKE
while (dailyBetAmount > 0 || dailyBetAmount <= 20){
	var bet = Math.floor(Math.random() * 2)+1;	
	if (bet == 1){
		dailyBetAmount++;
		console.log(dailyBetAmount);
	}else{
		dailyBetAmount--;
		console.log(dailyBetAmount);
	}
}
