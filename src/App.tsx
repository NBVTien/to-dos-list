import { useState, ChangeEvent, FormEvent } from 'react';
import './App.css';
import Task from './components/Task';

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
      <div>
        {(tasks.length === 0) ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task, index) => (
            <Task name={task.name} onDelete={() => handleDelete(index)} />
          ))
        )}
      </div>
    </>
  );
};

export default App;