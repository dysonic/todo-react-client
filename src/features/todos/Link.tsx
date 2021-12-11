import React from 'react';

interface LinkProps {
  onClick: ()  => void;
  active: boolean;
  children: React.ReactNode;
}
export function Link({ active, children, onClick }: LinkProps) {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </button>
  );
}
