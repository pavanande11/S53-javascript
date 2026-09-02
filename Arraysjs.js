// Array in JavaScript
let arr = [1,2,3,4,5]
console.log(arr)

let arr1 = new Array(1,2,3,4,5)
console.log(arr1)

// Array with different data types
let arr2 = [1,2,3,4,5,'Hello',true,{name:'John',age:30},[10,20,30],function(){console.log('Hello World')}]
console.log(arr2)

//Accessing array elements
console.log(arr2[0]) // 1
console.log(arr2[5]) // Hello
console.log(arr2[7]) // {name:'John',age:30}
console.log(arr2[7].name) // John
console.log(arr2[8][1]) // 20
arr2[9]() // Hello World

// Modify array elements
arr2[0] = 10
arr2[6] = false
console.log(arr2) // [10,2,3,4,5,'Hello',false,{name:'John',age:30},[10,20,30],function(){console.log('Hello World')}]

let sum = 0
for(let i=0;i < arr.length;i++){
    sum += arr[i]
}
console.log(sum)    

// Array methods
//length (array.length)
let fruits = ['Apple','Banana','Mango','Orange','Grapes']
console.log(fruits.length) // 5

// push (array.push())
fruits.push('Pineapple')
console.log(fruits) // ['Apple','Banana','Mango','Orange','Grapes','Pineapple']

// pop (array.pop())
fruits.pop()
console.log(fruits) // ['Apple','Banana','Mango','Orange','Grapes']

// unshift (array.unshift())
fruits.unshift('Strawberry')
console.log(fruits) // ['Strawberry','Apple','Banana','Mango','Orange','Grapes']

// shift (array.shift())
fruits.shift()
console.log(fruits) // ['Apple','Banana','Mango','Orange','Grapes']

//splice (array.splice())
fruits.splice(2,1) // remove 1 element from index 2
console.log(fruits) // ['Apple','Banana','Orange','Grapes']

fruits.splice(2,0,'Mango') // add 'Mango' at index 2
console.log(fruits) // ['Apple','Banana','Mango','Orange','Grapes']

fruits.splice(2,1,'Pineapple') // replace 'Mango' with 'Pineapple' at index 2
console.log(fruits) // ['Apple','Banana','Pineapple','Orange','Grapes']

fruits.splice(2,1,'Mango','Pineapple') // replace 'Pineapple' with 'Mango' and add 'Pineapple' at index 2
console.log(fruits) // ['Apple','Banana','Mango','Pineapple','Orange','Grapes']

// slice (array.slice())
let newFruits = fruits.slice(1,4) // create a new array from index 1 to 3
console.log(newFruits) // ['Banana','Mango','Pineapple']
console.log(fruits) // ['Apple','Banana','Mango','Pineapple','Orange','Grapes']
fruits.push('Mango')

console.log(fruits) // ['Apple','Banana','Mango','Pineapple','Orange','Grapes','Mango']

// indexOf (array.indexOf()) returns the first index at which a given element can be found 
// in the array, or -1 if it is not present.
console.log(fruits.indexOf('Mango')) // 2
console.log(fruits.indexOf('Pineapple')) // 3
console.log(fruits.indexOf('Grapes')) // 5
console.log(fruits.indexOf('Strawberry')) // -1

// lastIndexOf (array.lastIndexOf()) returns the last index at which a given element 
// can be found
console.log(fruits.lastIndexOf('Mango')) // 6

// includes (array.includes()) returns true if the array contains a certain element,
// otherwise false.
console.log(fruits.includes('Mango')) // true
console.log(fruits.includes('Strawberry')) // false

//sort (array.sort()) sorts the elements of an array in place and returns the sorted array.
fruits.sort()
console.log(fruits) // ['Apple','Banana','Grapes','Mango','Mango','Orange','Pineapple']

// reverse (array.reverse()) reverses the order of the elements of an array in place.
fruits.reverse()
console.log(fruits) // ['Pineapple','Orange','Mango','Mango','Grapes','Banana','Apple']

let numbers = [5,3,8,1,2]
numbers.sort((a,b) => b - a) // sort in descending order
console.log(numbers) // [8,5,3,2,1]

// forEach (array.forEach()) executes a provided function once for each array element.
fruits.forEach(function(item,index){
    console.log(index,item)
})

// map (array.map()) creates a new array with the results of calling a provided function 
// on every element in the calling array.
let newNumbers = numbers.map(function(item){
    return item * 3
})

console.log(newNumbers)

// filter (array.filter()) creates a new array with all elements that pass the test
// implemented by the provided function.
let filteredNumbers = numbers.filter(function(item){
    return item > 3
})

console.log(filteredNumbers) // [5,8]

// reduce (array.reduce()) executes a reducer function on each element of the array,
// resulting in a single output value.
let total = numbers.reduce(function(accumulator,currentValue){
    return accumulator + currentValue
},0)
console.log(total) // 19