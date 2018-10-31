let cartas = {
    uno: {
        name: "Angel de serra",
        damage: 4,
        description: "vuela, no se gira al atacar",
        image: "http://www.elrincondemagic.com/WebRoot/StoreLES/Shops/64576138/5ACF/ABFE/94B4/D960/679D/0A0C/6D06/9303/033.png"
    },
    dos: {
        name: "Aurelia, lider de guerra",
        damage: 2,
        description: "con es nombre cualquier cosa",
        image:"http://www.elrincondemagic.com/WebRoot/StoreLES/Shops/64576138/5340/5E6E/97BE/E767/73E8/C0A8/2BB9/908D/143.jpg"
    },
    tres: {
        name: "Dragon shilvano",
        damage: 5,
        description: "vuela",
        image: "https://img.scryfall.com/mci/scans/es/m10/156.jpg"
    },
    cuatro: {
        name: "Sacerdote guerrero Azbhano",
        damage: 3,
        description: "alla por donde camina, caminan los ancestros",
        image: "http://media.wizards.com/images/magic/tcg/products/ktk/8arg43u984398yf/sp_w1q972s8hn.png"
    },
    cinco: {
        name: "asceta troll",
        damage: 3,
        description: "no puede ser objeto de hechizos",
        image: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=150621&type=card"
    },
    seis: {
        name: "Darigaaz reencarnado",
        damage: 7,
        description: "vuela y arrolla",
        image: "http://sm.ign.com/ign_es/screenshot/default/darigaaz-reencarnado_t7fq.png"
    },
    siete: {
        name: "Chuck Norris",
        damage: 99,
        description: "el jugador enemigo pierde",
        image: "http://www.eldelbar.com/upload/templates/chuckn10.jpg"
    },
    ocho: {
        name: "Draco Mordiente",
        damage: 3,
        description: "de mal caracter, sin entrenar, terco",
        image: "https://img.milanuncios.com/fg/1862/97/186297381_1.jpg?"
    },
    nueve: {
        name: "Draco sobrapiel",
        damage: 2,
        description: "bloquea a criaturas que vuelan",
        image: "http://www.magic4ever.cl/images/AVR/Draco%20sobrapiel.jpg"
    },
    diez: {
        name: "Guia trasgo",
        damage: 2,
        description: "ha estado en muchos lugares, aun se acuerda de alguno",
        image: "https://img.scryfall.com/mci/scans/es/zen/126.jpg"
    },
    once: {
        name: "Aves del paraiso",
        damage: 0,
        description: "agrega un mana a tu reserva",
        image: "http://lh3.ggpht.com/_wuFVxcgueM8/SkG0NYEo9OI/AAAAAAAACww/2OaCEXiIagk/Aves%20del%20Para%C3%ADso.jpg"
    },
    doce: {
        name: "Recibemuerte",
        damage: 1,
        description: "los huesos de los enemigos te dan sabiduria",
        image: "https://img.scryfall.com/mci/scans/es/ala/71.jpg"
    },
    trece: {
        name: "Nicol Bolas, el devastador",
        damage: 4,
        description: "al llegar el enemigo descarta una carta",
        image: "https://3.bp.blogspot.com/-rMnVzlN7-as/WyqRvFGtRSI/AAAAAAAA_yc/cKHsmFgayokCYabmb6Js4ee3wCt1u0FqACEwYBhgL/s1600/Nicol%2BBolas%252C%2Bel%2BDevastador.png"
    },
    catorce: {
        name: "Custodio de misterios",
        damage: 4,
        description: "adivina una carta",
        image: "https://cdn.areajugones.es/wp-content/uploads/2017/05/custodio-de-misterios-amonkhet.png"
    },
    quince: {
        name: "Asaltacamaras",
        damage: 4,
        description: "cuando ataca te descartas y robas una nueva",
        image: "https://www.gamemania.es/wp-content/uploads/mtg-infrecuente.png"
    }

};

let result = "<ul>";

for (carta in cartas) {
    console.log(cartas[carta].name);
    result += "<li>";
    result += "<h1 style=front-size='30' '"+cartas[carta].name+"' ></h1>";
    result += "<img src='" + cartas[carta].image + "' width='150'/>";
    result += "</li>";
}

result += "</ul>";

document.getElementById("cartas").innerHTML = result;
