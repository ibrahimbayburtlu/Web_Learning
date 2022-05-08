const sayilar = [1,2,3,4,5,6];

// sayilar adı değişken bellek adresini tutar .
// = denilen yapı yeni bir bellek adresi tanımlar. 
/* sayilar = [1,2,3,4,5,,6,7]; */
// sayilar.push(7);
/*
const yeniSayilar = sayilar.map(function(sayi){
    return sayi *2 ;
});

console.log(sayilar);
console.log(yeniSayilar);
console.log(sayilar);

const kitaplar = [
    {adi:"1",sayfaSayisi:30},
    {adi:"2",sayfaSayisi:40},
    {adi:"3",sayfaSayisi:50},
];

const sayfaSayilari = kitaplar.map(function(kitap){
    return kitap.sayfaSayisi; 
})
console.log(sayfaSayilari);

const kisiler = [
    {adi:"ibrahim", soyadi:"bayburtlu"},
    {adi:"Emre", soyadi:"altunbilek"},
    {adi:"ali", soyadi:"koç"},
];
const yeniIsimler = kisiler.map((kisi) => kisi.adi + " " + kisi.soyadi);
console.log(yeniIsimler);
*/
function kendiMapYapim(dizi,islem){

    const yeniDizi = [];
    for(let i = 0; i < dizi.length; i++){
        yeniDizi.push(islem(dizi[i]));
    }
    return yeniDizi;
}

const olusanYeniDizi = kendiMapYapim(sayilar,function(sayi){
    return sayi * 5;
});
console.log(olusanYeniDizi);