import React from 'react';
import {
  TodoState,
} from './todosSlice';
import { Todo } from './Todo';

interface TodoListProps {
  todos: Array<TodoState>;
  onTodoClick: (id: number) => {};
}
export function TodoList({ todos, onTodoClick }: TodoListProps) {
  return (
    <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
  );
}
