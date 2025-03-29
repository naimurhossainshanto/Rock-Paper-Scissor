let userPoint = 0;
let computerPoint = 0;
const choices = document.querySelectorAll(".choices");
let msgRole = document.querySelector("#role");

choices.forEach((choice) => {

    choice.addEventListener("click" ,() =>{
        const userchoice = choice.getAttribute("id");
        // console.log("hey buddy click", choiceid);
        playgame(userchoice);
    });
});

const playgame = (userchoice) => {
    console.log("your choice", userchoice);
    const comchoice = botchoice();
    console.log(`computer choice is ${comchoice}`);
    
    if (userchoice === comchoice) {
        drawgame();
    }
    else{
        let userWin = true;
        if (userchoice === "paper") {
            userWin = comchoice === "rock" ? true : false;
        } else if(userchoice === "rock") {
            userWin = comchoice === "scissor" ? true : false;
        } else{
            userWin = comchoice === "paper" ? true : false;
        }
        showwinner(userWin, userchoice, comchoice); 
    }
}
function botchoice() {
    const option = ["paper", "rock", "scissor"];
    const ranidx = Math.floor(Math.random() * 3);
    return option[ranidx];
}

const drawgame = () => {
    console.log("Game was Draw");
    msgRole.innerText = "Game is Draw";
    msgRole.style.backgroundColor ="yellow";
    msgRole.style.color ="black";
}

const showwinner = (userWin ,userchoice , comchoice) =>{
    if (userWin === true) {
        console.log("congratulation");
        msgRole.innerText = `you win ${userchoice} beats ${comchoice}`;
        msgRole.style.backgroundColor ="green"
        msgRole.style.color ="white";
        
        
    } else {
        console.log("retry"); 
        msgRole.innerText = `you Lose ${comchoice} beats ${userchoice}`;
        msgRole.style.backgroundColor ="blue"
        msgRole.style.color ="white";
    }
}