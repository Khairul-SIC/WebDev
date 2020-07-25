<?php
include_once 'dbh.php';

$first = $_POST['fname'];
$last = $_POST['lname'];
$email = $_POST['email'];
$uid = $_POST['uid'];
$pwd = $_POST['pwd'];

$sql = "INSERT INTO users (user_first, user_last, user_email, user_uid, user_pwd) VALUES ('$first', '$last', '$email', '$uid', '$pwd');";

mysqli_query($conn, $sql);

header("location:../index.php?signup=success");
?>