function dialogBoxControl() {
  const openModal = document.querySelector(".createNote");
  const dialogOverlay = document.querySelector(".dialogOverlay");
  const closeDialogButton = document.querySelectorAll(".closeDialogButton");
  const form = document.querySelector("form");
  const archivingOverlay = document.querySelector(".archivingOverlay");
  const archiveAll = document.querySelector("#archiveAll");
  const taskViewOverlay = document.querySelector(".taskViewOverlay");
  const taskContent = document.querySelectorAll(".task-content");
  const taskName = document.querySelectorAll(".task-name");

  openModal.addEventListener("click", () => {
    dialogOverlay.style.display = "flex";
    form.reset();
  });

  closeDialogButton.forEach((close) => {
    close.addEventListener("click", () => {
      dialogOverlay.style.display = "none";
      archivingOverlay.style.display = "none";
      taskViewOverlay.style.display = "none";
    });
  });

  dialogOverlay.addEventListener("click", (e) =>
    e.target === dialogOverlay ? (dialogOverlay.style.display = "none") : ""
  );

  archiveAll.addEventListener("click", () => {
    archivingOverlay.style.display = "flex";
  });
  archivingOverlay.addEventListener("click", (e) => {
    e.target === archivingOverlay ? (archivingOverlay.style.display = "none") : "";
  });

  taskContent.forEach((item) => {
    item.addEventListener("click", () => {
      taskViewOverlay.style.display = "flex";
    });
  });
  taskName.forEach((item) => {
    item.addEventListener("click", () => {
      taskViewOverlay.style.display = "flex";
    });
  });

  taskViewOverlay.addEventListener("click", (e) =>
    e.target === taskViewOverlay ? (taskViewOverlay.style.display = "none") : ""
  );
}

export default dialogBoxControl;
