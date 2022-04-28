let myAge = 31;
console.log(myAge);
// Hata vermek istersek 
console.error('Yalnış işlem');
// Uyarma işlemi yapmak istersek
console.warn('Keşke şifre daha uzun olsaydı.');
// Tüm yazılan kodlar silmek için Ekran içinde 
console.clear();

// Tablo görünümü yapmak için
console.table({ad:"Emre", yas:31});

// time (ve) timeEnd 2 kod arasında kaç sn geçti onu görmemizi sağlar.

console.time("id");

console.log("aaaaaa");
console.log("aaaaaa");
// id:015
console.timeEnd("id");

// Size mesaj verir.
let sayi1 = 50;

/*
alert(sayi1);
*/
// Kullanıcıdan bilgi almak için ekrandan alır. 
let girilenSayi = prompt("Bir sayi giriniz:");

console.log(girilenSayi);