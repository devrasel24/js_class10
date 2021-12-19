// project 01 : Email Pattern 


let email = "developer.rase_25@programmer24.online";

let regularExpression = /^[a-z0-9\._]*@[a-z0-9_\.]*\.[a-z]{2,8}/;


console.log(regularExpression.test(email));
// --------------------------------------------------------------------------




// Project 02: Username 


// let userName = "rasel_24";

// let regularExpression = /^[a-z_0-9]{5,12}$/;

// console.log(regularExpression.test(userName));
// -------------------------------------------------------------------


// project 03: BD Phone Number


// let number = "+8801783199526"

// let regularExpression = /^(\+8801|01|8801)[0-9]{9}$/;

// console.log(regularExpression.test(number));
// ----------------------------------------------------------------


// Project 04: Password

// let password = "dgdg@#$%e"

// let regularExpression = /^[a-zA-Z|0-9/~!@#$%^&*_+\[\]\.(){}]{8,16}$/;

// console.log(regularExpression.test(password));

// ----------------------------------------------------------


// Project 05: Zip code


// let zipCode = "25858";

// let regularExpression = /^[0-9]{4,5}$/;

// console.log(regularExpression.test(zipCode));