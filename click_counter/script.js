let counterNumber = 0;
let button = document.getElementById("counterButton");
let counter = document.getElementById("counter");
counter.innerText = counterNumber;

button.addEventListener("click", counterFunction);
function counterFunction(){
    counterNumber++;
    counter.innerText = counterNumber;
};