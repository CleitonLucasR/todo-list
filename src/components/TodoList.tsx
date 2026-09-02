import type { Todo } from '../types/Todo'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

export function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <ul>
      {todos.map((item) =>(
        <TodoItem key={item.id} todo={item} onToggle={onToggle}/>
      ))}
    </ul>
  );
}