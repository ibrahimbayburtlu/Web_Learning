// Aritmetik operatörleri + - * / %

let sayi1 = 10;
let sayi2 = 2;

// Toplama işlem amacıyla kullanılır
let sonuc = sayi1 + sayi2;
console.log(sonuc);

// Çıkarma işlem amacıyla kullanılır
sonuc = sayi1 - sayi2;
console.log(sonuc);

// Çarpma işlem amacıyla kullanılır
sonuc = sayi1 * sayi2;
console.log(sonuc);

// Bölme işlemi amacıyla kullanılır
sonuc = sayi1 / sayi2;
console.log(sonuc);

// Kalan bulma amacıyla kullanılır. 
sonuc = sayi1 % sayi2 ;
console.log(sonuc);

// NaN değeri döndürür.(NaN = Not a number)
let isim = "ibrahim";
let soyİsim = "Bayburtlu";
let tamİsim = isim - soyİsim;
console.log(tamİsim);

// Sayı + Metin toplama yapar.
let yas = 30;
let metinOlarakyas = " 30";
console.log(yas + metinOlarakyas);

// Arttırma ve Azaltma Operatörleri

sayi1 = sayi1 + 1;
console.log(sayi1);
sayi1++;
console.log(sayi1); // sayi1 = sayi1 + 1 ile aynı mantık 

// önce değişken sonra azalt.
sayi1 = sayi1 -1;
console.log(sayi1);
sayi1--;
console.log(sayi1);

// önce arttır sonra atama yap.
console.log("Sayi 2:",++sayi2);

let sayi3 = 20;
console.log(sayi3++);
console.log(sayi3);

let sayi4 = 20;
console.log(++sayi4);
console.log(sayi4);