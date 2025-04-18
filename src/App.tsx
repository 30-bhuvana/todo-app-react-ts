import React, { useState } from 'react';
import './index.css';  // This ensures that the styles are applied globally
const App = () => {
  const [tasks, setTasks] = useState<string[]>([]); // To store todo items
  const [taskInput, setTaskInput] = useState(''); // To control input field

  // Function to add task
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskInput) {
      setTasks([...tasks, taskInput]); // Add task to the list
      setTaskInput(''); // Reset input field
    }
  };

  // Function to remove task
  const removeTask = (task: string) => {
    setTasks(tasks.filter((t) => t !== task)); // Remove task from list
  };

  return (
    <div className="container">
      <h1 className="app-title">My Todo</h1>
      <i className="fas fa-tasks icon"></i>
      <ul className="todo-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks added yet!</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              {task}{' '}
              <button onClick={() => removeTask(task)} style={{ color: 'red' }}>
                Remove
              </button>
            </li>
          ))
        )}
      </ul>

      <form className="formselect" onSubmit={addTask}>
        <input
          className="inputselect"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // Update input field
          placeholder="Eg: Workout"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default App;
