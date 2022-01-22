import * as React from 'react';
import { AddTodo } from '../../features/todos/AddTodo';
import { VisibleTodoList } from '../../features/todos/VisibleTodoList';
import { Footer } from '../../features/todos/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </React.Fragment>
  );
}
