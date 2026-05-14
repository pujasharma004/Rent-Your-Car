let bookbtn=document.querySelector(".bookbtn");
bookbtn.addEventListener("click", function () {
  document.querySelector("#bookingsection").scrollIntoView({
    behavior: "smooth"
  });
});

let Reservebtn=document.querySelector(".reservebtn");
Reservebtn.addEventListener("click", function () {
  document.querySelector("#bookingsection").scrollIntoView({
    behavior: "smooth"
  });
});

let items = document.querySelectorAll(".item");
let mainImage = document.getElementById("mainImage");

let carName = document.getElementById("carName");
let model = document.getElementById("model");
let year = document.getElementById("year");
let doors = document.getElementById("doors");
let ac = document.getElementById("ac");
let transmission = document.getElementById("transmission");
let fuel = document.getElementById("fuel");
let price=document.getElementById("price");

items.forEach(function(item) {
  item.addEventListener("click", function() {
    
    mainImage.src = item.dataset.img;

    carName.innerText = item.dataset.name;
    model.innerText = item.dataset.model;
    year.innerText = item.dataset.year;
    doors.innerText = item.dataset.doors;
    ac.innerText = item.dataset.ac;
    transmission.innerText = item.dataset.transmission;
    fuel.innerText = item.dataset.fuel;
    price.innerText = item.dataset.price;

  });
});

let questions = document.querySelectorAll(".question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    let parent = q.parentElement;
    parent.classList.toggle("active");
  });
});