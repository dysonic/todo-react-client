import React from 'react';
import { AddTodo } from './features/todos/AddTodo';
import { VisibleTodoList } from './features/todos/VisibleTodoList';
import { Footer } from './features/todos/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
