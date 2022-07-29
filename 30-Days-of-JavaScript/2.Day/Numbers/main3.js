let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10


let numBTNoneandeleven = randomNum * 10 + 1
console.log(numBTNoneandeleven)
console.log(Math.floor(numBTNoneandeleven))