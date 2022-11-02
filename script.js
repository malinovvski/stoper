
function start(){
     interval = setInterval(() => {
        time += 1;
        stoperElement.innerHTML= time 
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
let interval = null;
let stoperElement = document.querySelector("#meter");
stoperElement.innerHTML = time;




