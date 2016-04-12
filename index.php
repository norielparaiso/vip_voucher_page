<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>VIP Voucher Pages</title>

	<link rel="shortcut icon" href="//pcm.com/mall/widgetti/images/trackingScripts/pcmall.ico">
	<script src="pcm_assets/jquery-1.11.0.min.js"></script>
	<script src="pcm_assets/modernizr3.js"></script>

	<!-- add these required resources -->
	<link rel="stylesheet" href="css/pcm_vip_voucher.css">
	<script src="js/pcm_vip_voucher.js"></script>
</head>
<body>
	<!-- start tooltwist export here -->
	<div class="vip-page-container">
		<div class="banner">
			<div class="container">
				<h2><img src="images/title_banner.png" alt="It's a Match"></h2>
				<h3>We knew you loved us too!</h3>
			</div>
		</div>
		<div class="main-content">
			<div class="container">
				<?php if(isset($_GET['sku'])){ 
					include 'details.php';
				}else{ 
					include 'landing.php';
				} ?>
			</div>
		</div>
		<?php if(!isset($_GET['sku'])){ ?>
		<!-- landing page slider -->
		SLIDER
		<?php } ?>
	</div>
	<!-- End tooltwist export -->
</body>
</html>