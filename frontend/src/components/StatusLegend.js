import React from 'react';

const StatusLegend = () => {
  const statuses = [
    { color: 'bg-green-500', label: 'Available', description: 'Ready to book' },
    { color: 'bg-red-500', label: 'Occupied', description: 'Currently in use' },
    { color: 'bg-yellow-500', label: 'Maintenance', description: 'Under maintenance' },
  ];

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-sm font-semibold mb-2 text-gray-700">Status Legend:</h3>
      <div className="flex flex-wrap gap-4">
        {statuses.map((status) => (
          <div key={status.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${status.color}`}></div>
            <span className="text-sm text-gray-700">
              <span className="font-medium">{status.label}</span> - {status.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusLegend;
