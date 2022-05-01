/*100'lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazınız.*/

let not = parseInt(prompt("Not giriniz:"));

    if (not > 80)
        console.log("AA")
    else if(80 > not > 60)
        console.log("BB");
    else if(60 > not > 30)
        console.log("CC");
    else if(30 > not > 0)
        console.log("DD");
    else if(not === 0)
        console.log("FF")   
    else
        console.log("Not girişiniz Hatalı !!!");

