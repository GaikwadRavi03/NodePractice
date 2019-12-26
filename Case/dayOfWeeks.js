switch (new Date().getDay()) {
	case 0:                   
        	text = "Sunday";
        	break;
	case 1:                   
        	text = "Monday";
        	break;
	case 2:                   
        	text = "Tuesday";
        	break;
	case 3:                   
        	text = "Wednsday";
        	break;
	case 4:                   
        	text = "Thursday";
        	break;
	case 5:                   
        	text = "Friday";
        	break;
    	case 6:                   
        	text = "Saturday";          
        	break;
    	default:                  
	        text = "Whatever";
} 
console.log(text);
