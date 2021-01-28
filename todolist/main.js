let addToDoButton = document.getElementById('addButton');
let toDoContainer = document.getElementById('toDoList');
let myInputField = document.getElementById('inputField');

//add function
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.className = 'paragraph';
    paragraph.innerText = myInputField.value;
    toDoContainer.appendChild(paragraph);

    //crossed out 
    paragraph.addEventListener('click', function(){
        this.innerHTML = '<del>'+ this.innerHTML + '</del>';
        //remove
        this.addEventListener('click', function(){
            this.parentNode.removeChild(this);
        })
    })
})


