import React from 'react';

export const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};