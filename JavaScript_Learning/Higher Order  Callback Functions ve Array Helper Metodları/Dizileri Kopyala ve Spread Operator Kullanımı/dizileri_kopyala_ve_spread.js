// console.log(ogrenciler);
/* Spred Operatör, expressionların, fonksiyonlarda birden fazla parametre olarak kullanılmasına, 
arraylerin içerisinde birden fazla eleman olarak genişletilmesine, yayılmasına olanak sağlar */ 
const isimler = ['emre','ali','hasan','ayse'];

const sayilar = [1,50,2,41,84,8,35,3];

const ogrenciler = [
    {id:12, isim:'emre',yas:25},
    {id:22,isim:'hasan',yas:15},
    {id:32,isim:'fatma',yas:55},
    {id:13,isim:'nuriye',yas:19},
    {id:92,isim:'kemal',yas:45},
    {id:15,isim:'mustafa',yas:75},
    {id:44,isim:'ceren',yas:30}
];

// array kopyalamak

let kopya = [];
/*
for(let isim of isimler){
    kopya.push(isim);
}

kopya.sort();
*/


// Array oluşturur. İterabilir bir değerden.
// kopya = Array.from(isimler);

// Kopya index 0.elemana isimler index atadı.
kopya = [isimler];

// speraded operatorler
kopya = [...isimler];


console.log(kopya);
console.log(isimler);


const isim = "ibrahim bayburtlu";

let harflerDizisi = isim.split(' ');
console.log(harflerDizisi);

harflerDizisi = [...isim];
console.log(harflerDizisi);


function sayilarTopla(...parametreler){
    let toplam = 0;
    for(let s of parametreler){
        toplam += s;
    }
    console.log(toplam);
}
sayilarTopla(1,4);
sayilarTopla(1,4,5,8);
