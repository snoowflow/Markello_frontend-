var $elem = $('#test');
var text = $elem.html();
$elem.prevUntil('p').last().prev().html(text);