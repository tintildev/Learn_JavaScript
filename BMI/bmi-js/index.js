"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

window.addEventListener("load", function() {

    let button = document.getElementById("calculate");

    let heightObj = document.getElementById("height");
    let weightObj = document.getElementById("weight");

    // Grundlegende Funktion
    let calculateBmi = function(){
        let height = parseFloat(heightObj.value.replace(",", "."));
        let weight = parseFloat(weightObj.value);

        let bmi = (weight / (height * height));

        //Ausgabe:
        // alert("Dein BMI ist: " + bmi);
        let bmiValue = document.getElementById("bmi");
        bmiValue.innerText = "Dein BMI ist: " + bmi;

        //BMI Bedeutung
        document.getElementById("weight-below").style.display ="none";
        document.getElementById("weight-normal").style.display ="none";
        document.getElementById("weight-above").style.display ="none";

        if (bmi < 18.6){
            document.getElementById("weight-below").style.display ="block";
        }else if (bmi > 18.5 && bmi < 25){
            document.getElementById("weight-normal").style.display ="block";
        }else if (bmi > 25){
            document.getElementById("weight-above").style.display ="block";
        }

    }

    // Aktion bei Klick
    button.addEventListener("click", calculateBmi);

    //Aktion bei Veränderung (Feld verlassen)
    heightObj.addEventListener("change", calculateBmi);
    weightObj.addEventListener("change", calculateBmi);

    //Aktion bei Veränderung (direkt bei Eingabe)
    heightObj.addEventListener("keyup", calculateBmi);
    weightObj.addEventListener("keyup", calculateBmi);

    });


