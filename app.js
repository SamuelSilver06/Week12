let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run (e);
    }
});

userNum.focus();

let counter = 0;


function run() {
    compare()
}

function randomNum() {
    let ran = Math.floor (Math.random () * 10);
    return ran;
}

function userNumber() {
    let user = document.getElementById ("getNumber").value;
    return user;
}

function compare(){
    a = randomNum()
    b = userNumber()


    if ( a!= b) {
        document.getElementById("compare").innerHTML = `The numbers are not the same. Computer guessed ${a} and you guessed ${b}`
        document.getElementById("compare").style.backgroundColor = "rgb(225, 17, 17)";
        counter++;
        document.getElementById("counter").innerHTML = `You have tried ${counter}`

    } else if(a == b){
        document.getElementById("compare").innerHTML = `The numbers are the same. Computer guessed ${a} and you guessed ${b}`
        document.getElementById("compare").style.backgroundColor = "green";
        document.getElementById("counter").innerHTML = `You have tried ${counter} to get it right`
        counter = 0;
    }

    resetInput();

}    

function resetInput() {
    document.getElementById("getNumber").value = "";
}
