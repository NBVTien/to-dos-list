/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { TaskType } from './shared/Types';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import './App.css';

const App = () => {
  const stringifiedTasks: string | null = sessionStorage.getItem('tasks');
  const storedTasks: TaskType[] = (stringifiedTasks !== null) ? JSON.parse(stringifiedTasks) : []; 
  const [tasks, setTasks] = useState<TaskType[]>(storedTasks);
  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (task: TaskType) => {
    setTasks([...tasks, task]);
  };

  const handleClearCompleted = () => {
    const newTasks: TaskType[] = tasks.filter(task => !task.done);
    setTasks(newTasks);
  }

  const handleCheck = (key: string) => { 
    const newTasks: TaskType[] = tasks.map(task => {
      if (task.id === key) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  }

  const handleDelete = (key: string) => {
    const newTasks: TaskType[] = tasks.filter(task => task.id !== key);
    setTasks(newTasks);
  }

  return (
    <div className='app'>
      <div className='wrapper'>
        <NewTaskForm 
          onNewTask={addNewTask}
        />
        <TaskList 
          tasks={tasks} 
          onCheck={handleCheck} 
          onClearCompleted={handleClearCompleted}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;