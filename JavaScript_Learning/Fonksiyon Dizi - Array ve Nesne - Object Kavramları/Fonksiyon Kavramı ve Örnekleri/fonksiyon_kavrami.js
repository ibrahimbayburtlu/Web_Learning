
// JavaScript tüm kodları tarar sonra genel işlemi yapar.
let toplam1 = 0;
for(let i = 0; i <= 10; i++){

    toplam1 += i;
}
let toplam2 = 0;
for (let i = 30; i <= 60; i++) {
    toplam2 +=i;
} 

belliAraliktakiSayilarıTopla(0,10);
belliAraliktakiSayilarıTopla(30,60);
belliAraliktakiSayilarıTopla(40,60);
function belliAraliktakiSayilarıTopla(baslangicSayisi,bitisSayisi){
    let toplam = 0;
    for(let i =baslangicSayisi; i <= bitisSayisi; i++){
        toplam = toplam + i;
    }
    console.log(`Toplam: ${toplam}`);
}


selamVer();
function selamVer() {
    console.log("Merhaba");
}

let sayilarinToplami = sayilariTopla(10,20);
// parametre alan fonksiyon , sayi1 ve sayi2 parametredir.
function sayilariTopla(sayi1, sayi2){
    console.log(`Sayıların Toplamı : ${sayi1} + ${sayi2} = ${sayi1+sayi2}`);
    return sayi1 + sayi2; // bu fonksiyon tetiklendiği yere şu değeri gönder;
}
console.log(sayilarinToplami);

let sayi = 10;
console.log(sayi);
console.log(typeof(sayilariTopla)); // function veri tipi 

