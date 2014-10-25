$(function() {
	$(document.body).on('appear', '.hidden', function(e, $affected) {
		// add class called “appeared” for each appeared element
		$(this).addClass("fadeInUp animated");
	});
	$('.card').appear({force_process: true});
});