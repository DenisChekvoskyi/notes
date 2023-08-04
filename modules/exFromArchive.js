import renderArchive from "./renderArchive";
import renderTasks from "./renderTasks";
import dialogBoxControl from "./dialogBoxControl";
import renderTaskInfo from "./renderTaskInfo";

import dbArchive from "../dbArchive";
import tasks from "../db";

function exFromArchive() {
  const archiveContainer = document.querySelector(".archive");
  archiveContainer.addEventListener("click", (e) => {
    if (e.target && e.target.alt === "archive") {
      const archiveBtn = e.target;
      const index = archiveBtn.dataset.index;
      const removedTask = dbArchive.splice(index, 1)[0];
      tasks.push(removedTask);
      renderArchive();
      renderTasks();
      dialogBoxControl();
      renderTaskInfo();
    }
  });
}

export default exFromArchive;
