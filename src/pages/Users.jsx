import React, { useState, useEffect } from 'react';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../serviece/UserService";
import TableComponent from "../components/TableComponent";
import UserModal from "../components/Modal/UserModal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
    { header: 'Phone Number', accessor: 'phone_number' },
    { header: 'Created At', accessor: 'created_at' },
    { header: 'Actions', accessor: 'actions' },
  ];

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setCurrentUser(null);
    setModalShow(true);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setModalShow(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        fetchUsers();
      } catch (err) {
        console.error('Error deleting user:', err);
      }
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (currentUser) {
        await updateUser(currentUser.id, formData);
      } else {
        await createUser(formData);
      }
      setModalShow(false);
      fetchUsers();
    } catch (err) {
      console.error('Error submitting user:', err);
    }
  };

  const formattedData = users.map(user => ({
    ...user,
    actions: (
      <div className="flex space-x-2">
        <button
          onClick={() => handleEdit(user)}
          className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    ),
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <TableComponent
        title="Users Management"
        columns={columns}
        data={formattedData}
        onAdd={handleAdd}
      />
      
      <UserModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        onSubmit={handleSubmit}
        initialData={currentUser}
      />
    </div>
  );
};

export default Users;