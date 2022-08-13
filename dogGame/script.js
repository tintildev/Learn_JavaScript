let valueField = document.getElementById("valueField");
let btn = document.getElementById("btn");
let scoreValue = document.getElementById("scoreValue");
let life = document.getElementById("life");
let gamefield = document.getElementById("gamefield");
let ball = document.createElement("div");
let left = 400;



class Game{
  constructor(){
    this.life = life;
    this.ball = ball;
    this.gamefield = gamefield;
    this.setup();
    let versuche = 3;
    let score = 0;
    this.versuche = versuche;
    this.score = score;
    this.left = left;
  }

  setup(){
    this.ball.id = "ball";
    //Inhalt
    this.ball.style.width = "20px";
    this.ball.style.height ="20px";

    //Einfügen
    this.gamefield.appendChild(this.ball);

    this.setleftPosition(left);
  }

  changePosition(newPosition){
    this.ball.style.animationName = "a" + newPosition;
    console.log("a" + newPosition);
  }

  setleftPosition(leftValue){
    console.log(leftValue);
    //Set Dog Position
    document.getElementById("Dog").style.left = leftValue + "px";
  }

  berechne(){
        if(this.versuche > 0){
          console.log("Werte : " + (this.left / 100 ) + " und " + valueField.value)
          if(this.left / 100 == valueField.value ){
            console.log("Erfolgreich")
            this.score = this.score + 100;
            scoreValue.innerHTML = "Score: " + this.score;
  
            //new position Dog
            this.left = Math.random() * (400 - 100) + 100;
            this.setleftPosition(this.left);
  
            //move ball
            console.log("Wert: " + valueField.value);
            this.changePosition(valueField.value);
            
          }else{
            let changeImg = document.getElementById(this.versuche);
            changeImg.src = "herz.png";
            this.versuche -= 1;
            console.log(this.versuche);
            scoreValue.value = " "; 
  
            //move ball
            console.log("Wert: " + valueField.value);
            this.changePosition(valueField.value);
            
          }
        }else{
          // TODO Game Over
          
         
        }
      
    }
}

btn.addEventListener("click", () => {
  let game = new Game();
  game.berechne();

  
});
