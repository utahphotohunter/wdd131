
// selectors

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("li");

// new elements

const li = document.createElement("li");
const deleteButton = document.createElement("button");

// modifiers

li.textContent = input.value;
button.textContent = "X";
li.append(deleteButton);
list.append(li);