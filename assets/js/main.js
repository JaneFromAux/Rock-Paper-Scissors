
let rounds5 = document.getElementById('5rounds');
let rounds10 = document.getElementById('10rounds');
let rounds15 = document.getElementById('15rounds');
let rounds20 = document.getElementById('20rounds');

let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let hide = document.getElementById('hide');

let outputUser = document.getElementById('outputUser');
let outputComputer = document.getElementById('outputComputer');
let outputInfo = document.getElementById('outputInfo');
let roundOutput = document.getElementById('roundOutput');

let gameRounds = 0;
let userPoints = 0;
let computerPoints = 0;


rock.style.border = "3px solid #ecc19c";
rock.style.boxShadow = "0 0 40px #ecc19c";
scissors.style.border = "3px solid #ecc19c";
scissors.style.boxShadow = "0 0 40px #ecc19c";
paper.style.border = "3px solid #ecc19c"
paper.style.boxShadow = "0 0 40px #ecc19c";

const klickKlackRock = () => {
    console.log('runs');
    let computerChoice = Math.random().toFixed(2);
    console.log('goes ON');
    hide.style.display = "none";
    if (rock) {
        console.log("Rock");
        if (computerChoice <= 0.33) {
            outputInfo.innerHTML = "ROCK beats Scissors. You won!";
            userPoints += 1;
            outputUser.innerHTML = userPoints;
            gameRounds += 1;
            roundOutput.innerHTML = gameRounds;
            rock.style.border = "3px solid lime"
            rock.style.boxShadow = "0 0 40px lime";
            scissors.style.border = "3px solid crimson";
            scissors.style.boxShadow = "0 0 40px crimson";
            paper.style.border = "3px solid #ecc19c"
            paper.style.boxShadow = "0 0 40px #ecc19c";
            roundsEnd();
        } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
            outputInfo.innerHTML = "ROCK and ROCK. No points to give!";
            gameRounds += 1;
            roundOutput.innerHTML = gameRounds;
            rock.style.border = "3px solid teal";
            rock.style.boxShadow = "0 0 40px teal";
            scissors.style.border = "3px solid #ecc19c";
            scissors.style.boxShadow = "0 0 40px #ecc19c";
            paper.style.border = "3px solid #ecc19c"
            paper.style.boxShadow = "0 0 40px #ecc19c";
            roundsEnd();
        } else {
            outputInfo.innerHTML = "PAPER beats Rock! You lost!";
            computerPoints += 1;
            outputComputer.innerHTML = computerPoints;
            gameRounds += 1;
            roundOutput.innerHTML = gameRounds;
            paper.style.border = "3px solid lime"
            paper.style.boxShadow = "0 0 40px lime";
            rock.style.border = "3px solid crimson";
            rock.style.boxShadow = "0 0 40px crimson";
            scissors.style.border = "3px solid #ecc19c";
            scissors.style.boxShadow = "0 0 40px #ecc19c";
            roundsEnd();
        }
    }
}
const klickKlackScissors = () => {
    console.log('runs');
    let computerChoice = Math.random().toFixed(2);
    console.log('goes ON');
    hide.style.display = "none";
    if (scissors) {
        console.log("Scissors");
        if (computerChoice > 0.33) {
            outputInfo.innerHTML = "SCISSORS beats Paper. You won!";
            userPoints += 1;
            outputUser.innerHTML = userPoints;
            gameRounds += 1;
            roundOutput.innerHTML = gameRounds;
            scissors.style.border = "3px solid lime"
            scissors.style.boxShadow = "0 0 40px lime";
            paper.style.border = "3px solid crimson";
            paper.style.boxShadow = "0 0 40px crimson";
            rock.style.border = "3px solid #ecc19c"
            rock.style.boxShadow = "0 0 40px #ecc19c";
            roundsEnd();
        } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
            outputInfo.innerHTML = "SCISSORS and SCISSORS. No points to give!";
            gameRounds += 1;
            roundOutput.innerHTML = gameRounds;
            scissors.style.border = "3px solid teal";
            scissors.style.boxShadow = "0 0 40px teal";
            rock.style.border = "3px solid #ecc19c";
            rock.style.boxShadow = "0 0 40px #ecc19c";
            paper.style.border = "3px solid #ecc19c"
            paper.style.boxShadow = "0 0 40px #ecc19c";
            roundsEnd();
        } else {
            outputInfo.innerHTML = "ROCK beats Scissors! You lost!";
            computerPoints += 1;
            outputComputer.innerHTML = computerPoints;
            gameRounds += 1;
            roundOutput.innerHTML = gameRounds;
            rock.style.border = "3px solid lime";
            rock.style.boxShadow = "0 0 40px lime";
            scissors.style.border = "3px solid crimson";
            scissors.style.boxShadow = "0 0 40px crimson";
            paper.style.border = "3px solid #ecc19c";
            paper.style.boxShadow = "0 0 40px #ecc19c";
            roundsEnd();
        }
    }
}

const klickKlackPaper = () => {
    console.log('runs');
    hide.style.display = "none";
    let computerChoice = Math.random().toFixed(2);
    console.log('goes ON');
    if (scissors) {
        console.log("paper");
        if (computerChoice > 0.33) {
            outputInfo.innerHTML = "PAPER beats Rock. You won!";
            userPoints += 1;
            outputUser.innerHTML = userPoints;
            gameRounds += 1;
            roundOutput.innerHTML = gameRounds;
            paper.style.border = "3px solid lime"
            paper.style.boxShadow = "0 0 40px lime";
            rock.style.border = "3px solid crimson";
            rock.style.boxShadow = "0 0 40px crimson";
            scissors.style.border = "3px solid #ecc19c"
            scissors.style.boxShadow = "0 0 40px #ecc19c";
            roundsEnd();
        } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
            outputInfo.innerHTML = "PAPER and PAPER. No points to give!";
            gameRounds += 1;
            roundOutput.innerHTML = gameRounds;
            paper.style.border = "3px solid teal"
            paper.style.boxShadow = "0 0 40px teal";
            scissors.style.border = "3px solid #ecc19c";
            scissors.style.boxShadow = "0 0 40px #ecc19c";
            rock.style.border = "3px solid #ecc19c"
            rock.style.boxShadow = "0 0 40px #ecc19c";
            roundsEnd();
        } else {
            outputInfo.innerHTML = "SCISSORS beats Paper! You lost!";
            computerPoints += 1;
            outputComputer.innerHTML = computerPoints;
            gameRounds += 1;
            roundOutput.innerHTML = gameRounds;
            scissors.style.border = "3px solid lime";
            scissors.style.boxShadow = "0 0 40px lime";
            paper.style.border = "3px solid crimson";
            paper.style.boxShadow = "0 0 40px crimson";
            rock.style.border = "3px solid #ecc19c";
            rock.style.boxShadow = "0 0 40px #ecc19c";
            roundsEnd();
        }
    }
}

const restart = () => {
    console.log("restart");
    gameRounds = 0;
    roundOutput.innerHTML = "";
    userPoints = 0;
    outputUser.innerHTML = userPoints;
    computerPoints = 0;
    outputComputer.innerHTML = computerPoints;
    outputInfo.innerHTML = "Start the Game"
    hide.style.display = "block";
    rock.style.border = "3px solid #ecc19c";
    rock.style.boxShadow = "0 0 40px #ecc19c";
    scissors.style.border = "3px solid #ecc19c";
    scissors.style.boxShadow = "0 0 40px #ecc19c";
    paper.style.border = "3px solid #ecc19c"
    paper.style.boxShadow = "0 0 40px #ecc19c";
}

const roundsEnd = () => {
    if (rounds5.checked) {
        if (gameRounds > 5) {
            restart();
        }
    } if (rounds10.checked) {
        if (gameRounds > 10) {
            restart();
        }
    } if (rounds15.checked) {
        if (gameRounds > 15) {
            restart();
        }
    } if (rounds20.checked) {
        if (gameRounds > 20) {
            restart();
        }
    }
}