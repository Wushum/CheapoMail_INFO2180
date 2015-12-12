window.onload = function () {
    var username = $("username");
    var password = $("password");
    var login = $("loginButton");
    login.onclick = userlogin;
    
	function userlogin() {
    	 	
    		var userName = $('username').value;
		    var password = $("password").value;
    		new Ajax.Request('login.php',{
        	method: 'post',
        	parameters: {username: userName , password: password  },
		onSuccess: loginUser,
		onFailure: failureFunction});
    		
	}
	
	function failureFunction(response){
		console.log(response.responseText); 
        if(response.status == 401){
		  $('Error').innerHTML = "Incorrect Username or Password";
        }

	function loginUser(response){
		if( response.status == 200){
			location.href = "home.php";
        	}
		
	}

	}
};