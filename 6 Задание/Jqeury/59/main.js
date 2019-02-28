$('input').each(function() {
	$elem = $(this);
	$elem.attr('placeholder', $elem.val()).removeAttr('value');
});