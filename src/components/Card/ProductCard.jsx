import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative pb-[100%]"> {/* Aspect ratio 1:1 */}
        <img
          src={product.image_url || '/placeholder-product.jpg'}
          alt={product.name}
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg truncate">{product.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {product.rarity_name}
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-1">{product.set_name}</p>

        <div className="mt-2 flex justify-between items-center">
          <span className="font-bold text-lg">
            ${Number(product.price || 0).toFixed(2)}
          </span>
          <span
            className={`text-sm ${product.stock_quantity > 0 ? 'text-green-600' : 'text-red-600'
              }`}
          >
            {product.stock_quantity > 0
              ? `${product.stock_quantity} in stock`
              : 'Out of stock'}
          </span>
        </div>


        <div className="mt-3 flex justify-between">
          <Link
            to={`/products/edit/${product.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(product.id)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;