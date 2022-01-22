import * as React from 'react';
import { Outlet } from "react-router-dom";
import AppBar from './app/components/AppBar';
import Container from '@mui/material/Container';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar>
        Todo
      </AppBar>
      <Container maxWidth="sm">
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
}

export default App;
