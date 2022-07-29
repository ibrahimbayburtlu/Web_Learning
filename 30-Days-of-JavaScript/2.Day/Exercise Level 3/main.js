
// 1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let arr = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(arr.split('love').length-1)

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let pattern = /because/gi
let control = 'You cannot end a sentence with because because because is a conjunction'
console.log(control.match(pattern).length)
