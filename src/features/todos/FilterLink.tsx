import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectVisibilityFilter,
  switchVisibilityFilter,
} from './todosSlice';
import { Link } from './Link';

interface FilterLinkProps {
  filter: string;
  children: React.ReactNode;
}
export function FilterLink({ filter, children }: FilterLinkProps) {
  const visibilityFilter = useAppSelector(selectVisibilityFilter);
  const dispatch = useAppDispatch();
  const active = filter === visibilityFilter;
  return (
    <Link
      active={active}
      onClick={() => dispatch(switchVisibilityFilter(filter))}
    >
      {children}
    </Link>
  );
}
