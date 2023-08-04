import tasks from "../db";

function updateTaskDates() {
  const datePattern = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;

  tasks.forEach((task) => {
    const taskContent = task.taskContent;
    const match = taskContent.match(datePattern);
    if (match) {
      task.taskDates = match.join(", ");
    }
  });
}

export default updateTaskDates;
