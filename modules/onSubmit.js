import tasks from "../db";
import renderTasks from "./renderTasks";
import updateTaskDates from "./updateTaskDates";
import dialogBoxControl from "./dialogBoxControl";
import renderTaskInfo from "./renderTaskInfo";

function onSubmit() {
  const form = document.querySelector("form");
  const dialogOverlay = document.querySelector(".dialogOverlay");
  const createNote = document.querySelector(".createNote");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskName = document.querySelector("#name").value;
    const taskCategory = document.querySelector("#category").value;
    const taskContent = document.querySelector("#text").value;
    const taskCreated = new Date().toLocaleDateString();

    let imgSrc;
    let imgAlt;

    switch (taskCategory) {
      case "Task":
        imgSrc = "icons/cart.svg";
        imgAlt = "Cart";
        break;
      case "Random Thought":
        imgSrc = "icons/head.svg";
        imgAlt = "Head";
        break;
      case "Idea":
        imgSrc = "icons/lamp.svg";
        imgAlt = "Lamp";
    }

    const index = form.getAttribute("data-index");

    if (index !== null) {
      tasks[index].taskName = taskName;
      tasks[index].taskCategory = taskCategory;
      tasks[index].taskContent = taskContent;
      tasks[index].imgSrc = imgSrc;
      tasks[index].imgAlt = imgAlt;
    } else {
      const newTask = {
        imgSrc,
        imgAlt,
        taskName,
        taskCategory,
        taskContent,
        taskCreated,
      };

      tasks.push(newTask);
    }

    updateTaskDates(tasks);
    renderTasks();
    dialogBoxControl();
    renderTaskInfo();

    form.reset();
    dialogOverlay.style.display = "none";
  });

  createNote.addEventListener("click", () => {
    form.removeAttribute("data-index");
  });
}

export default onSubmit;
