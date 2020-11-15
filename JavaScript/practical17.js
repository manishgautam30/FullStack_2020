//slector
let time = document.getElementById("time");
let name = document.getElementById("name");
let day = document.getElementById("day");
let greet = document.getElementById("greeting");



//event listener

name.addEventListener("keypress", setname);
name.addEventListener("blur", setname);

//functions
function showtime() {
    let today = new Date;
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let date = today.toDateString();

    let ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML = `${addzero(hour)}<span>:</span>${addzero(minutes)}<span>:</span>${addzero(seconds)} ${ampm}`;
    setTimeout(showtime, 1000);

    day.innerHTML = `${date}`;



}

function addzero(n) {
    return ((parseInt(n, 10) < 10 ? "0" : "") + n);
}

function setgreeting() {
    let today = new Date;
    let hour = today.getHours();

    if (hour < 12) {
        greet.innerHTML = "Good Morning";
        greet.style.color = "black";

        document.body.style.backgroundImage = ' url("../images/morning.jpg")';

    } else if (hour < 17) {
        greet.innerHTML = "Good Afternoon";
        greet.style.color = "black";
        day.style.backgroundImage = " linear-gradient(to right, wheat , red)";
        day.style.color = " black";
        document.body.style.backgroundImage = 'url("../images/afternoon.jpg")';

    } else if (hour < 19) {
        greet.innerHTML = "Good Evening";
        greet.style.color = "black";
        day.style.backgroundImage = " linear-gradient(to right, gray, black)";
        document.body.style.backgroundImage = 'url("../images/evening.jpg")';

    } else {
        greet.innerHTML = "Good Night";
        time.style.color = "white"
        day.style.backgroundImage = " linear-gradient(to right, gray, black)";
        document.body.style.backgroundImage = 'url("../images/night.jpg")';

    }
}

function getname() {
    if (localStorage.getItem("myname") == null) {
        name.innerHTML = "Enter Name";
    } else {
        name.innerHTML = localStorage.getItem('myname');
    }
}

function setname(e) {
    if (e.type == "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem('myname', e.target.innerHTML)
            name.blur();
        }
    } else {
        localStorage.setItem('myname', e.target.innerHTML)
    }

}


//function calls
showtime();
setgreeting();
getname();