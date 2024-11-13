let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorePara= document.querySelector("#user-score");
const compscorePara= document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];

};

const drawGame=()=>{
    //console.log("The Game was Draw.")
    msg.innerText="game was Draw. Play again";
    msg.style.backgroundColor="#081b31";
    };

const showWinner=(userWin,choicedId,compChoice)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
        //console.log("You Win!");
        msg.innerText=`You Win! Your ${choicedId} beats  ${compChoice}`;
        msg.style.backgroundColor="green";
 }else{
    compScore++;
    compscorePara.innerText=compScore;
    //console.log("You loose");
    msg.innerText=`You Lost! ${compChoice} beats your  ${choicedId}`;
    msg.style.backgroundColor="red";
 }
};

const playGame = (choicedId) => {
    const compChoice = genCompChoice();

    if (choicedId === compChoice) {
        drawGame();
    } else {
        const winningCombos = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
        const userWin = winningCombos[choicedId] === compChoice;
        showWinner(userWin, choicedId, compChoice); // Pass choicedId and compChoice
    }
};


choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        
        const choicedId= choice.getAttribute("id");
        playGame(choicedId);

    });
});


