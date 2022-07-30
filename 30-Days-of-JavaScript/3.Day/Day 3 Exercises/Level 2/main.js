// 1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = parseInt(prompt("Enter base:"))

let height = parseInt(prompt("Enter height:"))

window.alert('The are of the triangle is ' + (base*height)/ 2)


// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let a = parseInt(prompt("Enter side a:"))

let b = parseInt(prompt("Enter side b:"))

let c = parseInt(prompt("Enter side c:"))

let total = a + b + c
window.alert("The perimeter of the triangle is "+ total)

// 3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length0 = parseFloat(prompt("Enter the length:"))

let width = parseFloat(prompt("Enter the width:"))

let perimeter =  2*(length0 + width)

window.alert(parseInt(perimeter))

// 4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const PI = Math.PI

let r = parseFloat(prompt("Enter the r:"))

window.alert(parseInt(2*PI*r))


// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

let x = parseInt(prompt("Enter the x:"))
let m2 = 2
window.alert("y:" + parseInt(2*x-2))


// 6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let m1 = (10-2) / (6-2)
window.alert((10-2) / (6-2))

// 7.Compare the slope of above two questions.

window.alert(m1 == m2)

// 8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

window.alert("y:" + 0 + " y:" + -3)

// 9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = parseInt(prompt("Enter hours:"))

let rate = parseInt(prompt("Enter rate per hour:"))

let earning = hours * rate

window.alert("Your weekly earning is " + earning)

// 10.If the length of your name is greater than 7 say, your name is long else say your name is short.

let yourName = prompt("Enter the your name:")

yourName > 7 ? console.log("your name is long"):console.log("Thanks")

// 11.Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

window.alert("Your first name," +firstName + " is longer than your family name," + lastName)

// 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25

window.alert("I'm" +myAge-yourAge+" years older than you")

// 13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let yourBornYear = parseInt(prompt("Enter birth year:"))

let nowyear = new Date()
let now = nowyear.getFullYear()

window.alert("You are" +now-nowyear +".You will be allowed to drive after 3 years.")

// 14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let data = parseInt(prompt("Enter the year"))

window.alert("You lived" + nowyear.getMilliseconds+" seconds")

// 15.
