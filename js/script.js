/**********************
---Change Background---
**********************/

$(document).ready(function() {	
	$('.logo').on('click', function() {
			$('body').toggleClass('bg2');
	});
});

// For 3 or more background images

// var imageIndex = 0;
// var imagesArray = [
//     "images/wbg_arashiyama.jpg",
//     "images/wbg_train.jpg",
//     "images/wbg_hozugawa.jpg"
// ];

// function changeBackground(){
//     var index = imageIndex++ % imagesArray.length;
//     $("body").css({"background":"linear-gradient(rgba(62,62,62,.5), rgba(62,62,62,.5)), url('"+ imagesArray[index] +"') center center fixed no-repeat",
// 				   				 "background-size":"cover",
// 				   				 "width":"100%",
// 				   				 "height":"100%"});  
// }

// $(document).ready(function() {	
// 	$('.logo').on('click', function() {
// 			changeBackground();
// 	});
// });

// $(document).ready(function() {
//   setInterval(changeBackground, 8000);
// });




