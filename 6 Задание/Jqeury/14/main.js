$('p:empty').html(function() {
	return $(this).prev().html();
});