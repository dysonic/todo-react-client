import React from 'react';
import { AddTodo } from './features/todos/AddTodo';
import { TodoList } from './features/todos/TodoList';
import { Footer } from './features/todos/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      {/* <VisibleTodoList /> */}
      <Footer />
    </div>
  );
}

export default App;
