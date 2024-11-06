jQuery(function($){

	var accBtn = $(".size-title");

	accBtn.on("click", function(){
		$(this).toggleClass("toggle");
		$(this).next().toggleClass("toggle");
		$(this).next().slideToggle();
	});

});
