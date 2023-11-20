import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import React from 'react';
import { CreateTask } from './CreateTask';
import './App.css';

const defaultTodos = [
  { text: 'Comprar patatas', completed: false },
  { text: 'Sacar al perro', completed: false },
  { text: 'Limpiar cocina', completed: false },
  { text: 'Limpiar casa', completed: true },
  { text: 'Estudiar React', completed: true },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const todoCompletados = todos.filter(todo => todo.completed).length;
  const todoTotal = todos.length;

  const searchTodos = todos.filter(todo => { return todo.text.toLowerCase().includes(searchValue.toLowerCase()) });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

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
          <TodoCounter completed={todoCompletados} total={todoTotal} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />


        </section>

        <TodoList
          searchValue={searchValue}
          todos={todos}
          setTodos={setTodos}
        >
          {searchTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete = {() => completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
            />))}
        </TodoList>

      </div>
    </>
  );
}
export default App;
