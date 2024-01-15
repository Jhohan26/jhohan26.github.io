var boton = document.getElementsByClassName("burguer")[0];
var lista = document.getElementsByClassName("menu")[0];

function menu(evento){
	evento.preventDefault();
	if (boton.classList.contains("equis")){
		boton.classList.remove("equis");
		lista.style.display = "none";
	}
	else{
		boton.classList.add("equis");
		lista.style.display = "flex";
	}
}

boton.addEventListener("click", menu);