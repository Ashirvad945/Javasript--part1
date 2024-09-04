// Primitive

//7 type : String,Number,Boolean,Null,undefined ,symbol,bigint

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outSideTemp = null

let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id===anotherID);


//Reference (non primitive)

//Array , Object ,Functions

const heros = ["shaktiman","naagraj","doga"]
let myobj = {
    name:"ashirvad",
    age:20 
}

const myFunction = function(){
    console.log("helloworld");
}


//Stack (primitive), Heap(Non-primitive)
let myYoutubename = "xyz"
let anothername = "helloworld"

anothername = "abcd"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);
