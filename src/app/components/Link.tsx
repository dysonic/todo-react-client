import * as React from 'react';
import MuiLink, { LinkProps } from '@mui/material/Link';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';


function Link(props: LinkProps & RouterLinkProps) {
  const { children, to, ...other } = props;
  return (
    <MuiLink component={RouterLink} to={to} {...other} >
      {children}
    </MuiLink>
  );
}

export default Link;
