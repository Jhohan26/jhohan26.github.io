var flecha = document.getElementById("flecha");

function scroll(){
	let ancho_inicio = document.getElementById("inicio").offsetHeight;

	window.scrollTo(0, ancho_inicio);
}

flecha.addEventListener("mouseenter", scroll);