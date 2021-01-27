let addToDoButton = document.getElementById('addButton');
let toDoContainer = document.getElementById('toDoList');
let myInputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.className = 'paragraph';
    paragraph.innerText = myInputField.value;
    toDoContainer.appendChild(paragraph);
})
