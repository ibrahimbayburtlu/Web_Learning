let sayi = 0;
while(sayi < 15){

    console.log("sayimiz:",sayi);
    sayi += 1;
}
/*
for(let j = 0; j < 15; j++){
    console.log("For döngüsü Merhaba");
}
*/
let car = 10;
do{
    console.log("Merhabalar");
    car --;
}while(car > 0);


// Break => Kırma
// Contiune => Devam 

for(let i = 0; i < 50; i++){
    console.log("Break Kullanımı");
    if(i == 12){
        break;
    }
}

for(let i = 0; i < 50; i++){
    console.log("Continue Kullanımı");
    if(i == 12){
        continue;
    }
}

// For içinde return kullanımı sadece fonksiyon içerisinde olursa olur. yoksa illegal return statement hatası alınır.
/*
for(let i = 0; i < 10;i++){
    if(i == 5){
        return i;
    }
    console.log("Return kullanımı",i);
}
*/