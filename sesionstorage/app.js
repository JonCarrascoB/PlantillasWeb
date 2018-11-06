
//Esto se hace para quitar un error al intentar unir dos html 
let boton = document.getElementById("nombre_btn");
if (boton !== null) {
    boton.addEventListener("click", getName);
}


//Ahora estamos guardando en la misma sesión (misma pestaña, si cambiaramos en html1 a 2 en la misma pestaña 
// nos guardaría el nombre, pero o en otra pestaña no vale)

let nameSto = sessionStorage.getItem("name");
if (sessionStorage.getItem("name") !== null) {
    document.getElementById("mostrar").innerHTML = nameSto;
}


function getName() {
    let name = document.getElementById("name").value;
    document.getElementById("mostrar").innerHTML = name;
    sessionStorage.setItem("name", name);
}