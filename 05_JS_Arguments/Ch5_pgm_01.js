// Relying on a variable outside of the function

var message;
var showMessage;

message = "Hello everyone";

showMessage = function () {
	console.log(message);//When we enter the variable name wrongly the error will be displayed
};

showMessage();



/* Further Adventures
 *
 * 1) Change the message and run the program.
 *
 * 2) Change the variable name in the
 *    parentheses for console.log.
 *    e.g. console.log(msg);
 *
 * 3) Run the program
 *
 * The showMessage function relies on
 * the variable name it uses with
 * console.log matching one that exists
 * outside of the function body.
 *
 */
