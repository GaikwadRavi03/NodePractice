let read = require('readline-sync')
let cash = 10;
let goal = 20;
if (goal <= cash)
           console.log("goal is less than or equal to cash");
else {
       while (cash < goal) {
               if (Math.random() < 0.5) {                  
                       cash--;
               }
               else{
                       cash++;
               }
               if(cash <= 0)
                       break;
       }
}
console.log("Cash :",cash);
if (cash >= goal)
       console.log("reached maximun goal...");
else if (cash <= 0)
       console.log("reached minimun goal...");
