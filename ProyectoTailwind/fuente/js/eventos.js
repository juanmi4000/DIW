function cambiarEnlace(){
    let enlace = document.getElementById("actividades");
    if (window.innerWidth < 520) {
        enlace.textContent = "Actividades";
    } else {
        enlace.textContent = "Actividades y planes";
    }
} 


window.onload = cambiarEnlace;
window.onresize = cambiarEnlace;
