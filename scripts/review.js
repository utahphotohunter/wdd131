// count of successful page loads
let count = localStorage.getItem("count");
let num = parseInt(count);
num += 1;
let newCount = num.toString();
localStorage.setItem("count", newCount);

// footer inserts
const footer = document.querySelector("#lastModified");
const span = document.querySelector("#currentYear");
let date = document.lastModified;
const currentDate = new Date(date);
footer.textContent = "Last Modified: " + currentDate;
let currentYear = currentDate.getFullYear();
span.textContent = currentYear;