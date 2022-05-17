/* Soru 3: Öğrencileri tutan bir dizi oluşturun 
her bir ögrenci nesnesinde ad, soyad ve id değerleri almalı
id numarası çift olan öğrencilerin adı ve soyadını birleştirilmiş halde tuatn diziyi
A'dan Z'ye sıralı şekilde ekrana yazdırın.
Bunları yaparken map filter sort metodları kullanın 
işlem bittikten sonra kodlaru arrow function ve zincirleme dönüştürün
*/

let student = [
    {Ad:"ibrahim",soyAd:"bayburtlu",id:2322},
    {Ad:"Furkan",soyAd:"Bingöl" ,id:1453},
    {Ad:"Başak",soyAd:"Altın" ,id:1881},
    {Ad:"Emre",soyAd:"Yılmaz" ,id:1938},
    {Ad:"Berk",soyAd:"Keskin" ,id:2023}
];

const sonucDizi = student.filter(ogrenci => ogrenci.id % 2 === 0)
    .map(ogrenci => ogrenci.Ad + " " + ogrenci.soyAd)
    .sort();
    console.log(sonucDizi);
    
const evenNumber = student.filter(function(ogrenci){
    return ogrenci.id % 2 === 0;
});

const isimler = evenNumber.map(function(ogrenci){
    return ogrenci.Ad + " " + ogrenci.soyAd;
});
console.log(isimler);

const isimlerSort = isimler.sort();

console.log(isimlerSort);

