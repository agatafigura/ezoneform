export function loadJSON() {
  fetch("data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}
function prepareObjects(jsonData) {
  console.log(jsonData);
}
