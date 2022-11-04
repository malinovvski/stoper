
function start(){
     interval = setInterval(() => {
        time += 100;
        let minutes = Math.floor((time / (60 * 1000)) % 60);
        let seconds = Math.floor((time / 1000) % 60);
        let miliseconds = time % 1000 / 10;
        
        stoperElement.innerHTML=`${minutes}:${seconds}:${miliseconds}`;
         
        
}, 1000);
    

};

function pause(){
    clearInterval(interval);     
};


function stop(){
    time = 0;
    stoperElement.innerHTML = time;
    clearInterval(interval);
};

let time = 0;
let seconds = 0;
let minutes = 0;
let miliseconds = 0;
let interval = 0;
let stoperElement = document.querySelector("#meter");
stoperElement.innerHTML = time;




