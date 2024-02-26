import { useState } from 'react';
import './App.css';
import Task from './components/Task.tsx';

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

  function handleDelete(index: number) {
    const newTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    setTasks(newTasks);
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
      <div>
        {tasks.map((task, index) => (
          <Task name={task.name} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </>
  );  
}

export default App
