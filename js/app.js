$(document).ready(function (){

var ul = $('ul');
var maxNum = prompt("Enter a maximum number for the Fizz Buzz game");

 while (isNaN(maxNum)) {
	maxNum = prompt('Please enter a number only');
}

while (maxNum % 1 !== 0) {
	maxNum = prompt('Please enter a whole number only');
}


function fizzBuzz (max) {
	for (var i = 1; i <= parseInt(max); i++) {
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

// var code = event.keyCode || event.which;

// $('form').on('keydown', 'input:text', function(event){
// 	if(event.code == 13) {
// 		event.preventDefault();
// 		maxNum = $(this).val();
// 	}
	
// }); //End keydown

fizzBuzz(maxNum);













}); //End ready