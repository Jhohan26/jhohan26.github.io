function quitarSubrayado(excepto){
	for (let i=0; i<listas.length; i++){
		if (i != excepto){
			listas[i].className = "";
		}
	}
}

function ponerSubrayado(){
	let altura = window.scrollY;
	let header = document.getElementsByTagName("header")[0].offsetHeight;
	let inicio = document.getElementById("inicio").offsetHeight;
	let sobreMi = document.getElementById("sobremi").offsetHeight;
	let proyectos = document.getElementById("proyectos").offsetHeight;
	let habilidades = document.getElementById("habilidades").offsetHeight;
	let portafolio = document.getElementById("portafolio").offsetHeight;

	if (altura >= inicio+sobreMi+proyectos+habilidades-header){
		listas[4].className = "activo";
		quitarSubrayado(4);
	}
	else if (altura >= inicio+sobreMi+proyectos-header){
		listas[3].className = "activo";
		quitarSubrayado(3);
	}
	else if (altura >= inicio+sobreMi-header){
		listas[2].className = "activo";
		quitarSubrayado(2);
	}
	else if (altura >= inicio-header){
		listas[1].className = "activo";
		quitarSubrayado(1);
	}
	else{
		listas[0].className = "activo";
		quitarSubrayado(0);
	}
}

var listas = document.querySelectorAll(".menu li a");
window.addEventListener("scroll", ponerSubrayado);