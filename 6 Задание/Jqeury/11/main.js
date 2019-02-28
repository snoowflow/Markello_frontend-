$('p:not(.www)').each(function (index) {
	$(this).append(index);
});