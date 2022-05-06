let isimler = ["emre","hasan","ayse"];

// Returns a string representation of an array.
console.log(isimler.toString());

// Adds all the elements of an array into a string, separated by the specified separator string.
console.log(isimler.join("|"));

// Appends new elements to the end of an array, and returns the new length of the array
let diziElemanSayisi = isimler.push("ibrahim");
console.log(isimler.toString() + "dizinin eleman sayisi:"+diziElemanSayisi);

// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let dizidenCıkarılanEleman = isimler.pop();
console.log(`${isimler} cıkarılan eleman : ${dizidenCıkarılanEleman}`);

// Dizinin ilk elemanı çıkarır
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let dizidenSilinenEleman = isimler.shift();
console.log(`diziden Silinen Eleman: ${dizidenSilinenEleman}`);

// Dizinin en başına eleman ekler.
// Inserts new elements at the start of an array, and returns the new length of the array.
isimler.unshift("Yeni eleman");
console.log(isimler.toString());

// silme işlemi yapar. 
delete isimler[1];
console.log(isimler.toString() + " " + isimler[1]);

let sayilar = [1,2,3,4,5,6,7,8];
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
sayilar.splice(8,0,9,10);
console.log(sayilar.toString());

// 0.index den başlayarak 4 eleman sil. 
let silinenler = sayilar.splice(0,4);
console.log(sayilar.toString());
console.log(silinenler);

//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let tekSayilar = [1,3,5];
let ciftSayılar =  [2,4,6];

let sayilarim = tekSayilar.concat(ciftSayılar);
console.log(sayilarim.toString());

// Sayilarim dizisinin 0.index 3.index arasında yeni dizi oluştur.
let yeniDizi = sayilarim.slice(0,3);
console.log(yeniDizi.toString() + "    " + sayilarim.toString());
