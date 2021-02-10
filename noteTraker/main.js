"use strict";
let mainContainer = document.getElementById('mainContainer');
let formElement = document.getElementById('form');
let containerNotes = document.getElementById('containerNotes');
let myInputField = document.getElementById('inputField');
let overlay = document.createElement('div');
let cont = 0;
let valueParagraph = document.createElement('p');

//add function
formElement.addEventListener('submit', function(){
    overlay.className = 'overlay';
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
        
        var temp = this.id;
        console.log(this.id)
        var editTemp = temp.split(' ');
        console.log(editTemp);
        valueParagraph.innerText = document.getElementById('paragraph ' + editTemp[1]).innerHTML;
        valueParagraph.className = 'overlayParagraph';
        valueParagraph.id = 'overlayParagraph';
        overlay.appendChild(valueParagraph);
        mainContainer.appendChild(overlay);
    })

    //Remove
    overlay.addEventListener('click', function(){
        console.log('Remove by Click')
        //var temp = document.getElementById('overlayParagraph');
        overlay.removeChild(valueParagraph);
        mainContainer.removeChild(overlay);
    })

    //Remove by Esacpe
    document.addEventListener('keydown', event => {
        if(event.key == "Escape"){
            console.log('Remove by Keydown')
            //var temp = document.getElementById('overlayParagraph');
            overlay.removeChild(valueParagraph);
            mainContainer.removeChild(overlay);
        }
    })

})

