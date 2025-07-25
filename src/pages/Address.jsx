import React from 'react';
import TableComponent from "../components/TableComponent";

const Address = () => {
  const addressData = [
    { 
      id: 1,
      user_id: 1,
      label: 'Rumah',
      recipient_name: 'John Doe',
      phone_number: '081234567890',
      address_line_1: 'Jl. Merdeka No. 123',
      city: 'Jakarta',
      province: 'DKI Jakarta',
      postal_code: '10110',
      is_default: true,
      created_at: '2023-05-15',
      updated_at: '2023-05-15'
    },
    { 
      id: 2,
      user_id: 1,
      label: 'Kantor',
      recipient_name: 'John Doe',
      phone_number: '081234567891',
      address_line_1: 'Jl. Sudirman No. 456',
      city: 'Jakarta',
      province: 'DKI Jakarta',
      postal_code: '10220',
      is_default: false,
      created_at: '2023-06-20',
      updated_at: '2023-06-20'
    }
  ];

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Label', accessor: 'label' },
    { header: 'Recipient', accessor: 'recipient_name' },
    { header: 'Phone', accessor: 'phone_number' },
    { header: 'Address', accessor: 'address_line_1' },
    { header: 'City', accessor: 'city' },
    { header: 'Province', accessor: 'province' },
    { header: 'Postal Code', accessor: 'postal_code' },
    { 
      header: 'Default', 
      accessor: 'is_default',
      render: (value) => value ? 'Yes' : 'No'
    }
  ];

  const handleDelete = (id) => {
    console.log('Delete address with id:', id);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <TableComponent
        title="Address Management"
        columns={columns}
        data={addressData}
        addButtonLink="/address/add"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Address;