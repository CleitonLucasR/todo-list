import type { Todo } from '../types/Todo'

interface TodoItemProps{
    todo: Todo;
    onToggle: (id: number) => void;
}

export function TodoItem({todo, onToggle}: TodoItemProps) {
    return(
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            <span>{todo.todo}</span>
        </li>
    )
}