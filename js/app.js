$(function (){

$('#dialog').dialog({
				autoOpen: false,
				hide: 'explode',
				modal: true,
				position: [50, 100]
			}); //End dialog
$('input:text').focus();
var ul = $('ul');
var maxNum = 0; 
// = prompt("Enter a maximum number for the Fizz Buzz game");



//  while (isNaN(maxNum)) {
// 	maxNum = prompt('Please enter a number only');
// }

// while (maxNum % 1 !== 0) {
// 	maxNum = prompt('Please enter a whole number only');
// }


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

$('#myForm').on('keydown', 'input:text', function(event){
	if(event.keyCode == 13) {
		ul.html('');
		maxNum = Number($(this).val());
		event.preventDefault();
		if(isNaN(maxNum) || maxNum % 1 !== 0) {
			$('#dialog').dialog('open'); //End dialog
		} else {
			fizzBuzz(maxNum);
			
		} //End second if statement to check for decimals and NaN
		
		
	} else {
		return;
	} //End first if-else statement
	
}); //End keydown















}); //End ready