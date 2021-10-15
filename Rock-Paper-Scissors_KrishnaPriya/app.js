let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score")
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcompchoice() {
    const choices = ['r', 'p', 's'];
    const random_number = (Math.floor(Math.random() * 3));
    return choices[random_number];
}
console.log(getcompchoice());

function convert(letter) {
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Scissors";
}

function wins(userchoice, compchoice) {
    const suser = "user".fontsize(3).sub();
    const scomp = "comp".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_p.innerHTML = convert(userchoice) + suser + " beats " + convert(compchoice) + scomp + " . You win!!";
    userchoice_div.classList.add('green-glow');
    setTimeout(function() {userchoice_div.classList.remove('green-glow')}, 700);
}

function lose(userchoice, compchoice) {
    const suser = "user".fontsize(3).sub();
    const scomp = "comp".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    compscore++;
    compscore_span.innerHTML = compscore;
    userscore_span.innerHTML = userscore;
    result_p.innerHTML = convert(userchoice) + suser + " loses to " + convert(compchoice) + scomp + " . You lose!!";
    userchoice_div.classList.add('red-glow');
    setTimeout(function() {userchoice_div.classList.remove('red-glow')}, 700);
}

function draw(userchoice, compchoice) {
    const suser = "user".fontsize(3).sub();
    const scomp = "comp".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    compscore_span.innerHTML = compscore;
    userscore_span.innerHTML = userscore;
    result_p.innerHTML = convert(userchoice) + suser + " equals " + convert(compchoice) + scomp + " . It's a Draw!!";
    userchoice_div.classList.add('grey-glow');
    setTimeout(function() {userchoice_div.classList.remove('grey-glow')}, 700);
}

function game(userchoice) {
    const compchoice = getcompchoice();
    switch (userchoice + compchoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userchoice, compchoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userchoice, compchoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userchoice, compchoice);
            break;
    }
}

function main() { 
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();