import tasks from "../db";

function vievTask() {
  function renderTaskView(i) {
    const taskContainer = document.querySelector(".taskViewContainer");
    taskContainer.innerHTML = "";

    const taskInfo = document.createElement("div");

    taskInfo.innerHTML = `
  <div class='viev'>Category: ${tasks[i].taskCategory}</div>
  <div class='viev'>Name: ${tasks[i].taskName}</div>
  <div class='viev'>Text: ${tasks[i].taskContent}</div>
  ${tasks[i].taskDates ? `<div class="viev">Dates: ${tasks[i].taskDates}</div>` : ""}
`;

    taskContainer.appendChild(taskInfo);
  }

  function handleTaskInfoClick(e) {
    const clickedElement = e.target.closest(".task-content") || e.target.closest(".task-name");
    if (clickedElement) {
      const clickedElementIndex = clickedElement.getAttribute("data-index");
      renderTaskView(clickedElementIndex);
    }
  }

  document.querySelector(".task").addEventListener("click", handleTaskInfoClick);
}

export default vievTask;
