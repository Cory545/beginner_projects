// Variables + grabbing
const addButton = document.getElementById("addButton");
let textArea = document.getElementById("textArea");
let list = document.getElementById("list");
list.innerHTML = "Add some items to start!";
let listItems = [];

// Add function
function add() {
    const newValue = textArea.value;
    if (newValue.trim() === "") return;

    listItems.push(newValue);
    textArea.value = "";

    // Rebuild the list
    let html = "";
    for (let i = 0; i < listItems.length; i++) {
        html += `<li>${listItems[i]} <button onclick="deleteFunction(${i})">DELETE</button></li>`;
    }
    list.innerHTML = html;
}

    // Delete function
    function deleteFunction(i) {
        listItems.splice(i, 1); // remove the clicked item

        // Rebuild the list after deletion
        let html = "";
        for (let j = 0; j < listItems.length; j++) {
            html += `<li>${listItems[j]} <button onclick="deleteFunction(${j})">DELETE</button></li>`;
        }
        list.innerHTML = html;
    }

    function wipe(){
        listItems = [];
        list.innerHTML = "Add some items!"
    };
