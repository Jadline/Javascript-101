// this is a call back hell 
  // making icecream
  let stocks = {
  Fruits : ['strawberry','grapes','banana','apple'],
  liquid : ['water','ice'],
  holder : ['cone','cup','stick'],
  toppings :['chocolate','peanuts']
};
 
let order = (Fruit_name,call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`)
    call_production()
  },2000)
}

let production = () => {
  setTimeout(() =>{
 console.log('production has started');
 setTimeout(() =>{
     console.log('fruit has been chopped');
setTimeout(() => {
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
setTimeout(() => {
    console.log('The machine has been started');
setTimeout(() => {
    console.log(`icecream was placed on the ${stocks.holder[1]}`);
setTimeout(() => {
    console.log(`${stocks.toppings[0]} toppings were added on the icecream`);
setTimeout(() => {
    console.log('serve icecream')
},2000)
},3000)
},2000)
},1000)
},1000)
 },2000)
  },0000)
}

order(0,production)
// store room is our backend and kitchen is our front end

