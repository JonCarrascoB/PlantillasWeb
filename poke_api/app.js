// 1. devuelva todos los tipos de pokemon
//2. los devuelva en un dropdown
// 3. si usuario eligue uno, mostras 3 aleatorios de ese tipo

function obtenerTipos() {
    //conseguir tipo de pokemos y devolverlos en un array
    let xhr = new XMLHttpRequest();
    let url = 'https://pokeapi.co/api/v2/type/';
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.response).results);
            //let dates = JSON.parse(xhr.response).results;
            //pedirDatos(dates);
            //console.log()
            //mostrarTipos(arrayDeTipos);

        }
        else if (xhr.readyState === 4 && xhr.status === 400) {
            //document.getElementById("info").innerHTML = "fecha incorrecta";
        }
        function pedirDatos(dates) {
            let index = 0;
            let xhrDates = new XMLHttpRequest();
            xhrDates.open("GET", dates[index]);
            xhr.onreadystatechange = function () {
                if (xhrDates.readyState === 4 && xhrDates.status === 200) {
                    index++;
                    if (index < dates.lenght) {
                        xhrDates.open("GET", dates[index]);
                        xhrDates.send();
                    }
                }
            };
            xhrDates.send();
        }
    };
}

         //devolver el array de los tipos de pokemon

function mostrarTipos(arrayDeTipos) {
    //mostrar los tipos en un dropdown
    let result = "<li>" + name + "</li>"
    //al dropdown añadir un eventlistener 

    // llamar desde el evento a cogerPokemonDeTipo(tipo)
}

//funcion que se ejecuta al darse el evento
function cogerPokemonDeTipo(tipo) {
    //coger todos

    //elegir tres de la lista
}