import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { NewTaskFormProps, TaskType } from "../shared/Types";
import './NewTaskForm.css';

const NewTaskForm = ( { onNewTask } : NewTaskFormProps ) => {
  const newTask = () => {
    return {
      id: uuidv4(),
      name: '',
      done: false
    };
  }

  const [task, setTask] = useState<TaskType>(newTask());

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.name === '') {
      return;
    }
    if (task.name.trim() === '') {
      setTask({ ...task, name: '' });
      return;
    }
    onNewTask(task);
    setTask(newTask());
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, name: event.target.value });
  };

  return (
    <>
      <form className="new-task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default NewTaskForm;