let person = {
    ad:"Emre",
    yas:32,
    evliMi : false,
};

console.log(person.ad);
console.log(typeof(person));
// Kontrol yapmaya yarar mesela object ise true return .
console.log(person instanceof Object);

let renkler = ["kırmızı"];
console.log(renkler[0]);
console.log(typeof(renkler));

// Hem array hem de object olarak kabul edilir. 
console.log(renkler instanceof Array);
console.log(renkler instanceof Object); 


const fonksiyon = function () {
    console.log("merhaba dünya");
}
fonksiyon();

console.log(typeof fonksiyon);

// Fonksiyonlar da object olur.
console.log(fonksiyon instanceof Object);

// fonksiyon.text = "deneme";
console.log(fonksiyon.test);

let sayi = 5;

const fonk = function(sayi){
    sayi = sayi*2;
    return sayi;
}

console.log(fonk(sayi));

console.log(sayi);
let myDizi = [1,2,3];
const diziElemanlariniIkiyleCarp = function(dizi){
    let geciciDizi = [];
    for(let i = 0; i < dizi.length; i++){
        geciciDizi[i] = dizi[i] *2 ;
    }
    return geciciDizi;
}
console.log("kopya dizi " + diziElemanlariniIkiyleCarp(myDizi));

console.log("Kaynak Ana dizi:" + myDizi);
