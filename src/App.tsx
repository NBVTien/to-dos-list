import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './App.css';

type Task = {
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const {register, handleSubmit} = useForm<Task>();

  function onSubmit(data: Task) {
    setTasks([...tasks, data]);
  }

  return (
    <>
      <h2>Add a task:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
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
