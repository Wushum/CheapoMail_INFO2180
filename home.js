window.onload = function(){
    var arr = $$(".mail1");
    var inbox = $("inbox");
	var composeButton = $("compose");
    function displayMessage(response){
        $("email").innerHTML = response.responseText;
    }
    
    inbox.onclick = function(){
        $("email").className = "hide";
        $("inlay").style.display = "block";
        $("com").className = "hide";
        inbox.className = "tab1";
        composeButton.className = "tab";
        window.location.reload();
    }
    
    
    
    function failureFunction(response){
        alert("server error");
    }
	composeButton.onclick = function(){
        $("inlay").style.display = "none";
        $("com").className = "";
        composeButton.className = "tab1";
        inbox.className = "tab";
	};
   
        
	
};