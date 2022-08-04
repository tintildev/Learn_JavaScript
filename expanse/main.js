    let fromSubmit = document.getElementById('myForm');
    let containerList = document.getElementById('container--list');
    let expanseContainer = document.getElementById('expanseList');
    let myInputFieldName = document.getElementById('inputField--Name');
    let myInputFieldDate = document.getElementById('inputField--Date');
    let myInputFieldAmount = document.getElementById('inputField--Amount');

    //add function
    fromSubmit.addEventListener("submit", function(){
        containerList.style.display ="block";
        
        console.log("Submit ausgeführt")
        let trElement = document.createElement('tr');
        trElement.className = 'trElement';

        let tdElementName = document.createElement('td');
        tdElementName.className = 'tdElement';
        console.log(myInputFieldName.value);
        tdElementName.innerText = myInputFieldName.value;

        let tdElementDate = document.createElement('td');
        tdElementDate.className = 'tdElement';
        tdElementDate.innerText = myInputFieldDate.value;

        let tdElementAmount = document.createElement('td');
        tdElementAmount.className = 'tdElement';
        tdElementAmount.innerText = myInputFieldAmount.value;


        trElement.appendChild(tdElementDate);
        trElement.appendChild(tdElementName);
        trElement.appendChild(tdElementAmount);

        expanseContainer.appendChild(trElement);

        myInputFieldName.value ="";
        myInputFieldDate.value = "";
        myInputFieldAmount.value = "";


        //crossed out 
        trElement.addEventListener('click', function(){
            tdElementDate.innerHTML = '<del>'+ tdElementDate.innerHTML + '</del>';
            tdElementName.innerHTML = '<del>'+ tdElementName.innerHTML + '</del>';
            tdElementAmount.innerHTML = '<del>'+ tdElementAmount.innerHTML + '</del>';
            //remove
            this.addEventListener('click', function(){
                this.parentNode.removeChild(this);
            })
        })
    })




