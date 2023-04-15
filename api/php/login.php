<?php
    $hn = 'skillermysql';
    $db = 'skiller'; // remw123_baseapi
    $un = 'root'; // remw123_baseapi
    $pw = 'mysql'; // Txn$E{rs5q,4



    // if(isset($_SERVER['HTTP_BASEAPI_AUTHKEY']))
    // {
    //     $auth = $_SERVER['HTTP_BASEAPI_AUTHKEY'];
    // }
    $url = $_SERVER['HTTP_HOST'];
    
    
    date_default_timezone_set('UTC');

    
    function checkUserAuth($conn)
    {
        if(isset($_SERVER['HTTP_BASEAPI_AUTHKEY']))
        {
            $auth = str_replace("\\",'',$_SERVER['HTTP_BASEAPI_AUTHKEY']);
            // echo "$auth";
            $query = 'select user_id from user_token where token=? and expire_date>?';
            $stmt = $conn->prepare($query);
            $stmt->bind_param('ss',$authIn,$todayDate);
            
            $authIn = $auth;
            $todayDate = date("Y-m-d H:i:s T");
            
            $result = $stmt->execute();
            $stmt->bind_result($idOut);
            $stmt->fetch();
            $id = $idOut;
            $stmt->close();
            return $id;
        }else{
            return false;
        }
    }

    function validate_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


    function depricate(){
        http_response_code(410);
        $hold = new stdClass();
        $hold->message = "Api Removed";
        $hold->result = false;
        $hold->code = 2;
        echo json_encode($hold);
        exit();
    }
    
    