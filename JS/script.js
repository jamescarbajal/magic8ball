let img = document.createElement('img');
document.getElementById("answers").appendChild(img);

img.src = './IMG/magic8ball_start.png';

function shake(){
    const img = document.querySelector('img');
    img.src = './IMG/magic8ball_extra.png';
    const rando = Math.floor(Math.random() * 20);
    img.src = './IMG/magic8ball_extra.png';
    img.src = './IMG/magic8ball_' + (rando + 1) + '.png';
}

const form = document.querySelector("form");
let currentQuestion = document.getElementById('question');
let prevQuestion = localStorage.getItem('prevQuestion') || 0;
let displayBox = document.getElementById('displayBox');

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (currentQuestion.value == "") {
        displayBox.innerHTML = "You didn't even ask a question!";
    }
    else if (currentQuestion.value === localStorage.getItem('prevQuestion')) {
        displayBox.innerHTML = "You already asked that question, you fool!";
        currentQuestion.innerHTML = "";
    } 
    else {
    shake();
    displayBox.innerHTML = currentQuestion.value;
    localStorage.setItem('prevQuestion', currentQuestion.value);
    }
});

form.addEventListener("reset", function(event){
    event.preventDefault();
    location.reload(true);
    localStorage.clear();
});