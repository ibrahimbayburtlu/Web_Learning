let sayilar = [1,2,3,4,5,6];



/*
Bir geri çağırma fonksiyonu, başka bir fonksiyona geçirilen bir parametre şeklindeki fonksiyondur. 
Geri çağırma fonksiyonu, ikinci fonksiyonun içinde çağrılır ya da icra edilir.
Geri çağırma fonksiyonları, asenkron olarak icra edilirler.
*/

diziyiYazdir(sayilar,function(deger,index) {
    console.log(`deger: ${deger} index:${index}`);
})


/*Kendi forEach fonksiyonumuzu yazalım.*/
function diziyiYazdir(dizi,callback){

    for(let i = 0; i < dizi.length; i++){
        callback(dizi[i],i);
    }
}

/*
sayilar.forEach(function(deger,index){
    console.log(deger,index);
})


sayilar.forEach(ikiParametreAlanFonksiyon);

function ikiParametreAlanFonksiyon(sayi,index){
    console.log(sayi,index);
}
*/
/*
console.log("#############################");
for(let i = 0 ; i < sayilar.length; i++){
    console.log(sayilar[i]);
}
console.log("#############################");
for(let item of sayilar){
    console.log(item);
}
*/