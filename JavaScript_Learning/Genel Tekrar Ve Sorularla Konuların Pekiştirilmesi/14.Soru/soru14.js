/* Soru 14: Kullanıcıdan aldığınız integer değere kadar olan 
tüm asal sayıları yazdıran programı yazınız. 10 için 2,3,5,7 değerleri olmalıdır.*/

let girilen = parseInt(prompt("Sayi giriniz:")); 
let asal = 0; 
           

for (let i = 2; i <= girilen; i++)   // sayı döngüsü başlatılır girilen sayıya kadar her sayı için asallık işlemi kontrol ettirilir.
{
    asal = 1;  
    for (let j = 2; j < i; j++)  // her sayı için asal olup olmadığına bakılır. kendisi hariç alt rakamların tamamına bölünerek kalan kontrol edilir.
    {
        if (i % j == 0)  // kalan sıfır ise sayı asal değildir bu rakam için döngüden çıkılır sayı 1 artırılır.
        {
            asal = 0;
        }
    }
    if (asal == 0)
        ;
    else
    {
        console.log(i);  //asal=0 olmadığında sayı asal sayıdır ekrana yazdırılır döngüye tekrar dönülür.
    }
}