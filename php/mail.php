<?php

/* ---------------------------------------------------------- */

$to = 'me@jon-b.com';   //change this to the address where you want the messages to be sent

/* ---------------------------------------------------------- */

$name = $_POST['name'];
$email = $_POST['email'];
$message_text = $_POST['message'];

$subject = 'Comment from '.$name;
$headers = 'From:'. $to;
$message = 'FROM: '.$name. "\r\n";
$message .= 'Email: '.$email. "\r\n";
$message .= 'Message: '. "\r\n".$message_text;
 
if (mail($to, $subject, $message, $headers)) {
  echo "Message succesfully sent !";
}
else echo "Message was not sent !";

?>