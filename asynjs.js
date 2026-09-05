// promise

let promise = new Promise((resolve,reject) => {
    let success = true
    if (success) {
        resolve("Promise resolved!")
    } else {
        reject("Promise rejected!")
    }
})

promise
.then((message) => {
    console.log(message)
})
.catch((message) => {
    console.log(message)
}  )
console.log('-------------------------------------------------------------');

function getStudentName(name){
    return new Promise((resolve,reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            if (name) {
                resolve(name);
            } else {
                reject("Invalid student name");
            }
        }, 1000);
    });
}

getStudentName("Prakash")
.then((name) => {
    console.log("Student name:", name);
})
.catch((error) => {
    console.log("Invalid student name");
}  )
console.log('-------------------------------------------------------------');
getStudentName("")
.then((name) => {
    console.log("Student name:", name);
})
.catch((error) => {
    console.log("Invalid student name");
}  )
console.log('-------------------------------------------------------------');
fetch('https://jsonplaceholder.typicode.com/users/')
.then(response => response.json())
.then(data => {
    // console.log(data);
    data.forEach(user => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
        console.log(`Address: ${user.address.street}, ${user.address.city}`);
        console.log(`Company: ${user.company.name}`);
        console.log(`${user.address.geo.longitude}, ${user.address.geo.latitude}`);
        console.log(`Phone: ${user.phone}`);
        console.log('-------------------------------------------------------------');
    });
})
.catch(error => {
    console.log("Error fetching data:", error);
});