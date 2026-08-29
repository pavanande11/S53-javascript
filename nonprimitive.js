// Create an Object
let person = {
    name:"Rama Krishna",
    age: 35,
    mobile:9185647235
}

//Accessing Properties of an Object

// Dot Notation syntax: object.propertyname
console.log('Name: ',person.name);
console.log('Age: ',person.age);

//Using Bracket Notation syntax: object['propertyname']
console.log('Mobile: ',person['mobile'])

let student = {
    id:2500030214,
    name: "Praveen Krishna",
    course:"Front End Development Frameworks",
    year: 2,
    display(){
        console.log("ID: ",this.id)
        console.log("Name: ", this.name)
        console.log("Course: ", this.course)
        console.log("Year: ",this.year)
    }
}
student.display()

function Student(id,name,course,grade){
    this.id = id
    this.name = name
    this.course = course
    this.grade = grade
}
let student1 = new Student(123,"Ramya","DS3",8.9);
let student2 = new Student(586,"Jogendra","WTN",9.6);

console.log("Student-1 Info: ",student1)
console.log("Student-2 Info: ",student2)

// Adding Property to an Object dynamically

let employee = {
    id: 5892,
    name: "Nagarjuna",
    dept:"CSE"
}
console.log("Adding Property Dynamically")
console.log(employee.id) // 5892
console.log(employee.name) // Nagarjuna
console.log(employee.dept) // CSE
employee.designation = "Assistant Professor" // Adding Property 
console.log(employee.designation);
employee.id = 10258
console.log(employee.id)

// Delete property from an object

// delete employee.dept

console.log(employee)

// Destructing the Object

let {id,name} = employee //Destructing 

console.log(id,"  ", name)