/*Kullanıcıdan sürekli olarak sayı alan ve de kullanıcı 0'a 
bastığında girdiği sayıların çarpımını sonuç olarak gösteren 
programı yazınız. */


let number = parseInt(prompt("Sayi giriniz:"));
let carpım = 1;


while(number != 0){

    carpım = carpım * number;
    number = parseInt(prompt("Sayi giriniz:"));
}
console.log(`Tüm sayıların çarpımı: ${carpım}`);