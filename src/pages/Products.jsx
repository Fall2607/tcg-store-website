import React from 'react';
import TableComponent from "../components/TableComponent";

const Products = () => {
  const productsData = [
    { 
      id: 1, 
      name: 'Charizard', 
      set: 'Base Set', 
      rarity: 'Rare Holo', 
      price: 299.99, 
      stock: 5 
    },
    { 
      id: 2, 
      name: 'Blastoise', 
      set: 'Base Set', 
      rarity: 'Rare Holo', 
      price: 199.99, 
      stock: 3 
    },
    { 
      id: 3, 
      name: 'Venusaur', 
      set: 'Base Set', 
      rarity: 'Rare Holo', 
      price: 179.99, 
      stock: 2 
    },
  ];

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Product Name', accessor: 'name' },
    { header: 'Set', accessor: 'set' },
    { header: 'Rarity', accessor: 'rarity' },
    { header: 'Price', accessor: 'price' },
    { header: 'Stock', accessor: 'stock' },
  ];

  const handleDelete = (id) => {
    console.log('Delete product with id:', id);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <TableComponent
        title="Products Management"
        columns={columns}
        data={productsData}
        addButtonLink="/products/add"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Products;