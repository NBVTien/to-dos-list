/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Task.css";
import { TaskProps } from "../shared/Types";

function Task( {task, onCheck} : TaskProps ) {

  return (
		<div className="task">
			<input
				type="checkbox"
				checked={task.done}
				onChange={onCheck}
			/>
			<div>{task.name}</div>
		</div>
  );
}

export default Task;
