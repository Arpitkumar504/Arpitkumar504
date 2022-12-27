// number increaser or decreaser
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});







let x = 5,
    y = 90,
    z;
z = x + y;
console.log(z);

let a = 90,
    b = 9,
    c;
c = a + b;
console.log(c);

// window.alert(5 + 6);
// document.write(5 + 6);

document.getElementById("ab").innerHTML = "javascript";
document.getElementById("change").style.fontSize = "70px";
document.getElementById("hide").style.display = "none";

function check() {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML = "Display will change";
}

function myFunction1() {
    document.getElementById("demo2").innerHTML = "Script in body";
}

function myFunction() {
    document.getElementById("demo1").innerHTML = "Problem will changed";
}
function firstfunction() {
    document.getElementById('t').style.display = 'block';
}
function secondfunction() {
    document.getElementById('t').style.display = 'none';
}
for (let i = 0; i < 6; i++) {
    document.getElementById('check').innerHTML = i;
}

let n = 100;
while (n >= 0) {
    console.log(n);
    n--;
}
var name = "arpit kumar singh" + " Manoj kumar singh";
name += ' akash singh';
console.log(name);

palindrone();

function palindrone() {
    var nums = 454, n1, r, riv = 0;
    n1 = nums;
    while (n1 > 0) {
        r = n1 % 10;
        riv = riv * 10 + r;
        n1 = n1 / 10;
    }
    if (nums == riv) {
        console.log('number is palindrone');
    }
    else {
        console.log("number is not palindrone")
    }
}



// Taking data from the user
// palindrone();
// function palindrone(){
//     var num=prompt("Enter the data");
//     var num1=prompt("Enter the second number");
//     if(num>num1){
//         document.write(num+" is greater than "+num1);
//     }
//     else{
//         document.write("no is not greater than num1");
//     }
// }

// factorial using user inputing
// var fac=prompt("Enter the data");
// var fa=1;
// for(var j=1;j<=fac;j++)
// {
//     fa=fa*j;
// }
// window.alert("factorial is "+fa);



document.getElementById("a").innerHTML = z;




document.getElementById('js').innerHTML = "This is changed";
// Value Change
let i = 1;  //Global variable
function increment() {
    document.getElementById("i").innerHTML = i;
    ++i;
    if (i > 4) {
        document.getElementById("i").style.color = "red";
    }
    if (i > 8) {
        document.getElementById("i").style.color = "green";
    }
    if (i > 12) {
        document.getElementById("i").style.color = "pink";
    }
}
function decrement() {
    if (i > 0) {
        --i;
        document.getElementById("i").innerHTML = i;
    }
}
function reset() {
    i = 0;  //Assingning i=0 for reset data
    document.getElementById('i').innerHTML = i;
}

// NaN---> Not a number
// var mobile = prompt("Enter the mobile  number");
// if(isNaN(mobile)){
//     console.log("This is not a valid number");
// }
// else{
//     console.log("This is a valid number");
// }

// object
var c3 = {
    first: "sdkshdf",
    second: 474
};
console.log(c3.first);
console.log(c3.second);
console.log(c3);
console.log(typeof (c3));

//----------------Methods of String------------------


// length
var names = 'arpit kumar singh is one of the best programmer singh is very best That it';
// var l = names.length;
console.log("The length of name is " + names.length);
// indexof
console.log("The index is " + names.indexOf("kumar"));
// lastindexof
console.log("The index is " + names.lastIndexOf("best"));
// indexOf starting postion
console.log("The index position is" + names.indexOf("kumar", 4));
// lastIndexOf starting postion
console.log("The last index is " + names.lastIndexOf("best", 1));
// searching
console.log("found data " + names.search("kumar"));
// slice
console.log("Slice data is " + names.slice(10, 40));
// slice at last when position is negative
console.log("Slice data is " + names.slice(-4, -10));
// slice at rest data at start
console.log("Sliced data is " + names.slice(10));
// slice at rest data at end
console.log("Sliced data is " + names.slice(-10));
//substring is similar to slice
console.log("substr-substring data is " + names.substring(10));
//substr is similar to slice
console.log("substr data is " + names.substr(10, 6));
//substring is similar to slice negative data
console.log("substr data is " + names.substr(-10));
// replace
console.log("replaced data " + names.replace("kumar", "kmar"));
console.log(names);
// convert uppercase
console.log("uppercase data " + names.toUpperCase());
// convert lowecase
console.log("lowercase data " + names.toLowerCase("kumar"));
// concate is similar to "manoj"+"kumar"+"singh"
console.log("concated data is " + names.concat(" This is concated data"));
// trim which means whitespace removes
var t1 = "            dbfksdhfksdhf        ";
console.log(t1.trim());
// padstart which means shift data at start position
var pad = "6";
console.log(pad.padStart(4, 7));
// padend which means shift data at end position
var pad = "6";
console.log(pad.padEnd(4, 7));
// charAt
console.log("found data at 50th postion " + names.charAt(50));
// charCodeAt returns unicode of character
console.log("found index at 50th postion " + names.charCodeAt(50));
// property access at index
console.log(names[60]);


// -------------------Methods of Number------------------


// convert number to String
var num = 57575;
console.log(num.toString());
// expontial
console.log(num.toExponential(3));
// to fixed which means add decimal after data
console.log(num.toFixed(8));
// /value of
console.log(num.valueOf());
// parseInt convert string to Number
var pt = "788883";
console.log(parseInt(pt));
// parseFloat can convert string to float
var ptt = "90.88";
console.log(parseFloat(ptt));


// ---------------------ARRAY IN JAVASCRIPT--------------------------

// creating and Array
// two way to creating an array
// first method
var arr = [5, 66, 675, 755, 754, 7665];
var brr = ["arpit_singh", "akash singh", "manoj kumar singh", "baleshwer thakur"];
//second method to creating array using new
var arr1 = new Array(5, 66, 643, 5343, 34434);




// Accessing the array
console.log(arr[5]);
console.log(brr[2]);
console.log(arr1[3]);
console.log(arr);

// Method of Array



// length of Array
console.log("length of an array " + arr.length);
console.log("The last data of an array is: " + arr[arr.length - 1]);
console.log("Entire data: " + arr);

// adding eleements in array
console.log("The total data of array is: " + brr);
brr.push("Rinki");
console.log(brr[brr.length - 1]);
// second way for adding element in the array
brr[brr.length] = "Sudha devi";
console.log(brr[brr.length - 1]);

// removing element into an array
console.log(brr.pop());
console.log(brr);

// to reconize an array use isArray method
console.log("arr is array or not reconize " + Array.isArray(arr));

// convert array into string using toString method
console.log(arr.toString());

// join array in one bundle
console.log(arr.join("*"));

// shift(delete first element of the array)
brr.shift();
console.log("shitfted data in the array " + brr);

// unshift(add first element of the Array)
brr.unshift("muskan");
console.log(brr);

// splice(add data in the array to postion)
brr.splice(2, 0, "sudha devi", "arpit singh");
console.log("After Sliceing: " + brr);

// splice(to remove using splice)
brr.splice(1, 1, "rishu");
console.log(brr);

// merging an arrays
var mer = arr.concat(brr);
console.log(mer);

// slice(creating array with another array without remove any data)
var s = brr.slice(2);
console.log(s);

var s1 = brr.slice(2, 6);
console.log(s1);

// Array Sorting
console.log("The data of array is " + brr);
brr.sort();
console.log("Sorted data is " + brr);

// reversing an Array
brr.reverse();
console.log("Reversed data is: " + brr);

// sort the numeric data
arr.sort(function (a, b) { return a - b });
console.log(arr);

// sort the numeric data in descending order
arr.sort(function (a, b) { return b - a });
console.log(arr);

// sorting an array in random order
arr.sort(function (a, b) { return 0.5 - Math.random() });
console.log(arr);

// find highest number using Math.max.apply
var r = Math.max.apply(null, arr);
console.log(r);

// find lowest number using Math.max.apply
var r = Math.min.apply(null, arr);
console.log(r);


// Itteration in Array
var text = "";
arr.forEach(myFunction);
console.log(text);
function myFunction(value, index, array) {
    text = text + value + "\n";
}

var arr1 = ["arpit kumar singh", "baleshwer Thakur", "muskan", "Pankhuri sharma", "sakashi singh", "Kashish sharma"];
for (var z1 = 0; z1 < arr.length; z1++) {
    console.log("The found data at position of " + (z1 + 1) + " is " + arr1[z1]);
}

// map in javascript
console.log("maps in javascript");
var arrs = [5, 7, 8, 2, 3, 4];
const abt = arrs.map(function table(x) {
    let f = 1;
    for (var i = 1; i <= x; i++) {
        f *= i;
    }
    return (f);
});
console.log("The factorial of all array is: " + abt);

// -------------------Dates in javascript---------------------
var d = new Date();
console.log("The current date is " + d);

//get date and time in readable mode
var d7 = new Date();
console.log(d7.toLocaleString());

// get date in milliseconds
var d8 = new Date();
console.log(d8.toString());

// get current system date and time
console.log(Date.now());

var d1 = new Date(2018, 6, 14, 07, 10, 55);
console.log(d1);

// only provided date
var d1 = new Date(2018, 7, 14);
console.log(d1);

// two digit specifies previous century
var d2 = new Date(99, 6, 9);
console.log(d2);

// toUTCString
// toDateString
// toISOString

// Date format
// // ISO Dates
// var d = new Date("2015-03");
// var d=new Date("2020");
// var d = new Date("2015-03-25T12:00:00Z");
// // Short date
// var d = new Date("03/25/2015");
// Long dates
// var d = new Date("Mar 25 2015");

// Get Date Methods
var t = new Date();
console.log(t.getFullYear());
console.log(t.getDate());
console.log(t.getMonth());
console.log(t.getDay());
console.log(t.getTime());
console.log(t.getHours());
console.log(t.getMinutes());
console.log(t.getSeconds());
console.log(t.getMilliseconds());
// Get UTC Methods
// getUTCDate()
// getUTCDay()
// getUTCFullYear()
// getUTCHours()
// getUTCMilliseconds()
// getUTCMinutes()
// getUTCMonth()
// getUTCSeconds()

// // set Date Methods
// setDate()
// setFullYear()
// setHours()
// setMilliseconds()
// setMinutes()
// setMonth()
// setSeconds()
// setTime()


// Math Object
console.log(Math.PI);
// All Math methods in reference

// Looping
// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

let f = 1;
for (let i = 1; i < 10; i++) {
    f = f * i;
}
console.log("factorial of given data is " + f);

// Array inside Array
console.log("Array inside Array");
const ar = [
    { first: "arpit kumar", age: 12, fathername: "manoj kumar singh" },
    { first: "akash kumar", age: 42, fathername: "sohan singh" },
    { first: "pankhuri sharma", age: 52, fathername: "mohan sharma" }
];
for (let i = 0; i < ar.length; i++) {
    console.log(ar[i].first);
}
//using for each loops
//First methods
ar.forEach(function (data, index) {
    console.log(data.first);
    console.log(data.first.toUpperCase());
});
//Second Methods using arrow
ar.forEach((data, index) => {
    console.log(data.first)
});
//Third Methods using arrow in one line
ar.forEach((data, index) => (console.log(data.first)));


//for of loop
for (let elements of ar) {
    console.log(elements);
}

// For each loop
var checks = ["Arpit", "Akash", "kri", "risu", "Anshu", "Manoj"];

//First way
checks.forEach(test);
function test(value, index, array) {
    if (value.length > 3) {
        console.log("String is greater than 3");
    }
    else {
        console.log("String is not greater than 3");
    }
}
//Second way
checks.forEach(function (element, index, array) {
    console.log("The data of " + (index + 1) + " is: " + element + " and full array is:" + (checks));
});
//Third way is using arrow function in foreach loop
checks.forEach(ab => {
    if (ab.length > 3) {
        console.log(ab +
            " is greater than 3");
    }
    else {
        console.log(ab + " is not greater than 3");
    }
});



// ------------------Object topic and examples------------------

// objects declaration
const students = {
    firstname: "arpit kumar singh",
    secondname: "rishu kumar",
    age: 21,
    fathername: "manoj kumar singh"
}
// object accessing
console.log("The father name of the student is " + students.fathername + " and first name of the student is " + students.firstname);
console.log(students);

//object in array
var abc = {
    name: "akash kumar singh",
    age: 22,
    color: ["blue", "red", "black", "orange", "voilet"]
}
// accessing array under the objects
console.log(abc.color);
console.log("access only one data in the array= " + abc.color[3]);

// object in function
var abcd = {
    names: "akash kumar singh",
    age: 22,
    color: ["blue", "red", "black", "orange", "voilet"],
    check: function () {
        return this.names;
    },
    part: {  //object inside another object
        fname: "akash",
        sname: "kumar",
        lname: "singh"
    }
}
console.log(abcd.check());
console.log(abcd.part);
console.log(abcd.part.fname);
console.log("The last name of object in another object is " + abcd.part.lname);

//Another way to creating object using new
var obj = new Object();
obj.fname = "kashish";
obj.lname = "sharma";
obj.age = 21;
console.log(obj);
console.log("The first name of this object= " + obj.fname);
console.log(obj['lname']);


// Filter in javascript
const ages = [34, 56, 67, 34, 22, 7, 434, 2, 6, 343, 2, 66, 90];
const age = ages.filter(function (a) {
    if (a > 20) {
        return true;
    }
});
console.log(age);

//Second way using arrow 
const a = ages.filter(age => age >= 20);
console.log(a);

// Another example
const sb = ["Arpit kumar singh", "Akash kumar", "Pankhuri", "Kriti sharma", "Priti Singh"];
const f = sb.filter(function (data) {
    if (data.indexOf('A') >= 0) {
        return data;
    }
});
console.log(f);


// I can split in one line using arrow keyword
const f = sb.filter(data => data.indexOf('A') >= 0);
console.log(f);

// functions in javascript
//Find odd or even
function odd(num) {
    if (num % 2 == 0) {
        console.log("No is even");
    }
    else {
        console.log("No is odd");
    }
}
odd(57);

//find the factorial of given number
function factorial(num) {
    let f = 1;
    for (var i = 1; i <= num; i++) {
        f = f * i;
    }
    return (f);
}
// //first way
var data = factorial(5);
console.log("Factorial of number is: " + data);
//second way
console.log("Factorial of number is: " + factorial(6));

// Find armstrong of given Number
function armstrong(num) {
    let d, num1, r;
    num1 = num;
    d = 0;
    while (num1 > 0) {
        r = num1 % 10;
        d = d + (Math.pow(r, 3));
        num1 = num1 / 10;
    }
    if (d == num) {
        return `${num} is Armstrong`;
    }
    else {
        return `${num} is not Armstrong`;
    }
}
console.log(armstrong(153));

// Greater Number
function greater(a, b) {
    if (a > b) {
        return (a);
    }
    else {
        return (b);
    }
}
console.log(greater(458, 78) + " is greater");

// find square of each digit
function square(num) {
    return (Math.pow(num, 2));
}
console.log(square(12));
// Asynchronus function in javascript
let data = function (a, b) {
    return (a + b);
}
console.log(data(56, 78));

// Arrow function in javascript
let add = (a, b) => `The addition of ${a} and ${b} is ${a + b}`;
console.log(add(46, 32));

let random = data=> Math.floor(Math.random()*data);
console.log(random(900));