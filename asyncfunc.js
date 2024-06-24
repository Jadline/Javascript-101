function  makeRequest(location){
    return new Promise((resolve,reject) => {
        console.log(`Making Request is ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        }
        else {
            reject('We can only talk to Google')
        }
    })
}
function processRequest(response){
    return new Promise((resolve,reject) => {
        console.log('processing request')
        resolve(`Extra information ${response}`)
    })
}
// makeRequest('Google').then( (response) =>{
//     console.log('Response received')
//     return processRequest(response)
// }).then(processResponse => {
//     console.log(processResponse)
// }).catch((error) => {
//     console.log(error)
// })


async function doWork(){
    //await until this makeRequest function is finished
    try{
        const response = await makeRequest('Google')
        console.log('Response received')
        const processResponse = await processRequest(response)
        console.log(processResponse)
     
    }
    catch(error){
        console.log(error)
    }
    
}
doWork()