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