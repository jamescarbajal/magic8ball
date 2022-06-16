let img = document.querySelector('img');
img.width = 400;
img.src = '../IMG/magic8ball_start.png';

function shake(){
    const img = document.querySelector('img');
    img.src = '../IMG/magic8ball_extra.png';
    img.width = 400;
    const rando = Math.floor(Math.random() * 20);
    console.log(rando);
    img.src = '../IMG/magic8ball_' + (rando + 1) + '.png';
}

