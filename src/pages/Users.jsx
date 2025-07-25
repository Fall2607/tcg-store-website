import React from 'react';
import TableComponent from "../components/TableComponent";

const Users = () => {
  // Data dummy - nanti diganti dengan data dari API
  const usersData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', createdAt: '2023-05-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', createdAt: '2023-06-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', createdAt: '2023-07-10' },
  ];

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
    { header: 'Created At', accessor: 'createdAt' },
  ];

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log('Delete user with id:', id);
    // nanti akan diganti dengan API call
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <TableComponent
        title="Users Management"
        columns={columns}
        data={usersData}
        addButtonLink="/users/add"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Users;