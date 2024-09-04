const accountID = 144553
let accountEmail = "ashirvad86@gmail.com"
var accountCity = "jaipur"
var AccountPassword = "12345"
let accountState;

//accountID = 2

accountEmail = "ap@ap.com"
AccountPassword = "21212121"
accountCity = "banglore"

/* prefer not to use var   
because of issue in block scope and functional scope*/

console.log(accountID);
console.table([accountCity,accountEmail,AccountPassword,accountState])