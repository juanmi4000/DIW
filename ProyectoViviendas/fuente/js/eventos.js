function cambiarEnlace(){
    let enlace = document.getElementById("actividades");
    if (window.innerWidth < 630) {
        enlace.textContent = "Actividades";
    } else {
        enlace.textContent = "Actividades y planes";
    }
} 


window.onload = cambiarEnlace;
window.onresize = cambiarEnlace;


let btnInicio = document.getElementById("btn-inicio");
btnInicio.addEventListener("click", (evento) => {
    location.href = "../index.html";
});