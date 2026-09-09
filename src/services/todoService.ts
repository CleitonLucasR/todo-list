import type { Todo } from '../types/Todo';

const BASE_URL = 'https://dummyjson.com/todos';

export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(`${BASE_URL}?limit=10`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar tarefas: ${response.status}`);
  }
  const data = await response.json();
  return data.todos;
}

export async function createTodo(text: string): Promise<Todo> {
  const response = await fetch(`${BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: text,
      completed: false,
      userId: 1,
    }),
  });
  if (!response.ok) {
    throw new Error(`Erro ao adicionar tarefa: ${response.status}`);
  }
  return response.json();
}

export async function updateTodo(id: number, newText: string): Promise<Todo> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ todo: newText }),
  });
  if (!response.ok) {
    throw new Error(`Erro ao editar tarefa: ${response.status}`);
  }
  return response.json();
}

export async function deleteTodo(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Erro ao remover tarefa: ${response.status}`);
  }
}