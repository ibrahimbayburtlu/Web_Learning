/* Soru 1:
Şehirler diye bir dizi oluşturun.Her dizi elemanı sehirler ile ilgili bilgiler içermelidir.
Bu bilgileri şehrin adı, plaka numarası ve şehrin komşuları olmalıdır.
Diziyi oluşturduktan sonra şehir adlarına göre z'den a'ya sıralaypı ekrana yazdırın.
*/

let city = [

    {name:"Paris",plateNo:10,neighbor:"Mocano"},
    {name:"Amasya",plateNo:11,neighbor:"Hamburg"},
    {name:"Tokyo",plateNo:12,neighbor:"Seul"},
    {name:"Moscow",plateNo:13,neighbor:"Petersburg"},
    {name:"London",plateNo:14,neighbor:"Liverpool"},
];


// A dan Z ye göre sıralama için ilk 1 z'den A için -1 
let sorted_city = city.sort(function(a,b){

    if(a.name > b.name){
        return -1;
    }
    if(b.name > a.name){
        return 1;
    }
    return 0;
});

console.log(city);

console.log(sorted_city);
