let stocks = {
  Fruits : ['strawberry','grapes','banana','apple'],
  liquid : ['water','ice'],
  holder : ['cone','cup','stick'],
  toppings :['chocolate','peanuts']
};

let is_shop_open = true;

let order = (time,work) => {
    return new Promise ((resolve,reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                 resolve(work())
            },time)
           
        }
        else {
            reject(console.log('our shop is closed'))
        }
    })
}
order(2000,() => console.log(`${stocks.Fruits[0]} was selected`))
.then(() => {
    return order(0000,() => console.log('production has started'))
})
.then(() => {
    return order (2000,() => console.log('the fruit was chopped'))
}) 
.then(() => {
    return order (1000,() => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})
.then(() => {
    return order (1000,() => console.log('start the machine'))
})
.then(() => {
    return order(2000,() => console.log(`ice cream was placed on ${stocks.holder[0]} `))
})
.then(() => {
    return order(3000,() => console.log(`${stocks.toppings[0]} toppings were selected`))
})
.then(() => {
    return order(2000,()=> console.log('icecream was served'))
})

.catch(() => {
    console.log('customer left')
})
.finally(() => {
    console.log('day ended.shop closed')
})

Promises
the promise object takes a function as a parameter which takes in two parameters
let p = new Promise((resolve,reject) => {
    let a = 1 + 2;
    if (a == 2){
        resolve('success')

    }
    else{
        reject('failed')
    }

})

p.then((message) => {
   console.log('This is in then'  + message) 
})
.catch((message) => {
    console.log('This is in the catch' + message)
})



function watchTutorialCallback(callback,errorCallback){
    if (userLeft){
        errorCallback({
            name : 'User Left',
            message : ':('
        })
    }
    else if (userWatchingCatMeme){
        errorCallback({
            name : 'User Watching Cat Meme',
            message : 'WebDevSimplified < Cat '
        })
    }
    else{
        callback('Thumbs Up and Subscribe')
    }
}
watchTutorialCallback((message) => {
    console.log('success' + message)
},(error) => {
    console.log(error.name + ' ' + error.message)
})
const userLeft = false;
const UserWatchingCatMeme = true;

function watchTutorialPromise(){
    return new Promise ((resolve,reject) =>{
        if (userLeft){
            reject({
                name : 'User Left',
                message : ':('
            })
        }
        else if (UserWatchingCatMeme){
            reject({
                name : 'User Watching Cat Meme',
                message : 'WebDevSimplified < Cat '
            })
        }
        else{
            resolve('Thumbs Up and Subscribe')
        }
    })
}
watchTutorialPromise().then((message) =>{
    console.log('success' + message)
})
.catch((error) => {
    console.log(error.name + ' ' + error.message)
})


const recordVideoOne = new Promise((resolve,reject) => {
    resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve,reject) => {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve,reject) => {
    resolve('Video 3 recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})

//Promise.race only returns the first to complete\
