<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$number= $_POST['mobile'];
$message= $_POST['message'];
$to = "axaybhimani@gmail.com";
$subject = "Mail From Crypto";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Mobile = ". $number . "\r\n  Message =" . $message;
$headers = "From: axaybhimani@gmail.com" . "\r\n" .
"CC: ";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>