// object nedir, hatırlayalım


const emre ={
    ad:'emre',
    yas:32,
    sevdigimRenkler : ['kırmızı','yeşil'],
    adres:{
        il:'Ankara',
        plakaKodu:6,
    },
    bilgileriSoyle:function(){
        return 'benim adım ibrahim yasım 32';
    }
    ["full-name"]:'ibrahim bayburtlu',
}
console.log(emre.['full-name']);