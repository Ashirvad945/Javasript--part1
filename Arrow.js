const user = {
    username: "ashirvad",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

function chai(){
    console.log(this);
}

chai()


const addTwo = (num1,num2)=>{
    return num1+num2

}

console.log(addTwo(3,4))

const myArrat  = [2,3,4,5,6,7]

//myArray.forEach()