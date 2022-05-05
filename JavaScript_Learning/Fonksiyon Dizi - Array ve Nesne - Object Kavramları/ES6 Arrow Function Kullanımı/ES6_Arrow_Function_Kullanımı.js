function selamVer(){
    console.log("Merhaba");
}
selamVer();

const selamVerDegisken = function(){
    console.log("Merhaba SelamVerDeğişken");
}

selamVerDegisken();

// herhangi bir parametre almayan fonksiyon 
const fatArrow = _ => {
    console.log("Merhaba fatarrow");
}
fatArrow();

// klasik yöntem

function karesiniAl(sayi) {
    return sayi * sayi; 
}
const karesiniAlDegisken = function(sayi){
    return sayi *sayi;
}
console.log(karesiniAl(5));
console.log(karesiniAlDegisken(7));

// fatArrowParametreli kullanımı
const fatArrowParametreli = (sayi) => {
    return sayi*sayi;
}
console.log(fatArrowParametreli(8));

// Tek bir parametre varsa parantez kullanma gerek yoktur.
// tek ifade varsa süslü parantez gerek olmaz. (return kullanılmaz.)
const fatArrowParametreliKısa = sayi => sayi*sayi;
console.log(fatArrowParametreliKısa(9));

const sayilariTopla = (s1,s2) => s1 + s2; 
console.log(sayilariTopla(5,10));

const sayilariTopla2 = (s1,s2) => {
    return s1 + s2;
}
const sayilariTopla3 = function (s1,s2) {
    return s1 + s2 ;
}