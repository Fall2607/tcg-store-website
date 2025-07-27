import React from 'react';
import SetCard from "../components/Card/SetCard";
import { Link } from 'react-router-dom';

const Sets = () => {
  const setsData = [
    { id: 1, name: 'Base Set', code: 'BS', release_date: '1999-01-09', total_cards: 102, logo_url: '' },
    { id: 2, name: 'Jungle', code: 'JU', release_date: '1999-06-16', total_cards: 64, logo_url: '' },
    { id: 3, name: 'Fossil', code: 'FO', release_date: '1999-10-10', total_cards: 62, logo_url: '' },
  ];

  const handleDelete = (id) => {
    console.log('Delete set with id:', id);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sets Management</h1>
        <Link 
          to="/sets/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Set
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {setsData.map((set) => (
          <SetCard 
            key={set.id}
            set={set}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Sets;
