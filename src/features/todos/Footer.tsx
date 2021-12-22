import React, { MouseEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectVisibilityFilter,
  switchVisibilityFilter,
} from './todosSlice';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export function Footer() {
  const filter = useAppSelector(selectVisibilityFilter);
  const dispatch = useAppDispatch();
  const handleChange = (event: MouseEvent<HTMLElement>, newFilter: string) => {
    dispatch(switchVisibilityFilter(newFilter));
  }
  return (
    <ToggleButtonGroup
      value={filter}
      onChange={handleChange}
      exclusive
      size="small"
      aria-label="Show:"
    >
      <ToggleButton value="SHOW_ALL">
        All
      </ToggleButton>
      <ToggleButton value="SHOW_ACTIVE">
        Active
      </ToggleButton>
      <ToggleButton value="SHOW_COMPLETED">
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
