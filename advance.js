// Destructing

// Array Destructing
const arr = ['Arpit', 'Akash', '78', 'Singh'];
// let first=arr[0];
// let second=arr[1];
// let third=arr[2];
// let fourth=arr[3];  
// console.log(arr[3]);

let [first, second, third, fourth] = arr;
// console.log(second);
// or,
let [a, b, c, d, e] = ['Sakhi', 'Pankhuri', 'Jasmin', 23, 90];
// console.log(c);
// we can add own array data
let [firstdata, seconddata, thirddata, fourthdata, add = 'Mohit'] = arr;
// console.log(add);

// Object Destructing
const objectdes = {
    myname: "Arpit Singh",
    secondname: "Kumar",
    age: 22
}
// console.log(objectdes.secondname);

// let{myname,secondname,age}=objectdes;
// console.log(secondname);
// or
// let{mynm,secondnm,ag}={mynm:'akash',secondnm:'kumar',ag:23};
// console.log(ag);
// we can also add our own data
let { myname, secondname, age, addage = 789 } = objectdes;
// console.log(addage);

// Spread Operator
const spreadarr = ["Kashish", "Sakshi", "Arpit", "Jasmin Sharma"];
//Without use of concat() Method we can merge two array in single array using spread operator
const another = ["Priya", "Kriti", ...spreadarr];
console.log(spreadarr);
console.log(another);

// Rest Operator
const adds = (...a) => {
    let s = 0;
    a.forEach(e => {
        s += e;
    })
    return s;
}
console.log(adds(4, 5, 3, 23, 23, 34, 3));

// Higher Order Function
const display = (data) => {
    return `Hii I am ${data}`;
}

const displayname = (names, message) => {
    console.log(names(message));
}

displayname(display, "Arpit Kumar Singh");

// Another Example of Higher Order Function
const addition = (a, b) => {
    return (a + b);
}
const sub = (a, b) => {
    return (a - b);
}
const mul = (a, b) => {
    return (a * b);
}
const div = (a, b) => {
    return (Math.floor(a / b));
}
const calculator = (operation, first, second) => {
    return (operation(first, second));
}
console.log(calculator(div, 20, 23));

// Odd Even Example
const isodd = (number) => {
    if (number % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

const iseven = (number) => {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const filter = (numbers, fun) => {
    let result = [];
    for (const number of numbers) {
        if (fun(number)) {
            result.push(number);
        }
    }
    return (result);
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers, isodd));
console.log(filter(numbers, iseven));


// hoisting
// console.log(counter);
// var counter;
// counter=90;

// Scope Chain
// Lexical Scoping

// Closures
const outerfunction = (data) => {
    let b = 90;
    const innerfunction = () => {
        console.log(`Sum of Data is ${data + b}`);
    }
    return innerfunction;
}
let checkclosure = outerfunction(3);
console.dir(checkclosure);

// use strict
// strict='kjshdfkjsdf';
// console.log(strict);

// const strictfunction=()=>{
//     data="strict function";
//     console.log(data);
// }
// strictfunction();

// this operator
// const strictob={
//     names:"arpit singh",
//     secondname:"kumar",
//     age:22,
//     getdata(){
//         console.log(this.age);
//     }
// }
// strictob.getdata();

// Synchronous and Asynchronous javascript/Event loop
const funcfirst = () => {
    setTimeout(() => {
        console.log('function first is called');
    }, 2000);
}

const funcsecond = () => {
    console.log('function second is called');
    funcfirst();
    console.log('function second is called again');
}
funcsecond();

// Function Currying
function sum(num) {
    return function (num1) {
        return function (num2) {
            return (num + num1 + num2);
        }
    }
}
console.log(`Function Currying is ${sum(90)(78)(23)}`);

// we can write in one line using arrow function
const sum1 = (num) => (num1) => (num2) => (num + num1 + num2);
console.log(`Function Currying is ${sum1(78)(44)(34)}`);


// XMLHttpRequest
// dummydata for practice
// xhttp.open("GET", "https://restcountries.com/v3.1/name/india");
// xhttp.open("GET", "https://dummyjson.com/products");
// xhttp.open("GET", "https://dummy.restapiexample.com/api/v1/employees");

const xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://restcountries.com/v2/all");
xhttp.send();
xhttp.addEventListener('load', (e) => {
    // console.log(e.currentTarget.responseText);
    const data = JSON.parse(e.currentTarget.responseText); //Convert json to object using json.parse
    console.log(data);
    const table = document.querySelector('.countrylist');
    for (let i = 0; i < data.length; i++) {
        let tablecontent = `
        <tr>
            <td>${data[i].name}</td>
            <td>${data[i].capital}</td>
            <td>
                ${data[i].hasOwnProperty("currencies") ? data[i].currencies[0].name : 'Not Own Currency'}
            </td>
            <td>${data[i].languages[0].name}</td>
            <td>${data[i].population}</td>
        <tr>`;
        table.insertAdjacentHTML("beforebegin", tablecontent);
    }
})

const jokebtn = document.querySelector('.jokebtn');
const jokedata = document.querySelector('.jokedata');
jokebtn.addEventListener('click', (e) => {
    const joke = new XMLHttpRequest();
    joke.open("GET", 'https://api.chucknorris.io/jokes/random');
    joke.send();
    joke.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            // console.log(this.responseText);
            const data = JSON.parse(this.responseText);
            jokedata.textContent = data.value;
        }
    }
})

const userbtn = document.querySelector('.userbtn');
const userimg = document.querySelector('.userimg');
const title = document.querySelector('.title');
const firstnm = document.querySelector('.first')
const secondnm = document.querySelector('.second');
const country = document.querySelector('.country');
userbtn.addEventListener('click', (e) => {
    const user = new XMLHttpRequest();
    user.open("GET", "https://randomuser.me/api/");
    user.send();
    user.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            const data = JSON.parse(this.responseText);
            title.textContent = data.results[0].name.title;
            firstnm.textContent = data.results[0].name.first;
            secondnm.textContent = data.results[0].name.last;
            country.textContent = data.results[0].location.country;
            userimg.src = data.results[0].picture.large;
        }
    }
})

// Promises in javascript
const check = true;
let pro = new Promise(function (resolve, reject) {
    if (check) {
        resolve("Promises Condition is true");
    }
    else {
        reject("Promises Condition is false");
    }
});

pro.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})

// promises in function 
const prom = (data) => {
    return new Promise(function (resolve, reject) {
        console.log("Producing Result Please Wait...");
        setTimeout(() => {
            if (data) {
                resolve("Promises function is true");
            }
            else {
                reject("Promises function is false");
            }
        }, 2000);
    })
}
// console.log(prom(check));
prom(check).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})

// Promise All
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('first promise is resolve');
        resolve(10);
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('second promise is resolve');
        resolve(20);
    }, 1000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('third promise is resolve');
        resolve(30);
    }, 1000);
})

Promise.all([p1, p2, p3]).then((result) => {
    console.log(`Result: ${result}`);
    let sum = 0;
    result.forEach(e => {
        sum += e;
    })
    console.log(`Total: ${sum}`);
}).catch((error) => {
    console.log(error);
})

// Another Example of Promise.all()
let promisecheck = (data, message) => {
    return function (resolve, reject) {
        setTimeout(() => {
            if (data == 40) {
                reject(`${message} is Rejected`);
            }
            else {
                console.log(`${message} is resolved`);
                resolve(data);
            }
        }, 1000);
    }
}

let pro1 = new Promise(promisecheck(20, "First"));
let pro2 = new Promise(promisecheck(40, "Second"));
let pro3 = new Promise(promisecheck(60, "Third"));

Promise.all([pro1, pro2, pro3]).then((result) => {
    console.log(`Result: ${result}`);
    let sum = 0;
    result.forEach(e => {
        sum += e;
    })
    console.log(`Total: ${sum}`);
}).catch((error) => {
    console.log(`Error: ${error}`);
})

// Fetch API
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(e => {
            // console.log(e.name);
        })
    }).catch((error) => {
        console.log(`Error: ${error}`);
    })

const fetchbtn = document.querySelector('.fetchbutton');
const fetchbutton = document.querySelector('.fetchbtnsecond');
const fetchname = document.querySelector('.fetchname');
const fetchcity = document.querySelector('.fetchcity');
const usernm = document.querySelectorAll('.usernm');
const userph = document.querySelector('.userph');
const userweb = document.querySelector('.userweb');
const usercity = document.querySelector('.usercity');
const userst = document.querySelector('.userst');
const usersuite = document.querySelector('.usersuite');
const userzip = document.querySelector('.userzip');
const userlat = document.querySelector('.userlat');
const userlog = document.querySelector('.userlog');
fetchbtn.addEventListener('click', (e) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        }).then((data) => {
            const random = Math.floor(Math.random() * data.length);
            fetchname.textContent = data[random].name;
            fetchcity.textContent = data[random].address.city;
            usernm.forEach(e => {
                e.textContent = data[random].name;
            })
            userph.textContent = data[random].phone;
            userweb.textContent = data[random].website;
            usercity.textContent = data[random].address.city;
            userst.textContent = data[random].address.street;
            usersuite.textContent = data[random].address.suite;
            userzip.textContent = data[random].address.zipcode;
            userlat.textContent = data[random].address.geo.lat;
            userlog.textContent = data[random].address.geo.lng;
        }).catch((error) => {
            console.log(`Error: ${error}`);
        })
})

fetchbutton.addEventListener('click', (e) => {
    const data = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
    data.classList.add('active');
})

const cardbtn = document.querySelector('.cardbtn');
cardbtn.addEventListener('click', (e) => {
    const data = e.currentTarget.parentElement.parentElement.parentElement;
    data.classList.remove('active');
})

// Async Await
const as = async () => {
    console.log("2nd");
    await console.log("3rd");
    console.log("4th");
}
console.log("1st");
as();
console.log("5th");


const asyncbtn = document.querySelector('.asyncbtn');
const asyncname = document.querySelector('.asyncname');
asyncbtn.addEventListener('click', (e) => {
    fetchdata();
})
const fetchdata = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const random = Math.floor(Math.random() * data.length);
        asyncname.textContent = data[random].name;
    } catch (error) {
        console.log(`The Error is: ${error}`);
    }
}

// Error handling
try {
    console.log("Error Handling");
    get();
} catch (error) {
    console.log(`Error is: ${error.message}`);
}


// Map
const fruit = new Map();
fruit.set("apples", 500);
fruit.set("banana", 9000);
fruit.set('oranges', 455);
console.log(`Map of fruit is: ${fruit.get('oranges')}`);
for (const key of fruit.entries()) {
    console.log(key);
}

// Set
const setob = new Set(["arpit", "singh", "kumar", "singh"]);
// console.log(setob);
setob.add("Akash");
for (const setdata of setob) {
    console.log(setdata);
}

// Symbol
let sym = Symbol("data");
// console.log(sym.description);
const data = {
    name: "arpit",
    lastname: "Kumar",
    age: 22,
}
data[sym] = 55;
console.log(`Symbol is: ${data[sym]}`);

// Module
import { moduledata, checkmodule, checkclass } from "./module.js";
console.log(moduledata);
console.log(checkmodule("Akash Kumar Singh"));
let classdata = new checkclass();

// Default Parameter
const defaultfunc = (a, b = 90) => {
    return a + b;
}
console.log(`Addition of default function is ${defaultfunc(88)}`);

// Class(Proptype)
class firstclass {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
    showdata() {
        return `Name is: ${this.name} and Message is ${this.message}`;
    }
}
let firstc = new firstclass("Arpit", "First Class");
console.log(firstc.showdata());