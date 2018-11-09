//let nombre = 'Endika';
////let saludo = "hola" + nombre;
//let saludo = `hola ${nombre}`; //es otro modo de introducir variables, los que hay tras $ indica variable.
//console.log(saludo);

//function saludar() {
//    return "hola qué tal?";
//}
//let saludo2 = `${ saludar()}`;
//console.log(saludo2);

////arrays en js
//let numeros = [1, 2, 3, 4, 5];

////añadir un elemento al final del array (lista)
//numeros.push(6);
//console.log(numeros);

//para quitar un numero:
//numeros = [2, 2, 2, 1, 2];
//let numeroAQuitar = 2;
//for (let i = 0; i < numeros.length; i++) {
//    if (numeros[i] === numeroAQuitar) {
//        numeros.splice(i, 1);
//        i--; //de esta forma se quita el error del fallo con la "corrida" de posiciones en el array.
//        //break; //podemos poner un break para eliminar solo uno.
//    }
//}
//console.log(numeros);

//existe otro modo para que no sea tan jaleoso como arriba
//let numeroAQuitar = 2;
//numero = [2, 3, 4, 2];

//let indiceAQuitar = numeros.indexOf(numeroAQuitar);
//numero.splice(indiceAQuitar, 1);
//numero.splice(numeros.indexOf(numeroAQuitar), 1);

//como usar splice para añadir numeros:
//let numeros = [1, 2, 5];
//numeros.splice(2, 0, 3, 4);
//console.log(numeros);

//usando while y indexOf para quitar todos los numeros que coincidan:
//let numeroAQuitar = 2;
//numero = [2, 3, 4, 2];
//let indiceAQuitar;
//while (numeros.indexOf(numeroAQuitar) !== -1) {
//    numero.splice(numeros.indexOf(numeroAQuitar), 1);
//}
//console.log(numeros);

//usando.map()
//numeros = [1,2, 3, 4, 5];
//let numeroAQuitar = 2;

//let numeros2 = numeros.map(function (numero) {
//    return numero * 2;
//});

//console.log(numeros);
//console.log(numeros2);

//como usar .filter() (filtrar elementos)
//let numeros = [1, 2, 3, 4, 5];
//let numeroAQuitar = 2;

//let numeros2 = numeros.filter(function (item) {
//    return item > 2;
//});
//devolvera en cada vuelta:false,false, true, true, true.

//como usar .filter() (filtrar elementos)
//let numeros = [1, "hola", 3, "holi", 5];
//let numeroAQuitar = 2;

//let numeros2 = numeros.filter(function (item) {
//    return !isNaN(item);
//});
//console.log(numeros);
//console.log(numeros2);

//arrow functions
let numeros = [1, 2, 2, 2, 5];

let numeros2 = numeros.filter(item => item !== 2);

//

console.log(numeros);
console.log(numeros2);