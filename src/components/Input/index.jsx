import React from 'react';

const Input = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = 'text',
  name,
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-gray-700 font-medium text-base">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`
          w-full 
          px-4 
          py-3 
          text-gray-600
          placeholder-gray-400
          bg-white 
          border 
          border-gray-300 
          rounded-lg 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:border-transparent
          transition-all
          duration-200
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;