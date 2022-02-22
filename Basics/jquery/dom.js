"use stricte";

jQuery(document).ready(function($){

    //Event
    $("#test").click(function(){
        //Erstelle ein HTML Element
        let li = $.parseHTML("<li>Kokosnuss</li>");
        let begin = $.parseHTML("<li>prepend Methode</li>");

        //Hinzufügen
        $("#test").append(li);

        //Hinzufügen zum Anfang
        $("#test").prepend(begin);

        //Vor den HTML Element einfügen
        $("#test").before("Before Methode");

        //Nach den HTML Element einfügen
        $("#test").after("After Methode");

        //Entfernen
        $("#test").remove();
    });
});