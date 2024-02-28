import { NewTaskFormProps } from "../shared/Types";
import './NewTaskForm.css';

const NewTaskForm = ( { onSubmit, onChange, task } : NewTaskFormProps) => {
  return (
    <>
      <form className="new-task-form" onSubmit={onSubmit}>
          <input
            type="text"
            value={task.name}
            onChange={onChange}
            placeholder="Add a new task..."
          />
          <button type="submit">Add</button>
        </form>
    </>
  );
}

export default NewTaskForm;