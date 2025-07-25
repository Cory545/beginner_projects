let counterNumber = 0;
let button = document.getElementById("counterButton");
let resetButton = document.getElementById("resetButton");
let minusButton = document.getElementById("minusButton");
let addFiveButton = document.getElementById("addFiveButton");
let minusFiveButton = document.getElementById("minusFiveButton");
let counter = document.getElementById("counter");
counter.innerText = counterNumber;

button.addEventListener("click", counterFunction);
function counterFunction(){
    counterNumber++;
    counter.innerText = counterNumber;
};

resetButton.addEventListener("click", resetFunction);
function resetFunction(){
    counterNumber = 0;
    counter.innerText = counterNumber;
};

minusButton.addEventListener("click", minusFunction);
function minusFunction(){
    counterNumber--;
    counter.innerText = counterNumber;
};

addFiveButton.addEventListener("click", addFiveFunction);
function addFiveFunction(){
    counterNumber += 5;
    counter.innerText = counterNumber;
};

minusFiveButton.addEventListener("click", minusFiveFunction);
function minusFiveFunction(){
    counterNumber -= 5;
    counter.innerText = counterNumber;
};