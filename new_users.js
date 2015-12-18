window.onload = function () { 
   var passwordField = $("password");
   passwordField.onblur = validatePassword;
};

function validate(){
   var passwordField = $("password");
   passwordField.onblur = validatePassword;
   var valid = passwordField.onblur();
   if(valid){
       alert("We have a New User");
   }
   return valid;
}
function validatePassword(){
    var errorMessage = $("passwordError");
    var password = this.value;
    if(!/\d+/.test(password)){
       errorMessage.innerHTML = "Enter Password";
                return false;
    }
    else{
        errorMessage.innerHTML = "";
    }
    
    if(!/[a-z]/.test(password)){
        errorMessage.innerHTML = "password must contain at least one lower case letter";
        
        return false;
    }
    else{
        errorMessage.innerHTML = "";
    }
    
    if(!/[A-Z]/.test(password)){
        errorMessage.innerHTML = "password must contain at least one upper case letter";
      
        return false;
    }
    else{
        errorMessage.innerHTML = "";
    }
    
    if(!/.{8,}/.test(password)){
        errorMessage.innerHTML = "password must contain must be a minimum of 8 characters";
        return false;
    }
    else{
        errorMessage.innerHTML = "";
    }
    return true;
    
}
