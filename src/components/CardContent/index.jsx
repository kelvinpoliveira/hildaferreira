import React from 'react';

const CardContent = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`flex flex-col items-center text-center p-6 ${className}`}>
      {icon && (
        <div className="mb-4 text-4xl">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="font-bold text-lg mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default CardContent;