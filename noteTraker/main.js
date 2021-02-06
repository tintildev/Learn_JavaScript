let formElement = document.getElementById('form');
let containerNotes = document.getElementById('containerNotes');
let myInputField = document.getElementById('inputField');

//add function
formElement.addEventListener('submit', function(){
    console.log("Submit ausgeführt!")
    var container = document.createElement('div');
    container.className = 'notesList';


    var paragraph = document.createElement('p');
    paragraph.className = 'paragraph';
    paragraph.innerText = myInputField.value;

    var button = document.createElement('button');
    button.className = 'NotesDetails'
    button.innerText = 'View Detail'
    

    container.appendChild(paragraph);
    container.appendChild(button);
    containerNotes.appendChild(container);
    myInputField.value ="";

})


