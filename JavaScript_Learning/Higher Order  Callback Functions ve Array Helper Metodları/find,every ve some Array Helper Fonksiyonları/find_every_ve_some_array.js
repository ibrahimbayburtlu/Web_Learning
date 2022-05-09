const kisiler  = [
    {id:1, ad:'ibrahim'},
    {id:11, ad:"ibrahim"},
    {id:111, ad:"ibrahim"},
    {id:11, ad:"ibrahim"},
    {id:11111, ad:"ibrahim"},
    {id:2, ad:"ibrahim"},
    {id:22, ad:"ibrahim"},
    {id:222, ad:"ibrahim"},
    {id:2222, ad:"ibrahim"},
]
const sonuc = kisiler.find(function(kisi){
    return kisi.id === 111;
});

/*
function findMethod(kisiler){

    for (let i = 0 ; i < kisiler.length; i++){
        if(kisiler[i].id === 11)
            return kisiler[i];
    }   
}
console.log(sonuc);

console.log(findMethod(kisiler));
*/

function kendiFindMethod(kisiler,aranilanDeger){

    let bulunanEleman = undefined;

    for(let i = 0; i < kisiler.length; i++){
        if(aranilanDeger(kisiler[i]))
            return kisiler[i];
    }
    return bulunanEleman;
}
const eldeEdilen = kendiFindMethod(kisiler,function(kisi){
    return kisi.id === 111;
})
console.log(eldeEdilen);
// every ve some metodları

// every de her eleman koşulu sağlarsa True değilse false döner. 
const sayilar = [1,2,3,4,15,25];

const sonucEvery = sayilar.every(function(sayi){
    return sayi < 10;
})

// Bazı koşullar işlemi sağlarsa True 
const sonucSome = sayilar.some(function (sayi){
    return sayi < 10;
});

console.log(sonucEvery);
console.log(sonucSome);