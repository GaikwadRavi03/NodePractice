var ans = (new Date().getDay())
	
if (ans == 0)
	text = "Sunday";
else if (ans == 1)
	text = "Monday";
else if (ans == 2)
	text = "Tuesday";
else if (ans == 3)
	text = "Wednsday";
else if (ans == 4)
	text = "Thursday";
else if (ans == 5)
	text = "Friday";
else if (ans == 6)
	text = "Saturday";
else
	text = "Whatever";

console.log(text);
