/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Task.css";
import { TaskProps } from "../shared/Types";

function Task( {task, onCheck} : TaskProps ) {

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
		</div>
  );
}

export default Task;
