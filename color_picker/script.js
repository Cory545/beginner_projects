const background = document.getElementById("background");
document.getElementById("changeColourButton").addEventListener("click", log);

let colours = ["gray", "red", "blue", "green", "yellow"];
let index = 0;
function log(){
 document.getElementById("background").style.backgroundColor = colours[index];
 index++;

 if(index === colours.length){
    index=0;
 };
};