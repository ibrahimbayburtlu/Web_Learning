// Tek Element Seçiçiler

console.log(document.getElementById("baslik"));

console.log(document.getElementById("baslik").className);

const baslik = document.getElementById("baslik");

// stil değiştirme

baslik.style.backgroundColor = "red";
baslik.style.color = "white";
baslik.style.padding = "2rem";

// içerik
baslik.textContent = "Bu yeni başlık";

const test = baslik.textContent;

console.log(test);
/*
baslik.innerText = '<img src="https://source.unsplash.com/100x100" alt ="">';
baslik.innerText = '<img src="https://source.unsplash.com/100x100" alt ="">';
*/
console.log(document.querySelector('h2'));
console.log(document.querySelector("#liste"));
console.log(document.querySelector(".liste-item"));
console.log(document.querySelector("ul li"));
console.log(document.querySelector(".link.link-google"));

const myListe = document.querySelector("li");
myListe.style.color = "blue";

document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(2)").style.color = "orange";
document.querySelector("li:nth-child(3)").style.color = "purple";
document.querySelector("li:nth-child(odd)").style.color = "teal";
document.querySelector("li:nth-child(even)").style.color = "red";