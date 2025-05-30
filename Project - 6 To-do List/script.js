const input = document.getElementById("text");
const button = document.querySelector("button");
const tasklist = document.getElementById("task-list")

button.addEventListener ('click',() => {
  const taskText = input.value.trim();
  if(taskText === ""){
    alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click",() => {
    li.classList.toggle("completed")
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.cursor = "pointer"

  deleteBtn.addEventListener("click",() => {
   tasklist.removeChild(li); 
  });

  li.appendChild(deleteBtn);

  tasklist.appendChild(li);

  input.value = "";
});