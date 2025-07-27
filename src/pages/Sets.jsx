import React, { useEffect, useState } from 'react';
import {
  getSets,
  createSet,
  updateSet,
  deleteSet
} from '../serviece/SetService';
import TableComponent from '../components/TableComponent';
import SetModal from '../components/Modal/SetModal';

const Sets = () => {
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [currentSet, setCurrentSet] = useState(null);

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Nama', accessor: 'name' },
    { header: 'Code', accessor: 'code' },
    { header: 'Slug', accessor: 'slug' },
    { header: 'Rilis', accessor: 'release_date' },
    {
      header: 'Aksi', accessor: 'actions',
    },
  ];

  useEffect(() => {
    fetchSets();
  }, []);

  const fetchSets = async () => {
    setLoading(true);
    try {
      const data = await getSets();
      setSets(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setCurrentSet(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setCurrentSet(item);
    setModalShow(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin hapus set ini?')) {
      try {
        await deleteSet(id);
        fetchSets();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (currentSet) {
        await updateSet(currentSet.id, formData);
      } else {
        await createSet(formData);
      }
      setModalShow(false);
      fetchSets();
    } catch (err) {
      console.error('Gagal submit:', err);
    }
  };

  const formattedData = sets.map((item) => ({
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
          Hapus
        </button>
      </div>
    ),
  }));

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <TableComponent
        title="Set TCG"
        columns={columns}
        data={formattedData}
        onAdd={handleAdd}
      />

      <SetModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        onSubmit={handleSubmit}
        initialData={currentSet}
      />
    </div>
  );
};

export default Sets;
