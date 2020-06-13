<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
	<title>«ART JUNIOR»</title>
	<?php
		require "includes/styles.php"
	?>
</head>
<body>
	<?php
		require "includes/header.php"
	?>
	<section class="containerMain mainWrapper wrapper">
		<section class="contentBlock">
			<span class="appeal">Можно обратиться по номерам телефона или написать WhatsApp:</span>
			<p class="contacts">
				<img src="./img/phoneCloud.svg" class="contIcon"></img>
				<img src="./img/phone.svg" class="contIcon phone"></img>
				Елена Георгиевна: +7 988 240-68-09
			</p>
			<a class="phonеRing" href="tel:+79882406809" title="Набрать номер телефона">Позвонить</a>
			<p class="contacts">
				<img src="./img/phoneCloud.svg" class="contIcon"></img>
				<img src="./img/phone.svg" class="contIcon phone"></img>
				Константин Владимирович: +7 989 235-86-88
			</p>
			<a class="phonеRing" href="tel:+79892358688" title="Набрать номер телефона">Позвонить</a>
			<p class="contacts">
				<img src="./img/phoneCloud.svg" class="contIcon"></img>
				<img src="./img/phone.svg" class="contIcon phone"></img>
				Эдуард Александрович: +7 918 350-58-37
			</p>
			<a class="phonеRing" href="tel:+79183505837" title="Набрать номер телефона">Позвонить</a>
			<p class="contacts">
				<img src="./img/mail.svg" class="contIcon"></img>
				 @mail: art_junior@mail.ru
			</p>
			<a class="mail" href="mailto:art_junior@mail.ru" title="Написать на почту">Написать</a>
		</section>
	</section>

	<?php 
		require "includes/footer.php";
		require "includes/CommunityWidget.php";
		require "includes/scripts.php";
	?>
	</body>
</html>