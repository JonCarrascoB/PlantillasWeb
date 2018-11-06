
let boton = document.getElementById("persona_btn");
if (boton !== null) {
    boton.addEventListener("click", getPerson);
}
else {
    console.log("no se ha encontrado el botón");
}


//Ahora estamos guardando en la misma sesión (misma pestaña, si cambiaramos en html1 a 2 en la misma pestaña 
// nos guardaría el nombre, pero o en otra pestaña no vale)

let personaSto = JSON.parse(localStorage.getItem("persona"));



function getPerson() {
    let name = document.getElementById("name").value;
    let apellidos = document.getElementById("apellidos").value;
    let persona = { name: name, apellidos: apellidos};
    
    localStorage.setItem("persona", JSON.stringify(persona));
}



function arranca(data) {

    let xhr = new XMLHttpRequest();
    let url = "https://api.nasa.gov/planetary/apod?api_key=2uaBh52XsqEIyC5HRTv9BWTyV3TYqH8vTQvYPgvV&date=" + data;
    xhr.open("GET", url);
    //xhr.onreadystatechange = function () {
    //    if (xhr.readyState === 4 && xhr.status === 200) {
    //        let responseObject = JSON.parse(xhr.response);
    //        showDate(responseObject.date, responseObject.explanation, responseObject.title, responseObject.url);
    //    }
    //    else if (xhr.readyState === 4 && xhr.status === 400) {
    //        document.getElementById("info").innerHTML = "fecha incorrecta";
    //    }
    //};

    xhr.addEventListener("load", function () {
        let responseObject = JSON.parse(xhr.response);
        showDate(responseObject.explanation, responseObject.url);
    });
    xhr.addEventListener("error", function () {
        console.log("error");
    });

    xhr.send();

}
function crearF() {
    //let year = document.getElementById("year").value;
    //let month = document.getElementById("month").value;
    //let day = document.getElementById("day").value;
    let data;
    data = document.getElementById("day").value;
    //document.getElementById("date").innerHTML = data;
    arranca(data);
}

function showDate(explanation, image_url) {
    let result = "<p>" + explanation + "</p>";
    result += "<img src='" + image_url + "'/>";
    document.getElementById("info").innerHTML = result;
    if (localStorage.getItem("persona") !== null) {
        document.getElementById("mostrar").innerHTML = personaSto.name + " " + personaSto.apellidos;
    }
}