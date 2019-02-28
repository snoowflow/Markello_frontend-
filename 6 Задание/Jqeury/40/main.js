var arr = [];
$('#test').parents().each( function() {
	var classes = $(this).attr('class');
	if (classes) {
		arr = arr.concat(classes.split(' '));
	}
});

console.log(arr);