import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SetCard = ({ set, onDelete }) => {

    const [searchTerm, setSearchTerm] = useState('');

  return (
    
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative pb-[100%]"> {/* Aspect ratio 1:1 */}
        <img 
          src={set.logo_url || '/placeholder-set.png'} 
          alt={set.name}
          className="absolute h-full w-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{set.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{set.code}</p>
        
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Released: {new Date(set.release_date).toLocaleDateString()}
          </span>
          <span className="text-sm text-gray-500">
            {set.total_cards} cards
          </span>
        </div>
        
        <div className="mt-3 flex justify-between">
          <Link 
            to={`/sets/edit/${set.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Edit
          </Link>
          <button 
            onClick={() => onDelete(set.id)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetCard;