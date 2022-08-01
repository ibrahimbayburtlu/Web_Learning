const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// 1.Declare an empty array;

let arr = []
console.log(arr)

// 2.Declare an array with more than 5 number of elements

let arr2 = Array(5).fill('X')
console.log(arr2)

// 3. Find the length of your array

console.log(arr2.length)

// 4.Get the first item, the middle item and the last item of the array

// first item
let firstElement = countries[0]

console.log(`This array of first element:${firstElement}`)

// the last item
let lastElement = countries[countries.length-1]

console.log(`This array of last element:${lastElement}`)

// the middle item
let middle = (0 + countries.length-1) / 2
let middleElement = countries[middle]

console.log(`This array of middle element:${middleElement}`)


// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let arr3 = []
arr3[0] = 1
arr[1] = 2
arr[2] = 3
arr[3] = 'x'
arr[4] = true

console.log(arr3.length)

// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]


// 7.Print the array using console.log()
console.log(itCompanies)

// 8.Print the number of companies in the array
console.log(itCompanies.length)

// 9.Print the first company, middle and last company

firstElement = itCompanies[0]

console.log(`This array of first element:${firstElement}`)

middle = (0 + itCompanies.length-1) / 2
middleElement = itCompanies[middle]

console.log(`This array of middle element:${middleElement}`)

lastElement = itCompanies[countries.length-1]

console.log(`This array of last element:${lastElement}`)

// 10.Print out each company

for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}

//11.Change each company name to uppercase one by one and print them out

for(let i = 0; i < itCompanies.length; i++){

    console.log(itCompanies[i].toUpperCase())
}

// 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`)

// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let element = "Nokia"
let control = itCompanies.includes(element)
control ? console.log(`${element} is Big IT company`) : console.log(`${element} don't Big IT company.`)


// 14.Filter out companies which have more than one 'o' without the filter method

let newArr = []
for (let i = 0; i < itCompanies.length; i++){
    if(itCompanies[i].includes('o')){
        let count = 0;
        for (let j = 0; j < itCompanies[i].length; j++){
            if(itCompanies[i][j] == 'o'){
                count += 1
            }
        }
        if(count == 2){
            newArr.push(itCompanies[i])
        }
    }
}
console.log(newArr)

// 15.Sort the array using sort() method

console.log(itCompanies.sort())

// 16.Reverse the array using reverse() method

console.log(itCompanies.reverse())

// 17.Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3))

// 18.Slice out the last 3 companies from the array

console.log(itCompanies.slice(itCompanies.length-3),itCompanies.length)

// 19.Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(itCompanies.length/2,itCompanies.length/2+1))

// 20.Remove the first IT company from the array

console.log(itCompanies.shift())

// 21.Remove the middle IT company or companies from the array

console.log(itCompanies.pop(itCompanies.length-1))

// 22.Remove the last IT company from the array

console.log(itCompanies.unshift())

// 23.Remove all IT companies

console.log(itCompanies.splice())

