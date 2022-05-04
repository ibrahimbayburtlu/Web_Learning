/* Kullanıcıdan aldığınız iki integer değerin en büyük 
ortak bölenleri bulan uygulamayı yazınız.
Örneğin 14 ve 35 sayıları için ebob = 7 olmalıdır.*/



let number1 = parseInt(prompt("1.Sayi giriniz:"));

let number2 = parseInt(prompt("2.Sayi giriniz:"));

let ebob = 1;

for(let i = 0; i <= number1; i++){
    
    if(number2 % i == 0){
        ebob = i;
    }
}
console.log(`Ebob:${ebob}`); 