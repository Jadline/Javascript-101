//setInterval 
//setTimeOut
setTimeout(() =>{
    console.log('This function will be executed after every 3 seconds')
},3000)
const interValid = setInterval(function(){
    console.log('This function is being executed in the interval of 3 secs')
},3000)

// console.log(interValid)

//stop the inteval after 3 seconds
setTimeOut(function(){
    clearInterval(interValid)
    console.log('Interval stopped')

},5000)