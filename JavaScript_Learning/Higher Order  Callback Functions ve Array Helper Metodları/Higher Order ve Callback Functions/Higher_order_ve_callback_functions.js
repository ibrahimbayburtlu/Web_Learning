/*
const diziyiKopyalaveIkileCarp = function(dizi){
    let geciciDizi = [];
    for(let i = 0; i < dizi.length; i++){
        geciciDizi[i] = dizi[i] * 2; 
    }
    console.log(geciciDizi);
}
const diziyiKopyalaveIkileBol = function(dizi){
    let geciciDizi = [];
    for(let i = 0; i < dizi.length; i++){
        geciciDizi[i] = dizi[i] / 2; 
    }
    console.log(geciciDizi);
}
const diziyiKopyalaveUcEkle = function(dizi){
    let geciciDizi = [];
    for(let i = 0; i < dizi.length; i++){
        geciciDizi[i] = dizi[i] + 3; 
    }
    console.log(geciciDizi);
}
*/
/*
console.log(myDizi);
diziyiKopyalaveIkileCarp(myDizi);
diziyiKopyalaveIkileBol(myDizi);
diziyiKopyalaveUcEkle(myDizi);
*/

let myDizi = [1,2,3];

const ikileCarp = function(sayi){
    return sayi * 2;
}
const ikileBol = function(sayi){
    return sayi / 2;
}
const ucEkle = function(sayi){
    return sayi + 3;
}

const diziİslemleri = function(dizi,islem){
    let geciciDizi = [];
    for(let i = 0; i < dizi.length; i++){
        // geciciDizi[i] = dizi[i] + 3;
        geciciDizi[i] = islem(dizi[i]); 
    }
    console.log(geciciDizi);
}
// higher order function : parametre olarak fonksiyon alan ve/veya
// return olarak fonksiyon döndüren fonksiyonlardır. 
// diziİslemleri higher order fonksiyonlardır.
// ikileCarp veya ikileBol callback fonksiyonlardır.
diziİslemleri(myDizi,ikileCarp);
diziİslemleri(myDizi,ikileBol);
diziİslemleri(myDizi,ucEkle);

function adimiSöyle(ad,soyAd) {
    console.log("merhaba " +ad+ " "+soyAd);
}
adimiSöyle("ibrahim","bayburtlu");
function adimiBagir(ad,soyAd,callback) {
    const mesaj  =" MERHABA " + ad.toUpperCase() + " " + soyAd.toUpperCase();
    callback(mesaj);
    console.log(mesaj);
}
adimiBagir("ibrahim","bayburtlu",function(msj){
    console.log(msj);
});