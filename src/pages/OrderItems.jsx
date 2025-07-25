import React from 'react';
import TableComponent from "../components/TableComponent";

const OrderItems = () => {
  const orderItemsData = [
    { 
      id: 1,
      order_id: 1,
      product_id: 1,
      product_name: 'Charizard',
      quantity: 1,
      price_per_unit: 299.99,
      created_at: '2023-07-01',
      updated_at: '2023-07-01'
    },
    { 
      id: 2,
      order_id: 1,
      product_id: 2,
      product_name: 'Blastoise',
      quantity: 2,
      price_per_unit: 199.99,
      created_at: '2023-07-01',
      updated_at: '2023-07-01'
    },
    { 
      id: 3,
      order_id: 2,
      product_id: 3,
      product_name: 'Venusaur',
      quantity: 1,
      price_per_unit: 179.99,
      created_at: '2023-07-10',
      updated_at: '2023-07-10'
    }
  ];

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Order ID', accessor: 'order_id' },
    { 
      header: 'Product', 
      accessor: 'product_name',
      render: (value, row) => (
        <div>
          <div>{value} (ID: {row.product_id})</div>
        </div>
      )
    },
    { header: 'Quantity', accessor: 'quantity' },
    { 
      header: 'Price', 
      accessor: 'price_per_unit',
      render: (value) => `$${value.toFixed(2)}`
    },
    { 
      header: 'Subtotal', 
      accessor: 'row',
      render: (row) => `$${(row.quantity * row.price_per_unit).toFixed(2)}`
    },
    { header: 'Created At', accessor: 'created_at' }
  ];

  const handleDelete = (id) => {
    console.log('Delete order item with id:', id);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <TableComponent
        title="Order Items Management"
        columns={columns}
        data={orderItemsData}
        addButtonLink="/order-items/add"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default OrderItems;