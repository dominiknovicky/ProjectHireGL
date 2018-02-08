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

		$(userNameInput, passwordInput).keyup(function(){
			if(userNameInput.trim().length > 1 || passwordInput.trim.length > 1)
				$("#error").html("");
		});	

		if(error == false){

            var userName = $("#userNameInput").val(),
    			password = $("#passwordInput").val();

    		console.log(userName, password);

			$.ajax({
            type: 'POST',
            url: '194.160.229.181:8081/api/auth/login',
            contentType: 'application/json',
            data: 

            	JSON.stringify({
            		'userName' : userName,
            		'password' : password
            	}),

            	succes: function(data) {
            		// window.location.href = "interview.html";
            		alert("SUCCESS");
            	},
            	error: function(){
            		alert("FAIL");
            	}

	     });
    
		}

	});

	var menuWidth = $("#menu").css("width");
	$("#hireLogo").css({width: menuWidth});
})(jQuery);