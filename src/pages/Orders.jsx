import React from 'react';
import TableComponent from "../components/TableComponent";

const Orders = () => {
  const ordersData = [
    { 
      id: 1,
      user_id: 1,
      shipping_address_id: 1,
      total_amount: 299.99,
      status: 'processing',
      payment_method: 'Credit Card',
      tracking_number: 'TRK123456789',
      created_at: '2023-07-01',
      updated_at: '2023-07-02'
    },
    { 
      id: 2,
      user_id: 2,
      shipping_address_id: 2,
      total_amount: 199.99,
      status: 'shipped',
      payment_method: 'Bank Transfer',
      tracking_number: 'TRK987654321',
      created_at: '2023-07-10',
      updated_at: '2023-07-11'
    }
  ];

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    paid: 'bg-blue-100 text-blue-800',
    processing: 'bg-purple-100 text-purple-800',
    shipped: 'bg-indigo-100 text-indigo-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  const columns = [
    { header: 'Order ID', accessor: 'id' },
    { header: 'User ID', accessor: 'user_id' },
    { header: 'Total Amount', accessor: 'total_amount' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[value]}`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
    { header: 'Payment Method', accessor: 'payment_method' },
    { header: 'Tracking Number', accessor: 'tracking_number' },
    { header: 'Created At', accessor: 'created_at' }
  ];

  const handleDelete = (id) => {
    console.log('Delete order with id:', id);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <TableComponent
        title="Orders Management"
        columns={columns}
        data={ordersData}
        addButtonLink="/orders/add"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Orders;