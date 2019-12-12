"use stricte";


jQuery(document).ready(function($){

    //Doller dient als Selektor
    let p = $("p");

    //Hol dir die Elemente und mache diese grün
    $("p").css("color", "green");
    //Hintergrund
    $("p").css("background-color", "red");

    //kompremierte Möglichkeit
    let p1 = $("p.absatz")
        .css("color", "black")
        .css("background-color", "yellow");


});