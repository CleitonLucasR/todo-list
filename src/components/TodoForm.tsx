import React, { useState } from 'react';

interface TodoFormProp {
    onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProp) {
    const [text, setText] = useState('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (text.trim() === '') return;
        onAdd(text);
        setText('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nova tarefa..." />
            <button type="submit" className="btn-primary">Adicionar</button>
        </form>
    );
}
