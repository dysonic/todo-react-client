import React from 'react';

interface TodoProps {
  onClick: ()  => void;
  completed: boolean;
  text: string;
}
export function Todo({ onClick , completed, text }: TodoProps) {
  return (
    <li
        onClick={onClick}
        style={{
        textDecoration:
            completed ?
            'line-through' :
            'none'
        }}
    >
        {text}
    </li>
  );
}
