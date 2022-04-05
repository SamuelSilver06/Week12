let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run (e);
    }
});

userNum.focus();

let counter = 0;


function run() {
document.getElementById("paragraph" ).innerHTML = "HelloWorld!";
document.getElementById("paragraph").style.backgroundColor = "green";
document.getElementById("paragraph").style.color = "#ffffff";
document.getElementById("paragraph") .style.padding = "20px";

randomNum () ;
userNumber () ;
compareNumbers();
}

function randomNum() {
    let ran = Math.floor (Math.random () * 10);
    return ran;
}

function userNumber() {
    let user = document.getElementById ("getNumber").value;
    return user;
}

function compareNumbers () {
let a = userNumber();
let b = randomNum(0);
let z = document.getELementById ("compare");
let c = document.getElementById ("counter");

    function compareNumbers() {
        let a = userNumber();
        let b = randomNum();
        let z = document.getElementById("compare");
        let C = document.getElementById ("counter");
        
        if ( a!= b) {
        z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#ff000o";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You have tried " + counter + " times."
        c.style.color = "white";
        c.style.backgroundColor = "#312f2f";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor = "#ff9c9c";

        } else if ( a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#00ff00";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "You have tried " + counter + " times to get it right."
        c.style.color = "white";
        c.style.backgroundColor = "#312f2F";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        counter = 0;

        }

        resetInput();

    }

function resetInput() {
    document.getElementById("getNumber").value = "";
}





}
