let season = prompt("Enter the month:")

if (season == "January" || season == "March" ||season == "May" ||season == "July"){
    console.log(`${season} has 31 days.`)
}else if(season == "April" || season == "June" ||season == "September" || season == "November"){
    console.log(`${season} has 30 days.`)
}else if(season == "February"){
    console.log(`${season} has 28 days.`)
}
