import React, { useState } from 'react';

const Collapsible = ({ id, title, children, activeId, setActiveId }) => {
  const isOpen = id === activeId;

  const toggleCollapse = () => {
    setActiveId(isOpen ? null : id);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center p-4 cursor-pointer" onClick={toggleCollapse}>
        <div>{title}</div>
        <div className="text-sm transform transition-transform">{isOpen ? '▲' : '▼'}</div>
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-full opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}>
        <div className="border-t border-gray-300">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
