import './App.css';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { useTodos } from './hooks/useTodos';

export function App() {
  const {
    todos,
    loading,
    error,
    filter,
    setFilter,
    handleAdd,
    handleToggle,
    handleDelete,
    handleEdit,
  } = useTodos();
  if (loading) {
    return <p>Carregando tarefas...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro: {error}</p>;
  }

  return (
    <div className="app">
      <h1>Minha Todo List</h1>
      <TodoForm onAdd={handleAdd} />
      <div className="filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Todas</button>
        <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Pendentes</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Concluídas</button>
      </div>
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
