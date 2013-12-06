<!DOCTYPE html>
<html>
<head>

	<title>Memorate</title>
	
	<link rel="stylesheet" href="css/stylesheet.css" type="text/css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

</head>

<body>

	<h1 id="intro">Test your memory!</h1>

	<div class="wrapper">
		<button class="button" id="start_button">Start</button>
		<div class="instructions" id="instructions1">Pay attention to which squares change color.</div>
		<div class="instructions" id="instructions2">Try to reproduce the same pattern.</div>
	</div>

	<table class="table">
		<tr>
			<td class="card" id="card1"></td>
			<td class="card" id="card2"></td>
			<td class="card" id="card3"></td>
			<td class="card" id="card4"></td>
			<td class="card" id="card5"></td>
		</tr>	
			
		<tr>	
			<td class="card" id="card6"></td>
			<td class="card" id="card7"></td>
			<td class="card" id="card8"></td>
			<td class="card" id="card9"></td>
			<td class="card" id="card10"></td>
		</tr>	
			
		<tr>	
			<td class="card" id="card11"></td>
			<td class="card" id="card12"></td>
			<td class="card" id="card13"></td>
			<td class="card" id="card14"></td>
			<td class="card" id="card15"></td>
		</tr>	
			
		<tr>	
			<td class="card" id="card16"></td>
			<td class="card" id="card17"></td>
			<td class="card" id="card18"></td>
			<td class="card" id="card19"></td>
			<td class="card" id="card20"></td>
		</tr>	
			
		<tr>	
			<td class="card" id="card21"></td>
			<td class="card" id="card22"></td>
			<td class="card" id="card23"></td>
			<td class="card" id="card24"></td>
			<td class="card" id="card25"></td>
		</tr>
	</table>

	<div class="wrapper">
		<div class="instructions" id="instructions3">You did it!<button class="button" id="replay_button">Play again</button></div>
		<div class="instructions" id="instructions4">Not quite.<button class="button" id="retry_button">Try again</button></div>
	</div>

<script src="js/memorate.js"></script>

</body>
</html>