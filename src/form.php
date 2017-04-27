<?php 
    $recepient = "tony_joss@mail.ru";
    $sitename = "online2business";

    $name = trim($_POST["name"]);
    $mail = trim($_POST["email"]);
    $phone = trim($_POST["telephone"]);
    $text = trim($_POST["message"]);


    $message = "Имя: $name \email: $mail \nТелефон: $phone \nТекст: $text";

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

 ?>