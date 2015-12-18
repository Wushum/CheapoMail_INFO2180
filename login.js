window.onload = function () {

}
function validate(){
	var username = $("username").value;
	var password = $("password").value;
	console.log("values received");
    	var re =/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})/ ;
	if(!(re.test(password))){
        alert("Password invalid");
        return false;
	}
	
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
		onFailure: failureFunction });
	
	
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

	
};

 /*var responseMessage;
	var requeststring = "login.php?username="+username+"&password="+password;
	var getstuff = new XMLHttpRequest();
	getstuff.onreadystatechange = function(){
        if(getstuff.readyState==4 && getstuff.status==200 ){
           responseMessage = getstuff.responseText;
           console.log(responseMessage);
           if (responseMessage=="fail") {
               document.getElementById("login_status").innerHTML= "<div class='loginstat'><strong> Login Failed </strong></div>";
                
            }else if(responseMessage=="pass"){
                document.getElementById("login_status").innerHTML= "<div class='loginstat'><strong> Login Success </strong></div>";
                window.location.href="index.html";
                
            }
           
           
        }
	};
	getstuff.open("get",requeststring ,true);
    getstuff.send();
    
    
    
};*/
