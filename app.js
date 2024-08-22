let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg")
let choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

// get comp choice

const getCompchoice = () => {
  const arr = ["rock", "paper", "scissors"];
  const rndmidx = Math.floor(Math.random() * 3);
  return arr[rndmidx];
};
// play game logic
const drawMatch = () => {
  msg.innerText = "Its a Draw. Play Again";
  msg.style.backgroundColor = "#42273B";
 
};
const showWinner = (userwin,userchoice,compchoice)=>{

    if(userwin)
    {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Won. Your ${userchoice} beats ${compchoice}.`;
        msg.style.backgroundColor = "green";
       
    }
    else
    {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lose. ${compchoice} beats your ${userchoice}.`;
        msg.style.backgroundColor = "red";
  
    }
};
const playGame = (userchoice) => {
  const compchoice = getCompchoice();
//   console.log(compchoice);
//   console.log(userchoice);
  if (compchoice === userchoice) {
    // draw match
    drawMatch();
  }
  else{
    let userwin = true;
    if(userchoice === "rock")
    { //compchoice- scissors/paper
        userwin = compchoice === "paper" ? false:true;
    }
    else if(userchoice === "paper")
    {//rock scissors
        userwin = compchoice === "scissors" ? false:true;
    }
    else{
        userwin = compchoice === "rock" ? false:true;
    }
    showWinner(userwin,userchoice,compchoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
