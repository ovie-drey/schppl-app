const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    StudentClass:String
})

const StudentModel = mongoose.model("Student", studentSchema)
module.exports = StudentModel


//
// document.addEventListener("DOMContentLoaded", function () {
//     const input = document.querySelector(".taskInput");
//     const addButton = document.querySelector(".taskButton.add");
//     const taskList = document.getElementById("taskList");
//
//     // Load tasks from localStorage on page load
//     loadTasks();
//
//     // Add task on button click
//     addButton.addEventListener("click", function () {
//         const task = input.value.trim();
//         if (task === "") {
//             alert("Please enter a task.");
//             return;
//         }
//
//         addTaskToDOM(task);
//         saveTaskToLocalStorage(task);
//         input.value = ""; // clear input
//     });
//
//     // Add a task to the page (DOM)
//     function addTaskToDOM(task) {
//         const li = document.createElement("li");
//         li.textContent = task;
//         li.className = "taskItem";
//         taskList.appendChild(li);
//     }
//
//     // Save task to localStorage
//     function saveTaskToLocalStorage(task) {
//         let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         tasks.push(task);
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//
//     // Load tasks from localStorage and display them
//     function loadTasks() {
//         const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         tasks.forEach(task => addTaskToDOM(task));
//     }
// });
