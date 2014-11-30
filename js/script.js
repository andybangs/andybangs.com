/**********************
---Change Background---
**********************/

$(document).ready(function () {
	$('.logo').on('click', function (event) {
    event.preventDefault();
		$('body').toggleClass('bg2');
	});
});