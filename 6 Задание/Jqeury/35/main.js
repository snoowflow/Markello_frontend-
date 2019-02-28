var $elem = $('#test');
var $neighbor = $elem.nextAll('.www').first(); //neighbor - это сосед
$elem.clone().insertAfter($neighbor);
$neighbor.insertAfter($elem);
$elem.remove();