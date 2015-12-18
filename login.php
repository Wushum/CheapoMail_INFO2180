<?php
    

	$username = $_REQUEST['username'];
	$password = $_REQUEST['password'];
	
	$con=mysqli_connect("0.0.0.0.","wushum", "" ,"cheapomail");
	if (!$con) {
		echo "Connection failed";
		return false;
	}
   
    $sql = "SELECT * FROM user WHERE username = '$username' and password = '$password';";
    $results= mysqli_query($con,$sql);
    if (sizeof(mysqli_fetch_array($results))==0){
    	
    	echo "fail";
    }else{
    	
    	setcookie('username',$username,time()+3000);
    	echo "pass";
    }

?>


