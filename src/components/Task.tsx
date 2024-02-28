/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Task.css";
import { TaskProps } from "../shared/Types";

function Task( {key, name, onDelete} : TaskProps ) {
  return (
		<div className="task">
			<div>{name}</div>
			<button onClick={onDelete}>Delete</button>
		</div>
  );
}

export default Task;
