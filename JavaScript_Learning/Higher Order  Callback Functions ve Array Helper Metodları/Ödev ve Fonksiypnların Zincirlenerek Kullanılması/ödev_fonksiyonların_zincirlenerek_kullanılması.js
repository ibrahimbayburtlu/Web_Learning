const sayilar = [1,2,3,4,5,6,7,8,9];

// map,filter, reduce, some, every, find

// MAP 
/*
->map() yöntemi, her dizi öğesi için bir işlev çağırmanın sonuçlarıyla yeni bir dizi oluşturur.
->map() yöntemi, bir dizideki her öğe için sağlanan işlevi sırayla bir kez çağırır.
->map() boş öğeler için işlevi yürütmez.
->map() orijinal diziyi değiştirmez.
*/

// Global Scope / Local Scope Var ile let farkı 
// Map belli bir fonksiyon sayesinde  yeni arr oluşturur.(fonksiyon kuralları ile)
/*
let sayiDizisi = [64,36,100,25,256];
var kareKok = [];
sayiDizisi.map(function (value,index){
    kareKok[index] = Math.sqrt(value);
});
console.log("Sayı Dizisi Eski:" + sayiDizisi);
console.log("Sayı Dizisi Yeni:" + kareKok);
*/

// FİLTER 
/*
filter() metodu, parametre olarak verilen dizi içerisinde bulunan
eleman ile işlem yapar ve true dönen tüm değerleri yeni dizi 
oluşturarak geri döndürür. 
Bu sayede çeşitli filtrelemeler yapmanıza olanak sağlar. 
Yaptığı iş oldukça gerekli olan bir iş, kullanımda da bir o kadar basit. 
Bu arada, filter() metodu boolean değer döndürür.
*/
/*
let dizi = [
    {meyve: "elma", mevsim: "yaz"},
    {meyve: "armut", mevsim: "yaz"},
    {meyve: "mandalina", mevsim: "kış"},
    {meyve: "portakal", mevsim: "kış"},
    {meyve: "çilek", mevsim: "yaz"},
    {meyve: "erik", mevsim: "yaz"},
    {meyve: "üzüm", mevsim: "kış"}
];

const yazMeyveleri = dizi.filter(dizi => dizi.mevsim == "yaz");
console.log(yazMeyveleri);
*/

// REDUCE
/*
Reduce fonksiyonu, döngüye sokabileceğiniz herhangi bir veri tipi içinde,
veri tipinin içindeki tüm elemanları azaltarak dolaşan 
ve karşılaştırma yapmaya imkan tanıyan bir yapıdır.
*/
/*
accumulator:Dönüş değeri

currentValue:İşlemde olan mevcut öğe

arr:İşlemden geçen elemanın ait olduğu dizi

initialValue:Başlangıç değeri (sayı, dizi, obje vb. olabilir)

Yapısı (Syntax)
array.reduce(function(accumulator, currentValue, index, arr), initialValue)

let sum = [0,1,2,3];

let total = sum.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
},0);

console.log(total);
*/


// sayilar dizisindeki tek elemanları bulup başka bir diziye aktarın(filter)

const tekEleman = sayilar.filter(function(index){
    if(index % 2 == 1)
        return true;
});
console.log(tekEleman);

// bu yeni dizinin her bir elemanının karesini alıp başkabir diziye aktarın(map)

var KareAlinan = [];

sayilar.map(function(value,index){
    KareAlinan[index] = (value)*(value);
});

console.log("Sayi dizinisin Eski Hali: " +sayilar);
console.log("Sayi dizisine map uygulanınca hali: "+KareAlinan);

// bu dizideki 10'dan büyük olan elemanların toplamını ekrana yazdırın (reduce)

let ondanBuyuk = sayilar.reduce(function(accumulator,currentValue){

    if(currentValue > 10)
        return accumulator + currentValue;
},0);

console.log(ondanBuyuk);

// sayilar dizisinde ki parametre olarak alan tek bir fonksiyon olmalı ve bu fonksiyon geriye sonucu döndürmelidir.

// for ve while döngülerini kullanmak yasaktır :) 