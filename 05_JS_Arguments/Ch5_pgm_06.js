// A function with two arguments

var showSum;
var showProduct;
showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56,74);

showProduct=function (productnum1,productnum2)
	{
		var result=productnum1*productnum2;
		console.log(result)
	}
showProduct(3,5);
showProduct=function (productnum1,productnum2,productnum3)
	{
		var result=productnum1*productnum2+productnum3;
		console.log(result)
	}
showProduct(3,5,18);

var showDifference=function (num1,num2,num3,num4)
	{
		let result=num1-num2-num3-num4;
		console.log(result);
	}
showDifference(4,5,6,7)
var showQuotient=function (num1,num2,num3,num4)
	{
		let result=num1/num2/num3;
		console.log(result);
	}
showQuotient(4,5,6)
var showAll;
showAll=function(num1,num2,num3,num4,num5)
	{
		let total=num1+num2-num3/num4*num5;
		console.log(result);
	}
showAll(3,4,5,6,7)


/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */
