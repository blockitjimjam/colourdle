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
const winselement = document.getElementById("winselement");
let wins;
if (localStorage.getItem("wins") != null) {
  wins = parseInt(localStorage.getItem("wins"));
  
} else {
  wins = 0;
}
winselement.innerHTML = "Wins: " + wins;
let a;
let greentimes = 0;
let ambertimes = 0;
let guessnumber = 1;
let guessindex = 1;
let colourAnswer = [];
const colourDefs = new Map([
  [1, "red"],
  [2, "green"],
  [3, "blue"],
  [4, "yellow"],
  [5, "purple"],
  [6, "orange"]
]);
let colours = [];
let guess = [];
guessVisual.style.display = "none";
guessVisualb.style.display = "none";
winoverlay.style.display = "none";
function resetTable() {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      const cell = document.getElementById(`${i}${j}`);
      cell.style.backgroundColor = "transparent";
      cell.style.borderColor = "white";
    }
  }
}
function closePopup() {
  document.getElementById("winoverlay").style.display = "none";
}

function startGame() {
  document.getElementById("winoverlay").style.display = "none";
  for (let i = 0; i < 4; i++) {
    a = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    colourAnswer[i] = a;

  }

  for (let i = 0; i < 4; i++) {
    colours[i] = colourDefs.get(colourAnswer[i]);
  }
  guessnumber = 1;
  guessindex = 1;
  startButton.style.display = "none";
  guessVisual.style.display = "table";
  guessVisualb.style.display = "table";
  resetTable();
  

  submitbutton.addEventListener("click", function() {
    greentimes = 0;
    ambertimes = 0;
    if (guessindex == 5) {
      let guessc;
      for (let i = 1; i < 5; i++) {
        if (document.getElementById(`${guessnumber}${i}`).style.backgroundColor == "rgb(204, 51, 51)") {
          guessc = "red";
        } else {
          guessc = document.getElementById(`${guessnumber}${i}`).style.backgroundColor;
        }
        if (guessc == colours[i - 1]) {
          document.getElementById(`${guessnumber}${i}`).style.borderColor = "lime";
          greentimes++;
        } else if (colours.includes(guessc)) {
          document.getElementById(`${guessnumber}${i}`).style.borderColor = "#ff6624";
          ambertimes++;

        } else {
          document.getElementById(`${guessnumber}${i}`).style.borderColor = "gray";
        }
      }
      if (greentimes == 4) {
        wins++;
        localStorage.setItem("wins", wins);
        winselement.innerHTML = "Wins: " + wins;
        winoverlay.style.display = "block";
      }
      if (greentimes == 3 && ambertimes == 1) {
        for (let i = 1; i < 5; i++) {
          if (document.getElementById(`${guessnumber}${i}`).style.borderColor == "rgb(255, 102, 36)") {
            document.getElementById(`${guessnumber}${i}`).style.borderColor = "gray";
          }
        }
      }
      guessnumber++;
      guessindex = 1;
    }
  })
}
startButton.addEventListener("click", function() {
  redbutton.addEventListener("click", function() {
    if (guessindex < 5) {
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "#cc3333";
      guessindex++;
    }
  })
  greenbutton.addEventListener("click", function() {
    if (guessindex < 5) {
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "green";
      guessindex++;
    }
  })
  bluebutton.addEventListener("click", function() {
    if (guessindex < 5) {
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "blue";
      guessindex++;
    }
  })
  yellowbutton.addEventListener("click", function() {
    if (guessindex < 5) {
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "yellow";
      guessindex++;
    }
  })
  purplebutton.addEventListener("click", function() {
    if (guessindex < 5) {
      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "purple";
      guessindex++;
    }
  })
  orangebutton.addEventListener("click", function() {
    if (guessindex < 5) {

      document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "orange";
      guessindex++;
    }
  })
  backspacebutton.addEventListener("click", function() {
    if (guessindex > 1) {
      guessindex--;
    } else {
      guessindex = 1;
    }

    document.getElementById(`${guessnumber}${guessindex}`).style.backgroundColor = "transparent";
  })
  startGame();
  
})