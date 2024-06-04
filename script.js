var timer = 30;
var hitrn = 0;
var score = -10;


function makeBubble() {

    var pBtm = document.querySelector(".pbtm");
    var clutter = "";

    for (var i = 1; i <= 96; i++) {
        var randomNumber = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNumber}</div>`;
    }

    pBtm.innerHTML = clutter;

}


function runTimer() {

    var timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector('.pbtm').innerHTML = `<h2>Your score is ${score}</h2>`;
        }
    }, 1000);

}


function getNewHit() {

    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;

}


function increaseScore() {

    score += 10; 
    document.querySelector("#scoreval").textContent = score;

}


var pBtm = document.querySelector('.pbtm');
pBtm.addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


getNewHit();
runTimer();
makeBubble();
increaseScore();
