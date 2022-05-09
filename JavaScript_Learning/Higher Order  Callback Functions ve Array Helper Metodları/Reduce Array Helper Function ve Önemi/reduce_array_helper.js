const sayilar = [1,2,3,4,5];

/*
function toplamiBul(){
    let toplam = 0;
    for(let i = 0; i < sayilar.length;i++){
        toplam += sayilar[i];
    }
    console.log(toplam);
}

toplamiBul();
*/

// pre => toplam 



/*
const sonuc = sayilar.reduce(function(toplam,curr,index){

    return toplam = toplam + curr;

},0);

console.log(yeniDizi);

*/


sayilar.map(function(sayi){
    return sayi * 2;
});

const yeniDiziWithReduce = sayilar.reduce(function(dizininOncekiHali,oankisayi){

    dizininOncekiHali.push(oankisayi*2);
    return dizininOncekiHali;
},[]); 

console.log(yeniDiziWithReduce);

