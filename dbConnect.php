<?php

    function getDbConnection(){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "shop";

        // CREATE CONNECTION
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }else {
            // echo "Connection successfully";
        }
            
        return $conn;
    }
 
?>