let perro = {
    nombre: "milu",
    hablar: function () {
        console.log("guau");
    }
};
let gato = {
    nombre: "lucifer",
    hablar: function () {
        console.log("miau");
    }
};
let animales = [perro, gato];

for (let i = 0; i < animales.length; i++) {
    console.log(animales[i].nombre);
}

perro.hablar();

