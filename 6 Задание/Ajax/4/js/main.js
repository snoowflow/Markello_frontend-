function fun1() { 
var a=document.getElementById('r'); 
var b=document.getElementById('one'); 
b.innerHTML=a.value; 
}

$(document).ready(function(){
	$('form').submit(function(event){
		
		event.preventDefault();

		$.ajax({
			url:$(this).attr('action'),
			type: $(this).attr('method'),
			data: new FormData(this),
			contentType:false,
			cache:false,
			processData:false,
			success: function(result){
				 $('#content').html(result);

			},
		});
	});
});


