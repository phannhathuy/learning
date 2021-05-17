$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
		
	// Start slide show
    timer1 = setInterval(
        function () {   
        	$("#caption").slideDown(1000);
        	$("#slide").slideDown(1000,
           		function () {
           	     	if (nextSlide.next().length == 0) {
						nextSlide = $("#slides img:first-child");
					}
					else {
						nextSlide = nextSlide.next();
					}
					nextSlideSource = nextSlide.attr("src");
					nextCaption = nextSlide.attr("alt");
					$("#slide").attr("src", nextSlideSource).slideUp(1000);					
					$("#caption").text(nextCaption).slideUp(1000);
				}
			)
		}, 
		3000
	);
})