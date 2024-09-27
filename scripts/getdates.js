

const footer = document.querySelector("#lastModified");
const span = document.querySelector("#currentYear")
let date = document.lastModified;
const currentDate = new Date(date);
footer.textContent = currentDate;
let currentYear = currentDate.getFullYear();
span.textContent = currentYear;
