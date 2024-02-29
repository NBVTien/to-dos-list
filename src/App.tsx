import { useEffect, useState } from 'react';
import { TaskType } from './shared/Types';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import './App.css';

const App = () => {
  const stringtifyTasks: string | null = sessionStorage.getItem('tasks');
  const storedTasks: TaskType[] = (stringtifyTasks !== null) ? JSON.parse(stringtifyTasks) : []; 
  const [tasks, setTasks] = useState<TaskType[]>(storedTasks);
  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (task: TaskType) => {
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