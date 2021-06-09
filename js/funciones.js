$(document).ready( function(){
    console.log("Documento Cargado")

    $("#navegador #menu_hamburguesa").click(function(){
        console.log("Click sobre menú hamburguesa")
        $("#navegador .menu").toggleClass("aparece");
        console.log("Click sobre menú hamburguesa")
        $(this).toggleClass("cambio_icono");
    })
    $("#navegador .menu li").click(function(){
        console.log("Click sobre li")
        $("#navegador #menu_hamburguesa").toggleClass("cambio_icono");
        $("#navegador .menu").removeClass("aparece");
    })
});