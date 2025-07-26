let d = "Digital Clock";
let hours;
let minutes;
let seconds;

let hoursDisplay = document.getElementById("hoursDisplay");
let minutesDisplay = document.getElementById("minutesDisplay");
let secondsDisplay = document.getElementById("secondsDisplay");


console.log(hours, minutes, seconds);

let intervalID = setInterval(changeTime, 1000);


function changeTime(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    hoursDisplay.innerText = hours;
    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds;
};