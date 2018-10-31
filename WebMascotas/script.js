//let nombre = prompt("introduce tu nombre");
//console.log(nombre);

//let lista = [1, 2, 3];
//for (let i = 0; i < lista.length; i++) {
//    console.log(i);
//}


//let person = {};
//let mascota = {
//    nombre: "Milu",
//    edad: 4,
//    saludar: function () {
//        return "guau, guau, guau " + this.nombre;
//    }
//};
//console.log(mascota.saludar());

//let perro = {
//    nombre: "Milu",
//    ruido: "Guau",
//    saludar: function () {
//        return this.nombre + "dice" + this.ruido;
//    }
//};
//let gato = {
//    nombre: "Lucifer",
//    ruido: "Miau",
//    saludar: function () {
//        return this.nombre + "dice" + this.ruido;
//    }
//};


//function crearAnimal(nombre, ruido) {
//    return {
//        nombre: nombre,
//        ruido: ruido,
//        saludar: function () {
//            return this.nombre + " dice " + this.ruido;
//        }
//    };
//}

//    let gato = crearAnimal("Lucifer", "miau");
//    let perro = crearAnimal("Milu", "guau");




//let gato = new Animal("Lucifer", "miau");
//let perro = new Animal("Milu", "guau");
//let cerdo = new Animal("Babe", "grungh");
//let vaca = new Animal("Blanquita", "muuuu");

//let animales = [new Animal("Milu", "guau"), new Animal("Lucifer", "miau"), new Animal("Babe", "grungh"), new Animal("Blanquita", "muuuu"), new Animal("Sombra Gris", "hiiieee"), new Animal("Claudio", "kikiriiiki"), new Animal("Tambor", "chiuup"), new Animal("Topete", "hiiooooo"), new Animal("Espolon", "moouuu"), new Animal("Donald", "cuacua"), new Animal("Dolly", "beeee")];
//animales.push(new Animal("Maya", "bbzzzz"));

//for (let i = 0; i < animales.length; i++) {
//    console.log(animales[i].saludar());
//}

//let resultado = "";

//animales.forEach(function (animal) {
//    //console.log(animal.saludar());
//    resultado += "<p>" +animal.saludar() + "</p>";
//});

//console.log(gato.saludar());
//console.log(perro.saludar());
//console.log(cerdo.saludar());
//console.log(vaca.saludar());

//document.getElementById("lista_mascotas").innerHTML = "<p>hola</p>";

//document.getElementById("lista_mascotas").innerHTML = resultado;

class Animal {
    constructor(nombre, ruido) {
        this.nombre = nombre;
        this.ruido = ruido;
    }
    saludar() {
        return this.nombre + " dice " + this.ruido;
    }
}
let animales = [];

function add() {
    animales.push(new Animal(document.getElementById("nombre").value, document.getElementById("ruido").value));
}

let result = "";
let cont = 0;
function printe() {
    animales.forEach(function (animal) {
        result += "<li id='"+cont+"'>" + animal.nombre + "<input type='button' value='Sound' onclick='sing(" + cont + ")' />" + "<input type='button' value='Delete' onclick='borrar("+cont+")' />" + "</li>";
        document.getElementById("bicho").innerHTML = result;
        cont++;
    });
}
function sing(cont) {
    alert(animales[cont].ruido);
}
function borrar(cont) {
    document.getElementById("bicho").removeChild(document.getElementById("" + cont + ""));
}

//for (let i = 0; i < animales.length; i++) {
//    console.log(animales[i].saludar());
//}