import { TaskListProps } from "../shared/Types";

import Task from "./Task";

const TaskList = ( {tasks, onCheck, onDelete} : TaskListProps ) => {

  return (
    <>
      {(tasks.length === 0) ? (
        <p>There is no tasks.</p>
      ) : (
        tasks.map((task) => (
          <Task 
            key={task.id}
            task={task} 
            onCheck={() => onCheck(task.id)} 
            onDelete={() => onDelete(task.id)}
          />
        ))
      )}
    </>
  );
}

export default TaskList;