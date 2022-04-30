// Truthy Kullanımı
// False , 0, "", null, undefined, NaN Falsey diğer her şey truty olarak kabul edilir.

const yas = 32;

let isim = "ibo";

isim = '';
isim = null;
isim = undefined;

let dogumYili = 2000;
dogumYili = "ibo";
if(dogumYili + 99){
    console.log("Bu True ifadedir.");
}
else{
    console.log("Bu false ifadedir");
}