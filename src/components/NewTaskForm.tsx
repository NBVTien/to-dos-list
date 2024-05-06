import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { NewTaskFormProps, TaskType } from "../shared/Types";

import './NewTaskForm.css';

const NewTaskForm = ({onNewTask} : NewTaskFormProps) => {
  const newTask = (name: string) => {
    return {
      id: uuidv4(),
      name: name,
      done: false
    };
  }

  const [taskName, setTaskName] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task: TaskType = newTask(taskName);
    if (task.name === '') {
      return;
    }
    if (task.name.trim() === '') {
      setTaskName('');
      return;
    }
    onNewTask(task);
    setTaskName('');
  }

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  }, []);

  return (
    <>
      <form className="new-task-form" onSubmit={handleSubmit}>
        <div className="fake-checkbox"></div> 
        <input
          type="text"
          value={taskName}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button type="submit">
          <img src="add.svg" alt="Add" />
        </button>
      </form>
    </>
  );
}

export default NewTaskForm;