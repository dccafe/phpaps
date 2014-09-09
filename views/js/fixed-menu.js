function UpdateMenuPosition() {
	var clonedMenu  = $(".floatingMenu");
	var menuTop = $("#menu").offset().top;
	var currentPosition = $(window).scrollTop();
	
	if (currentPosition > menuTop) {
		clonedMenu.css({"visibility": "visible"});
	}
	else {
		clonedMenu.css({"visibility": "hidden"});
	}
}

$(function() {
	var clonedMenu;
	clonedMenu = $("#menu");
	clonedMenu.before(clonedMenu.clone())
			  .addClass("floatingMenu");
	
	$(window).scroll(UpdateMenuPosition).trigger("scroll");
});