$(function (){


$('input[type="text"]').focus();

$('#dialog').dialog({
				autoOpen: false,
				hide: 'explode',
				modal: true,
			}); //End dialog


var $ul = $('ul');
var maxNum = 0; 


function fizzBuzzImproved (max) {
	$ul.fadeOut( function () {
		console.time('improvedVersion');
	function check(n){
		var msg = '';
		if ( n % 3 == 0 ) {msg += 'Fizz'};
		if ( n % 5 == 0 ) {msg += 'Buzz'};
		return msg || n;
	}
	for (var i = 1; i <= max; i++) {
		$ul.append("<li>" + check(i) + "</li>");
	}
	console.timeEnd('improvedVersion');
}); //End callback function from fadeOut
	
}

$('#myForm').on('keydown', 'input:text', function(event){
	if(event.keyCode == 13) {
		$ul.html('');
		maxNum = Number($(this).val());
		event.preventDefault();
		if(isNaN(maxNum) || maxNum % 1 !== 0) {
			$('#dialog').dialog('open'); //End dialog
		} else {
			fizzBuzzImproved(maxNum);
			$ul.fadeIn();
		} //End second if statement to check for decimals and NaN
		
	} else {
		return;
	} //End first if-else statement
	
}); //End keydown



}); //End ready