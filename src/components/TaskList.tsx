import Task from "./Task";
import { TaskListProps } from "../shared/Types";

const TaskList = ( {tasks, onDelete} : TaskListProps) => {
  return (
    <>
      {(tasks.length === 0) ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task, index) => (
          <Task 
            key={index} 
            name={task.name} 
            onDelete={() => onDelete(index)} 
          />
        ))
      )}
    </>
  );
}

export default TaskList;