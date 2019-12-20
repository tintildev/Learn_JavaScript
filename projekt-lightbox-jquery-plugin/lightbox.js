"use strict";

jQuery.fn.lightbox = function(){
    //Schließ Mechanismus ESC
    $(document).keydown(function(event){
        if(event.key == "Escape"){
            $("#lightbox__overlay").remove();
            $("#lightbox__overlay-container").remove();
        }
    });

    $(this).click(function(event){
        //Link folgen deaktiviert
        event.preventDefault();

        let overlay = $.parseHTML("<div id='lightbox__overlay'></div>");
        $("body").append(overlay);

        //Div mit CSS
        let image = $.parseHTML("<img id='lightbox__overlay-image'></img>");
        let src = $(this).attr("href");
        $(image).attr("src", src);

        let conatiner = $.parseHTML("<div id='lightbox__overlay-container'></div>");

        //Schließ Mechanismus Klick
        $(conatiner).click(function(){
            $("#lightbox__overlay").remove();
            $("#lightbox__overlay-container").remove();

        });

        $(conatiner).append(image);

        $("body").append(conatiner);
    });
    return this;

}