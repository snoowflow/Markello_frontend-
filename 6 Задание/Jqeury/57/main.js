var $checkboxes = $(':checkbox');
$checkboxes.on('click', function() {
	if ($(':checkbox:checked').length == 2) {
		$checkboxes.attr('disabled', 'true');
	}
});