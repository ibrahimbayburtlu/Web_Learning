/* Klavyeden girilen bir sayının faktöriyelini alan bir uygulama yazınız.*/

let number = parseInt(prompt("Faktöriyeli alınacak sayi giriniz:"));

let fak = 1;

if(number === 0){
    console.log("Faktöriyel:",fak);
}else{
    for(let i = 1; i <= number; i++){
        fak *= i;
    }
    console.log("Faktöriyel:",fak);
}
