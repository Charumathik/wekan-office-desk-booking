import React, { createContext, useState, useContext, useCallback } from 'react';

const DeskContext = createContext();

export const useDesks = () => {
  const context = useContext(DeskContext);
  if (!context) {
    throw new Error('useDesks must be used within a DeskProvider');
  }
  return context;
};

export const DeskProvider = ({ children }) => {
  const [desks, setDesks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const fetchDesks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://127.0.0.1:8000/desks');
      if (!res.ok) {
        throw new Error('Failed to fetch desks');
      }
      const data = await res.json();
      setDesks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const bookDesk = async (deskId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://127.0.0.1:8000/book-desk/${deskId}`, {
        method: 'POST',
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || 'Failed to book desk');
      }

      const data = await res.json();
      await fetchDesks();
      return { success: true, message: data.message };
    } catch (err) {
      setError(err.message);
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  const getFilteredDesks = () => {
    if (selectedFilter === 'all') {
      return desks;
    }
    
    return desks.filter(desk => {
      if (selectedFilter === 'standing') {
        return desk.amenities.includes('standing');
      }
      if (selectedFilter === 'double_monitor') {
        return desk.amenities.includes('double_monitor');
      }
      return true;
    });
  };

  const value = {
    desks,
    loading,
    error,
    selectedFilter,
    setSelectedFilter,
    fetchDesks,
    bookDesk,
    getFilteredDesks,
  };

  return <DeskContext.Provider value={value}>{children}</DeskContext.Provider>;
};
