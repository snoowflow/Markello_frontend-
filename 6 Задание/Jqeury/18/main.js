var $elem = $('#test');
var textPrev = $elem.prev().html();
var textNext = $elem.next().html();
$elem.prepend(textPrev);
$elem.append(textNext);