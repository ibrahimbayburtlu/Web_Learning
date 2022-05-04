/* Soru 11: Sıcak soğuk oyunu yapalım. Sistem 100e kadar bir sayı üretsin.
Kullanıcı bu sayıyı tahmin etmeye çalışsın.
Kullanıcının girdiği değere göre kullanıcıyı arttır azalt diyerek uyaralım.
Kullanıcı sayıyı bulana kadar tahmin istemeye devam edelim 
ve sayı bulduğunda kaç denemeden sonra bulduğunu belirtelim.*/


let tahmin = parseInt(prompt("Sayi tahmin ediniz:"));
let number =Math.floor(Math.random()*101) // 0 ile 100 arasında sayı üretsin.
let i = 1;

while(tahmin != number){

    if(tahmin > number)
        tahmin = parseInt(prompt("Sayi tahmin ediniz(azalt):"));
    else
        tahmin = parseInt(prompt("Sayi tahmin edeniz(arttır)"));

    i++;
}
console.log(`${i}.tahminde sonucu buldun tebrikler`);
