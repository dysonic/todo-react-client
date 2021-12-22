import React, { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  addTodo,
} from './todosSlice';

export function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value);
  const handleClick = () => {
    if (text) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <TextField
        sx={{ mr: 1 }}
        hiddenLabel
        variant="filled"
        value={text}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={handleClick}
      >
        Add todo
      </Button>
    </div>
  );

}
