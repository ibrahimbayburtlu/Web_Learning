let a = 10, b = 5, c = 0;

if(a > b){
    c = a + b;
}
else{
    c = a - b;
}
console.log("c değeri:",c);

// Ternary Short if Operation 
c = (a > b) ? (a + b) : (a-b);
console.log("C nin yeni değeri:",c);

let haftaninKacinciGunu = 8;

if(haftaninKacinciGunu === 1){
    console.log("Pazartesi");
}
else if (haftaninKacinciGunu ===2){
    console.log("Salı");
}
else if(haftaninKacinciGunu === 3){
    console.log("Çarşamba");
}
switch(haftaninKacinciGunu){

    case 1:console.log("Pazartesi");break;
    case 2:console.log("Salı");break;
    case 3:console.log("Çarşamba");break;
    case 4:console.log("Perşembe");break;
    case 5:console.log("Cuma");break;
    case 6:console.log("Cumartesi");break;
    case 7:console.log("Pazar");break;

    default: console.log("Girilen sayi 1-7 arasında değildir");
}
console.log("Switchden çıkıldı");