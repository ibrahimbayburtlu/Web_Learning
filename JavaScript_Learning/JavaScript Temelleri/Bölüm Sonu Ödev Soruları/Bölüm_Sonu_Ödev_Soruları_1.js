/*
Bir Değişken oluşturun ve bu değişkende saniye değerini tutun.
Sonra bu saniye değerinin kaç dakika ve saniyeye denk geldiğini yazdırın.
Örnek 1200 değeri için 20 dakika 0 saniye yazılmalıdır.
*/

let zaman = 1200;

let dakika = zaman / 60;

let saniye = zaman % 60; 

console.log("Girilen zaman:",zaman,"Dakika:",dakika,"Saniye:",saniye);