import { useState } from 'react';
import './App.css';

type TaskInfo = {
  name: string;
};

function App() {
  const [tasks, setTasks] = useState<TaskInfo[]>([]);
  const [task, setTask] = useState<TaskInfo>({name: ''});

  function addNewTask() {
    setTasks([...tasks, task]);
  }
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addNewTask();
    setTask({ name: '' }); 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name}
          onChange={(event) => {
            event.preventDefault();
            setTask({...task, name: event.target.value})
          }}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>
      <h2>Tasks:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </>
  );  
}

export default App
