var flecha = document.getElementById("flecha");

function scroll(){
	let ancho_menu = document.getElementsByTagName("header")[0].offsetHeight;
	let ancho_inicio = document.getElementById("inicio").offsetHeight;

	window.scrollTo(0,ancho_inicio + ancho_menu);
}

flecha.addEventListener("mouseenter", scroll);