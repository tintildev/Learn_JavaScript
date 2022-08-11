let valueField = document.getElementById("valueField");
let dog = document.getElementById("dog");
let ball = document.getElementById("ball");
let btn = document.getElementById("btn");
let scoreValue = document.getElementById("scoreValue");
let life = document.getElementById("life");
let versuche = 3;
let score = 0;

class Game{
  constructor(){
    this.life = life;
  }

  berechne(){
      let rect = dog.getBoundingClientRect();
      console.log(rect.left);
      
      if(versuche > 0){
        //Ganz Zahl ohne Kommawert Math.trunc
        if(Math.trunc((rect.left / 100)) == valueField.value ){
          console.log("Erfolgreich")
          ball.style.zIndex = 1;
          score = score + 100;
          scoreValue.innerHTML = "Score: " + score;
          let temp = Math.random() * (500 - 100) + 100
          dog.style.left = temp + "px";
        }else{
          console.log("Nicht Erfolgreich " + Math.trunc(rect.left / 100));
          let changeImg = document.getElementById(versuche);
          changeImg.src = "herz.png";
          versuche -= 1;
          console.log(this.versuche);
          scoreValue.value = " "; 
        }
      }else{
        // TODO Game Over
      
       
      }
      
  };
}

btn.addEventListener("click", () => {
  let game = new Game();
  ball.style.left = (valueField.value * 100) + "px";
  game.berechne();

  
});
