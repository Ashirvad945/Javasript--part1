//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "hello"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        firstname:"hello",
        lastname:"world",

    }
}
}

console.log(regularUser.fullname)


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);