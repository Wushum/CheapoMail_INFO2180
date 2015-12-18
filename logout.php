<?php 


    if(isset($_COOKIE['username'])){
        $current_user = $_COOKIE['username'];
        setcookie('username',$current_user,time()-900);
        echo 'You Just logged out';
    }else{
        echo 'You logged out already';
    }







?>
