// Soru 2
/*
Kullanıcıdan alınan değere kadar olan sayılar dizisinin fibonacci şeklinde yazdırın
fibonancci örnek 0 1 1 2 3 5 8 13 21 ...
iki sayının toplamı bir sonraki sayıyı oluşturur.
*/


let alinanDeger = parseInt(prompt("Sayi giriniz:"));

let n1 = 0, n2 = 1, nextTerm = 0;

for (let i = 0; i < alinanDeger; i++){

    if(i ===0)
        console.log(0);
    else{
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    
}