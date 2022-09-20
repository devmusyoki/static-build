<?php 
$errors = '';
$myemail = 'sandejoseph191@gmail.com';
if(empty($_POST['fname'])  || 
   empty($_POST['jobtitle'])  || 
   empty($_POST['lname'])  || 
   empty($_POST['organization'])  || 
   empty($_POST['country']) || 
   empty($_POST['comments']))
{
    $errors .= "\n Error: all fields are required";
}

$fname = $_POST['fname']; 
$jobtitle = $_POST['jobtitle']; 
$lname = $_POST['lname']; 
$organization = $_POST['organization']; 
$country = $_POST['country']; 
$comments = $_POST['comments']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
  //  $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "$name Contacted ADRA";
	$email_body = "You have received a new message. ".
	" Here are the details:\n First Name: $fname \n Last Name: $lname \n Job Title: $jobtitle \n Organization: $organization \n Country: $country \n Message \n $comments"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: contact-form-thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>