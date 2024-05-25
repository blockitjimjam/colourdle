// getting global elements needed for game
const startButton = document.getElementById("start");
const startButtonM = document.getElementById("start1");
const startButtonH = document.getElementById("start2");
const startButtoni = document.getElementById("start3");
const guessVisual = document.querySelector(".guessdisplay");
const nextGame = document.getElementById("nextgame");
const nextGame2 = document.getElementById("nextgame2");
const shop = document.getElementById("shopmenu");
const questbutton = document.getElementById("questsbutton");
const guessVisualm = document.querySelector(".guessdisplaym");
const guessVisualh = document.querySelector(".guessdisplayh");
const guessVisualb = document.querySelector(".guessdisplayb");
const guessVisuali = document.querySelector(".guessdisplayi");
const skindisplay = document.getElementById("skin-display");
const skindisplaym = document.getElementById("invmenu");
let redbutton = document.getElementById("red");
let greenbutton = document.getElementById("green");
let bluebutton = document.getElementById("blue");
let yellowbutton = document.getElementById("yellow");
let purplebutton = document.getElementById("purple");
let orangebutton = document.getElementById("orange");
let backspacebutton = document.getElementById("backspace");
const exitb = document.getElementById("exitgame");
const submitbutton = document.getElementById("check");
const invbutton = document.getElementById("invbutton");
const closeinv = document.getElementById("closeinv");
const winoverlay = document.getElementById("winoverlay");
const lossoverlay = document.getElementById("lossoverlay");
const winselement = document.getElementById("winselement");
const helpbutton = document.getElementById("helpbutton");
const storebutton = document.getElementById("storebutton");
const chipscount = document.getElementById("chipscount");
const helpoverlay = document.getElementById("helpoverlay");
const questsoverlay = document.getElementById("questsoverlay");
let wins;
let chips;
let goes;
let won;
let iwins;

// setting skin ids and loading saves from local storage
const skinIDS = {
  0: "assets/skins/default.png",
  1: "assets/skins/potrified.png",
  2: "assets/skins/cyclone.jpg",
  3: "assets/skins/king.png",
  4: "assets/skins/Against the odds.png"
}
function removeAllEventListeners(element) {
  const clone = element.cloneNode(true);
  element.replaceWith(clone);
  return clone;
}
if (!localStorage.getItem("skins")) {
  localStorage.setItem("skins", "");
} else {
  console.log("Skins Array found");
}
let skins = localStorage.getItem("skins").split(',');
if (!localStorage.getItem("iwins")) {
  iwins = 0;
} else {
  iwins = parseInt(localStorage.getItem("iwins"));
}
if (!localStorage.getItem("skinonrn")) {
  localStorage.setItem("skinonrn", "0");
} else {
  console.log("Skins Current found");
}
let currentSkin = parseInt(localStorage.getItem("skinonrn"));
skindisplay.src = skinIDS[currentSkin];
document.getElementById('closeskins').addEventListener('click', function() {
  if (shop.style.display == "none") {
    shop.style.display = "block";
  } else {
    shop.style.display = "none";
  }
});
closeinv.addEventListener("click", function() {
  if (invmenu.style.display == "none") {
    invmenu.style.display = "block";

  } else {
    invmenu.style.display = "none";
  }
})
function formatint(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
if (localStorage.getItem("wins") != null) {
  wins = parseInt(localStorage.getItem("wins"));
} else {
  wins = 0;
}
if (localStorage.getItem("chips") != null) {
  chips = parseInt(localStorage.getItem("chips"));
} else {
  chips = 0;
}
winselement.innerHTML = "Wins: " + wins;
chipscount.innerHTML = "<img src='assets/chip.png'>" + chips;
// setting essential game vars
let a;
let m;
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
// button event listeners for help, shop and inv popups
helpbutton.addEventListener("click", function() {
  helpoverlay.style.display = "block";
});
storebutton.addEventListener("click", function() {
  shop.style.display = "inline-block";
})
invbutton.addEventListener("click", function() {
  invmenu.style.display = "block";
  for (let i = 1; i < 4; i++) {
    if (skins.includes(i.toString())) {
      document.getElementById("d" + i.toString()).style.display = "block";
    } else {
      document.getElementById("d" + i.toString()).style.display = "none";
    }
  }
})
// hiding all unnescesary elements
shop.style.display = "none";
guessVisual.style.display = "none";
guessVisualm.style.display = "none";
guessVisualb.style.display = "none";
guessVisualh.style.display = "none";
guessVisuali.style.display = "none";
exitb.style.display = "none";
winoverlay.style.display = "none";
lossoverlay.style.display = "none";
helpoverlay.style.display = "none";
invmenu.style.display = "none";
// function to leave game
exitb.addEventListener("click", function() {
  guessVisual.style.display = "none";
  guessVisualm.style.display = "none";
  guessVisualb.style.display = "none";
  guessVisualh.style.display = "none";
  guessVisuali.style.display = "none";
  exitb.style.display = "none";
  winoverlay.style.display = "none";
  lossoverlay.style.display = "none";
  helpoverlay.style.display = "none";
  storebutton.style.display = "inline-block";
  startButton.style.display = "inline-block";
  startButtonM.style.display = "inline-block";
  startButtonH.style.display = "inline-block";
  startButtoni.style.display = "inline-block";
})
questbutton.addEventListener("click", function() {
  questsoverlay.style.display = "inline-block";
})
// eventListener functions for colour buttons in form e,m,h,i
function redButtonClickHandler() {
  if (guessindex < 5) {
    document.getElementById(`${guessnumber}${guessindex}e`).style.backgroundColor = "#cc3333";
    guessindex++;
  }
}

function greenButtonClickHandler() {
  if (guessindex < 5) {
    document.getElementById(`${guessnumber}${guessindex}e`).style.backgroundColor = "green";
    guessindex++;
  }
}

function blueButtonClickHandler() {
  if (guessindex < 5) {
    document.getElementById(`${guessnumber}${guessindex}e`).style.backgroundColor = "blue";
    guessindex++;
  }
}

function yellowButtonClickHandler() {
  if (guessindex < 5) {
    document.getElementById(`${guessnumber}${guessindex}e`).style.backgroundColor = "yellow";
    guessindex++;
  }
}

function purpleButtonClickHandler() {
  if (guessindex < 5) {
    document.getElementById(`${guessnumber}${guessindex}e`).style.backgroundColor = "purple";
    guessindex++;
  }
}

function orangeButtonClickHandler() {
  if (guessindex < 5) {
    document.getElementById(`${guessnumber}${guessindex}e`).style.backgroundColor = "orange";
    guessindex++;
  }
}

function backspaceButtonClickHandler() {
  if (guessindex > 1) {
    guessindex--;
  } else {
    guessindex = 1;
  }

  document.getElementById(`${guessnumber}${guessindex}e`).style.backgroundColor = "transparent";
}
function redButtonClickHandlerm() {
  if (guessindex < 6) {
    document.getElementById(`${guessnumber}${guessindex}m`).style.backgroundColor = "#cc3333";
    guessindex++;
  }
}

function greenButtonClickHandlerm() {
  if (guessindex < 6) {
    document.getElementById(`${guessnumber}${guessindex}m`).style.backgroundColor = "green";
    guessindex++;
  }
}

function blueButtonClickHandlerm() {
  if (guessindex < 6) {
    document.getElementById(`${guessnumber}${guessindex}m`).style.backgroundColor = "blue";
    guessindex++;
  }
}

function yellowButtonClickHandlerm() {
  if (guessindex < 6) {
    document.getElementById(`${guessnumber}${guessindex}m`).style.backgroundColor = "yellow";
    guessindex++;
  }
}

function purpleButtonClickHandlerm() {
  if (guessindex < 6) {
    document.getElementById(`${guessnumber}${guessindex}m`).style.backgroundColor = "purple";
    guessindex++;
  }
}

function orangeButtonClickHandlerm() {
  if (guessindex < 6) {
    document.getElementById(`${guessnumber}${guessindex}m`).style.backgroundColor = "orange";
    guessindex++;
  }
}

function backspaceButtonClickHandlerm() {
  if (guessindex > 1) {
    guessindex--;
  } else {
    guessindex = 1;
  }

  document.getElementById(`${guessnumber}${guessindex}m`).style.backgroundColor = "transparent";
}
function redButtonClickHandlerh() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}h`).style.backgroundColor = "#cc3333";
    guessindex++;
  }
}

function greenButtonClickHandlerh() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}h`).style.backgroundColor = "green";
    guessindex++;
  }
}

function blueButtonClickHandlerh() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}h`).style.backgroundColor = "blue";
    guessindex++;
  }
}

function yellowButtonClickHandlerh() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}h`).style.backgroundColor = "yellow";
    guessindex++;
  }
}

function purpleButtonClickHandlerh() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}h`).style.backgroundColor = "purple";
    guessindex++;
  }
}

function orangeButtonClickHandlerh() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}h`).style.backgroundColor = "orange";
    guessindex++;
  }
}

function backspaceButtonClickHandlerh() {
  if (guessindex > 1) {
    guessindex--;
  } else {
    guessindex = 1;
  }

  document.getElementById(`${guessnumber}${guessindex}i`).style.backgroundColor = "transparent";
}
function redButtonClickHandleri() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}i`).style.backgroundColor = "#cc3333";
    guessindex++;
  }
}

function greenButtonClickHandleri() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}i`).style.backgroundColor = "green";
    guessindex++;
  }
}

function blueButtonClickHandleri() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}i`).style.backgroundColor = "blue";
    guessindex++;
  }
}

function yellowButtonClickHandleri() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}i`).style.backgroundColor = "yellow";
    guessindex++;
  }
}

function purpleButtonClickHandleri() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}i`).style.backgroundColor = "purple";
    guessindex++;
  }
}

function orangeButtonClickHandleri() {
  if (guessindex < 7) {
    document.getElementById(`${guessnumber}${guessindex}i`).style.backgroundColor = "orange";
    guessindex++;
  }
}

function backspaceButtonClickHandleri() {
  if (guessindex > 1) {
    guessindex--;
  } else {
    guessindex = 1;
  }

  document.getElementById(`${guessnumber}${guessindex}i`).style.backgroundColor = "transparent";
}

// functions for new games
function resetTable(index, mode) {
  if (mode == "h") {
    goes = 4;
  } else if (mode == "i") {
    goes = 1;
  } else {
    goes = 5;
  }
  for (let i = 1; i <= goes; i++) {
    for (let j = 1; j <= index; j++) {
      const cell = document.getElementById(`${i}${j}${mode}`);
      cell.style.backgroundColor = "transparent";
      cell.style.borderColor = "white";
    }
  }
}
nextGame.addEventListener("click", function() {
  if (m == "E") {
    startGameEz("e", 4);
  } else if (m == "M") {
    startGameEz("m", 5);
  } else if (m == "H") {
    startGameEz("h", 6);
  } else {
    startGameEz("i", 6);
  }
})
nextGame2.addEventListener("click", function() {
  if (m == "E") {
    startGameEz("e", 4);
  } else if (m == "M") {
    startGameEz("m", 5);
  } else if (m == "H") {
    startGameEz("h", 6);
  } else {
    startGameEz("i", 6);
  }
})
// function for closing popups for losses and wins
function closePopup() {
  document.getElementById("winoverlay").style.display = "none";
  document.getElementById("lossoverlay").style.display = "none";
  helpoverlay.style.display = "none";
  questsoverlay.style.display = "none";
}
// main game code
function startGameEz(mod, num1) {
  won = 0;
  closePopup();
  colourAnswer = [];
  // creating random colours
  for (let i = 0; i < num1; i++) {
    a = Math.floor(Math.random() * (num1 - 1 + 1)) + 1;
    colourAnswer[i] = a;

  }

  for (let i = 0; i < num1; i++) {
    colours[i] = colourDefs.get(colourAnswer[i]);
  }
  guessnumber = 1;
  guessindex = 1;
  exitb.style.display = "inline-block";
  storebutton.style.display = "none";
  startButton.style.display = "none";
  startButtonM.style.display = "none";
  startButtonH.style.display = "none";
  startButtoni.style.display = "none";
  if (mod == "e") {
    guessVisual.style.display = "table";
  } else if (mod == "m") {
    guessVisualm.style.display = "table";
  } else if (mod == "h") {
    guessVisualh.style.display = "table";
  } else {
    guessVisuali.style.display = "table";
  }
  guessVisualb.style.display = "table";
  resetTable(num1, mod);


  submitbutton.addEventListener("click", function() {
    greentimes = 0;
    ambertimes = 0;
    amountoftimes = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    }
    if (guessindex == num1 + 1) {
      let guessc;
      for (let i = 1; i < num1 + 1; i++) {
        if (document.getElementById(`${guessnumber}${i}${mod}`).style.backgroundColor == "rgb(204, 51, 51)") {
          guessc = "red";
        } else {
          guessc = document.getElementById(`${guessnumber}${i}${mod}`).style.backgroundColor;
        }
        if (guessc == colours[i - 1]) {
          document.getElementById(`${guessnumber}${i}${mod}`).style.borderColor = "lime";
          greentimes++;
        } else if (colours.includes(guessc)) {
          document.getElementById(`${guessnumber}${i}${mod}`).style.borderColor = "#ff6624";
          ambertimes++;

        } else {
          document.getElementById(`${guessnumber}${i}${mod}`).style.borderColor = "gray";
        }
      }
      if (greentimes == num1) {
        if (mod == "e") {
          wins++;
          chips += 5;
        } else if (mod == "m") {
          wins++;
          chips += 10;
        } else if (mod == "h") {
          wins += 2;
          chips += 20;
        } else if (mod == "i") {
          wins += 2;
          chips += 1000000;
          iwins++;
        } else {
          chips -= 1;
        }
        won = 1;
        localStorage.setItem("wins", wins);
        localStorage.setItem("chips", chips);
        localStorage.setItem("iwins", iwins);
        chipscount.innerHTML = "<img src='assets/chip.png'>" + chips;
        winselement.innerHTML = "Wins: " + wins;
        winoverlay.style.display = "block";
      }
      if (greentimes == num1 - 1 && ambertimes == 1) {
        for (let i = 1; i < num1 + 1; i++) {
          if (document.getElementById(`${guessnumber}${i}${mod}`).style.borderColor == "rgb(255, 102, 36)") {
            document.getElementById(`${guessnumber}${i}${mod}`).style.borderColor = "gray";
          }
        }
      }
      guessnumber++;
      guessindex = 1;
      if (guessnumber > goes) {
        if (won == 0) {
          if (mod == "e") {
            chips -= 1;
          } else if (mod == "m") {
            chips -= 2;
          } else if (mod == "h") {
            chips -= 5;
          } else if (mod == "i") {
            chips -= 1;
          }
          lossoverlay.style.display = "block";
          chipscount.innerHTML = "<img src='assets/chip.png'>" + chips;
          winselement.innerHTML = "Wins: " + wins;
          localStorage.setItem("wins", wins);
          localStorage.setItem("chips", chips);
        }
      }

    }
  })
}
startButton.addEventListener("click", function() {
  redbutton = removeAllEventListeners(redbutton);
  greenbutton = removeAllEventListeners(greenbutton);
  bluebutton = removeAllEventListeners(bluebutton);
  yellowbutton = removeAllEventListeners(yellowbutton);
  purplebutton = removeAllEventListeners(purplebutton);
  orangebutton = removeAllEventListeners(orangebutton);
  backspacebutton = removeAllEventListeners(backspacebutton);


  m = "E"
  nextGame.onclick = m;
  redbutton.addEventListener("click", redButtonClickHandler);
  greenbutton.addEventListener("click", greenButtonClickHandler);
  bluebutton.addEventListener("click", blueButtonClickHandler);
  yellowbutton.addEventListener("click", yellowButtonClickHandler);
  purplebutton.addEventListener("click", purpleButtonClickHandler);
  orangebutton.addEventListener("click", orangeButtonClickHandler);
  backspacebutton.addEventListener("click", backspaceButtonClickHandler);
  startGameEz("e", 4);

})

startButtonM.addEventListener("click", function() {
  redbutton = removeAllEventListeners(redbutton);
  greenbutton = removeAllEventListeners(greenbutton);
  bluebutton = removeAllEventListeners(bluebutton);
  yellowbutton = removeAllEventListeners(yellowbutton);
  purplebutton = removeAllEventListeners(purplebutton);
  orangebutton = removeAllEventListeners(orangebutton);
  backspacebutton = removeAllEventListeners(backspacebutton);


  m = "M";
  nextGame.onclick = m;
  redbutton.addEventListener("click", redButtonClickHandlerm);
  greenbutton.addEventListener("click", greenButtonClickHandlerm);
  bluebutton.addEventListener("click", blueButtonClickHandlerm);
  yellowbutton.addEventListener("click", yellowButtonClickHandlerm);
  purplebutton.addEventListener("click", purpleButtonClickHandlerm);
  orangebutton.addEventListener("click", orangeButtonClickHandlerm);
  backspacebutton.addEventListener("click", backspaceButtonClickHandlerm);
  startGameEz("m", 5);

})
startButtonH.addEventListener("click", function() {
  redbutton = removeAllEventListeners(redbutton);
  greenbutton = removeAllEventListeners(greenbutton);
  bluebutton = removeAllEventListeners(bluebutton);
  yellowbutton = removeAllEventListeners(yellowbutton);
  purplebutton = removeAllEventListeners(purplebutton);
  orangebutton = removeAllEventListeners(orangebutton);
  backspacebutton = removeAllEventListeners(backspacebutton);

  m = "H";
  nextGame.onclick = m;
  redbutton.addEventListener("click", redButtonClickHandlerh);
  greenbutton.addEventListener("click", greenButtonClickHandlerh);
  bluebutton.addEventListener("click", blueButtonClickHandlerh);
  yellowbutton.addEventListener("click", yellowButtonClickHandlerh);
  purplebutton.addEventListener("click", purpleButtonClickHandlerh);
  orangebutton.addEventListener("click", orangeButtonClickHandlerh);
  backspacebutton.addEventListener("click", backspaceButtonClickHandlerh);
  startGameEz("h", 6);

})
startButtoni.addEventListener("click", function() {
  redbutton = removeAllEventListeners(redbutton);
  greenbutton = removeAllEventListeners(greenbutton);
  bluebutton = removeAllEventListeners(bluebutton);
  yellowbutton = removeAllEventListeners(yellowbutton);
  purplebutton = removeAllEventListeners(purplebutton);
  orangebutton = removeAllEventListeners(orangebutton);
  backspacebutton = removeAllEventListeners(backspacebutton);

  m = "I";
  nextGame.onclick = m;
  redbutton.addEventListener("click", redButtonClickHandleri);
  greenbutton.addEventListener("click", greenButtonClickHandleri);
  bluebutton.addEventListener("click", blueButtonClickHandleri);
  yellowbutton.addEventListener("click", yellowButtonClickHandleri);
  purplebutton.addEventListener("click", purpleButtonClickHandleri);
  orangebutton.addEventListener("click", orangeButtonClickHandleri);
  backspacebutton.addEventListener("click", backspaceButtonClickHandleri);
  startGameEz("i", 6);

})
function checkbuy(num) {
  switch (num) {
    case 1:
      if (!skins.includes("1")) {
        if (chips >= 420) {
          chips -= 420;
          localStorage.setItem("chips", chips);
          chipscount.innerHTML = "<img src='assets/chip.png'>" + chips;
          skindisplay.src = "./assets/skins/potrified.png";
          localStorage.setItem("skinonrn", "1");
          skins.push("1");
          localStorage.setItem("skins", skins);

        }
      }
      break;
    case 2:
      if (!skins.includes("2")) {
        if (chips >= 500) {
          chips -= 500;
          localStorage.setItem("chips", chips);
          chipscount.innerHTML = "<img src='assets/chip.png'>" + chips;
          skindisplay.src = "./assets/skins/cyclone.jpg";
          localStorage.setItem("skinonrn", "2");
          skins.push("2");
          localStorage.setItem("skins", skins);
        }
      }
      break;
    case 3:
      if (!skins.includes("3")) {
        if (chips >= 200) {
          chips -= 200;
          localStorage.setItem("chips", chips);
          chipscount.innerHTML = "<img src='assets/chip.png'>" + chips;
          skindisplay.src = "./assets/skins/king.png";
          localStorage.setItem("skinonrn", "3");
          skins.push("3");
          localStorage.setItem("skins", skins);
        }
      }
      break;
    case 4:
      if (!skins.includes("4")) {
        if (iwins >= 1) {
          skindisplay.src = "./assets/skins/Against the odds.png";
          localStorage.setItem("skinonrn", "4");
          skins.push("4");
          localStorage.setItem("skins", skins);
        }
      }
  }
}
function equip(num) {
  switch (num) {
    case 1:
      skindisplay.src = "./assets/skins/potrified.png";
      break;
    case 2:
      skindisplay.src = "./assets/skins/cyclone.jpg";
      break;
    case 3:
      skindisplay.src = "./assets/skins/king.png";
      break;
    case 4:
      skindisplay.src = "./assets/skins/Against the odds.png";
      break;
  }
}
