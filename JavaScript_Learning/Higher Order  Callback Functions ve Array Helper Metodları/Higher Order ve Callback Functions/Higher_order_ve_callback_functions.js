let myDizi = [1,2,3];

const diziKopyalaveIkiIleCarp = function (dizi){

    let geciciDizi = [];
    for(let i = 0; i < dizi.length; i++){
        geciciDizi[i] = dizi[i] *2 ;
    }
    console.log(geciciDizi);
}
const diziKopyalaveIkiIleBol = function (dizi){

    let geciciDizi = [];
    for(let i = 0; i < dizi.length; i++){
        geciciDizi[i] = dizi[i]  / 2 ;
    }
    console.log(geciciDizi);
}
const diziKopyalaveIkiIleEkle = function (dizi){

    let geciciDizi = [];
    for(let i = 0; i < dizi.length; i++){
        geciciDizi[i] = dizi[i]  + 3  ;
    }
    console.log(geciciDizi);
}
console.log(myDizi);
diziKopyalaveIkiIleCarp(myDizi);
diziKopyalaveIkiIleBol(myDizi);
diziKopyalaveIkiIleEkle(myDizi);