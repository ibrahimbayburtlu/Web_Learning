// Aslında 2 tip veri Türü vardır.
// Primitve ve Referans Veri Türleri

// Primitive tipler: Number, String, Boolean, Undefined, Null, Symbol
// Referans Tipler: Object


let sayi = 50 ;
console.log(sayi);
// typeof sayesinde veri tipini öğreniriz. => number
console.log(typeof(sayi));

let ondalikSayi = 25.456;
console.log(ondalikSayi);
// typeof sayesinde veri tipini öğreniriz. => number 
console.log(typeof(ondalikSayi));

let negatifSayi = -25;
console.log(negatifSayi);
// typeof sayesinde veri tipini öğreniriz. => number
console.log(typeof negatifSayi);

let isim = "Emre";
console.log(isim);
// typeof sayesinde veri tipini öğreniriz. => string
console.log(typeof(isim));

let soyİsim = 'Baba';
console.log(soyİsim);
console.log(typeof soyİsim);

// Tek tırnak çift tırnak yazma kuralları ( önemli bir fark yok AMA)
// let cumle = 'Emre 'nin Bilgisayarı ' ; // Hatalı olur bu nedenle "" gerekir. '
let cumle = "Emre'nin Bilgisayarı";
console.log(cumle);

// Bu hatayı engellemek için '\' => Kaçış karakteri(backSpace) kullanılabilir.
let newCumle = 'Emre \'nin Bilgisayarı ' ; // Hatalı olur bu nedenle "" gerekir.
console.log(newCumle);

// Kelimeleri birleştirmek için + kullanabiliriz.
let tamİsim = isim+soyİsim;
console.log(tamİsim);

// Kelimeler arasında boşluk oluşturmak için ' ' yapabiliriz. => 1.Yol

let tamİsim2 = isim +' '+soyİsim;
console.log(tamİsim2);

// template literak => backtick sayesinde kelimeler arasında boşluk olur. => 2.Yol
// backtick arasına alırken '' yada "" farklı bir işaret kullanılır. yapmak için AltGr ';' basmak gerekir. 
let tamİsim3 =`${isim} ${soyİsim}`;
console.log("template literal:" + tamİsim3); 

let asalSayimi = true;
console.log("Veri Türümüzün değeri:" + asalSayimi + " veri tipi:" + typeof(asalSayimi));
console.log(`Veri türümüzün değeri ${asalSayimi} veri tipi: ${typeof(asalSayimi)}`);

// undefined 
// primitive değere değer atamazsak undefined kalır. 
let renk;
console.log("Renk:" + renk);
console.log(typeof(renk));
// atama yaparsak undefined ifadesi olmaz ! 
renk = "Yeşil";
console.log("Renk:" + renk);

// null veri tipi 

let yas = null;
// Null veri tipi object olarak kabul edilir nedeni ise  C programlama da null değeri 000 değerine denk gelir. bu nedenle object döner. 
console.log("değer:" + yas + " veri tipi:" + typeof(yas));
// template literak olarak yazalım:
console.log(`değer: ${yas} veri tipi: ${typeof(yas)}`);

