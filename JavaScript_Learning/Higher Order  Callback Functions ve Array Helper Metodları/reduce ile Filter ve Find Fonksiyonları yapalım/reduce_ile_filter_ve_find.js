// reduce ile filter uygulaması 

const sayilar = [1,2,3,4,5,6,2];

const yeniDizi = sayilar.filter(function(sayi,index){
    return sayi > 3;
});
console.log(yeniDizi);



const yeniDiziWithReduce = sayilar.reduce(function(pre,sayi,index){

    if (sayi > 3) {
        pre.push(sayi);
    }
    return pre;
},[]);

console.log(yeniDizi);
console.log(yeniDiziWithReduce);




const bulunanEleman = sayilar.find(function(sayi,index){

    return sayi === 2;

});

console.log(bulunanEleman);

const bulunanElemanWithReduce = sayilar.reduce(function(pre,sayi,index){

    if(sayi === 22){
        return sayi;
    }else{
        return pre;
    }
},undefined);

console.log(bulunanElemanWithReduce);