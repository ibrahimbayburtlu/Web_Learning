/* Bir yıl değerinin yıl olup olmadığını hesaplayın
Bir yılın artık olması için ya 400 ile modu 0 olmalı yada 4 ile modu 0 olmalı ve 
100 ile modu 0 olmamalı
4100 false değer vermeli
*/

let yil = 4100;

console.log(((yil % 400 == 0) || (( yil % 4 == 0) &&(yil%100 != 0))));