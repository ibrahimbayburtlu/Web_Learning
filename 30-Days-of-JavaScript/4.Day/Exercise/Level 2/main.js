// 1.Write a code which can give grades to students according to theirs scores

let note = parseInt(prompt("Enter the note:"))

switch (true){
    case (note >= 80 && note < 101) :
        console.log("A")
        break
    case note >= 70:
        console.log("B")
        break
    case note >= 60:
        console.log("C")
        break
    case note >= 50:
        console.log("D")
        break
    case note < 50 && note > -1:
        console.log("F")
        break
    default:
        console.log("Enter valid number")
}


// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is

let season = prompt("Enter the month:")

if (season == "September" || season == "October" ||season == "November"){
    console.log("the season is Autumn")
}else if(season == "December" || season == "January" ||season == "February"){
    console.log("the season is Winter")
}else if(season == "March" || season == "April" ||season == "May"){
    console.log("the season is Spring")
}else if(season == "June" || season == "July" ||season == "August"){
    console.log("the season is Summer")
}

// 3.Check if a day is weekend day or a working day. Your script will take day as an input.

let dayUserInput = prompt("What is the day  today?")


let day = dayUserInput.toLocaleLowerCase()

switch (true) {
    case 'monday':
      console.log(`${day}is a working day`)
      break
    case 'tuesday':
      console.log(`${day}is a working day`)
      break
    case 'wednesday':
      console.log(`${day}is a working day`)
      break
    case 'thursday':
      console.log(`${day}is a working day`)
      break
    case 'friday':
      console.log(`${day}is a working day`)
      break
    case 'saturday':
      console.log(`${day}is a weekend.`)
      break
    case 'sunday':
      console.log(`${day}is a weekend.`)
      break
    default:
      console.log('It is not a week day.')
  }