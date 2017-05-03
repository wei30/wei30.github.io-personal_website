// JavaScript Document
//https://formspree.io/
$(document).ready(function(){
	$('#contact-form').submit(function(e){
		var name= document.getElementById('name');
		var email= document.getElementById('email');
		var message= document.getElementById('message');
		
		if(!name.value || !email.value || !message.value){
			alertify.error("check your entries");
			return false;
		}else{
			 $.ajax({
        method: 'POST',
        url: 'https//formspree.io/weiyili54321@gmail.com',
        data: $('#contact-form').serialize(),
        dataType: 'json'
      });
	  
		}
	});
});