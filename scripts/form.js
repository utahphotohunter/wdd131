// footer inserts

const footer = document.querySelector("#lastModified");
const span = document.querySelector("#currentYear");
let date = document.lastModified;
const currentDate = new Date(date);
footer.textContent = "Last Modified: " + currentDate;
let currentYear = currentDate.getFullYear();
span.textContent = currentYear;



// product drop down menu 

// list of products
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// get id of drop down menu
let selector = document.getElementById("product");

// add products to drop down menu
products.forEach(product => {
    let newOption = document.createElement("option");
    newOption.value = product.name;
    selector.append(newOption)
    newOption.textContent = product.name;
});



