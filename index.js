let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let title = document.getElementsByTagName("h1")[0];

let dice1 = document.getElementsByClassName("img1")[0];
let dice2 = document.getElementsByClassName("img2")[0];

function rollDice() {
    dice1.setAttribute("src", `./images/dice${randomNumber1}.png`);
    dice2.setAttribute("src", `./images/dice${randomNumber2}.png`);

    if (randomNumber1 > randomNumber2) {
        title.innerHTML = "Player 1 Wins!";
    } else if ( randomNumber1 < randomNumber2) {
        title.innerHTML = "Player 2 Wins!";
    } else {
        title.innerHTML = "Draw!";
    }

    return;
}


