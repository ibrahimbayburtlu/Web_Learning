// console.log(++sayi3);
// console.log(sayi3);

// Aritmetik atama Operatörleri
// += , -= , *= , /= , %= 
let sayi1 = 10;
let sayi2 = 4;
sayi2+= sayi1;
console.log(sayi2); // sayi2 = sayi2 + sayi1;
sayi2 -= sayi1; // sayi2 = sayi2 - sayi1;
console.log(sayi2);

console.log(sayi1 > sayi2); // Doğru ise True değeri döner
console.log(sayi1 < sayi2); 
console.log(sayi1 <=  sayi2);
// Eşit mi değil mi ona bakalım
console.log(sayi1 != sayi2);

let yas = 30;
let metinselYas = '30';

// JavaScript bu değerlere bakar bu nedenle true bakar.
console.log(yas == metinselYas);// True

// Değer ile birlikte veri tipi de bakmak istersek
console.log(yas === metinselYas);// False

console.log(yas !== metinselYas); // True 

// mantıksal operatörler ve, veya 

// && => ve
console.log((sayi1 > 5) && (sayi2 < 10));

// || => veya
console.log((sayi1 > 5) || (sayi2 < 10));

// işlem önceliği uygulanır.
let sonuc = 4 * 2 / 4 - 1 ;
console.log(sonuc);