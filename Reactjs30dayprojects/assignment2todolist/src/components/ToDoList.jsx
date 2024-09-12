import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('data');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === '') {
      alert('You must write something');
      return;
    }
    setTasks([...tasks, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-Do List</h1>
        <div className="row">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add your task" />
          <button onClick={addTask}>Add</button>
        </div>
        <ul id="list-container">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'checked' : ''} onClick={() => toggleTaskCompletion(index)}>
              {task.text} <span onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>X</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;

// body {
//   font-family: Arial, sans-serif;
//   background-color: #f0f0f0;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// }

// .container {
//   background-color: white;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   width: 300px;
// }

// .todo-app {
//   text-align: center;
// }

// h1 {
//   margin-bottom: 20px;
// }

// .row {
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
// }

// input {
//   width: 70%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   margin-right: 10px;
// }

// button {
//   padding: 10px 20px;
//   border: none;
//   background-color: #28a745;
//   color: white;
//   border-radius: 5px;
//   cursor: pointer;
// }

// button:hover {
//   background-color: #218838;
// }

// #list-container {
//   list-style-type: none;
//   padding: 0;
// }

// #list-container li {
//   padding: 10px;
//   background-color: #f9f9f9;
//   margin-bottom: 10px;
//   border-radius: 5px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border: 1px solid #ddd;
//   cursor: pointer;
// }

// #list-container li.checked {
//   text-decoration: line-through;
//   color: #aaa;
// }

// #list-container li span {
//   background-color: #ff6347;
//   color: white;
//   padding: 5px 10px;
//   border-radius: 50%;
//   cursor: pointer;
// }


