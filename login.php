<?php
session_start();
$dbhost = "localhost";
$dbname = "cheapomail";
$dbuser = "C9_USER";
$dbpassword = "Pass_word";
$connection =  mysql_connect($dbhost,$dbuser,$dbpassword);
$username = $_POST['username'];
$password = $_POST['Pass_word'];
$sql = "SELECT * FROM user WHERE UserName = '$username' AND Pass_word = '$password'";
$database = mysql_select_db($dbname,$connection);
session_start();
$rows = mysql_query($sql);
if(mysql_num_rows($rows) == 0){
	echo "<p>Invalid username or password</p>";
	header('HTTP/1.1 401 Unauthorized', true, 401);
	exit;
}
else{
	while($row = mysql_fetch_array($rows)){
		$_SESSION["id"] = $row["id"];
		$_SESSION["first_name"] = $row["FirstName"];
		$_SESSION["last_name"] = $row["LastName"];
		$_SESSION["username"]= $row["UserName"];
		$_SESSION["password"] = $row["Password"];
		header('HTTP/1.1 200 OK', true, 200);
    }
   
}
?>

