
// Global Scope
let isim = "Emre";

selamVer();
function selamVer(){

    // local scope 
    let yas = 30;
    console.log("Merhaba" +isim + "yas:"+yas);
}
isim = "Hasan";
let yas = 40;
console.log("Yaş:"+yas);

let favoriRengim = "Yeşil";
favoriRengiSöyle(favoriRengim);

function favoriRengiSöyle(favoriRengim) {

    favoriRengim = "Sarı";
    console.log("Favori rengim " + favoriRengim);
}