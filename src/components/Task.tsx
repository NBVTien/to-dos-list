/* eslint-disable @typescript-eslint/no-unused-vars */
import { TaskProps } from "../shared/Types";

import "./Task.css";

function Task( {task, onCheck, onDelete} : TaskProps ) {

  return (
		<div className="task">
			<input
				name="taskCheckbox"
				id={"task-"+task.id}
				className="task-checkbox"
				type="checkbox"
				checked={task.done}
				onChange={onCheck}
			/>
			<label htmlFor={"task-"+task.id}>{task.name}</label>
			<button 
				className="task-delete"
				onClick={onDelete}
			>
				<img src="delete.svg" alt="Delete" /> 
			</button> 
		</div>
  );
}

export default Task;
