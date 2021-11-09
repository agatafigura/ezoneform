import '/style.scss'
//validate repeated password

var passwordinput = document.getElementById("password")
  , confirm_password = document.getElementById("repeat-password");

function validatePassword(){
  if(passwordinput.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

passwordinput.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//gamertag value

document.querySelector("#gamertag").addEventListener("click", function() {
    document.querySelector("#gamertag").setAttribute("value","@");
});

//show errors

const fullname = document.querySelector("#fullname");
const error1 = document.querySelector(".error1");
fullname.addEventListener("blur", showError1);

function showError1() {
    const valid = fullname.checkValidity();
    if (valid === false) {
        error1.classList.add("visible")
    } else {
        error1.classList.remove("visible");
    }
}

const email = document.querySelector("#email");
const error2 = document.querySelector(".error2");
email.addEventListener("blur", showError2);

function showError2() {
    const valid = email.checkValidity();
    if (valid === false) {
        error2.classList.add("visible")
    } else {
        error2.classList.remove("visible");
    }
}

const gamertag = document.querySelector("#gamertag");
const error3 = document.querySelector(".error3");
gamertag.addEventListener("blur", showError3);

function showError3() {
    const valid = gamertag.checkValidity();
    if (valid === false) {
        error3.classList.add("visible")
    } else {
        error3.classList.remove("visible");
    }
}

const password = document.querySelector("#password");
const error4 = document.querySelector(".error4");
password.addEventListener("blur", showError4);

function showError4() {
    const valid = password.checkValidity();
    if (valid === false) {
        error4.classList.add("visible")
    } else {
        error4.classList.remove("visible");
    }
}

const repeatPassword = document.querySelector("#repeat-password");
const error5 = document.querySelector(".error5");
repeatPassword.addEventListener("blur", showError5);

function showError5() {
    const valid = repeatPassword.checkValidity();
    if (valid === false) {
        error5.classList.add("visible")
    } else {
        error5.classList.remove("visible");
    }
}

//eye toggle

const eyeToggle = document.querySelector("i");

eyeToggle.addEventListener("click", function(e) {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
});
