import { TaskListProps } from "../../shared/Types";

import Task from "../Task/Task";

const TaskList = ( {tasks, onCheck, onDelete} : TaskListProps ) => {
  // TODO: Add a useTransition hook somewhere to handle the rendering of the tasks.
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