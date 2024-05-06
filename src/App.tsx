/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
import { TaskType } from './shared/Types';
import Filter from './components/Filter';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import './App.css';

const App = () => {
  const stringifiedTasks: string | null = sessionStorage.getItem('tasks');
  const storedTasks: TaskType[] = (stringifiedTasks !== null) ? JSON.parse(stringifiedTasks) : []; 
  
  const [tasks, setTasks] = useState<TaskType[]>(storedTasks);
  const [filter, setFilter] = useState<(task: TaskType) => boolean>(
    () => () => true
  );

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = useCallback((task: TaskType) => {
    setTasks([...tasks, task]);
  }, [tasks]);

  const handleClearCompleted = useCallback(() => {
    const newTasks: TaskType[] = tasks.filter(task => !task.done);
    setTasks(newTasks);
  }, [tasks]);

  const handleCheck = useCallback((key: string) => { 
    const newTasks: TaskType[] = tasks.map(task => {
      if (task.id === key) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  }, [tasks]);

  const handleDelete = useCallback((key: string) => {
    const newTasks: TaskType[] = tasks.filter(task => task.id !== key);
    setTasks(newTasks);
  }, [tasks]);

  const filteredTasks : TaskType[] = tasks.filter(filter);
  
  return (
    <div className='app'>
      <div className='wrapper'>
        <Filter 
          onSelectionChange={setFilter}
          onClearCompleted={handleClearCompleted}
        />
        <NewTaskForm 
          onNewTask={addNewTask}
        />
        <TaskList 
          tasks={filteredTasks} 
          onCheck={handleCheck} 
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;