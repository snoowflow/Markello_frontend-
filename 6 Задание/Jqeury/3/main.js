$('p').each(function() {
	var par = $(this);
	var text = paragraph.html();
	par.replaceWith('<div>' + text + '</div>');
});