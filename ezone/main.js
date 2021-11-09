import data from "./data.json";
console.log(data);
import "./style.scss";
document.querySelector(".goform").addEventListener("click", function () {
  location.href = "form.html";
});

// putting json data in data list options
const selected = [];
console.log(selected);
const list = document.querySelector("#gamelist");
const array = data.games;
console.log(array);
array.forEach((element) => {
  console.log(element);
  let options = document.createElement("option");
  list.appendChild(options);
  options.setAttribute("value", `${element}`);
  console.log(element);
  if (selected.includes(`button.value="${element}"`)) {
    console.log(`${element} is already in the array`);
  }
});

document.querySelector("input").addEventListener("input", (e) => {
  if (data.games.includes(e.target.value)) {
    //console.log(match);
    const b = document.createElement("button");
    b.textContent = e.target.value;
    b.setAttribute("value", e.target.value);
    document.querySelector(".chosen").appendChild(b);
    e.target.value = "";

    selected.push(b);
  } else {
    console.log("nu e in lista");
  }
  console.log(e);
});
