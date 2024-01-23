import React from 'react';

const TenderCardSkeleton = () => {
  return (
    <div className="h-auto w-full bg-base-100 shadow-md rounded-md p-4">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
      </div>
    </div>
  );
};

export default TenderCardSkeleton;