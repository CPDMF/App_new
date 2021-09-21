<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credential: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Request-With, x-xsrf-token');
    header('Content-Type: application/json; charset=utf-8');

    include 'config.php';

    $postJSON=json_decode(file_get_contents('php://input'),true);
    $today=date('Y-m-d H:i:s');

    //if($postJSON['action']=='login_progress'){
        //$pass=md5($postJSON['password']);

        $credit=mysqli_fetch_array(mysqli_query($mysqli,"SELECT credit FROM csslworkshop WHERE wid='$postJSON[workshopid]'"));
        $data =array(
            'credit'  =>$conductmember['credit'],
            //'password'  =>$logindata['password'],
             // 'membertype'=> $logindata['membertype']
        // );
        $qry="UPDATE creditinfo  SET completedCredits=completedCredits+$data['credit'] WHERE memberId='$postJSON[memberid]'; "
        // $data =array(
        //     'member'  =>$conductmember['verifiedBy'],
        //     //'password'  =>$logindata['password'],
        //      // 'membertype'=> $logindata['membertype']
        // // );
        if($qry){
            $result=json_encode(array('success'=>true));
        }
        else{
            $result=json_encode(array('success'=>false));
        }
        echo $result;
    //}
?>