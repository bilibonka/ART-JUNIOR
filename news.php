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
			<h3 class="headerNews">Актуальные конкурсы:</h3>
			<hr>
		</section>
		<section class="contentBlock">
			<h3 class="headerNews">Сейчас</h3>
			<hr>
		</section>
		<section class="contentBlock">
			<h3 class="headerNews">Прошедшие конкурсы:</h3>
			<hr>
			<script type="text/javascript" src="https://vk.com/js/api/openapi.js?162"></script>
			<div id="vk_article_-187517156_43285"></div>
		<script type="text/javascript">
		VK.Widgets.Article("vk_article_-187517156_43285", "@festartjunior-otchet-po-proidennomu-horeograficheskomu-festivalu-za-231120");
		</script>
		</section>
	</section>
	<?php 
		require "includes/footer.php";
		require "includes/CommunityWidget.php";
		require "includes/scripts.php";
	?>
</body>
</html>