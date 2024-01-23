import React from 'react';

const TenderDetailsSkeleton = () => {
  return (
    <div className="h-auto w-full bg-base-100 shadow-md rounded-md">
      <button className="items-center ml-8 mt-4 px-6 py-2 text-sm font-medium rounded-lg text-gray-700 opacity-75 bg-[#efeff8] hover:bg-primary hover:text-white flex gap-2">
        <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      </button>
      <div className="card-body text-gray-600">
        <div className="h-8 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="divider -my-1"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="divider -my-2"></div>
        <div className="h-20 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="divider -my-2"></div>
        <div className="h-40 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="divider -my-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
        <div className="divider -my-2"></div>
        <div className="h-8 bg-gray-300 rounded w-1/4 animate-pulse"></div>
        <div className="divider -my-2"></div>
        <div className="flex items-center justify-between gap-4 mt-2">
          <div className="flex gap-4">
            <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderDetailsSkeleton;