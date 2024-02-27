import Task from "./Task";
import { TaskType } from "../shared/Types";

const TaskList = ( {tasks, onDelete} : {tasks: TaskType[], onDelete: (index: number) => void}) => {
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