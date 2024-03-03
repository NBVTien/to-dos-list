import { useState } from "react";
import { TaskListProps, TaskType } from "../shared/Types";
import Task from "./Task";
import Filter from "./Filter";

const TaskList = ( {tasks, onCheck} : TaskListProps) => {
  const [filter, setFilter] = useState<string>('all');

  const filterTasks = (tasks: TaskType[], filter: string) => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.done);
      case 'completed':
        return tasks.filter(task => task.done);
      default:
        return tasks;
    }
  }

  const filteredTasks : TaskType[] = filterTasks(tasks, filter);
  
  return (
    <>
      <Filter onSelectionChange={setFilter}/>
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