<?php
if(isset($_POST['submit']){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $formContent = "From: $name \n Email: $email \n Message: $message";
    $recipient = "zevubu@gmail.com";
    $subject = "Contact from: $email";
    $mailHeader = "From: $name \r\n";

    mail($recipient, $subject, $formContent, $mailHeader) or die("Error!");
    header("Location: mail.php?mailsend")

})

?>