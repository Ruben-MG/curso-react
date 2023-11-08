import { TodoCounter } from './TodoCounter';
import './App.css';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Comprar patatas', completed: true},
  {text: 'Sacar al perro', completed: false},
  {text: 'Limpiar cocina', completed: false},
  {text: 'Estudiar React', completed: true},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={3} total={6} />
      <TodoSearch />

      <TodoList>
      {defaultTodos.map(todo => (
      <TodoItem 
      key={todo.text} 
      text={todo.text}
      completed= {todo.completed}/>))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}
export default App;
