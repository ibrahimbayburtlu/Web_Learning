const isimler = ['emre','ali','hasan','ayse'];

const sayilar = [1,50,41,41,84,8,35,3];

const ogrenciler = [
    {id:12,isimler:'emre',yas:25},
    {id:22,isimler:'hasan',yas:15},
    {id:32,isimler:'fatma',yas:55},
    {id:13,isimler:'nuriye',yas:19},
    {id:13,isimler:'kemal',yas:45},
    {id:92,isimler:'mustafa',yas:75},
    {id:15,isimler:'ceren',yas:30},    
];

// Sorted 
/*
Function used to determine the order of the elements. 
It is expected to return a negative value if the first argument 
is less than the second argument, zero if they're equal, 
and a positive value otherwise. If omitted, the elements 
are sorted in ascending, ASCII character order.
*/ 
// String diziyi a-z sıralama

let siraliDiziString = isimler.sort();
console.log(siraliDiziString);

// String diziyi z-a  sıralama
let siraliDiziStringTers = isimler.sort().reverse();
console.log(siraliDiziStringTers);

// sayiları küçükten büyüğe - büyükten küçüğe sıralama

let siraliDiziSayi = sayilar.sort();
console.log(siraliDiziSayi);

let siraliDiziSayiTers = sayilar.sort().reverse();
console.log(siraliDiziSayiTers);

// nesneleri sıralama

// id oranla sıralama smaller - bigger
let sort_id = ogrenciler.sort(function(a,b){

    return a.id - b.id;

});
console.log(ogrenciler);

// isimler göre sıralama

let sorted_name = ogrenciler.sort(function(a,b){
    return a.isimler - b.isimler;
});
console.log(sorted_name);

// yasa göre sıralama

let sorted_age = ogrenciler.sort(function(a,b){
    return a.yas - b.yas;
});
console.log(sorted_age);