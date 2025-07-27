import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "../components/Card/ProductCard";

const Products = () => {
  const productsData = [
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    // Data lainnya...
  ];

  const handleDelete = (id) => {
    console.log('Delete product with id:', id);
    // Implementasi delete
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products Management</h1>
        <Link 
          to="/products/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add New Product
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map(product => (
          <ProductCard
            key={product.id} 
            product={product} 
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;