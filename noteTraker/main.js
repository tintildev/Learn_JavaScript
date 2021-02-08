"use strict";
let mainContainer = document.getElementById('mainContainer');
let formElement = document.getElementById('form');
let containerNotes = document.getElementById('containerNotes');
let myInputField = document.getElementById('inputField');
let overlay = document.createElement('div');
let cont = 0;

//add function
formElement.addEventListener('submit', function(){
    console.log("Submit ausgeführt!")
    var container = document.createElement('div');
    container.className = 'notesList';


    var paragraph = document.createElement('p');
    paragraph.className = 'paragraph';
    paragraph.id = 'paragraph ' + cont;
    paragraph.innerText = myInputField.value;

    var button = document.createElement('button');
    button.className = 'NotesDetails';
    button.id = 'NotesDetails ' + cont;
    button.innerText = 'View Detail';
    
    container.appendChild(paragraph);
    container.appendChild(button);
    containerNotes.appendChild(container);
    myInputField.value ="";
    cont = +1;

    //Button
    button.addEventListener("click", function(){
        overlay.className = 'overlay';
        var temp = this.id;
        console.log(this.id)
        var editTemp = temp.split(' ');
        console.log(editTemp);
        var valueParagraph = document.getElementById('paragraph ' + editTemp[1]);
        valueParagraph.className = 'overlayParagraph';
        overlay.appendChild(valueParagraph);
        mainContainer.appendChild(overlay);
    })

    //Remove
    overlay.addEventListener('click', function(){
        mainContainer.removeChild(overlay);
    })

    //Remove by Esacpe
    document.addEventListener('keydown', event => {
        if(event.key == "Escape"){
            mainContainer.removeChild(overlay);
        }
    })

})

