var $elem = $('#test');
var text = $elem.html();
$elem.prev().html(text).end().next().html(text);