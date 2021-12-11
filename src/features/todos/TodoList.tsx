import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  toggleTodo,
  selectTodos,
} from './todosSlice';
import { Todo } from './Todo';

export function TodoList() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  return (
    <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => dispatch(toggleTodo(todo.id))}
      />
    )}
  </ul>
  );
}
