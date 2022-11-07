
function start() {
    interval = setInterval(() => {
        time += 1;
        minutes = Math.floor((time / (6000)) % 60);
        seconds = Math.floor((time / 100) % 60);
        miliseconds = time % 100;
        stoperElement.innerHTML = `${minutes}:${seconds}:${miliseconds}`;

    }, 10);


};

function pause() {
    clearInterval(interval);
};


function stop() {
    time = 0;
    seconds = 0;
    minutes = 0;
    miliseconds = 0;
    clearInterval(interval);
    stoperElement.innerHTML = `${minutes}:${seconds}:${miliseconds}`;
};

let time = 0;
let seconds = 0;
let minutes = 0;
let miliseconds = 0;
let interval = 0;
let stoperElement = document.querySelector("#meter");
stoperElement.innerHTML = `${minutes}:${seconds}:${miliseconds}`;




