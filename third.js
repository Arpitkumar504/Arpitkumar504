// BOM
// Window Object
var globalvar = 45;
var showglobal = () => {
    console.log("This is window global object method");
}
console.log(window.globalvar);
window.showglobal();

// window properties
// innerHeight and innerWidth/outerHeight and outerWidth
const height = document.querySelector('.height');
const width = document.querySelector('.width');
const outerheight = document.querySelector('.outerheight');
const outerwidth = document.querySelector('.outerwidth');
height.textContent = `Inner height of page: ${window.innerHeight}`;
width.textContent = `Inner width of page: ${window.innerWidth}`;
outerheight.textContent = `Outer height of page: ${window.outerHeight}`;
outerwidth.textContent = `Outer width of page: ${window.outerWidth}`;

//open a new window
const btns = document.querySelector('.btns');
let url = 'https://javascripttutorial.net/';
let feature = 'height=700,width=700';
let name = 'javascripttutorial';
let closes;
btns.addEventListener('click', (e) => {
    closes = window.open(url, name, feature);
})
// setTimeout(() => {
//     window.open(url, name, feature);
// }, 1000);

// Close a window
const closebtn = document.querySelector('.close');
closebtn.addEventListener('click', (e) => {
    closes.close();
})

// Resize Window
// resizeTo()/resizeBy() and moveTo()/moveBy()

// Time Event
// setTimeout() and clearTimeout()
const time = document.querySelector('.time');
const timebtn = document.querySelector('.timebtn');
const cancel = document.querySelector('.cancelbtn');
var can;
timebtn.addEventListener('click', (e) => {
    time.textContent = 'Loading......';
    can = setTimeout(() => {
        time.textContent = 'Welcome Arpit Kumar';
    }, 3000);
})
cancel.addEventListener('click', () => {
    clearTimeout(can);
})

//setInterval() and clearInterval()
const tim = document.querySelector('.tim');
const interval = document.querySelector('.interval');
const intervalcan = document.querySelector('.intervalcan');
var t = 0, cancelinterval;
interval.addEventListener('click', (e) => {
    tim.textContent = 'Loading......';
    cancelinterval = setInterval(() => {
        tim.textContent = `${t}`;
        t++;
    }, 1000);

})
intervalcan.addEventListener('click', () => {
    clearInterval(cancelinterval);
})

const date=document.querySelector('.date');
var d=new Date();   
setInterval(() => {
    date.textContent=`${d.toLocaleTimeString()}`;
}, 1000);

// Location
const loc=document.querySelector('.loc');
loc.textContent=`The URL is: ${location}`;
// console.log(location);
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location.search);
// console.log(location.hash);
// console.log(location.origin);
// console.log(location.username);
// console.log(location.password); 

// setTimeout(() => {
//     location.replace('https://www.javascript.net');
// }, 1000);

// working with query string
const urlparam=new URLSearchParams(location.search);
for (const [key,value] of urlparam) {
    console.log(`${key}:${value}`);
}
for (const key of urlparam.keys()) {
    console.log(key);
}
for (const value of urlparam.values()) {
    console.log(value);
}
for (const entry of urlparam.entries()) {
    console.log(entry);
}
console.log(urlparam.has('abc'));

// History
// history.back();
// history.forward();
// history.go();

// Navigator
// navigator.userAgent;
// navigator.appCodeName;
// navigator.appName;
// navigator.appVersion;
// navigator.language;
// navigator.languages;
// navigator.platform;

// Screen
// screen.availHeight;
// screen.availWidth;
// screen.colorDepth;
// screen.orientation;
// screen.height;
// screen.left;
// screen.pixelDepth;
// screen.width;
// screen.top;