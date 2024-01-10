var header = document.getElementsByTagName("header")[0];
function oscurecer(){
	if (window.scrollY > 32){
		header.className = "headerOscuro";
	}
	else{
		header.className = "";
	}
}


window.addEventListener("scroll", oscurecer);