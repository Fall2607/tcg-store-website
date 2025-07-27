import React, { useState, useEffect } from 'react';
import {
  getRarities,
  createRarity,
  updateRarity,
  deleteRarity
} from "../serviece/RarityService"
import TableComponent from "../components/TableComponent";
import RarityModal from "../components/Modal/RarityModal";

const Rarities = () => {
  const [rarities, setRarities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [currentRarity, setCurrentRarity] = useState(null);

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Slug', accessor: 'slug' },
    { header: 'Description', accessor: 'description' },
    { header: 'Actions', accessor: 'actions' },
  ];

  useEffect(() => {
    fetchRarities();
  }, []);

  const fetchRarities = async () => {
    try {
      setLoading(true);
      const data = await getRarities();
      setRarities(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setCurrentRarity(null);
    setModalShow(true);
  };

  const handleEdit = (rarity) => {
    setCurrentRarity(rarity);
    setModalShow(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this rarity?')) {
      try {
        await deleteRarity(id);
        fetchRarities();
      } catch (err) {
        console.error('Error deleting rarity:', err);
      }
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (currentRarity) {
        await updateRarity(currentRarity.id, formData);
      } else {
        await createRarity(formData);
      }
      setModalShow(false);
      fetchRarities();
    } catch (err) {
      console.error('Error submitting rarity:', err);
    }
  };

  const formattedData = rarities.map(rarity => ({
    ...rarity,
    actions: (
      <div className="flex space-x-2">
        <button
          onClick={() => handleEdit(rarity)}
          className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(rarity.id)}
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
        title="Rarities Management"
        columns={columns}
        data={formattedData}
        onAdd={handleAdd}
      />
      
      <RarityModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        onSubmit={handleSubmit}
        initialData={currentRarity}
      />
    </div>
  );
};

export default Rarities;