import tasks from "../db";
import dbArchive from "../dbArchive";
import dialogBoxControl from "./dialogBoxControl";
import renderTaskInfo from "./renderTaskInfo";

import renderTasks from "./renderTasks";
import renderArchive from "./renderArchive";

function addToArchive() {
  const archiveContainer = document.querySelector(".task");
  archiveContainer.addEventListener("click", (e) => {
    if (e.target && e.target.alt === "archive") {
      const archiveBtn = e.target;
      const index = archiveBtn.dataset.index;
      dbArchive.push(tasks[index]);
      tasks.splice(index, 1);
      renderTasks();
      renderArchive();
      dialogBoxControl();
      renderTaskInfo();
    }
  });
}

export default addToArchive;
