// src/components/TaskList.js
import React, { useState, useEffect } from "react";
import Task from "./Task";

const TaskList = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const newTaskItem = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, newTaskItem]);
    setNewTask("");
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const calculateCompletionPercentage = () => {
    if (tasks.length === 0) {
      return 0;
    }

    const completedTasks = tasks.filter((task) => task.completed);
    const percentage = (completedTasks.length / tasks.length) * 100;

    return Math.round(percentage);
  };

  return (
    <div className="task-list">
      <h2>Daily Task List</h2>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button className="add-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
      <div className="completion-percentage">
        <p>Task Completion Percentage: {calculateCompletionPercentage()}%</p>
      </div>
    </div>
  );
};

export default TaskList;
