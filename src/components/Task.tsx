/* eslint-disable @typescript-eslint/no-unused-vars */

function Task( {key, name, onDelete} : {key: number, name: string, onDelete: () => void} ) {
  return (
		<>
			<div>{name}</div>
			<button onClick={onDelete}>Delete</button>
		</>
  );
}

export default Task;
