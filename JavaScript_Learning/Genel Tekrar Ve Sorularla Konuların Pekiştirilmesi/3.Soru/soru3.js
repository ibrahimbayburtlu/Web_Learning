/* Klavyeden girilen vize ve final notlarına göre öğrenincinin dersi geçip geçmediğini söyleyen bir uygulama yazınız. (Geçme notu: 50, vizenin %40, finalin %60 geçerlidir)*/

let vize = parseInt(prompt("vize notunu giriniz:"));
let final = parseInt(prompt("final notunu girin:"));

let ortalama = vize*0.4 + final * 0.6 ;

if(ortalama >= 50)
    console.log("Tebrikler geçtiniz");
else
    console.log("Kaldınız :(");