function buscar() {
    let opcion = document.getElementById("option").value;
    let name = document.getElementById("nombre").value;

    let url = "https://swapi.co/api/people/?search=" + opcion + "&" + name;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let responseObject = JSON.parse(xhr.response);
            let listaDeOpcion = responseObject.results;
            let mensajeEnHtml = "";
            for (let i = 0; i < listaDeGente.length; i++) {
                let persona = listaDeGente[i];
                let mensaje = "<p>" + persona.name + " - " + persona.birth_year + "</p>";
                mensajeEnHtml += mensaje;
            }
            document.getElementById("lista").innerHTML = mensajeEnHtml;
        }
        else if (xhr.readyState === 4 && xhr.status === 400) {
            console.log("Fallo en el servidor");
        }
    };
    xhr.send();
}

//function pedirResultado() {
//    let index = 0;
//    let xhrPersonas = new XMLHttpRequest();
//    xhrPersonas.open("GET", personas[index]);
//    xhrPersonas.onreadystatechange = function () {
//        if (this.readyState === 4 && this.status === 200) {
//            console.log(JSON.parse(this.response).name);
//            index++;
//            if (index < personas.length) {
//                xhrPersonas.open("GET", personas[index]);
//                xhrPersonas.send();
//            }
//        }
//    };
//    xhrPersonas.send();
//}



//function mostrarResult(name, birth_year) {
//    let result = "<li>" + name + " " + birth_year + "</li>";
//    document.getElementById("lista").innerHTML = result;
//}