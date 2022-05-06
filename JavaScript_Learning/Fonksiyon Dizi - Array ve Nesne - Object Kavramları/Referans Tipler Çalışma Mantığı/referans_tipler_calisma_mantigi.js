// primitive 


let yas = 32; 
let yeniYas = yas;

console.log(yas, yeniYas);

let isim = "ibrahim";
let yeniIsim = isim;

isim = "mehmet";
console.log(isim, yeniIsim);

// referans Tipli veriler 
// pointer mantığı gibi referans adresi bakıyor. 
let renkler = ["kırmızı","yeşil"];
let yeniRenkler = renkler;

// yeni adres oluşur bu sefer pointer mantığı yok olur.
/* renkler = []; */  
renkler.push("Mavi");

console.log(renkler,yeniRenkler);

let ogrenci = {
    ad: "Emre",
    yas : 32,
};

let yeniOgrenci = ogrenci;

ogrenci.yas = 31;

console.log(ogrenci,yeniOgrenci);