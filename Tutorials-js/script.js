//template strings in js -allows you to create strings with embedded expression .Denoted by backticks
// const firstName = 'Jad'
// const lastName = 'webdev'
// console.log(`My name is ${firstName} ${lastName}`)

// //challenge
// function greet(username){
//     return `hello ${username}`
// }
// console.log(greet('jad'))

// let greet = (username) =>{
//     return `hello ${username}`
// }
// console.log(greet('jad'))
// function double(num1){
//     return num1 * 2;
// }
// console.log(double(2))

// let double = (num1) => {
//     return num1 * 2;
// }
// console.log(double(3))
// setTimeout(() => {
//     console.log('Hello')
//     setTimeout(() => {
//         console.log('hey')
//         setTimeout(()=>{
//             console.log('namaste')
//             setTimeout(() => {
//                 console.log('Hi')
//                 setTimeout(()=>{
//                     console.log('Bonjour')
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
// },2000)

//Enhanced Object Literalls 

//=set of enhancements to the syntax for defining objects in js 
// function  user (name,age,work){
//     return {
//         name :  name,
//         age : age ,
//         work : work
//     }
// }
// const jad = user('jad',20,'programmer')
// const joy = user('joy',19,'architect')
// console.log(jad)
// console.log(joy)

// function refactorVars(num){
//         return {
//             num
//         }
// }
// var a = refactorVars(1)
// var b = refactorVars(2)
// var c = refactorVars(3)
// console.log(a)
// console.log(b)
// console.log(c)

// const a = 1
// const b = 2
// const c = 3

// const obj = {a,b,c};
// console.log(obj)
// function countToFive(count=false){
//     if (count === true){
//         for (let i =1 ; i <=5 ; i++){
//             console.log(`count ${i}`)
//         }
//     }
// }
// countToFive()
// function rating(rate){
//     if (rate === 5){
//         console.log('High rating')
//     }
//     else if (rate === 0){
//         console.log('low rating')
//     }
// function Multiply(a,b=1){
//    return a * b
// }
// console.log(Multiply(2,3))


//Spread operator - used to split out arrays
// function giveMeFour(a,b,c,d){
//     console.log("a",a)
//     console.log("b",b)
//     console.log("c",c)
//     console.log("d",d)
// }
// const colors = ['red','green','peach','blue']
// giveMeFour(...colors)

// const strNums = ['one','two','three']
// const moreStrNums = ['four','five','six']
// const concat = [...strNums,...moreStrNums] // this is the spread operator
// console.log(concat)
// const Obj1 = {
//     x:1,
//     y:2
// }
// const Obj2 = {
//     z : 3
// }
// const concat = {...Obj1,...Obj2}
// console.log(concat)


// let arr = [1,2,3]
// let arr2 = [4,5]
// const user = {
//     name : "Jen",
//     age : 22
// }

// let arrClone = [...arr]
// let arr2Clone = [...arr2]

// const userClone = {...user}

// console.log(arrClone)
// console.log(arr2Clone)
// console.log(userClone)

//Rest parameter - allows a function to accept an indefinite number of arguments
//as an array,providing a way to represent variadic functions in Javascript
// function user(...userData){
//     console.log(userData)
// }
// user('jad',19,'programming','baseball')
// function person(firstName,lastName,...hobbies){
//     console.log(`${firstName} ${lastName}`)
//     console.log('hobbies',hobbies)
// }
// person('jad','dev','cooking','photography','hiking','watching')
// function myfunc(...params){
//     console.log(params)
// }
// myfunc('web','class','extreme')

//Destructuring in js
//allows us to unpack values from a datastructure eg array and objects into distinct variables
//arrays,objects,functions
const foo = ['one','two','three']
// console.log(foo[0])
// console.log(foo[1])
// console.log(foo[2])

// const  [one,two,three] = foo;
// console.log(one)
// console.log(two)
// console.log(three)

// function f(){
//     return [1,2]
// }
// let a,b;
// [a,b] = f()
// console.log(a)
// console.log(b)

// function f(){
//     return [1,2,4]
// }
// const [a, ,b] = f()
// console.log(a)
// console.log(b)

//assigning the rest of the variable
// const [a, ...b] = ['one','two','three']
// console.log(a)
// console.log(b)
// const colors = ['red','green','blue','yellow','orange']

// const [color1,color2,color3] = colors
// console.log(color1,color2,color3)

//object destructuring
// const student = {
//     name : "jad",
//     position : "first",
//     rollNo : 27
// }
// const {name} = student;


// const person = {
//     name : 'john',
//     age : 27,
//     gender : "male",
//     location : 'germany'
// }
// const {name,age,gender,location} = person
// console.log(name,age,gender,location)

// const num = {
//     x : 100,
//     y: 150
// }
// const {x : new1,y:new2} = num
// console.log(new1)
// console.log(new2)


// let {a,b,...rest} = {a:23,b:200,c:300,d:450,e:500}
// console.log(a,b,rest)

// const person = {
//     name : 'john',
//     age : 27,
//     gender : "male",
//     location : 'germany'
// }

// const {name:personName,age:personAge,location:personCountry} = person
// console.log(personCountry,personName,personAge)