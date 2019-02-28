$('p[class]').attr('class', function (index, classes) {
	var $div = $('<div>').addClass(classes);
	$(this).removeAttr('class').wrap($div);
});