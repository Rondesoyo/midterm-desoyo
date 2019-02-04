let xhttp = new XMLhttpRequest9();

Function callAjax(){
	let html = "";
	xhttp.onreadystatechange = Function(){
		document.body.innerHTML = "img src='PP.jpg' width='100' height= '100'
		if(xhttp.readyState == 4 && xhttp.status == 200){


			let data data = JSON.parse(xhttp.response);

			html += "<div>"+data.email+"</div>";
			document.body.innerHTML = html;
		}
	}
	xhttp.open('GET', "http:jsonplaceholder.typicode.com/comments/1",true);
	xhttp.send();
}
