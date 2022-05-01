/* Klavyeden kenarları girilen bir üçgenin çeşidini veren uygulamayı yazınız.*/

let kenar1 = parseInt(prompt("1.Kenarı giriniz:"));
let kenar2 =parseInt(prompt("2.Kenarı giriniz:"));
let kenar3 =parseInt(prompt("3.Kenar giriniz:"));

if((kenar1 === kenar2 ) && (kenar2 === kenar3) && (kenar1 === kenar3))
    console.log("Harika! Eşkenar üçğen");
else if((kenar1 === kenar2 ) || (kenar1 === kenar3) || (kenar2 === kenar3))
    console.log("ikizkenar üçgen");

else
    console.log("Çeşitkenar üçğen");