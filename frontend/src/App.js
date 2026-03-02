import React, { useEffect, useState } from 'react';
import { useDesks } from './context/DeskContext';
import DeskCard from './components/DeskCard';
import FilterBar from './components/FilterBar';
import StatusLegend from './components/StatusLegend';

function App() {
  const {
    desks,
    loading,
    error,
    selectedFilter,
    setSelectedFilter,
    fetchDesks,
    bookDesk,
    getFilteredDesks,
  } = useDesks();

  const [bookingId, setBookingId] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    fetchDesks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBookDesk = async (deskId) => {
    setBookingId(deskId);
    const result = await bookDesk(deskId);
    
    if (result.success) {
      setNotification({ type: 'success', message: result.message });
    } else {
      setNotification({ type: 'error', message: result.message });
    }
    
    setBookingId(null);
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const filteredDesks = getFilteredDesks();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Wekan Office Desk Booking Dashboard
          </h1>
          <p className="text-gray-600">Select and book your desk for the day</p>
        </header>

        {notification && (
          <div
            className={`mb-4 p-4 rounded-lg ${
              notification.type === 'success'
                ? 'bg-green-100 border border-green-400 text-green-800'
                : 'bg-red-100 border border-red-400 text-red-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <span>{notification.type === 'success' ? '✓' : '✗'}</span>
              <span className="font-medium">{notification.message}</span>
            </div>
          </div>
        )}

        <StatusLegend />

        <FilterBar
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-800 rounded-lg">
            Error: {error}
          </div>
        )}

        {loading && desks.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading desks...</p>
          </div>
        ) : filteredDesks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 text-lg">
              No desks found matching the selected filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDesks.map((desk) => (
              <DeskCard
                key={desk.id}
                desk={desk}
                onBookDesk={handleBookDesk}
                loading={loading && bookingId === desk.id}
              />
            ))}
          </div>
        )}

        {filteredDesks.length > 0 && (
          <div className="mt-6 text-center text-sm text-gray-600">
            Showing {filteredDesks.length} of {desks.length} desks
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
