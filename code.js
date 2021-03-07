var num1;
var num2;
var answer;

function getProblem() {
   num1 = randomNumber(2, 9);
   num2 = randomNumber(2, 9);
  var prob = num1.toString() + " x " + num2.toString();
  return prob;
}
onEvent("button1", "click", function( ) {
	setText("label1", getProblem());
});
onEvent("input1", "input", function() {
	answer = getText("input1");
});
onEvent("button2", "click", function( ) {
	answer = parseInt(answer);
	if (num1 * num2 === answer) {
	  setText("label2", "Correct!");
	} else {
	  setText("label2", "Sorry, try again!");
	}
});
