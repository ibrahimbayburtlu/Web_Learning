// Verileri bir arada tutan yapılara array dizi denir.

let arabaMarka1 = "Mercedes";
let arabaMarka2 = "Audi";
let arabaMarka3 = "BMW";


let arabaMarkalari = ["Mercedes","Audi","BMW"];

console.log(arabaMarkalari);


arabaMarkalari[3] = "Honda";
arabaMarkalari[4] = "Citroen";
arabaMarkalari[8] = "Suzuuki";
console.log("araba dizisi:"+arabaMarkalari.toString());
console.log(arabaMarkalari[0]);
// Dizinin boyutunu verir. 
// En büyük index , dizi eleman sayısının 1 eksiğidir. 
console.log(arabaMarkalari.length); 

/*
for(let i = 0; i < arabaMarkalari.length; i++)
    console.log(arabaMarkalari[i]);

*/
console.log("##########################");

// Dizi elemani içine girer oradan seçip yazar. Sırayıla forof ile yapabilirsin güzel mantık .
for (let oankiDiziElemani of arabaMarkalari){
    console.log(oankiDiziElemani);
}

let yeniDizi = [1,"emre",true];
for (const oankiDiziElemani of yeniDizi) {
    console.log(oankiDiziElemani);
}

