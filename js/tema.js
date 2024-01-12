var tema = "dark";
function aplicar(){
	if (tema === "light"){
		document.documentElement.setAttribute("data-theme", "light");
	} else{
		document.documentElement.setAttribute("data-theme", "dark");
	}
}
aplicar();
function cambiar(){
	if (tema === "light"){
		tema = "dark";
	} else{
		tema = "light";
	}
	aplicar();
}
var boton = document.getElementById("tema");
boton.addEventListener("click", cambiar);