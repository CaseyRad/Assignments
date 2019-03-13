var readlineSync = require('readline-sync');
var num1 = readlineSync.questionInt("Please enter a number: ");
var num2 = readlineSync.questionInt("Please enter another number: ");
var operation = readlineSync.question(`
Enter + for addition 
Enter - for subtraction 
Enter * for multiplication 
Enter / for division 
`);

var add = function (num1,num2) {
	console.log(num2+num1);
};
var sub = function (num1,num2) {
	console.log(num1-num2);
};
var mul = function (num1,num2) {
	console.log(num2*num1);
};
var div = function (num1,num2) {
	console.log(num1/num2);
};
if(operation=='+'){
	add(num1,num2);
}
else if(operation=='-'){
	sub(num1,num2);
}
else if(operation=='*'){
	mul(num1,num2);
}
else if(operation=='/'){
	div(num1,num2);
}
else{
	console.log("Invalid Input");
}
