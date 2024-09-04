function calculatecartprice( val1,val2,...num1){
    return num1
}

console.log(calculatecartprice(200,400,600))


const user = {
    username:"ashirvad",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}and price is ${anyobject.price}`);

}
//handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,40,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
