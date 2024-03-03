export interface TaskType {
    id: string;
    name: string;
    done: boolean;
}

export interface TaskListProps {
    tasks: TaskType[];
    onCheck: (key: string) => void;
}

export interface TaskProps {
    task: TaskType;
    onCheck: () => void;
}

export interface NewTaskFormProps {
    onNewTask: (task: TaskType) => void;
}

export interface FilterProps {
    onSelectionChange: (filter: string) => void;
}
