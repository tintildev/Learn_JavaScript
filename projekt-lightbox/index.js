"use strict";

jQuery(document).ready(function($){
    //Schließ Mechanismus ESC
    $(document).keydown(function(event){
        if(event.key == "Escape"){
            $("#overlay").remove();
            $("#overlay-container").remove();
        }
    });


    $(".gallery-item").click(function(event){
        //Link folgen deaktiviert
        event.preventDefault();

        let overlay = $.parseHTML("<div id='overlay'></div>");
        $("body").append(overlay);

        //Div mit CSS
        let image = $.parseHTML("<img id='overlay-image'></img>");
        let src = $(this).attr("href");
        $(image).attr("src", src);
        /*
        $(image).click(function(){
            $("#overlay").remove();
            $("overlay-container").remove();

        });
        */

        let conatiner = $.parseHTML("<div id='overlay-container'></div>");

        //Schließ Mechanismus Klick
        $(conatiner).click(function(){
            $("#overlay").remove();
            $("#overlay-container").remove();

        });

        $(conatiner).append(image);

        $("body").append(conatiner);
    });
});