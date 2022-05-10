---
permalink: /uhh.html
---
<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
		<title>not really a game zone eh?</title>
	
		<link rel="icon" type="image/png" href="../images/troubledman.png">
		<link rel="stylesheet" href="gamezone_styles.css">
	</head>
<body>
	<div class="container">
		<br>
			<div class="scifi">
				<img src="../misc_zone/misc_images_misc/border.png" draggable="false">
				<br>
				<img src="../misc_zone/misc_images_misc/wip2.png" draggable="false">
				<br>
				<img style="transform:rotate(180deg)" src="../misc_zone/misc_images_misc/border_open.png" draggable="false">
				<br>
				<img src="../misc_zone/misc_images_misc/border_sides.png" draggable="false">
				<br>
				<img src="../misc_zone/misc_images_misc/border_open.png" draggable="false">
				<br>
				<p style="font-size: 16px;">
						Welcome to the non-existent game page.
						<br>
						Congrats on getting here.
				</p>
				<p style="font-size: 12px;">
						You can't find this link anywhere on the site,
					<br>
						so you've either went on a guessing game with the url
					<br>
						or just checked the github page.
					<br><br>
						I appreciate that you went out your way to
					<br>
						check for more stuff on this site.
					<br>
						It means a lot to me, really!
					</p>
					<p style="color: #595959; font-size: 10px;">
						This page will stay like this,
					<br>
						until I'll get around to making a game.
					<br>
						Cuz, what's the point of having a game page if you don't have any?
					<br>
						You can still visit my <a href="https://graverobertino.itch.io">itch.io page</a> if you want.
					<br>
				</p>
				<p style="color: #2D2D2D; font-size: 10px;">
					could use it as a "page not found" thing, what you think eh?
				</p>
				<p style="color: #111111; font-size: 10px;">uhh, you can leave this page if ya want to.</p>
				<br>
				<a href="../index.html"><img id="door" onmouseover="anim(door)" onmouseout="unAnim(door)" src="../misc_zone/misc_images_misc/door.png" draggable="false"> </a>
				<br>
				<img style="transform:rotate(180deg)" src="../misc_zone/misc_images_misc/border.png" draggable="false">
			</div>
		<br>
	</div>

<script>
			function anim(x) {
		switch(x) {
			case door:
				document.getElementById("door").src = "../misc_zone/misc_images_misc/door2.png";
			break;
		}
	}

	function unAnim(x) {
		switch(x) {
			case door:
				document.getElementById("door").src = "../misc_zone/misc_images_misc/door.png";
			break;
		}
	}
</script>
</body>
</html>