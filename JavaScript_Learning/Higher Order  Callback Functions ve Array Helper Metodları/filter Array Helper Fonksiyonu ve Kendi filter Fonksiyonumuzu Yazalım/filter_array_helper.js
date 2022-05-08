const bitkiler = [
    {ad:'üzüm',tur:'meyve'},
    {ad:'cilek',tur:'meyve'},
    {ad:'muz',tur:'meyve'},
    {ad:'ıspanak',tur:'sebze'},
    {ad:'kereviz',tur:'sebze'},
];


function kendiFilterYapim(dizi,filtreSartlari){
    const geciciDizi = [];
    for(let i = 0; i < dizi.length; i++){
        const sonuc = filtreSartlari(dizi[i],'meyve');
        if(sonuc){
            geciciDizi.push(dizi[i]);
        }
    }
    return geciciDizi;
}
function filtre(bitki,sart){
    return bitki.tur === sart;
}
const meyveler = kendiFilterYapim(bitkiler,filtre);

console.log(meyveler);

/*
const meyveler = bitkiler.filter(function(bitki){
    return bitki.tur === "meyve";
});

const   sebzeler = bitkiler.filter(function(bitki){
    return bitki.tur === "sebze";
});

console.log(meyveler);
console.log(sebzeler);
*/
/*
function meyveleriBul(bitkiler){
    const geciciDizi =[];
    for(let i = 0; i < bitkiler.length; i++){
        if(bitkiler[i].tur === "meyve")
            return geciciDizi.push(bitkiler[i]);
    }
    return geciciDizi;
}
function sebzeleriBul(bitkiler){
    const geciciDizi =[];
    for(let i = 0; i < bitkiler.length; i++){
        if(bitkiler[i].tur === "sebze")
            return geciciDizi.push(bitkiler[i]);
    }
    return geciciDizi;
}

console.log(meyveleriBul());
console.log(sebzeleriBul());
*/