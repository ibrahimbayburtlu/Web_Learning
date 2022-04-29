let benimYasim = 31, onunYasi = 31;

if (benimYasim < onunYasi){
    
    console.log("Ben senden küçüğüm");
}
else if(benimYasim == onunYasi){
    console.log("Yaşlarımız aynı");
}
else{
    console.log("Ben senden büyüğüm");
}

if(benimYasim < 32){
    console.log("Yaşım 32den küçük");
}

// Tek satır varsa süslü parantez ihtiyacımız yok.
let isim = "İbrahim";
if(isim == "İbrahim")
    console.log("Merhaba ibrahim");

let sayi1 = 30, sayi2 = 20;
if(sayi1 > sayi2){
    if(sayi2 >= 20){
        console.log("1.Sayi hem 20 den hem de 2.sayidan büyüktür.");
    }
    else{
        console.log("Else çalıştı.")
    }
}