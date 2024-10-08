

const copyright = document.querySelector("#copyright");
const modified = document.querySelector("#last-modified");
let lastModified = document.lastModified;
const date = new Date(lastModified);
let currentYear = date.getFullYear();

copyright.textContent = currentYear;
modified.textContent = "Last Modified: " + lastModified;


const windChill = document.querySelector("#wind-chill");
const windChillP = document.getElementById("wind-chill-p");

let wind = 8;
let temp = 48;

function calculateWindChill(wind, temp) {
    let response = 35.75 + 0.6215 * temp - 35.75 * (wind ** 0.16) + 0.4275 * temp * (wind ** 0.16);
    return response;
}

if (temp <= 50 && wind > 3) {
    let windChillCalc = calculateWindChill(wind, temp);
    let roundedWindChill = windChillCalc.toFixed(0);
    windChill.textContent = roundedWindChill;
} else {
    windChillP.style.display = "none";
}
