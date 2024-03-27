import { useState } from "react";

import { TaskListProps, TaskType } from "../shared/Types";

import Task from "./Task";
import Filter from "./Filter";

const TaskList = ( {tasks, onCheck, onClearCompleted} : TaskListProps) => {
  const [filter, setFilter] = useState<(task: TaskType) => boolean>(
    () => true
  );

  const filteredTasks : TaskType[] = tasks.filter(filter);
  
  return (
    <>
      <Filter 
        onSelectionChange={setFilter}
        onClearCompleted={onClearCompleted}
      />
      {(filteredTasks.length === 0) ? (
        <p>There is no tasks.</p>
      ) : (
        filteredTasks.map((task) => (
          <Task 
            key={task.id}
            task={task} 
            onCheck={() => onCheck(task.id)} 
          />
        ))
      )}
    </>
  );
}

export default TaskList;