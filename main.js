import dialogBoxControl from "./modules/dialogBoxControl";
import renderTasks from "./modules/renderTasks";
import onSubmit from "./modules/onSubmit";
import deleteTask from "./modules/deleteTask";
import updateTaskDates from "./modules/updateTaskDates";
import editTask from "./modules/editTask";
import renderArchive from "./modules/renderArchive";
import addToArchive from "./modules/addToArchive";
import exFromArchive from "./modules/exFromArchive";
import vievTask from "./modules/vievTask";
import renderTaskInfo from "./modules/renderTaskInfo";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  deleteTask();
  onSubmit();
  updateTaskDates();
  editTask();
  renderArchive();
  addToArchive();
  exFromArchive();
  vievTask();
  dialogBoxControl();
  renderTaskInfo();
});
