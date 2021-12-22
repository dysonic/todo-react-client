import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface TodoProps {
  onClick: ()  => void;
  completed: boolean;
  text: string;
}
export function Todo({ onClick , completed, text }: TodoProps) {
  const labelId = 'foo';
  return (
    <ListItem disablePadding>
      <ListItemButton role={undefined} onClick={onClick} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={text}
          style={{
            textDecoration:
              completed ?
                'line-through' :
                'none'
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}
