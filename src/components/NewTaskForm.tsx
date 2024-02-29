import { ChangeEvent, FormEvent, useState } from "react";
import { NewTaskFormProps, TaskType } from "../shared/Types";
import './NewTaskForm.css';

const NewTaskForm = ( { onNewTask } : NewTaskFormProps ) => {
  const [task, setTask] = useState<TaskType>({ name: '' });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewTask(task);
    setTask({ name: '' });
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