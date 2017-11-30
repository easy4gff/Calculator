<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<meta http-equiv="Cache-Control" content="no-cache">

	<title>Super calculator</title>
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="../bootstrap-3.3.7/css/bootstrap.min.css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

</head>
<body>
	<header class="container col-md-12 col-sm-12">
		<h1>Calculator</h1>
		<h3>but with a very limited functionality :(</h3>
		<!-- <div>
			<div class="div-img-flag">
			</div>
		</div> -->
	</header>

	 <div class="container col-md-12 col-sm-12" id="navbar">
		<ul class="nav nav-pills navbar-left">
			<li role="presentation">
				<a href="./">Home</a>
			</li>
			<li role="presentation">
				<a href="#">Documentation</a>
			</li>
		</ul>
		<!-- <ul class="nav navbar-right">
			<li role="presentation"><a href="#">Language</a></li>
		</ul> -->
	</div>

	<div class="container-fluid col-md-12 col-sm-12" id="main">
		<form method="post" action="index.php" class="container-fluid" id="execute_options_form">
		  <ul class="list-group step container-fluid col-md-12 col-sm-12 active_div" id="execute_options_ul">
				<li class="list-group-item">
					<input type="radio" value="sum_div" name="execute_options_radio" checked>Calc sum</input>
				</li>
				<li class="list-group-item">
					<input type="radio" value="division_div" name="execute_options_radio">Calc division</input>
				</li>
				<li class="list-group-item">
					<input type="radio" value="diff_div" name="execute_options_radio">Calc difference</input>
				</li>
				<li class="list-group-item">
					<input type="radio" value="mult_div" name="execute_options_radio">Calc multiplication</input>
				</li>
				<li class="list-group-item">
					<input type="radio" value="square_div" name="execute_options_radio">Calc square</input>
				</li>
				<br>
				<div class="row">
					<div class="col-md-6 col-md-offset-3 col-sm-8 btn btn-primary button_div" id="exec_opt_chosen">Next step</div>
				</div>
			</ul>

			<div id="opts" class="container-fluid"></div>
			<div class="container text-center" id="result_div"></div>

		</form>
	</div>

	<div id="test" class="active_div container">

	</div>

	<script src="../bootstrap-3.3.7/js/bootstrap.min.js"></script>
	<script src="https://fb.me/react-15.0.0.js"></script>
	<script src="https://fb.me/react-dom-15.0.0.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script> -->
	<script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script>

	<script src="useful_funcs.js"></script>
	<script src="navigator.js"></script>
	<script type="text/babel" src="optionsMenu.js"></script>
	<script type="text/babel" src="script.js"></script>


</body>
</html>
