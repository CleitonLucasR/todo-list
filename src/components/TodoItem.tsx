import { useState } from 'react';
import type { Todo } from '../types/Todo';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, text: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
    const [isEditing, setEditing] = useState<boolean>(false);
    const [editText, setText] = useState<string>(todo.todo);

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
            <input type="checkbox" className="todo-checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />

            {isEditing ? (
                <>
                    <input
                        type="text"
                        className="todo-input-edit"
                        value={editText}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className="btn-icon" onClick={() => { onEdit(todo.id, editText); setEditing(false); }}>Salvar</button>
                    <button className="btn-icon" onClick={() => setEditing(false)}>Cancelar</button>
                </>
            ) : (
                <>
                    <span className="todo-text">{todo.todo}</span>
                    <button className="btn-icon" onClick={() => onDelete(todo.id)}>Remover</button>
                    <button className="btn-icon" onClick={() => setEditing(true)}>Editar</button>
                </>
            )}
        </li>
    );
}
