const toggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.getElementById("html");
const oldBtn = document.querySelector("#old");
const oldBtnMobile = document.getElementById("old-mobile");
const newBtn = document.querySelector("#new");
const newBtnMobile = document.getElementById("new-mobile");
const largeBtn = document.querySelector("#large");
const largeBtnMobile = document.getElementById("large-mobile");
const smallBtn = document.querySelector("#small");
const smallBtnMobile = document.getElementById("small-mobile");
const homeBtn = document.querySelector("#home");
const homeBtnMobile = document.getElementById("home-mobile");

toggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
  },
  {
    templeName: "Portland Oregon",
    location: "Portland, Oregon",
    dedicated: "1989, August, 19",
    area: 80500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/400x250/portland-temple-lds-1079112-wallpaper.jpg"
  },
  {
    templeName: "London England",
    location: "London, England",
    dedicated: "1958, September, 7",
    area: 42775,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-784251-wallpaper.jpg"
  }
];




function createTempleCard(list) {
  list.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="info">Location: </span> ${temple.location}`;
    dedication.innerHTML = `<span class="info">Dedication: </span> ${temple.dedicated}`;
    area.innerHTML = `<span class="info">Area: </span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

  document.querySelector(".temples").appendChild(card);
});
}

createTempleCard(temples);


homeBtn.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples);
});

homeBtnMobile.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples);
});

oldBtn.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] < 1900));
});

oldBtnMobile.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] < 1900));
});

newBtn.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] > 2000));
});

newBtnMobile.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] > 2000));
});

largeBtn.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area > 90000))
});

largeBtnMobile.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area > 90000))
});

smallBtn.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area < 10000))
});

smallBtnMobile.addEventListener("click", () => {
  document.querySelector(".temples").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area < 10000))
});






const footer = document.querySelector("#lastModified");
const span = document.querySelector("#currentYear");
let date = document.lastModified;
const currentDate = new Date(date);
footer.textContent = "Last Modified: " + currentDate;
let currentYear = currentDate.getFullYear();
span.textContent = currentYear;






