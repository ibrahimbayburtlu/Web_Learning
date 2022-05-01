/* Math.random() ile rastgele sayi üretebilirsiniz. Bu fonksiyon 0 dahil -1 hariç
bir değer üretir mesela 0.56 gibi. Sonrasında bu ifadenin sonucunun istediğimiz 
aralığın üst sınırıyla çarparsanız verilen aralıkta değer üretmiş olursunuz.

Mesela 0 ile 10 arasında bir sayı için (Math.random() * 10) + 1 size 1 ile 10 
arasında ki 10 da dahil sayı üretmiş olur.

Üretilen bu sayı ondalıklı olabilir bunu tam sayıya dönüştürmek için Math.floor()
kullanabilirsiniz.

Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli.
Kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz.

Eğer kullanıcı sayıyı tam olarak doğru bilirse 10000 TL;
Eğer kullanıcı sayının basamaklarını bilirse yani 65 yerine 56 yazmıssa 5000 TL
Eğer kullanıcı şanslı numaranın sadece bir basamağını bilirse 1000 TL kazanır.

*/

let uretilenSayi = (Math.random() * 90)  + 10;
console.log("Üretilen ondalıklı sayı",uretilenSayi);
uretilenSayi = Math.floor(uretilenSayi);
// Kullanıcının girdiği sayı parseInt sayesinde tam sayı haline getirilir.
let kullanininGirdigiSayi = parseInt(prompt("iki basamakli bir sayi giriniz:","10"));
console.log(`Sistemin ürettiği sayi ${uretilenSayi} kullanıcının girdigi sayi ${kullanininGirdigiSayi}`);

let uretilenSayiBirlerBasamagı = uretilenSayi % 10;
let uretilenSayiOnlarBasamagı  = Math.floor(uretilenSayi / 10);

console.log(`üretilen sayının birler basamağı: ${uretilenSayiBirlerBasamagı} üretilen sayının onlar basamağı: ${uretilenSayiOnlarBasamagı}`);


let kullanıcıSayiBirlerBasamagı = kullanininGirdigiSayi % 10;
let kullanıcıSayiOnlarBasamagı  = Math.floor(kullanininGirdigiSayi / 10);

console.log(`üretilen sayının birler basamağı: ${kullanıcıSayiBirlerBasamagı} üretilen sayının onlar basamağı: ${kullanıcıSayiOnlarBasamagı}`);


if(uretilenSayi === kullanininGirdigiSayi){
    console.log("Tebrikler 10 bin TL kazandınız.",kullanininGirdigiSayi,"üretilen sayı",uretilenSayi);
}else if((uretilenSayiBirlerBasamagı === kullanıcıSayiOnlarBasamagı )&&(uretilenSayiOnlarBasamagı === kullanıcıSayiBirlerBasamagı)){

    console.log("Tebrikler 5000 TL kazandınız Tahmininiz:"+ kullanininGirdigiSayi + "üretilne" + uretilenSayi);
}else if((uretilenSayiBirlerBasamagı === kullanıcıSayiBirlerBasamagı) || (uretilenSayiOnlarBasamagı === kullanıcıSayiOnlarBasamagı) || ( kullanıcıSayiBirlerBasamagı === uretilenSayiOnlarBasamagı) || (kullanıcıSayiOnlarBasamagı === uretilenSayiBirlerBasamagı)){
    console.log("1000 TL kazandınız");
}
else{
    console.log("Para kazanamadınız");

}