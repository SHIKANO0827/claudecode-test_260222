const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;
  span.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "✕";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
  input.focus();
}
