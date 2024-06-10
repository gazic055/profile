<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor\autoload.php';

$errors = [];
$errorMessage = ' ';
$sucessMessage = ' ';

echo 'sending ...';

if(!empty($_POST)){

    //GET POST DATA

    $name = ($_POST['name']);
    $email = ($_POST['email']);
    $message = ($_POST['message']);

    //validate form fields

    if (empty($name)){
        $errors[] = 'Name is empty';
    }

    if (empty($email)){
        $errors[] = 'Email is empty';
    }else if(! filter_var($email, FILTER_VALIDATE_EMAIL)){
        $errors[] = 'Email is invalid';
    }

    if (empty($message)){
        $errors[] = 'Message is empty';
    }


    if (!empty($errors)){

        $allerrors = join ('<br/>', $errors);
        $errorMessage = "<p style='color: red; '>{$allErrors}</p>";
    } else{
        $fromEmail = "willmike153@gmail.com";
        $emailSubject = 'New email from your contact form';


        //create a new PHP Mailer instance

        $mail = new PHPMailer(exceptions: true);
        try{

            //Configure the PHP mailer instance
            $mail->isSMTP();
            $mail->Host = 'live.smtp.mailtrap.io';
            $mail->SMTPAuth = true;
            $mail->Username = 'api';
            $mail->Password = 'your_smtp_password';
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            //set the sender, recipient, subject, and body of the message
            $mail->setFrom($email);
            $mail->addAddress($email);
            $mail->setFrom($fromEmail);
            $mail->Subject = $emailSubject;
            $mail->isHTML(isHTML: true);
            $mail->Body = "<p>Name: {$name}</p><p>Email: {$email}</p><p>Message: {$message}</p>";

            //send the message
            $mail->send();
            $sucessMessage = "<p style='color: green; '>Thanks for contacting me</p>";

        } catch(Exception $e){
            $errorMessage = "<p style='color: red; '>Oops, something went wrong. Please try again later</p>";
            echo $errorMessage;
        }
    }
}

?>