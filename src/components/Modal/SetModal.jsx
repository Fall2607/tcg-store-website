import React, { useEffect, useState } from 'react';

const SetModal = ({ show, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    release_date: '',
  });

  useEffect(() => {
    setFormData(initialData || { name: '', code: '', release_date: '' });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">{initialData ? 'Edit Set' : 'Add Set'}</h2>
          <button onClick={onClose} className="text-xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input name="name" value={formData.name} onChange={handleChange} required className="w-full border p-2" />
          </div>
          <div className="mb-3">
            <label>Code</label>
            <input name="code" value={formData.code} onChange={handleChange} required className="w-full border p-2" />
          </div>
          <div className="mb-3">
            <label>Release Date</label>
            <input type="date" name="release_date" value={formData.release_date} onChange={handleChange} required className="w-full border p-2" />
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{initialData ? 'Update' : 'Create'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetModal;
