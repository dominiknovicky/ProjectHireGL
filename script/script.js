(function($){

	$("#logIn").click(function(){
		var error = false;
		var userNameInput = $("#userNameInput").val();
		var passwordInput = $("#passwordInput").val();

		
		if(userNameInput.trim().length < 2 || passwordInput.trim().length < 2){	
			$("#error").html("Invalid Username or Password.<br>Please try again.");
			error = true;
		}
		else {
			$("#error").html("");
		}

		$("userNameInput, passwordInput").keyup(function(){
			if(userNameInput.trim().length < 2 || passwordInput.trim.length < 2) {	
				$("#error").html("Invalid Username or Password.<br>Please try again.");
				error = true;
			}
			else {
				$("#error").html("");
			}
		});	
	});
})(jQuery);