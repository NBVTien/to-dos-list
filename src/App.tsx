import { useState } from 'react';
import { TaskType } from './shared/Types';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addNewTask = (task: TaskType) => {
    if (task.name === '') return;
    setTasks([...tasks, task]);
  };

  const handleDelete = (index: number) => {
    const newTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    setTasks(newTasks);
  };

  return (
    <div className='app'>
      <div className='wrapper'>
        <NewTaskForm 
          onNewTask={addNewTask}
        />
        <TaskList 
          tasks={tasks} 
          onDelete={handleDelete} 
        />
      </div>
    </div>
  );
};

export default App;