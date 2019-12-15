"use strict";

jQuery(document).ready(function($){
    //Hol dir alle Buttons
    $(".button").click(function(event){
        //link folgen entfernen(bzw. Standart verhalten entfernt)
        event.preventDefault();

        //Ändern von html Attribut
        $(this).attr("href", "bin geändert worden!");
        //Zugriff auf html Attribut
        let href = $(this).attr("href");
        alert(href);
        

        //entferne die Klasse
        $(this).removeClass("button");
        //füge eine Klasse hinzu
        $(this).addClass("button-red");
    });

})