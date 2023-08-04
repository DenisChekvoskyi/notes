import dbArchive from "../dbArchive";

function renderArchive() {
  const archiveContainer = document.querySelector(".archive");
  archiveContainer.innerHTML = "<h2>Archive is kept here</h2>";

  if (dbArchive.length > 0) {
    dbArchive.forEach((task, index) => {
      const taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");

      const shortTaskName =
        task.taskName.length > 16 ? `${task.taskName.substring(0, 16)}...` : task.taskName;
      const shortTaskContent =
        task.taskContent.length > 16 ? `${task.taskContent.substring(0, 16)}...` : task.taskContent;

      taskInfo.innerHTML = `
          <img class="task-img" src=${task.imgSrc} alt=${task.imgAlt} />
          <div class="task-name">${shortTaskName}</div>
          <div class="task-created">${task.taskCreated}</div>
          <div class="task-category">${task.taskCategory}</div>
          <div class="task-content">${shortTaskContent}</div>
          <div class="tast-dates">${task.taskDates ? task.taskDates : ""}</div>
          <div class="task-nav">
            <img id="archiveBtn" data-index=${index} src="icons/folderblackdownload.svg" alt="archive" />
          </div>
      `;

      archiveContainer.appendChild(taskInfo);
    });
  } else {
    const taskInfo = document.createElement("h3");
    taskInfo.innerHTML = "To display tasks, you need to archive the task from the main menu";
    archiveContainer.appendChild(taskInfo);
  }
}

export default renderArchive;
