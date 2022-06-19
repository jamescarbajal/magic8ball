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

function displayQuestion(){
    const question = document.getElementById('question').value;
    console.log(question);
    const displayBox = document.getElementById('displayBox');
    displayBox.innerHTML = question;
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    shake();
    displayQuestion();
    form.reset();
});

form.addEventListener("reset", function(event){
    event.preventDefault();
   location.reload(true); 
});