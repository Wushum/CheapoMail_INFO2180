<?php
    $dbhost = "localhost";
    $dbname = "cheapomaill";
    $dbuser = "$C9_USER";
    $dbpassword = "Pass_word";
    
$firstName = $_POST["firstname"];
$lastName = $_POST["lastname"];
$password = $_POST["password"];
$username = $_POST["username"];
$insertQuery = "INSERT INTO user (FirstName , LastName, 
Password , Username) VALUES (:FirstName,:LastName,:Password,:Username)";
$query = $connection->prepare($insertQuery);
$query->execute(array(':FirstName'=>$firstName, ':LastName'=>$lastName, ':Password'=>$password,':Username'=>$username));
header("Location: index.html");
exit;

try {
    $dbhost = new PDO($dsn, $dbuser, $dbpassword);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

?>