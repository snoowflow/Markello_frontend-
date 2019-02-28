var $id = $('#test');
var $next = $id.nextAll().eq(1);
var $prev = $id.prevAll().eq(1);
var nextText = $next.html();
var prevText = $prev.html();
$next.html(prevText);
$prev.html(nextText);