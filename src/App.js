import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import React from 'react';
import { CreateTask } from './CreateTask';
import './App.css';

const defaultTodos = [
  { text: 'Comprar patatas', completed: true },
  { text: 'Sacar al perro', completed: false },
  { text: 'Limpiar cocina', completed: false },
  { text: 'Estudiar React', completed: true },
]

function App() {
  return (
    <>
      <div id='izquierda'>
        <h2>Create new task</h2>
        <p>Task</p>
        <CreateTask />
      </div>
      <div id='derecha'>
        <section id='headDerecha'>
          <h1 id='title'>Your tasks</h1>
          <TodoCounter completed={3} total={6} />
          <TodoSearch />

        </section>

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed} />))}
        </TodoList>

      </div>
    </>
  );
}
export default App;
