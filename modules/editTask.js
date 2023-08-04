import tasks from "../db";
import renderTasks from "./renderTasks";
import renderTaskInfo from "./renderTaskInfo";

function editTask() {
  const dialogOverlay = document.querySelector(".dialogOverlay");
  const taskContainer = document.querySelector(".task");
  const form = document.querySelector("form");

  taskContainer.addEventListener("click", (e) => {
    if (e.target && e.target.alt === "edit") {
      dialogOverlay.style.display = "flex";
      const editButton = e.target;
      const index = editButton.dataset.index;

      document.querySelector("#name").value = tasks[index].taskName;
      document.querySelector("#category").value = tasks[index].taskCategory;
      document.querySelector("#text").value = tasks[index].taskContent;
      form.setAttribute("data-index", index);
    }
  });
  renderTasks();
  renderTaskInfo();
}

export default editTask;
