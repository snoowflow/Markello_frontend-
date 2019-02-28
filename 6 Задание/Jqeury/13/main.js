$('h2 + p').each(function() {
	var $elem = $(this);
	$elem.prev().before($elem);
});