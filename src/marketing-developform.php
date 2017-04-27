<?php 
    header('Access-Control-Allow-Origin: *'); 

    $recepient = "tony_joss@mail.ru";
    $sitename = "online2business";

    $name = trim($_POST["name"]);
    $phone = trim($_POST["telephone"]);


    $message = "Имя: $name \nТелефон: $phone;

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

 ?>