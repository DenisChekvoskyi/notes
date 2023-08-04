import tasks from "../db";
import dbArchive from "../dbArchive";

function renderTaskInfo() {
  const nameTasks = [
    {
      img: "icons/cart.svg",
      alt: "Cart",
      name: "Task",
      active: 0,
      archived: 0,
    },
    {
      img: "icons/head.svg",
      alt: "Head",
      name: "Random Thought",
      active: 0,
      archived: 0,
    },
    {
      img: "icons/lamp.svg",
      alt: "Lamp",
      name: "Idea",
      active: 0,
      archived: 0,
    },
  ];

  function countTasksByCategory(dbArchive, tasks, nameTasks) {
    const categories = ["Task", "Random Thought", "Idea"];

    categories.forEach((category, index) => {
      const activeCount = tasks.filter((task) => task.taskCategory === category).length;
      const archivedCount = dbArchive.filter((task) => task.taskCategory === category).length;

      nameTasks[index].active += activeCount;
      nameTasks[index].archived += archivedCount;
    });

    return [...nameTasks];
  }

  countTasksByCategory(dbArchive, tasks, nameTasks);

  const taskInfoContainer = document.querySelector(".taskBrief");
  taskInfoContainer.innerHTML = "";

  nameTasks.forEach((item) => {
    if (item.active > 0 || item.archived > 0) {
      const taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");

      taskInfo.innerHTML = `
          <img class='task-img' src=${item.img} alt=${item.alt} />
          <div class='task-name'>${item.name}</div>
          <div>${item.active}</div>
          <div>${item.archived}</div>
    `;

      taskInfoContainer.appendChild(taskInfo);
    }
  });
}

export default renderTaskInfo;
