const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let DELETE_OBJECT;

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("i");
    span.className = "fa-solid fa-circle-xmark fa-sm";
    span.style.color = "red"
    // li.style.display = 'flex'
    // li.style.justifyContent = "space-between"
    // li.style.alignItems = "center"
    li.classList.add('cancel')
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "I") {

      toggleDeleteModal();
      DELETE_OBJECT = e
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHtml = localStorage.getItem("data");
}
showTask();

// code delete task
const modal = document.querySelector(".modal");
const popUp = document.querySelector(".pop-up");
function toggleDeleteModal() {
  modal.classList.toggle("hide");
  popUp.classList.toggle("hide");
}

popUp.addEventListener("click", (e) => {
  if (e.target.id === "delete") {
    toggleDeleteModal();
    DELETE_OBJECT.target.parentElement.remove()
    console.log("Delete task!");
  } else if (e.target.id === "cancel") {
    toggleDeleteModal();
    console.log("Cancel!");
  }
});
