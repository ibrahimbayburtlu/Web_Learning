let objectName = {

    adi : 'İbrahim',
    soyAdi : 'Bayburtlu',
    dogumYili : 2000,
    evliMi : false,
    sevdigiRenkler : ['yesil','mavi'],
    yasiHesapla : function () {
        this.yas =  2022 - this.dogumYili;
    }
};

console.log(objectName);

console.log(objectName.dogumYili);

console.log(objectName['dogumYili']);

objectName.yasiHesapla();
console.log(objectName.yas);

let objectName2 = {

    adi : 'Furkan',
    soyAdi : 'Bingöl',
    dogumYili : 2000,
    evliMi : false,
    sevdigiRenkler : ['yesil','mavi'],
    yasiHesapla : function () {
        this.yas =  2022 - this.dogumYili;
    }
};

console.log(objectName2);

objectName2.adi ="Ahmet";

let ogrenciler = [objectName,objectName2];
console.log(ogrenciler[1].dogumYili);

objectName.yas = 2001;

console.log(ogrenciler[0].yas);