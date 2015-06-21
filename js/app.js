$(document).ready(function (){

var ul = $('body ul');


var max;

$('input:text').on('keydown', function(event){
	if(event.which == 13) {
		// event.preventDefault();
		max = $(this).val();
	}
}); //End on


function fizzBuzz(max) {
	for (var i = 1; i <= max; i++) {
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