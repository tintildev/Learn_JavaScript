"use strict";

jQuery(document).ready(function($){
    $(".gallery-item").click(function(event){
        //Link folgen deaktiviert
        event.preventDefault();

        let overlay = $.parseHTML("<div id='overlay'></div>");
        $("body").append(overlay);

        let image = $.parseHTML("<img id='overlay-image'></img>");
        let src = $(this).attr("href");
        $(image).attr("src", src);
        $(image).click(function(){
            $("#overlay").remove();
            $("overlay-container").remove();

        });

        let conatiner = $.parseHTML("<div id='overlay-container'></div>");
        $(conatiner).append(image);

        $("body").append(conatiner);
    });
});