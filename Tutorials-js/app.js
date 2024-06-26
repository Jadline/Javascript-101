//JSON
 const  person ={
    "name": "john doe",
    "age": 30,
    "email": "js@gmail.com",
    "isSubscribed": true,
    "hobbies":["reading","Running","cooking"],
    "address" : {
        "city" : "new York",
        "idk" : true
    },
};

//json.stringify() - convert person object to a string or a json 
console.log(person)
const jsonString = JSON.stringify(person)
console.log(jsonString)

const parseObject = JSON.parse(jsonString) //returns a js object
console.log(parseObject)
