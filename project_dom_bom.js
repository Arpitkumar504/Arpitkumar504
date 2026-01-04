// ________Project on Dom ________

// Background Changer
const color = ["red", "green", "voilet", "blue", "yellow", "orange", "black", "pink", "grey"];
const back = document.querySelector(".back");
const clk = document.querySelector('.clk');
const val = document.querySelector('.val');
back.style.backgroundColor = "red";
clk.addEventListener('click', () => {
    const clr = Math.floor(Math.random() * color.length);
    back.style.backgroundColor = color[clr];
    val.textContent = color[clr];
});


// Hex Color Background Changer
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const backg = document.querySelector('.backg');
const hexbutton = document.querySelector('.hex');
const value = document.querySelector('.value');
backg.style.backgroundColor = 'green';
hexbutton.addEventListener('click', () => {
    let index = "#";
    for (let i = 0; i <= 5; i++) {
        const rand = Math.floor(Math.random() * hex.length);
        index += hex[rand];
    }
    backg.style.backgroundColor = index;
    value.textContent = index;
});


// Hex Color Background Search
const backsearch = document.querySelector('.backsearch');
const hexcode = document.querySelector('.hexcode');
const values = document.querySelector('.values');
hexcode.addEventListener('click', () => {
    let h = "#";
    const data = prompt("Enter color code and get color");
    h += data;
    if (data.length == 6) {
        backsearch.style.backgroundColor = h;
        values.textContent = h;
    }
    else {
        alert('Wrong Code');
    }
});

// Color Switcher
const a = document.querySelectorAll(".a");
const clr = document.querySelector(".color");
const dis = document.querySelector('.dis');
a.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('red')) {
            clr.style.backgroundColor = "red";
            dis.textContent = "Red";

        }
        else if (e.currentTarget.classList.contains('green')) {
            clr.style.backgroundColor = "green";
            dis.textContent = "Green";
        }
        else if (e.currentTarget.classList.contains('yellow')) {
            clr.style.backgroundColor = "yellow";
            dis.textContent = "Yellow";
        }
        else {
            clr.style.backgroundColor = "pink";
            dis.textContent = "Pink";
        }
    })
})

// Filter cards
// Third Way
const data = document.querySelectorAll('.item');
const bt = document.querySelectorAll('.bt');
bt.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.currentTarget.dataset.filter;
        data.forEach(e => {
            if (filter === 'all') {
                e.style.display = "block";
            }
            else {
                if (e.classList.contains(filter)) {
                    e.style.display = "block";
                }
                else {
                    e.style.display = "none";
                }
            }
        })
    });
});
const searchbar = document.querySelector('.searchbar');
searchbar.addEventListener('keyup', (e) => {
    const d = e.currentTarget.value.trim();
    data.forEach(element => {
        if (d == "all") {
            element.style.display = "block";
        }
        else {
            if (element.className.includes(d)) {
                element.style.display = "block";
            }
            else {
                element.style.display = "none";
            }
        }
    })
})

// Fourth way
// bt.forEach(e => {
//     e.addEventListener('click', (element) => {
//         if (element.currentTarget.classList.contains('plr')) {
//             data.forEach(e => {
//                 if (e.classList.contains('plr')) {
//                     e.style.display = 'block';
//                 }
//                 else {
//                     e.style.display = 'none';
//                 }
//             })
//         }
//         else if (element.currentTarget.classList.contains('upcom')) {
//             data.forEach(e => {
//                 if (e.classList.contains('upcom')) {
//                     e.style.display = 'block';
//                 }
//                 else {
//                     e.style.display = 'none';
//                 }
//             })
//         }
//         else if (element.currentTarget.classList.contains('latest')) {
//             data.forEach(e => {
//                 if (e.classList.contains('latest')) {
//                     e.style.display = 'block';
//                 }
//                 else {
//                     e.style.display = 'none';
//                 }
//             })
//         }
//         else if (element.currentTarget.classList.contains('follow')) {
//             data.forEach(e => {
//                 if (e.classList.contains('follow')) {
//                     e.style.display = 'block';
//                 }
//                 else {
//                     e.style.display = 'none';
//                 }
//             })
//         }
//         else {
//             data.forEach(e => {
//                 e.style.display = 'block';
//             })
//         }
//     })
// })

// Second Way
// const data = document.querySelectorAll('.item');
// const bt = document.querySelectorAll('.bt');
// bt.forEach(element => {
//     element.addEventListener('click', (e) => {
//         e.preventDefault();
//         const filter = e.target.dataset.filter;
//         data.forEach(d => {
//             if (filter == 'all') {
//                 data.forEach(e => {
//                     if (e.classList.contains('item')) {
//                         e.style.display = "block";
//                     }
//                 })
//             }
//             else if (filter == 'latest') {
//                 data.forEach(e => {
//                     if (e.classList.contains('latest')) {
//                         e.style.display = "block";
//                     }
//                     else {
//                         e.style.display = "none";
//                     }
//                 })
//             }
//             else if (filter == 'follow') {
//                 data.forEach(e => {
//                     if (e.classList.contains('follow')) {
//                         e.style.display = "block";
//                     }
//                     else {
//                         e.style.display = "none";
//                     }
//                 })
//             }
//             else if (filter == 'plr') {
//                 data.forEach(e => {
//                     if (e.classList.contains('plr')) {
//                         e.style.display = "block";
//                     }
//                     else {
//                         e.style.display = "none";
//                     }
//                 })
//             }
//             else if (filter == 'upcom') {
//                 data.forEach(e => {
//                     if (e.classList.contains('upcom')) {
//                         e.style.display = "block";
//                     }
//                     else {
//                         e.style.display = "none";
//                     }
//                 })
//             }
//         });
//     });
// });

// First way-Own creted filter project
// const but = document.querySelector('.plr');
// const all = document.querySelector('.all');
// const latest = document.querySelector('.latest');
// const follow = document.querySelector('.follow');
// const upcom = document.querySelector('.upcom');
// const data = document.querySelectorAll('.item');

// but.addEventListener('click',()=>{
//     data.forEach(element => {
//         if(element.classList.contains('popular')){
//             element.style.display="block";
//         }
//         else{
//             element.style.display="none";
//         }
//     });
// });

// all.addEventListener('click',()=>{
//     data.forEach(element => {
//         if(element.classList.contains('item')){
//             element.style.display="block";
//         }
//     });
// });

// latest.addEventListener('click',()=>{
//     data.forEach(element => {
//         if(element.classList.contains('lat')){
//             element.style.display="block";
//         }
//         else{
//             element.style.display="none";
//         }
//     });
// });

// follow.addEventListener('click',()=>{
//     data.forEach(element => {
//         if(element.classList.contains('fol')){
//             element.style.display="block";
//         }
//         else{
//             element.style.display="none";
//         }
//     });
// });

// upcom.addEventListener('click',()=>{
//     data.forEach(element => {
//         if(element.classList.contains('upc')){
//             element.style.display="block";
//         }
//         else{
//             element.style.display="none";
//         }
//     });
// });

// Step Value Counter
const btn = document.querySelectorAll('.b');
const v = document.querySelector('.v');
let datas = 0;
btn.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('Decrease')) {
            datas--;
            v.style.color = "red";
        }
        else if (e.currentTarget.classList.contains('Increase')) {
            datas++;
            v.style.color = "green";
        }
        else {
            datas = 0;
            v.style.color = "yellow";
        }
        v.textContent = datas;
    })
});

// Dice Rolling Game
// Player Name Edit
var playerfirst = document.querySelector('.playerfirst');
var playersecond = document.querySelector('.playersecond');
const edit = document.querySelector('.edit');
edit.addEventListener('click', (e) => {
    var pfirst = prompt('Enter First Player Name');
    var psecond = prompt('Enter Second Player Name');
    playerfirst.textContent = pfirst;
    playersecond.textContent = psecond;
})

// Dice rolling
const roll = document.querySelector('.roll');
const dicefirst = document.querySelector('.dicefirst');
const dicesecond = document.querySelector('.dicesecond');
const showdata = document.querySelector('.showdata');
roll.addEventListener('click', (e) => {
    setTimeout(() => {
        var random1 = Math.floor(Math.random() * 6) + 1;
        var random2 = Math.floor(Math.random() * 6) + 1;
        dicefirst.setAttribute('src', '/old_src/website/javascript/project image/dice' + random1 + '.png');
        dicesecond.setAttribute('src', '/old_src/website/javascript/project image/dice' + random2 + '.png');
        if (random1 < random2) {
            showdata.textContent = `${playersecond.textContent} is Win`;
        }
        else if (random1 > random2) {
            showdata.textContent = `${playerfirst.textContent} is Win`;
        }
        else {
            showdata.textContent = 'Match is Draw';
        }
    }, 1000);
})

// Calculator project
const digit = document.querySelectorAll('.digit');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const del = document.querySelector('.delete');
digit.forEach(element => {
    element.addEventListener('click', (e) => {
        let sum = e.currentTarget.dataset.digit;
        screen.value += sum;
    })
})
// clear data
clear.addEventListener('click', (e) => {
    screen.value = " ";
})
// delete data from screen
del.addEventListener('click', (e) => {
    let data = screen.value.slice(0, screen.value.length - 1)
        ;
    screen.value = data;
})
// Evaluate
equal.addEventListener('click', (e) => {
    if (screen.value == "") {
        screen.value = "Please Enter data";
    }
    else {
        let d = eval(screen.value);
        screen.value = d;
    }
})
// Number Guessing Game Project
const number = document.querySelector('.number');
const time = document.querySelector('.time');
const result = document.querySelector('.result');
const guess = document.querySelector('.guess');
const dlt = document.querySelector('.clrs');
let chance = 10, total = 0, ran = true, rdm;
guess.addEventListener('click', (e) => {
    chance--;
    total++;
    if (ran) {
        rdm = Math.floor(Math.random() * 10);
        ran = false;
    }
    if (number.value == rdm) {
        result.textContent = `Winner in ${total}th Chance`;
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else if (number.value < rdm) {
        result.textContent = 'Too Low';
        time.textContent = `${chance} Chance Left`;
        number.focus();
    }
    else if (number.value > rdm) {
        result.textContent = 'Too High';
        time.textContent = `${chance} Chance Left`;
        number.focus();
    }
    if (chance == 0) {
        result.textContent = 'Looser';
        time.textContent = `You not win in 10 times`;
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
})
dlt.addEventListener('click', (e) => {
    number.value = '';
    number.focus();
})

// Word and Character Counter
const area = document.querySelector('.area');
const words = document.querySelector('.word');
const char = document.querySelector('.char');
area.addEventListener('input', (e) => {
    char.textContent = e.currentTarget.value.length;
    let word = e.currentTarget.value.trim();
    let data = word.split(" ");
    let wordspace = data.filter(e => {
        return (e != "");
    })
    words.textContent = wordspace.length;
})

// Slider Without ajax
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
const images = document.querySelector('.images');
const names = document.querySelector('.names');
const deg = document.querySelector('.deg');
const des = document.querySelector('.des');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randombtn = document.querySelector('.randombtn');
let currentItem = 0;
window.addEventListener('DOMContentLoaded', (e) => {
    const item = reviews[currentItem];
    images.src = item.img;
    names.textContent = item.name;
    deg.textContent = item.job;
    des.textContent = item.text;
})
const showPerson = (person) => {
    const item = reviews[person];
    images.src = item.img;
    names.textContent = item.name;
    deg.textContent = item.job;
    des.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", (e) => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", (e) => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
//   show random person
randombtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

// Random Quote Generator
const quote = [
    {
        q: "This is the first Random Paragraph of Random Quote Generator",
        a: "John First"
    },
    {
        q: "This is the second Random Paragraph of Random Quote Generator",
        a: "John Second"
    },
    {
        q: "This is the third Random Paragraph of Random Quote Generator",
        a: "John Third"
    },
    {
        q: "This is the fourth Random Paragraph of Random Quote Generator",
        a: "John Fourth"
    }
]
const quotes = document.querySelector('.quotes');
const author = document.querySelector('.author');
const gen = document.querySelector('.gen');
let items = 0;
window.addEventListener('DOMContentLoaded', (e) => {
    let item = quote[items];
    quotes.textContent = item.q;
    author.textContent = item.a;
})
gen.addEventListener('click', (e) => {
    const random = Math.floor(Math.random() * quote.length);
    let randomquote = quote[random];
    quotes.textContent = randomquote.q;
    author.textContent = randomquote.a
})

// Message passing
const msg = document.querySelector('.msg');
const feedback = document.querySelector('.feedback');
const last = document.querySelector('.last');
const sub = document.querySelector('.sub');
sub.addEventListener('click', (e) => {
    if (msg.value == " ") {
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000)
    }
    else {
        last.textContent = msg.value;
        msg.value = " ";
        msg.focus();
    }
})

// Ballon Poping
const ballon = document.querySelectorAll('.ballons');
const cont = document.querySelector('.cont');
const final = document.querySelector('.final');
let count = 0;
ballon.forEach(e => {
    e.addEventListener('mouseover', (element) => {
        count++;;
        element.currentTarget.style.backgroundColor = '#ededed';
        element.currentTarget.textContent = "Poped!";
        if (count == 12) {
            console.log('All ballon poped');
            cont.innerHTML = ' ';
            final.style.display = 'block';
        }
    })
})

// Countdown
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
let countdown = () => {
    setInterval(() => {
        let future = new Date('12 June, 2022 10:00:00');
        let current = new Date();
        let mydate = future - current;
        let days = Math.floor(mydate / 1000 / 60 / 60 / 24);
        let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(mydate / 1000 / 60) % 60;
        let seconds = Math.floor(mydate / 1000) % 60;
        day.textContent = days;
        hour.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;
    }, 1000);
}
countdown();

// Stopwatch
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const milli = document.querySelector('.milli');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
let millisec = 00, secd = 00, minu = 00, s = true, stops;
start.addEventListener('click', (e) => {
    clearInterval(stops);
    stops = setInterval(() => {
        if (s) {
            min.textContent = `00`;
            sec.textContent = `00`;
            milli.textContent = `00`;
            s = false;
        }
        millisec++;
        if (millisec <= 9) {
            milli.textContent = `0${millisec}`;
        }
        if (millisec > 9) {
            milli.textContent = millisec;
        }
        if (millisec > 99) {
            secd++;
            sec.textContent = `0${secd}`;
            millisec = 0;
            milli.textContent = `00`;
        }
        if (secd > 9) {
            sec.textContent = secd;
        }
        if (secd > 60) {
            minu++;
            min.textContent = `0${minu}`;
            secd = 0;
            millisec = 0;
            sec.textContent = `00`;
            milli.textContent = `00`;
        }
        if (minu > 9) {
            min.textContent = minu;
        }
    }, 10);
})
reset.addEventListener('click', (e) => {
    clearInterval(stops);
    millisec = 0;
    secd = 0;
    minu = 0;
    milli.textContent = `00`;
    sec.textContent = `00`;
    min.textContent = `00`;
})
stop.addEventListener('click', (e) => {
    clearInterval(stops);
})

// Digital Clock
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');
const sess = document.querySelector('.sess');
let session = 'AM';
window.addEventListener('DOMContentLoaded', (e) => {
    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        if (hour == 0) {
            hour = 12;
        }
        if (hour > 12) {
            hour = hour - 12;
            session = "PM";
        }
        hour = (hour < 10) ? "0" + hour : hour;
        minute = (minute < 10) ? "0" + minute : minute;
        second = (second < 10) ? "0" + second : second;
        hr.textContent = hour;
        mn.textContent = minute;
        sc.textContent = second;
        sess.textContent = session;
    }, 1000);
})

// Increment Counter
const counter = document.querySelectorAll('.counter');
const lengths = document.querySelector('.length');
window.addEventListener('DOMContentLoaded', () => {
    // if (window.scrollY > 350) {
    counter.forEach(element => {
        element.textContent = 0;
        let update = () => {
            const target = +element.dataset.target;
            let startingcounter = +element.textContent;
            let incr = target / 100;
            if (startingcounter < target) {
                element.textContent = `${Math.round(startingcounter + incr)}`;
                setTimeout(update, 10);
            }
            else {
                element.textContent = target;
            }
        }
        update();
    })
    // }
})