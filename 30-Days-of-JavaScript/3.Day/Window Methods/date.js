const now = new Date()
console.log(now)

console.log(now.getFullYear())

console.log(now.getMonth())

console.log(now.getDate())

console.log(now.getDay())

console.log(now.getMinutes())

console.log(now.getSeconds())

console.log(now.getTime())

// console.log(Date.now() == Date().getTime())

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56