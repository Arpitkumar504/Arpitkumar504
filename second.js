// DOM
// Selecting elements in javascript
const changecontent = () => {
    let data = document.getElementById('heading');
    data.innerHTML = "Data Changed";
    // let data = document.querySelector('#heading');
    // data.innerHTML="Data Changed by query selector";
    document.querySelector('.btn').innerHTML = "Clicked";
}

let a = document.getElementsByClassName('para');
console.log(a);

let b = document.getElementsByTagName('p');
console.log(b.length);
console.log(b);
for (let i = 0; i < b.length; i++) {
    console.log(b[i].innerHTML = "Changed");
}
let c = document.querySelectorAll('.btn');
console.log(c.length);

// Traversing Elements
let elm = document.getElementById("intro");
// Find Parent Element
// let parent = elm.parentElement;
// console.log(parent);
// console.log(parent.innerHTML="Akash Kumar");
// console.log(parent);
// Find First Element Child
// let p1= elm.firstElementChild;
// console.log(p1);
// Find Last Element Child
// let p2=elm.lastElementChild;
// console.log(p2);
// Find Children
// console.log(elm.children);
// Find previous sibling
// console.log(elm.previousElementSibling);
// Find next sibling
// console.log(elm.nextElementSibling);
// let sibling=elm.nextElementSibling;
// while(sibling){
//     if(elm){
//         console.log(sibling);
//         sibling=sibling.nextElementSibling;
//     }
// }
// let bb=elm.parentElement.nodeName;
let bb = elm.parentNode.nodeName;
console.log(bb);
let bbc = elm.childNodes[7].innerHTML;
console.log(bbc);
let bc = elm.firstChild;
console.log(bc);

// Operation on traversal in Element
let data1 = document.querySelector('.img-fluid');
let s = document.getElementById('s');
let p = document.getElementById('ab');
console.log(data1.parentElement);
data1.parentElement.style.backgroundColor = 'red';
console.log(data1.parentElement.nodeName);
console.log(data1.parentNode);

console.log(s);
console.log(s.children);
console.log(s.childNodes);
console.log(s.innerHTML);
console.log(s.textContent);

console.log(p.children);
console.log(p.childNodes[1].textContent);
console.log(p.lastElementChild.parentElement);
console.log(p.childNodes[1].nextElementSibling.nodeType);
if (p.childNodes[1].nodeType == 1) {
    console.log(`Avaliable node is- ${p.childNodes[1].innerHTML}`);
}
else {
    console.log("h2 is not Elements");
}

// Manupulating Elements
let create = document.createElement("h2");
let add = document.createTextNode("newly added using create element");
create.id = 'id_of_h2' //set id of the created Element
create.className = 'classname_of_h2'; //Set class name of the created Element
create.appendChild(add);
console.log(create);
document.querySelector('#ab').appendChild(create);

let insert = document.querySelector('#ab');
insert.insertBefore(create, insert.childNodes[2]);
p.firstElementChild.nextElementSibling.style.backgroundColor = "green";
console.log(p.innerHTML);

let adjacent = document.querySelector('#ab');
let da = "<h2>This is adjacent html<h2>";
adjacent.insertAdjacentHTML("afterbegin", da);


let cr = document.createElement('h2');
cr.textContent = "dkfhkdshfksdhf";
adjacent.replaceChild(cr, adjacent.childNodes[3]);

adjacent.removeChild(adjacent.childNodes[3]);

console.log(p.childNodes);

// Working with attribute
p.firstElementChild.setAttribute('class', 'arpit_singh');
console.log(p.firstElementChild);
console.log(p.firstElementChild.getAttribute('class'));

// p.firstElementChild.removeAttribute('class');

if (p.firstElementChild.getAttribute('class') != null) {
    console.log(p.firstElementChild.getAttribute('class'));
}
else {
    console.log('Attribute is not in the list');
}

if ((p.firstElementChild.hasAttribute('class'))) {
    console.log('Attribute is available in the element');
}
else {
    console.log('Not any Attribute are available in the Element');
}

// Manupulating Element Style

// 1st way to adding style in Element
p.children[0].style.border = "2px solid black";
p.children[4].style.fontWeight = "bolder";

// 2nd way to adding style in Element using cssText
p.children[4].style.cssText = 'color:white;background-color:green;font-size:50px';

// 3rd way to adding style in Element using setAttribute() Method
p.setAttribute('style', 'box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);');

console.log(p.innerHTML);
console.log(p.getAttribute('style'));

console.log(p.className);
console.log(p.classList);
console.log(p.classList[1]);

p.classList.add('addh', 'kjdhfkjd', 'dshfk');
console.log(p.classList);

p.classList.remove('addh');

if (p.classList.contains('addh') && (p.classList.contains('dshfk'))) {
    console.log("class is available");
}
else {
    console.log("class is not available");
}

for (let l of p.classList) {
    console.log(l);
}

// javascript Events
// There are four way to create an Event using javascript

// first way using inline event(alert)
// second way using function like onclick() etc.
// third way using ab.onclick() function
// fourth way using addEventListener method

// second way 

const call = () => {
    console.log('button was clicked');
    let y = document.createElement('h1');
    let y1 = document.createTextNode("second way");
    y.append(y1);
    let u = document.querySelector('.second');
    u.append(y);
}

// third way
let ev1 = document.querySelector('.third');
ev1.onclick = () => {
    console.log('Third way');
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.detail);
}

// fourth way
let ev2 = document.querySelector('.fourth');
ev2.addEventListener('click', () => {
    alert('This is fourth way to writing an event');
});

// Mouse Events
const s1 = document.querySelector('.mouseevent');
let m = document.querySelector('.mouse');
let aa = 0;
// Mouse Click Event
m.addEventListener('click', () => {
    aa++;
    if (aa <= 1) {
        const cl = document.createElement('h1');
        let text = "Button clicked";
        cl.textContent = text;
        s1.append(cl);
        cl.style.textAlign = 'center';
    }
});

// Mouse Double Click Event
const message = document.querySelector('#message');
m.addEventListener('dblclick', () => {
    message.innerHTML = "Mouse Double Clicked";
    message.style.color = 'green';
});

// Mouse Down Event
const down = document.querySelector('#down');
down.addEventListener('mousedown', () => {
    down.style.backgroundColor = 'green';
    down.innerHTML = `Mouse down`;
    message.innerHTML = `button is ${event.button}`;
    if (event.button == 2) {
        alert('do not press right button on mouse');
    }
});

// Mouse Up Event
down.addEventListener('mouseup', () => {
    down.style.backgroundColor = "yellow";
    down.innerHTML = `Mouse up`;
});

// Mouse Enter Event
m.addEventListener('mouseenter', () => {
    console.log("mouse Entered in box");
    m.style.backgroundColor = 'orange';
});

// Mouse Leave Event
m.addEventListener('mouseleave', () => {
    console.log("mouse leaved in box");
    m.style.backgroundColor = 'red';
});

// Mouse Over Event
m.addEventListener('mouseover', () => {
    console.log("mouse over in box");
    m.firstElementChild.style.color = 'white';
});

// Mouse out Event
m.addEventListener('mouseout', () => {
    console.log("mouse out in box");
    m.firstElementChild.style.color = 'blue';
});


// Keyboard Event
const tar = document.querySelector('.target');
const show = document.querySelector('.show');
const showsecond = document.querySelector('.showsecond');

// Keypress Event
// Best practice to use keydown event because keypress is deprecated, so keydown event is similar to keypress event
tar.addEventListener('keydown', () => {
    show.innerHTML = `You Pressed ${event.key} Button and Code of Key is ${event.code}`;
    if (event.shiftKey && (event.code == 'KeyA')) {
        showsecond.innerHTML = "please do not press A with shift key ";
        alert('please do not press a with shift in keyboard');
    }
    if (event.code == 'AudioVolumeUp') {
        alert('volume up');
    }
});

// Keyup Event
tar.addEventListener('keyup', () => {
    showsecond.innerHTML = `Key is Up`;
});

// Keydown Event
tar.addEventListener('keydown', () => {
    showsecond.innerHTML = `Key is Down`;
});

// Scroll Event
window.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) { //Hrizontal scroll(deltaX)
        console.log('Scrolling up');
        console.log(`Scrolled pixel is ${Math.floor(window.pageYOffset)}`);
    }
    else {
        console.log('Scrolling down');
        console.log(`Scrolled pixel is ${Math.floor(window.pageYOffset)}`);
    }
});

let b1 = 0;
const u = document.querySelector('.keyevent');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 2800) {
        b1++;
        if (b1 <= 1) {
            const ad = document.createElement('h1');
            let abc = `This is greater than 2800px and event is fired`;
            ad.textContent = abc;
            u.appendChild(ad);
            ad.style.cssText = "text-align:center;color:black";
        }
    }
});

// scrolltop and scrollLeft
const button = document.querySelector('.over');
const left = document.querySelector('.left');
const top1 = document.querySelector('.top');
left.addEventListener('click', () => {
    button.scrollLeft += 50;
});

top1.addEventListener('click', () => {
    button.scrollTop += 50;
});

// scrollTo() and scrollBy()
const scr = document.querySelector('.btns');
const sr = document.querySelector('.v');
const btnsecond = document.querySelector('.btnsecond');
scr.addEventListener('click', () => {
    sr.scrollTo(0, 100);
});

btnsecond.addEventListener('click', () => {
    sr.scrollBy(0, 100);
});

// Page Load Event

const content = document.querySelector('.content');
const load = document.querySelector('.load');
// DOMContentLoaded Event
window.addEventListener('DOMContentLoaded', () => {
    content.innerHTML = "Dom tree is fully loaded";
    console.log("dom is created");
});

// Load Event
window.addEventListener('load', () => {
    load.textContent = "Image and all data is fully loaded";
    console.log('Images is fully loaded');
});

// beforeunload Event
// window.addEventListener('beforeunload',(event)=>{
//     event.preventDefault();
//     event.returnValue='';
// });

// unload Event
window.addEventListener('unload', () => {
    alert('data is not loaded');
});

// Focus and Blur Event
const focused = document.querySelector('.f');
const f = document.querySelector('.showdata');

focused.addEventListener('focus', () => {
    f.textContent = "Focused Element";
    focused.style.cssText = "background-color:green; color:white; border:2px solid black;outline:none;";
});

focused.addEventListener('blur', () => {
    f.textContent = "Blur Event";
    focused.style.cssText = "background-color:white;color:black;";
});


// Form Event

// Form Validation using Submit by website
// const form = document.querySelector('#signup');

// const NAME_REQUIRED = "PLEASE ENTER YOUR NAME";
// const EMAIL_REQUIRED = "PLEASE ENTER YOUR EMAIL";
// const EMAIL_INVALID = "PLEASE ENTER EMAIL CORRECTLY";
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let namevalid = hasvalid(form.elements["name"], NAME_REQUIRED);
//     let emailvalid = validateemail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
//     if (namevalid && emailvalid) {
//         alert("For demo purpose");
//     }
// });

// const hasvalid = (input, message) => {
//     if (input.value.trim() === "") {
//         return showerror(input, message);
//     }
//     return showsuccess(input);
// }

// const showerror = (input, message) => {
//     return showmessage(input, message, false);
// }

// const showsuccess = (input) => {
//     return showmessage(input, "", false);
// }

// const validateemail = (input, reqmsg, invmsg) => {
//     if (!hasvalid(input, reqmsg)) {
//         return false
//     }
//     const emailRegex =
//         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     const email = input.value.trim();
//     if (!emailRegex.test(email)) {
//         return showerror(input, invmsg);
//     }
//     return true;
// }

// function showmessage(input, message, type) {
//     // get the small element and set the message
//     const msg = input.parentNode.querySelector(".mes");
//     msg.innerText = message;
//     // update the class for the input
//     input.className = type ? "success" : "error";
//     return type;
// }

// Own Form Event
const forms = document.querySelector('.sign');
// const names = document.querySelector('#names');
// const email = document.querySelector('#emails');
let msg = document.querySelector('.msg');
let msg1 = document.querySelector('.msg1');
forms.addEventListener('submit', (event) => {
    event.preventDefault();
    let names = namecheck();
    let emails = emailcheck();
    if (names && emails) {
        window.alert('From Submitted');
    }
    else {
        window.alert('Form Not Submitted')
    }
});
const namecheck = () => {
    if (forms.elements['name'].value.trim() == "") {
        msg.textContent = "Please Enter your Name";

        return false;
    }
    else if (forms.elements['name'].value.length <= 4) {
        msg.textContent = "Enter Your Full Name";
        return false;
    }
    else {
        msg.textContent = "";
        return true;
    }
}
const emailcheck = () => {
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = forms.elements['email'].value.trim();
    if (forms.elements['email'].value.trim() == "") {
        msg1.textContent = "Enter Email";
        return false;
    }
    else if (forms.elements['email'].value.trim().length <= 4) {
        msg1.textContent = "Enter Valid Email";
        return false;
    }
    else if (!emailRegex.test(email)) {
        return false;
    }
    else {
        msg1.textContent = "";
        return true;
    }
}

// Form Event(Radio)
const radio = document.querySelectorAll('input[name="first"]');
const btnradio = document.querySelector('.btnradio');
const rad = document.querySelector('.rad');
btnradio.addEventListener('click', () => {
    let data = false;
    radio.forEach(element => {
        if (element.checked) {
            rad.textContent = `You Selected: ${element.value}`;
            data = true;
        }
    });
    if (!data) {
        rad.textContent = "Select Option";
    }
})
// Form Event(Checkbox)
const checkbox = document.querySelectorAll('input[type="checkbox"');
const btncheck = document.querySelector('.btncheck');
const check = document.querySelector('.check');
btncheck.addEventListener('click', () => {
    let data = false;
    let selected = [];
    checkbox.forEach(e => {
        if (e.checked) {
            selected.push(e.value);
            data = true;
        }
    });
    if (!data) {
        check.textContent = "SelectOption";
    }
    else {
        check.textContent = `You Selected: ${selected}`;
    }
})
// Select/Unselect all Checkboxes
// btncheck.addEventListener('click',()=>{
//     for(const element of checkbox){
//         if(element.checked){
//             for(const data of checkbox){
//                 data.checked=false;
//             }
//         }
//         else{
//             for(const data of checkbox){
//                 data.checked=true;
//             }
//         }
//     } 
// })
// Form Event(Select Box)
const selectbox = document.querySelector('#selectbox');
const selectbtn = document.querySelector('.selectbtn');
const selectdata = document.querySelector('.selectdata');
selectbtn.addEventListener('click', () => {
    selectdata.textContent = selectbox.options[selectbox.selectedIndex].value;
})

// Add and Remove data Dynamically
const nameenter = document.querySelector("#data");
const addbtn = document.querySelector('.addbtn');
const nameselect = document.querySelector('#nameselect');
const removebtn = document.querySelector('.removebtn');
addbtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (nameenter.value == "") {
        window.alert("please Enter the data");
    }
    const optionvalue = new Option(nameenter.value, nameenter.value);
    nameselect.add(optionvalue, undefined);
    nameenter.value = "";
    nameenter.focus();
})
removebtn.addEventListener('click', () => {
    let selecteddata = [];
    for (let i = 0; i < nameselect.options.length; i++) {
        selecteddata[i] = nameselect.options[i].selected;
    }
    let indexes = nameselect.options.length;
    while (indexes--) {
        if (selecteddata[indexes]) {
            nameselect.remove(indexes);
        }
    }
})

// Form Event(Change Event)
// input change
const inputchange = document.querySelector('.inputchange');
const changedata = document.querySelector('.changedata');
inputchange.addEventListener('change', (e) => {
    changedata.textContent = e.currentTarget.value;
    e.currentTarget.focus();
})
// radio change
const radiochange = document.querySelectorAll('input[name="radiochange"]');
const radiodata = document.querySelector('.radiodata');
radiochange.forEach(e => {
    e.addEventListener('change', (element) => {
        element.preventDefault();
        radiodata.textContent = `You changed radio data: ${element.currentTarget.value}`;
    })
})
// checkbox change
const checkchange = document.querySelectorAll('input[name="abcd"]');
const checkdata = document.querySelector('.checkdata');
checkchange.forEach(element => {
    element.addEventListener('change', (e) => {
        checkdata.textContent = `The ${e.currentTarget.value} Changed`;
    })
})
// select change
const selectchange = document.querySelector('#selectchange');
const select = document.querySelector('.selectdatas');
selectchange.addEventListener('change', (e) => {
    e.preventDefault();
    select.textContent = `You Selected: ${e.currentTarget.value} Option`;
})

// Form Event(Input Event)
const inputtext = document.querySelector('.inputs');
const inputmessage = document.querySelector('.inputmessage');
inputtext.addEventListener('input', (e) => {
    e.preventDefault();
    inputmessage.textContent = `Your Data is: ${e.currentTarget.value}`;
})

// Event bubbling and Event Capturing
const btnpro = document.querySelector('.btnpro');
const textpro = document.querySelector('.textpro');
const upper = document.querySelector('.upper');
const prop = document.querySelector('.propagation');
btnpro.addEventListener('click', (e) => {
    textpro.textContent = `You Clicked btn`;
    console.log('button clicked');
}, { capture: true })
textpro.addEventListener('dblclick', (e) => {
    e.currentTarget.style.backgroundColor = 'black';
    console.log('text clicked');
})
upper.addEventListener('click', (e) => {
    e.currentTarget.style.backgroundColor = 'red';
    console.log('column clicked');
    e.stopPropagation();
})
prop.addEventListener('click', (e) => {
    prop.style.backgroundColor = "pink";
    console.log('section clicked');
}, { capture: true })