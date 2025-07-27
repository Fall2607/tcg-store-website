import React, { useState, useEffect } from 'react';
import {
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress
} from "../serviece/AddressService";
import TableComponent from "../components/TableComponent";
import AddressModal from "../components/Modal/AddressModal";

const Address = () => {
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [userId, setUserId] = useState(null);

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Label', accessor: 'label' },
    { header: 'Recipient', accessor: 'recipient_name' },
    { header: 'Phone', accessor: 'phone_number' },
    { header: 'City', accessor: 'city' },
    { header: 'Default', accessor: 'is_default', 
      cell: (value) => value ? 'Yes' : 'No' 
    },
    { header: 'Actions', accessor: 'actions' },
  ];

  useEffect(() => {
    fetchAddress();
  }, [userId]);

  const fetchAddress = async () => {
    try {
      setLoading(true);
      const data = userId ? await getAddress(userId) : await getAddress();
      setAddress(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setCurrentAddress(null);
    setModalShow(true);
  };

  const handleEdit = (address) => {
    setCurrentAddress(address);
    setModalShow(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      try {
        await deleteAddress(id);
        fetchAddress();
      } catch (err) {
        console.error('Error deleting address:', err);
      }
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (currentAddress) {
        await updateAddress(currentAddress.id, formData);
      } else {
        await createAddress(formData);
      }
      setModalShow(false);
      fetchAddress();
    } catch (err) {
      console.error('Error submitting address:', err);
    }
  };

  const formattedData = address.map(item => ({
    ...item,
    actions: (
      <div className="flex space-x-2">
        <button
          onClick={() => handleEdit(item)}
          className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(item.id)}
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
      {/* Remove the manual Add button and header */}
      <TableComponent
        title="Address Management"  // Add title here
        columns={columns}
        data={formattedData}
        onAdd={handleAdd}  // Pass the handleAdd function
      />
      
      <AddressModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        onSubmit={handleSubmit}
        initialData={currentAddress}
        userId={userId}
      />
    </div>
  );
};

export default Address;