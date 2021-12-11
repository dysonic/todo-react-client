import React, { useRef } from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
  addTodo,
} from './todosSlice';

export function AddTodo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => {
        if (inputRef?.current?.value) {
          dispatch(addTodo(inputRef.current.value));
          inputRef.current.value = '';
        }
      }}>
        Add Todo
      </button>
    </div>
  );

}
