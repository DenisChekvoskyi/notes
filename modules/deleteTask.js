import renderTasks from "./renderTasks";
import dialogBoxControl from "./dialogBoxControl";
import renderTaskInfo from "./renderTaskInfo";
import tasks from "../db";

function deleteTask() {
  const taskContainer = document.querySelector(".task");
  const deleteAllBtn = document.querySelector("#deleteAll");
  taskContainer.addEventListener("click", (e) => {
    if (e.target && e.target.alt === "delete") {
      let confirmation = confirm("Do you want to delete a task? Recovery will not be possible!");
      if (confirmation) {
        const deleteButton = e.target;
        const indexToDelete = deleteButton.dataset.index;
        tasks.splice(indexToDelete, 1);
        renderTasks();
        dialogBoxControl();
        renderTaskInfo();
      }
    }
  });
  deleteAllBtn.addEventListener("click", () => {
    if (tasks.length) {
      let confirmation = confirm("Do you want to delete all tasks? Recovery will be impossible!");
      if (confirmation) {
        tasks.splice(0, tasks.length + 1);
        renderTasks();
        dialogBoxControl();
        renderTaskInfo();
      }
    }
  });
}

export default deleteTask;
