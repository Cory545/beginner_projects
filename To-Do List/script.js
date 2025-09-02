  //Variables + grabbing
    const addButton = document.getElementById("addButton");
    let textArea = document.getElementById("textArea");
    let newValue;
    let list = document.getElementById("list");
    let listItems = [];

    //Add function
        function add() {
            //Putting text into a variable
            const newValue = textArea.value;
            //Checking if the text area is empty, by trimming to ""
            if (newValue.trim() === "") return;
            //Putting the new text into the listItems array and emptying the text area
            listItems.push(newValue);
            textArea.value = "";
            //Adding the new value from array into the list
            let html = "";
            for (let i = 0; i < listItems.length; i++) {
                html += `<li>${listItems[i]}</li>`;
            }
            list.innerHTML = html;
        };

        