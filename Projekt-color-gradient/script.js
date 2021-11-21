function changeColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    let gradient = 'linear-gradient(to right, ' + '#' + randomColor +', ' + '#' + randomColor2 +')';
    document.body.style.backgroundImage = gradient;

    let setColor = document.getElementById("colorValue");
    setColor.innerHTML = gradient;
    
}

document.getElementById("button").addEventListener("click", changeColor);