$(document).ready(function (){

var ul = $('body ul');


function fizzBuzz() {
	for (var i = 1; i <= 100; i++) {
		if(i % 3 == 0 && i % 5 == 0) {
			ul.append("<li>fizzBuzz</li>");
		} else if (i % 3 == 0 ) {
			ul.append("<li>fizz</li>");
		} else if (i % 5 == 0) {
			ul.append("<li>buzz</li>");
		} else {
			ul.append("<li>" + i + "</li>");
		}
	} // End for statement
} // End fizzBuzz function

fizzBuzz();









}); //End ready