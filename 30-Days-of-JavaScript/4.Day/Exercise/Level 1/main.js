// 1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback

let yourAge = parseInt(prompt("Enter your age:"))

if (yourAge >= 18){
    console.log("You are old enough to drive.")
}else{
    console.log("You are left with 3 years to drive.")
}

// 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you).

const myAge = 21

if (myAge - yourAge > 0){
    console.log(`You are ${myAge - yourAge} years older than me`)
}else if(myAge == yourAge){
    console.log("our age same")
}else{
    console.log(`You are ${yourAge-myAge} years young than me..`)
}

// 3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4
let b = 3

if (a > b){
    console.log(`${a} is greater than ${b}`)
}else if(b > a){
    console.log(`${b} is greater than ${a}`)
}else{
    console.log(`${a} equal is ${b}`)
}

//4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = parseInt(prompt("Enter the number:"))
if (number % 2 == 0){
    console.log(`${number} is an even number.`)
}else{
    console.log(`${number} is an odd number`)
}