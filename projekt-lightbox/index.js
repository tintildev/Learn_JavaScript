"use strict";

jQuery(document).ready(function($){
    $(".gallery-item").click(function(event){
        //Link folgen deaktiviert
        event.preventDefault();

        let overlay = $.parseHTML("<div id='overlay'></div>");
        $("body").append(overlay);

        let image = $.parseHTML("<img></img>");
        let src = $(this).attr("href");
        $(image).attr("src", src);
        $("body").append(image);
    });
});