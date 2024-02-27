import { useState, ChangeEvent, FormEvent } from 'react';
import './App.css';
import Task from './components/Task';

// Define the type for a task outside of the App component for reusability
type TaskType = {
  name: string;
};

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [task, setTask] = useState<TaskType>({ name: '' });

  const addNewTask = () => {
    setTasks([...tasks, task]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewTask();
    setTask({ name: '' });
  };

  const handleDelete = (index: number) => {
    const newTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    setTasks(newTasks);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, name: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>
      <h2>Tasks:</h2>
      <div>
        {tasks.map((task, index) => (
          <Task key={index} name={task.name} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </>
  );
};

export default App;