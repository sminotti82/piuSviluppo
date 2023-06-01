<?php

      $username = $_POST['username'];
      $password = $_POST['password'];

      if($username==='sebaminotti'&&$password==='castello'){

        header('Location:home.html');
        exit();
      } else if($username!=='sebaminotti' && $password !=='castello'){
        header('Location:not.html');
        exit();
      }



?>