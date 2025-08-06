const lunes = document.getElementById("lunes");
const martes = document.getElementById("martes");
const miercoles = document.getElementById("miercoles");
const jueves = document.getElementById("jueves");
const viernes = document.getElementById("viernes");
const sabado = document.getElementById("sabado");
const domingo = document.getElementById("domingo");
const btn = document.querySelector("#cre");
const btn2 = document.querySelector("#close");
const btn3 = document.querySelector("#add");
const divPopUp = document.querySelector(".popup");
const inpName = document.getElementById("nameTask");
const inpDay = document.getElementById("daysField");

function popUp() {
  console.log(divPopUp);
  divPopUp.classList.toggle("active");
}

function createTask() {
  const name = inpName.value;
  const day = inpDay.value;
  const parentDiv = document.getElementById(`${day}`);
  const newDiv = document.createElement("div");
  const newText = document.createElement("p");
  newText.innerText = name;
  newDiv.appendChild(newText);
  parentDiv.appendChild(newDiv);
}

btn.addEventListener("click", popUp);

btn2.addEventListener("click", popUp);
btn3.addEventListener("click", () => {
  popUp();
  createTask();
});
