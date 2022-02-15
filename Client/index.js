let Box = document.getElementById('game');

const startScroll = () => {
    setInterval(function () {
        Box.scrollBy(0, 1)
    }, 30);

}
document.body.addEventListener('click', startScroll())

// This is the GASP api coming in, also this is the intro animation
const timeLine = gsap.timeline({defaults: {ease: 'power1.out'}});


timeLine.to('.txt', {y: '0%', duration: 1, stagger: 0.25});
timeLine.to('.slider', {y: "-100%", duration: 2, delay: 0.5})
timeLine.to('.intro', {y: '100%', duration: 2}, "-=1");

// This is the countdown timer
const startTimer = 2;
let time = startTimer * 60;

const timerEl = document.getElementById('countdown');
const game = document.getElementById('game');
const Instructions = document.getElementById('directions');
const x = document.createElement('video')

const countDownInterval =setInterval(updateCountdown, 1000);

function updateCountdown() {
    const min = Math.floor(time / 60);
    let sec = time % 60;

    sec = sec < 10 ? '0' + sec : sec;

//    this sets conditions for timer so it stops on specified time interval
    if (time >= 0) {
        timerEl.innerHTML = `${min} ${sec}`;
        time--;
    } else {
        clearInterval(countDownInterval);
        timerEl.innerHTML = "Time's up ";
        game.style.display = "none";
        Instructions.style.display = "none";
        x.setAttribute('autoplay', 'autoplay');
        // x.setAttribute('controls','controls');
        x.setAttribute("src", "/Vision.mp4");
        x.setAttribute("muted","false")
        x.setAttribute("width", "100%");
        document.body.appendChild(x);

    }
}


// This is the counter for the GETTISM words  


const getty = document.querySelectorAll('.gettism')
// const change =document.getElementsByTagName('i')
const counter = document.querySelector('#counter');
const message = document.getElementById('message');
let integer = 0

for (let i = 0; i < getty.length; i++) {
    getty[i].addEventListener('mouseover', (e) => {
        integer += 1;
        counter.innerHTML = integer;
        setTimeout(()=>{
            e.target.style.display = "none";
        },100);
        if (integer === 50) {
            counter.remove();
            message.innerHTML = "YOU'VE WON";
        }

    });
}


// let points = document.querySelectorAll('1','2','3','','','','','','','','','','','','','','','','','','')





