let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg"); 

const userScorePara = document.querySelector(".userScore");
const compScorePara = document.querySelector(".compScore");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame = () => {
     msg.innerText="game was draw . Play again .";
     msg.style.backgroundColor = "black";
     msg.style.color="white";
};

const showWinner =(userWin , userChoice ,  compChoice) => {
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText=`you win!--- your (${userChoice} ) beats Computer( ${compChoice})`;
        msg.style.backgroundColor = "green";
    
    }
    else{
        compScore++;
       compScorePara.innerText = compScore;
        //    msg.innerText=" You Lose ";
        msg.innerText=`you Loss!--- your (${userChoice}) beats Computer (${compChoice})`;

           msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    //generate computer choice;->moduler
    const compChoice = genCompChoice();
    console.log("computer Choice=",compChoice);

    if(compChoice === userChoice){
        //draw game
        drawGame();
    }else{
      let userWin =true;
       if((userChoice === "rock")){
        //scissors,paper;
        userWin = compChoice === "paper" ? false : true ;
       }
        
       else if((userChoice === "scissors")){
        //rock,paper;
        userWin = compChoice === "paper" ? true : false;
       }

       else{
        //scissors,rock;
        userWin = compChoice === "rock" ? true : false ;
       }
          showWinner(userWin , userChoice , compChoice );
         
    }
};



choices.forEach( (choice) => {
       choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //user Choice
        playGame(userChoice);
       });
});


