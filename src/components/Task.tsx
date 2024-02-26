
function Task( {name, onDelete} : {name: string, onDelete: () => void}) {
    return (
        <>
            <div>{name}</div>
            <button
                onClick={onDelete}
            >Delete</button>
        </>
    );
}

export default Task;
