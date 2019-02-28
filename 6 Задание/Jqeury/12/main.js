$('p').each(function() {
	var $elem = $(this);
	$elem.before($elem.clone().css('color', 'red')).css('color', 'green');
});