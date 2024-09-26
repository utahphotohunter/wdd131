
// selectors

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



// listening events

button.addEventListener("click", function() { 
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        // add the input value into the list 
        li.textContent = input.value;
        deleteButton.textContent = "X";
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener("click", function() {
            // delete list item from lit
            list.removeChild(li);
            input.focus();
        });
    }else {
        input.focus()};
});


