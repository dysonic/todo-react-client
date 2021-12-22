import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AddTodo } from './features/todos/AddTodo';
import { VisibleTodoList } from './features/todos/VisibleTodoList';
import { Footer } from './features/todos/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom mt={2}>
          Todo list example
        </Typography>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
