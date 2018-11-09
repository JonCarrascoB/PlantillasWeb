//$(function () {
//    console.log("hola jquery");
//});

//Una de las ventajas de este metodo es el selector
//let elementotexto = $('#texto');
//console.log(elementotexto);

//$("#lista").find("li").css("background-color", "red");
//antes esto se hacia:
//let lista = document.getElementById("lista");
//let liItem = lista;
//...

//console.log($("#lista").find("li").text());
//$("#lista").find("li").text("hola!!!!");

//de est forma aligeramos lo de arriba
//$("#lista")
//    .find("li")
//    .css("background-color", "red")
//    .text("hola!!!");

//con cajas de texto o botones

//$('#texto_btn').click(function () {
//    let texto = $('#texto').val();
//    $('#mostrar').text(texto);
//});

//$('#texto_btn').click(function () {
//    $('#mostrar').text($('#texto').val());
//});

//$('#texto_btn').click(() => {
//    $('#mostrar').text($('#texto').val());
//    });


//$('#texto_btn').attr('value', 'Copiar texto');
//$('#lista').css("background-color", "red");
//$('#texto_btn').addClass('endika');
//$('#texto_btn').removeClass('endika');

$('#texto_btn').click(() => {
    $('#lista').fadeOut(fuction(){
        $('#lista').fadeIn();
    });
});

