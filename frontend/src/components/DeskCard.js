import React from 'react';

const DeskCard = ({ desk, onBookDesk, loading }) => {
  const getStatusColor = () => {
    if (desk.maintenance) {
      return 'bg-yellow-100 border-yellow-400 text-yellow-800';
    }
    if (desk.status === 'occupied') {
      return 'bg-red-100 border-red-400 text-red-800';
    }
    return 'bg-green-100 border-green-400 text-green-800';
  };

  const getStatusText = () => {
    if (desk.maintenance) {
      return 'Under Maintenance';
    }
    return desk.status === 'occupied' ? 'Occupied' : 'Available';
  };

  const isDisabled = desk.status === 'occupied' || desk.maintenance || loading;

  return (
    <div
      className={`border-2 rounded-lg p-4 w-64 transition-all hover:shadow-lg ${getStatusColor()}`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold">Desk {desk.id}</h3>
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            desk.status === 'occupied'
              ? 'bg-red-500 text-white'
              : desk.maintenance
              ? 'bg-yellow-500 text-white'
              : 'bg-green-500 text-white'
          }`}
        >
          {getStatusText()}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Amenities:</p>
        <div className="flex flex-wrap gap-2">
          {desk.amenities.length > 0 ? (
            desk.amenities.map((amenity, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs"
              >
                {amenity === 'standing' ? 'Standing Desk' : 'Double Monitor'}
              </span>
            ))
          ) : (
            <span className="text-gray-500 text-xs">None</span>
          )}
        </div>
      </div>

      {desk.maintenance && (
        <div className="mb-3 p-2 bg-yellow-200 border border-yellow-400 rounded text-xs text-yellow-900">
          ⚠️ This desk is under maintenance and cannot be booked.
        </div>
      )}

      <button
        onClick={() => onBookDesk(desk.id)}
        disabled={isDisabled}
        className={`w-full py-2 px-4 rounded font-semibold transition-all ${
          isDisabled
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
        }`}
      >
        {loading ? 'Booking...' : 'Book Desk'}
      </button>
    </div>
  );
};

export default DeskCard;
