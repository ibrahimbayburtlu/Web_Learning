// alt = " "


// console.log(document.querySelector('h2'));
// console.log(document.querySelector('#liste'));
// console.log(document.querySelector('.liste-liste'));
// console.log(document.querySelector('ul li'));
// console.log(document.querySelector('.link.link-google'));
// console.log(document.querySelector('li'));
// console.log(document.querySelector('h2'));
// console.log(document.querySelector('#liste'));




const linkler = document.getElementsByClassName('link');
console.log(linkler[0]);
console.log(linkler[1]);

linkler[0].style.color = 'red';
linkler[1].style.color = '#ccc';
linkler[2].textContent = "INSTAGRAM LİNK";

console.log(document.getElementsByClassName('liste-item'));

console.log(document.querySelector('ul').getElementsByClassName('liste-item'));

const dizi = Array.from(linkler);
dizi.reverse();
dizi.forEach(item =>{
    console.log(item);
});

const listeElemanlarim = document.getElementsByTagName("li");
console.log(listeElemanlarim);

const sehirlerTek = document.querySelector('li:nth-child(odd)');
const sehirlerCift = document.querySelector('li:nth-child(even)');
console.log(sehirler);
sehirler.log(sehirlerTek);