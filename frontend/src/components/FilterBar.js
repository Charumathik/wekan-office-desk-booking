import React from 'react';

const FilterBar = ({ selectedFilter, onFilterChange }) => {
  const filters = [
    { value: 'all', label: 'All Desks' },
    { value: 'standing', label: 'Standing Desks' },
    { value: 'double_monitor', label: 'Double Monitors' },
  ];

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Filter by Amenity:</h2>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedFilter === filter.value
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
