import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ChevronDown, Check } from 'lucide-react';

const SelectContext = createContext();

export function Select({ children, value, onValueChange, defaultValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
  const [items, setItems] = useState({});
  const triggerRef = useRef(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleValueChange = (newValue, label) => {
    setSelectedValue(newValue);
    if (label) {
      setItems(prev => ({ ...prev, [newValue]: label }));
    }
    onValueChange?.(newValue);
    setIsOpen(false);
  };

  const registerItem = (value, label) => {
    setItems(prev => ({ ...prev, [value]: label }));
  };

  return (
    <SelectContext.Provider value={{
      isOpen,
      setIsOpen,
      selectedValue,
      handleValueChange,
      triggerRef,
      items,
      registerItem
    }}>
      <div className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children, className = '' }) {
  const { isOpen, setIsOpen, triggerRef } = useContext(SelectContext);

  return (
    <button
      ref={triggerRef}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={`
        flex w-full items-center justify-between rounded-lg border border-gray-300
        bg-white px-4 py-3 text-left text-base
        transition-all duration-200
        hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 
        focus:ring-blue-500/20
        ${className}
      `}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      {children}
      <ChevronDown 
        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
}

export function SelectValue({ placeholder = 'Selecione uma opção' }) {
  const { selectedValue, items } = useContext(SelectContext);
  const displayValue = items[selectedValue] || '';

  return (
    <span className={`block truncate ${!displayValue ? 'text-gray-400' : 'text-gray-900'}`}>
      {displayValue || placeholder}
    </span>
  );
}

export function SelectContent({ children, className = '' }) {
  const { isOpen, setIsOpen, triggerRef } = useContext(SelectContext);
  const contentRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width
      });
    }
  }, [isOpen, triggerRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, setIsOpen, triggerRef]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      className={`
        fixed z-50 max-h-60 overflow-auto rounded-lg border border-gray-200
        bg-white shadow-lg animate-in fade-in-0 zoom-in-95
        ${className}
      `}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`
      }}
      role="listbox"
    >
      <div className="py-1">
        {children}
      </div>
    </div>,
    document.body
  );
}

export function SelectItem({ children, value, className = '' }) {
  const { selectedValue, handleValueChange, registerItem } = useContext(SelectContext);
  const isSelected = selectedValue === value;
  
  // Register this item when it mounts
  useEffect(() => {
    registerItem(value, children);
  }, [value, children, registerItem]);

  return (
    <div
      data-value={value}
      onClick={() => handleValueChange(value, children)}
      className={`
        relative flex cursor-pointer select-none items-center justify-between
        px-4 py-2.5 text-base outline-none
        transition-colors duration-150
        hover:bg-gray-50 focus:bg-gray-50
        ${isSelected ? 'bg-blue-50 text-blue-600' : 'text-gray-900'}
        ${className}
      `}
      role="option"
      aria-selected={isSelected}
    >
      <span className="block truncate">{children}</span>
      {isSelected && (
        <Check className="h-4 w-4 text-blue-600" />
      )}
    </div>
  );
}