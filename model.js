// When User Click To Button It will Add Active Class on Model
const button = document.querySelector('.button');
button.addEventListener('click', (e) => {
    const box = e.currentTarget.parentElement.parentElement;
    box.classList.toggle('active');
})

// Show Button Of Model Box When Window Vertical Length is Greater Than 350px
const scr = document.querySelector('.model');
window.addEventListener('scroll', () => {
    if (Math.floor(window.scrollY) > 350) {
        scr.classList.add('show');
    }
    else {
        scr.classList.remove('show');
    }
})

// Form Validation for Model
const modelvalidate = document.querySelector('.modelvalidate');
modelvalidate.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = namevalidate();
    const number = numbervalidate();
    const email = emailvalidate();
    if (name && number && email) {
        window.alert('Submitted Successfully');
    }
    else {
        window.alert('Not Submitted');
    }
})
const namevalidate = () => {
    if (modelvalidate.elements['name'].value.trim() == '') {
        window.alert('Please Enter Your Name');
        return (0);
    }
    else if (modelvalidate.elements['name'].value.length < 4) {
        window.alert('Please Enter Name Should be Greater Than 4 Character');
        return (0);
    }
    else if (modelvalidate.elements['name'].value.length >= 12) {
        window.alert('Please Enter Name Should be Less Than 10 Character');
        return (0);
    }
    else {
        return (1);
    }
}
const numbervalidate = () => {
    const number = modelvalidate.elements['phone'].value;
    const data = modelvalidate.elements['phone'].value.trim();
    if (data == '') {
        window.alert('Please Enter Phone Number');
        return (0);
    }
    else if (data.indexOf(' ') >= 0) {
        window.alert('Entered Phone Number Should Not Contain Any Space');
    }
    else if (data.length != 10) {
        window.alert('Entered Phone Number Should be Equal to 10 digit');
        return (0);
    }
    else if (isNaN(number)) {
        window.alert('Number is not valid');
        return (0);
    }
    else {
        return (1);
    }
}
const emailvalidate = () => {
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = modelvalidate.elements['email'].value.trim();
    if (modelvalidate.elements['email'].value.trim() == "") {
        window.alert('Please Enter  Full Email Address');
        return (0);
    }
    else if (modelvalidate.elements['email'].value.trim().length <= 4) {
        window.alert('Please Enter Name Shoud be Greater Than 4 Character');
        return (0);
    }
    else if (!emailRegex.test(email)) {
        window.alert('Entered Email is not Valid');
        return (0);
    }
    else {
        return (1);
    }
}