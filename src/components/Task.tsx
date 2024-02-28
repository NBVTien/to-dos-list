/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Task.css";

function Task( {key, name, onDelete} : {key: number, name: string, onDelete: () => void} ) {
  return (
		<div className="task">
			<div>{name}</div>
			<button onClick={onDelete}>Delete</button>
		</div>
  );
}

export default Task;
