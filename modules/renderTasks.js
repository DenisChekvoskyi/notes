import tasks from "../db";
import formatDate from "./formatDate";

function renderTasks() {
  const taskContainer = document.querySelector(".task");
  taskContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    const shortTaskName =
      task.taskName.length > 16 ? `${task.taskName.substring(0, 16)}...` : task.taskName;
    const shortTaskContent =
      task.taskContent.length > 16 ? `${task.taskContent.substring(0, 16)}...` : task.taskContent;

    let shortTaskDates = "";

    try {
      shortTaskDates =
        task.taskDates.length > 16 ? `${task.taskDates.substring(0, 16)}...` : task.taskDates;
    } catch {}

    taskInfo.innerHTML = `
          <img class="task-img" src=${task.imgSrc} alt=${task.imgAlt} />
          <div data-index=${index} class="task-name">${shortTaskName}</div>
          <div class="task-created">${formatDate(task.taskCreated)}</div>
          <div class="task-category">${task.taskCategory}</div>
          <div data-index=${index} class="task-content">${shortTaskContent}</div>
          <div class="tast-dates">${shortTaskDates}</div>
          <div class="task-nav">
            <img data-index=${index} src="icons/edit.svg" alt="edit" />
            <img data-index=${index} src="icons/folderblackdownload.svg" alt="archive" />
            <img data-index=${index} src="icons/empty_trash.png" alt="delete" />
          </div>
      `;

    taskContainer.appendChild(taskInfo);
  });
}

export default renderTasks;
