var list = document.getElementById('num');
var elem = document.getElementById("radioWrap").children;
list.onchange = function() {
for(var i = 0;  i < elem.length; i++){
	elem[i].checked = false;
  }
  elem[list.selectedIndex-1].checked = true;
}
