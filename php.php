<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>


	<div id="json"></div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
	<script>
		var temperatura = [];
		var data = [];

		$(document).ready(function(){
			
			$.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=3449847&units=metric&appid=5ecaf23c84f1aaf3b1cf9816b82ca8e8",
			function(result){

				temperatura = [];
				data = [];
				console.log(result);
				for (var i = 0; i <= result.list.length-1; i ++) {
					temperatura.push(result.list[i].main.temp);
					data.push(result.list[i].dt);
				}
				// console.log(temperatura);
				// console.log(data);
			});

		});
	</script>




	<script>
		// var person = {firstName:"John", lastName:"Doe", age:46};
		// var personJson = (JSON.stringify(person));
		// $('#json').text('['+personJson+']');

	</script>
	
	<script>
		
		// var json = function() {
		// 	var array = [];
		// 	for(var i=0; i<10; i++) {
		// 		var a = i *3;
		// 		array.push( a + i);
		// 	}
		// 	var arrayJson = (JSON.stringify(array));
		// 	console.log(arrayJson);
		// 	$('#json').text('['+arrayJson+']');

		// }
		// $(json);

	</script>





</body>
</html>

