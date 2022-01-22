import * as React from 'react';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from './Link';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppBar(props: AppBarProps) {
  return (
    <React.Fragment>
    <MuiAppBar position="fixed" {...props} >
      <Toolbar>
      <Box sx={{ flex: 1 }} />
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          to="/"
          sx={{ fontSize: 24 }}
        >
          Todos
        </Link>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              to="/sign-in"
              sx={rightLink}
            >
              Sign In
            </Link>
            <Link
              variant="h6"
              underline="none"
              to="/sign-up"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              Sign Up
            </Link>
        </Box>
      </Toolbar>
    </MuiAppBar>
    <Toolbar />
  </React.Fragment>
  );
}

export default AppBar;
