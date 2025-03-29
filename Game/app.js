let boxs = document.querySelectorAll(".box");
let restartbtn = document.querySelector(".restart");
let mesage = document.querySelector("#msg");
let newgamebtn = document.querySelector(".newgamebtn");
let messagecontainer = document.querySelector(".messagecontainer")

let trunO = true;

const winpatten = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 6],
  [6, 7, 8],
  [6, 4, 2],
];

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was click");
    if (trunO) {
      box.innerText = "x";
      trunO = false;
    } else {
      box.innerText = "O";
      trunO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattens of winpatten) {

    let pos1val = boxs[pattens[0]].innerText;

    let pos2val = boxs[pattens[1]].innerText;

    let pos3val = boxs[pattens[2]].innerText;


    if (pos1val != "" && pos2val !="" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val ) {
        console.log("win", pos1val);
        showwinner(pos1val);
        disabledbox();
      }
    } 
  }
}
const showwinner = (winner) => {
   mesage.innerText = `congratulation you win ${winner}`
   messagecontainer.classList.remove("hide")
}
const disabledbox = () =>{
  for (let box of boxs) {
    box.disabled = true;
  }
}
const enablebox = () =>{
  for (let box of boxs) {
    box.disabled = false;
    box.innerText ="";
  }
}
const restart_game = () =>{
  trunO = true;
  enablebox();
  messagecontainer.classList.add("hide");
}

newgamebtn.addEventListener("click", restart_game);
restartbtn.addEventListener("click", restart_game);