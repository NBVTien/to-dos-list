import { useState, ChangeEvent, FormEvent } from 'react';
import { TaskType } from './shared/Types';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [task, setTask] = useState<TaskType>({ name: '' });
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addNewTask = () => {
    if (task.name === '') return;
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
    <div className='App'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task.name}
            onChange={handleInputChange}
            placeholder="Add a new task..."
          />
          <button type="submit">Add</button>
        </form>
        <TaskList 
          tasks={tasks} 
          onDelete={handleDelete} 
        />
      </div>
    </div>
  );
};

export default App;