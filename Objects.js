//singleton

//object literal

///object.create
const mySym = Symbol("key1")
const JsUser = {
    name:"ashirvad","full name":"ashirvad patel",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"ashirvadpatel86@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "ashirvadpatel86@gmail.com"
Object.freeze(JsUser)
JsUser.email = "ashirvadpatl86@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);