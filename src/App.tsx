import { useState } from 'react';
import { useEffect } from 'react';
import type { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';


export function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true);
  const [error, SetError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTodos() {
      try{
        const response = await fetch('https://dummyjson.com/todos?limit=10');
        if(!response.ok){
          throw new Error(`Erro na requisição: ${response.status}`)
        }
        const data = await response.json();
        setTodos(data.todos);
      } catch(error) {
        SetError(error instanceof Error ? error.message : 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])

  function handleToggle(id: Number){
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  if(loading){
    return <p>Carregando tarefas...</p>
  }

  if(error){
    return <p>Ocorreu um erro: {error}</p>
  }

  return (
    <div>
      <h1>Minha Todo List</h1>
      <TodoList todos={todos} onToggle={handleToggle}/>
    </div>
  );
}

export default App;