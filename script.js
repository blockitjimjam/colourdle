const startButton = document.getElementById("start");
const guessVisual = document.querySelector(".guessdisplay");
const guessVisualb = document.querySelector(".guessdisplayb");
const redbutton = document.getElementById("red");
const greenbutton = document.getElementById("green");
const bluebutton = document.getElementById("blue");
const yellowbutton = document.getElementById("yellow");
const purplebutton = document.getElementById("purple");
const orangebutton = document.getElementById("orange");
const backspacebutton = document.getElementById("backspace");
const submitbutton = document.getElementById("check");
const winoverlay = document.getElementById("winoverlay");
let greentimes;
let guessnumber = 1;
let guessindex = 1;
let colourAnswer = [];
guessVisual.style.display = "none";
guessVisualb.style.display = "none";
winoverlay.style.display = "none";

startButton.addEventListener("click", function () {
  
  let a;
  for (let i = 0; i < 4; i++) {
    a = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    colourAnswer[i] = a;
    
  }
  const colourDefs = new Map([
    [1, "red"],
    [2, "green"],
    [3, "blue"],
    [4, "yellow"],
    [5, "purple"],
    [6, "orange"]
  ]);
  let colours = [];
  for (let i = 0; i < 4; i++){
    colours[i] = colourDefs.get(colourAnswer[i]);
  }

  startButton.style.display = "none";
  guessVisual.style.display = "table";
  guessVisualb.style.display = "table";
  redbutton.addEventListener("click", function (){
    if (guessindex < 5){
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "#cc3333";
      guessindex++;
    }
  })
  greenbutton.addEventListener("click", function (){
    if (guessindex < 5){
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "green";
      guessindex++;
    }
  })
  bluebutton.addEventListener("click", function () {
    if (guessindex < 5){
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "blue";
      guessindex++;
    }
  })
  yellowbutton.addEventListener("click", function () {
    if (guessindex < 5){
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "yellow";
      guessindex++;
    }
  })
  purplebutton.addEventListener("click", function () {
    if (guessindex < 5){
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "purple";
      guessindex++;
    }
  })
  orangebutton.addEventListener("click", function () {
    if (guessindex < 5){

document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "orange";
      guessindex++;
    }
  })
  backspacebutton.addEventListener("click", function () {
    if (guessindex > 1){
      guessindex--;
    } else {
      guessindex = 1;  
    }
    
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "transparent";
  })
  submitbutton.addEventListener("click", function () {
    greentimes = 0;
    if (guessindex == 5) {
      let guessc;
    for (let i = 1; i < 5; i++) {
      if (document.getElementById(`${guessnumber}${i}`).style.backgroundColor == "rgb(204, 51, 51)") {
        guessc = "red";
      } else {
        guessc = document.getElementById(`${guessnumber}${i}`).style.backgroundColor;
      }
      if (guessc == colours[i-1]){
        document.getElementById(`${guessnumber}${i}`).style.borderColor = "lime";
        greentimes++;
      } else if (colours.includes(document.getElementById(`${guessnumber}${i}`).style.backgroundColor)){
        document.getElementById(`${guessnumber}${i}`).style.borderColor = "#ff6624";
      
      } else {
        document.getElementById(`${guessnumber}${i}`).style.borderColor = "gray";
      }
    }
    if (greentimes == 4){
      winoverlay.style.display = "block";
    }
    guessnumber++;
    guessindex = 1;
    }
  })
  
})