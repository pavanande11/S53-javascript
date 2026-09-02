/*
function <function-name([parameters list]){
    body of function
    [return expression/variable]
}
*/

function greet(){
    console.log('Understanding of Functions!')
}

greet()

// Passing a parameters to a function

function sum(a,b){
    console.log('Sum of two Numbers: ',a + b)
}
sum(2,5)
sum(3.6,10.9)
sum('Hello','World !')

//Return from function

function add(x,y){
    return x + y
}

let suma = add(125,567)
console.log(suma)

// Function Expression

let mul = function (a,b){
    return a * b
}

console.log(mul(10,2))

// Arrow Function

let sub = (a,b) => a - b
console.log(sub(10,5))

let add1 = (a,b) => { return a + b }
console.log(add1(10,5))

// Callback Function
function guest1(){
    console.log("calling guest1 function")
}

function guest2(){
    console.log("calling guest2 function")
}

function callbackfunction(callback){
    callback()
}

callbackfunction(guest1)
callbackfunction(guest2);

//Callback function with arguments
function add2(x,y){
    return x + y
}

function sub2(x,y){
    return x - y
}

function mul2(x,y){
    return x * y
}

function callbackfunction2(x,y,callback){
    return callback(x,y)
}

console.log(callbackfunction2(10,5,add2))
console.log(callbackfunction2(10,5,sub2))
console.log(callbackfunction2(10,5,mul2))