export interface TaskType {
    name: string;
}

export interface TaskListProps {
    tasks: TaskType[];
    onDelete: (index: number) => void;
}

export interface TaskProps {
    key: number;
    name: string;
    onDelete: () => void;
}

export interface NewTaskFormProps {
    onNewTask: (task: TaskType) => void;
}
