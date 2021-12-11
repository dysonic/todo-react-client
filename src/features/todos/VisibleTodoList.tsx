import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  toggleTodo,
  selectVisibleTodos,
} from './todosSlice';
import { TodoList } from './TodoList';

export function VisibleTodoList() {
  const todos = useAppSelector(selectVisibleTodos);
  const dispatch = useAppDispatch();

  return (
    <TodoList
      todos={todos}
      onTodoClick={(id) => dispatch(toggleTodo(id))}
    />
  );
}
