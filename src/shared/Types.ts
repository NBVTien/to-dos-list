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
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    task: TaskType;
}
