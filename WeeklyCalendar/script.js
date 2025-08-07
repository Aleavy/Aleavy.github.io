const lunes = document.getElementById("lunes");
const martes = document.getElementById("martes");
const miercoles = document.getElementById("miercoles");
const jueves = document.getElementById("jueves");
const viernes = document.getElementById("viernes");
const sabado = document.getElementById("sabado");
const domingo = document.getElementById("domingo");
const btn = document.querySelector("#cre");
const btnClear = document.querySelector("#clear");
const btn2 = document.querySelector("#close");
const btn3 = document.querySelector("#add");
const divPopUp = document.querySelector(".popup");
const tools = document.querySelector(".tools");
const inpName = document.getElementById("nameTask");
const inpDay = document.getElementById("daysField");
const divDrop = document.querySelector(".dropdown");
const daysArray = [lunes, martes, miercoles, jueves, viernes, sabado, domingo];

function popUp() {
  divPopUp.classList.toggle("active");
}

function dropDown() {
  divDrop.classList.toggle("active");
}

function clearStorage() {
  for (let el of daysArray) {
    el.innerHTML = "";
  }
  localStorage.clear();
}

function saveChildren(parent, day) {
  localStorage.setItem(`${day}`, JSON.stringify(parent.innerHTML));
}

function createDestroyBtn(parent) {
  const button = document.createElement("button");
  button.innerText = "Borrar";
  button.classList.add("btn-destroy");
  button.addEventListener("click", () => {
    let idName = parent.id;
    const topParent = parent.parentElement;
    parent.remove();
    saveChildren(topParent, idName);
  });
  return button;
}

function createTask(testName = "", testDay = "") {
  const name = testName ? testName : inpName.value;
  if (!name) return;
  const day = testDay ? testDay : inpDay.value;

  const parentDiv = document.getElementById(`${day}`);
  const newDiv = document.createElement("div");
  const newButton = createDestroyBtn(newDiv);
  const newText = document.createElement("p");
  const newHr = document.createElement("hr");
  newText.innerText = name;
  newDiv.appendChild(newText);
  newDiv.appendChild(newHr);
  newDiv.appendChild(newButton);
  newDiv.classList.add("added-task");
  parentDiv.appendChild(newDiv);
  saveChildren(parentDiv, day);
}

// function testTask() {
//   createTask("Something", "lunes");
// }

function btnAddListener() {
  const allBtns = document.querySelectorAll(".btn-destroy");
  allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let parent = btn.parentElement;
      const topParent = parent.parentElement;
      let idName = topParent.id;
      parent.remove();
      saveChildren(topParent, idName);
    });
  });
}

function setChildren() {
  for (let el of daysArray) {
    if (localStorage.getItem(`${el.id}`)) {
      el.innerHTML = JSON.parse(localStorage.getItem(`${el.id}`));
    }
  }
}

tools.addEventListener("click", dropDown);

btn.addEventListener("click", popUp);
btnClear.addEventListener("click", clearStorage);
btn2.addEventListener("click", popUp);
btn3.addEventListener("click", () => {
  popUp();
  createTask();
});

window.addEventListener("load", () => {
  console.log("loaded");
  setChildren();
  btnAddListener();
});
