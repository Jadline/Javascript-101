function greeting(){
  console.log('hello')
}
greeting()

//in js functions are values
const function1 = function greeting(){
    console.log('hello')
}
console.log(function1)  // returns the function1 value which is the function greeting
console.log(typeof function1)  // returns function
function1()

//ANONYMOUS FUNCTIONS IN JS

// as long as the function is saved in a variable it is not a must that you write the function name 
const function2 = function () {
    console.log('hello')
}

// we can save values in an object
const object1 = {
    num : 2,
    fun : function (){
        console.log('hello3') // the function is anonymous
    }
}
object1.fun()



// we can pass values in a function

function display(param){
    console.log(param)
}
display(2)

function run(param1){
    param1()
}
run(function(){
    console.log('hello4')
})
