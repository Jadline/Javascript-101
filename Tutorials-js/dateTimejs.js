const date = new Date()
// const Year = date.getFullYear()
// console.log('Year :',Year)
// const month = date.getMonth()
// console.log('month:',month)
// const  day = date.getDay()
// console.log('day:',day)
// const hours = date.getHours()
// console.log('hours:',hours)
date.setDate(date.getDate() + 1)
console.log(date)

console.log(date.toDateString()) //converts to human readablle form wed jun 26 2024
console.log(date.toISOString())
console.log(date.toLocaleString()) // 6/26/2024