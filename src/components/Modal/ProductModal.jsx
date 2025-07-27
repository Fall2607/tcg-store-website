import React, { useEffect, useState } from 'react';

const ProductModal = ({ show, onClose, onSubmit, initialData }) => {
  const [formData, ProductFormData] = useState({
    name: '',
    code: '',
    release_date: '',
  });

  useEffect(() => {
    ProductFormData(initialData || { name: '', code: '', release_date: '' });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    ProductFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!show) return null;

  return (
<div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
  <div className="bg-white rounded-2xl p-8 w-full max-w-4xl shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">{initialData ? 'Edit Product' : 'Add Product'}</h2>
      <button onClick={onClose} className="text-2xl text-gray-500 hover:text-red-500">&times;</button>
    </div>

    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
      <div className="grid grid-cols-2 gap-4">
  {[
    { label: 'Set ID', name: 'set_id', type: 'number' },
    { label: 'Rarity ID', name: 'rarity_id', type: 'number' },
    { label: 'Nama Produk', name: 'name' },
    { label: 'Harga', name: 'price', type: 'number' },
    { label: 'Jumlah Stok', name: 'stock_quantity', type: 'number' },
    { label: 'Kondisi Kartu', name: 'card_condition', type: 'select' },
    { label: 'Gambar (URL)', name: 'image_url', type: 'file' },
    { label: 'SKU', name: 'sku' },
  ].map((field) => (
    <div key={field.name}>
      <label className="block mb-1 font-medium text-sm text-gray-700">
        {field.label}
      </label>

      {field.type === 'select' && field.name === 'card_condition' ? (
        <select
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          <option value="Mint">Mint</option>
          <option value="Near Mint">Near Mint</option>
          <option value="Played">Played</option>
        </select>
      ) : field.type === 'file' && field.name === 'image_url' ? (
        <input
          type="file"
          name={field.name}
          accept="image/*"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      ) : (
        <input
          type={field.type || 'text'}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      )}
    </div>
  ))}
</div>



      {/* Deskripsi (1 kolom penuh) */}
      <div>
        <label className="block mb-1 font-medium text-sm text-gray-700">Deskripsi</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {initialData ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  </div>
</div>


  );
};

export default ProductModal;
