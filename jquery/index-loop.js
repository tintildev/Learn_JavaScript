"use stricte";


jQuery(document).ready(function($){

    //Loop
    $("p").each(function(i, element){
        if(i % 2 == 0){
            $(element).css("color", "red");
        } else{
            $(element).css("color", "green");
        }
    })

});