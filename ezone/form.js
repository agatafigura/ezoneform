"use strict;";

import data from "./data.json";
console.log(data);
import "/style.scss";


// gotoForm();

//validate repeated password

var passwordinput = document.getElementById("password"),
  confirm_password = document.getElementById("repeat-password");

function validatePassword() {
  if (passwordinput.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

passwordinput.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//gamertag value

document.querySelector("#gamertag").addEventListener("click", function () {
  document.querySelector("#gamertag").setAttribute("value", "@");
});

//show errors

const fullname = document.querySelector("#fullname");
const error1 = document.querySelector(".error1");
fullname.addEventListener("blur", showError1);

function showError1() {
  const valid = fullname.checkValidity();
  if (valid === false) {
    error1.classList.add("visible");
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
    error2.classList.add("visible");
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
    error3.classList.add("visible");
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
    error4.classList.add("visible");
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
    error5.classList.add("visible");
  } else {
    error5.classList.remove("visible");
  }
}

//eye toggle

const eyeToggle = document.querySelector("#eye");

eyeToggle.addEventListener("click", toggleEye);

function toggleEye() {
  if (eyeToggle.classList.contains("fa-eye-slash")) {
    eyeToggle.classList.remove("fa-eye-slash");
    eyeToggle.classList.add("fa-eye");
    document.querySelector("#password").setAttribute("type", "text");
  } else {
    eyeToggle.classList.remove("fa-eye");
    eyeToggle.classList.add("fa-eye-slash");
    document.querySelector("#password").setAttribute("type", "password");
  }
}

const eyeToggle2 = document.querySelector("#eye2");

eyeToggle2.addEventListener("click", toggleEye2);

function toggleEye2() {
  if (eyeToggle2.classList.contains("fa-eye-slash")) {
    eyeToggle2.classList.remove("fa-eye-slash");
    eyeToggle2.classList.add("fa-eye");
    document.querySelector("#repeat-password").setAttribute("type", "text");
  } else {
    eyeToggle2.classList.remove("fa-eye");
    eyeToggle2.classList.add("fa-eye-slash");
    document.querySelector("#repeat-password").setAttribute("type", "password");
  }
}

// second section

const list = document.querySelector("#mySelect");
const array = data.games;

array.forEach((element) => {
  console.log(element);
  let options = document.createElement("option");
  list.appendChild(options);
  console.log(options.value);
  options.setAttribute("value", `${element}`);
  options.textContent = `${element}`;
 list.firstElementChild.setAttribute("disabled", true);

});

document.querySelectorAll("option").forEach((option) => {
  option.addEventListener("click", (e) => {
    if (data.games.includes(e.target.value)) {
      e.target.classList.add("check");
      const b = document.createElement("button");
      b.textContent = e.target.value;
      b.setAttribute("value", e.target.value);
      document.querySelector(".chosen").appendChild(b);
      console.log(e.target.value);
      let x = document.querySelector("#mySelect");
      x.remove(x.selectedIndex);
    }
  });
});


const list2 = document.querySelector("#mySelect2");
const array2 = data.types;

array2.forEach((element) => {
  console.log(element);
  let options2 = document.createElement("option");
  list2.appendChild(options2);
  console.log(options2.value);
  options2.setAttribute("value", `${element}`);
  options2.textContent = `${element}`;
 list2.firstElementChild.setAttribute("disabled", true);

});

document.querySelectorAll("option").forEach((option) => {
  option.addEventListener("click", (e) => {
    if (data.types.includes(e.target.value)) {
      e.target.classList.add("check");
      const c = document.createElement("button");
      c.textContent = e.target.value;
      c.setAttribute("value", e.target.value);
      document.querySelector(".chosen2").appendChild(c);
      console.log(e.target.value);
      let y = document.querySelector("#mySelect2");
      y.remove(y.selectedIndex);
    }
  });
});



const list3 = document.querySelector("#mySelect3");
const array3 = data.areas;

array3.forEach((element) => {
  console.log(element);
  let options3 = document.createElement("option");
  list3.appendChild(options3);
  console.log(options3.value);
  options3.setAttribute("value", `${element}`);
  options3.textContent = `${element}`;
 list3.firstElementChild.setAttribute("disabled", true);

});

document.querySelectorAll("option").forEach((option) => {
  option.addEventListener("click", (e) => {
    if (data.areas.includes(e.target.value)) {
      e.target.classList.add("check");
      const d = document.createElement("button");
      d.textContent = e.target.value;
      d.setAttribute("value", e.target.value);
      document.querySelector(".chosen3").appendChild(d);
      console.log(e.target.value);
      let z = document.querySelector("#mySelect3");
      z.remove(z.selectedIndex);
    }
  });
});