import React, { useState } from 'react';

export const Tabs = ({ children, className }) => {
  return (
    <div className={`tabs ${className}`}>
      {children}
    </div>
  );
};

export const TabsList = ({ children, className }) => {
  return (
    <div className={`flex border-b ${className}`}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ children, onClick, isActive, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 ${isActive ? 'border-b-2 border-blue-500' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, isActive, className }) => {
  return (
    <div className={`p-4 ${isActive ? '' : 'hidden'} ${className}`}>
      {children}
    </div>
  );
};