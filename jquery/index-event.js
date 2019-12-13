"use stricte";


jQuery(document).ready(function($){

    $("p")
        .click(function(){
            $(this).css("color", "red");
        })
        .mouseenter(function(){
            $(this).css("color", "green");
        })
        .mouseleave(function(){
            $(this).css("color", "black");
        });
});