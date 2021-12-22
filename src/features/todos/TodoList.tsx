import React from 'react';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
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
    <List sx={{ my: 1 }}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </List>
  );
}
