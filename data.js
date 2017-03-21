function showVoevodi() {
	var dyrpach = new XMLHttpRequest();
	
	dyrpach.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// successfuly received response
			var data = JSON.parse(this.responseText);
			var output = "<ol>";
			for (var index=0; index < data.length; index++) {
				var voevoda = data[index];
				
				output += "<li>" + voevoda.name + " " + voevoda.age + " " + voevoda.adress + "</li>"; 
			}
			
			output += "</ol>";
			
			document.getElementById('result').innerHTML = output;
		}
	}
	
	dyrpach.open('POST',
				'http://localhost/Lecture%2022/MyService.php',
				true);
	
	dyrpach.send(null);	
}

//
//function addVoevoda() {
//	var dyrpach = new XMLHttpRequest();
//	dyrpach.onreadystatechange = function() {
//		if (this.readyState == 4 && this.status == 200) {
//			console.log(this.responseText);
//		}
//	}
//	
//	dyrpach.open('POST',
//			'http://localhost/Lecture%2022/MyService.php',
//			true);
//	
//	dyrpach.setRequestHeader("Content-Type", "application/json");
//	dyrpach.send('data='+JSON.stringify({name:"John Rambo", address:"Dudovo Silistrensko", age : "17"}));	
//}