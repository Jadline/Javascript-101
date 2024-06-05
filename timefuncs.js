// this function takes in two parameters 
// the function we want to run in future and the time to wait before running the function
setTimeout(function (){
    console.log('hello')
},3000);

//asynchronous code = the computer wont wait for a line to finish before going to the next line
//synchronous code = the computer will wait for one line to finish before going to the next line
console.log('next line')

//setInterval
// it will run the function every 3seconds
(function (){
    console.log('interval')
},3000)
