// File: ProductModal.jsx (SUDAH DIPERBAIKI)

import React, { useEffect, useState } from "react";
import { getSets } from "../../serviece/SetService";
import { getRarities } from "../../serviece/RarityService";

const ProductModal = ({ show, onClose, onSubmit, initialData }) => {
  const [rarities, setRarities] = useState([]);
  const [sets, setSets] = useState([]);

  const defaultProductState = {
    set_id: "",
    rarity_id: "",
    name: "",
    price: "",
    stock_quantity: "",
    card_condition: "Mint", // Beri nilai default
    image_url: null,
    sku: "",
    description: "",
  };
  // State untuk data form di dalam modal
  const [formData, setFormData] = useState({});

  // Mengisi form dengan data awal saat mode edit
  useEffect(() => {
    fetchRarities();
    fetchSets();
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(defaultProductState);
    }
  }, [initialData, show]);

  const fetchRarities = async () => {
    try {
      const data = await getRarities();
      setRarities(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSets = async () => {
    try {
      const data = await getSets();
      setSets(data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fungsi untuk menangani perubahan pada setiap input
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ==================================================================
  // INI ADALAH FUNGSI YANG DIPERBAIKI (INI SATU-SATUNYA YANG BERUBAH)
  // Tugasnya hanya 2:
  // 1. Mencegah form reload (preventDefault).
  // 2. Mengirim data (state 'formData') ke parent lewat props 'onSubmit'.
  // ==================================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang akan dikirim:", formData);
    onSubmit(formData);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {initialData ? "Edit Product" : "Add Product"}
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-red-500"
          >
            &times;
          </button>
        </div>

        {/* Form ini memanggil handleSubmit yang sudah diperbaiki */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Set ID", name: "set_id", type: "select" },
              { label: "Rarity ID", name: "rarity_id", type: "select" },
              { label: "Nama Produk", name: "name" },
              { label: "Harga", name: "price", type: "number" },
              { label: "Jumlah Stok", name: "stock_quantity", type: "number" },
              {
                label: "Kondisi Kartu",
                name: "card_condition",
                type: "select",
              },
              { label: "Gambar", name: "image_url", type: "file" },
              { label: "SKU", name: "sku" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    {field.name === "set_id" ? (
                      <>
                        <option hidden>Pilih Set</option>
                        {sets.map((set) => (
                          <option key={set.id} value={set.id}>
                            {set.name}
                          </option>
                        ))}
                      </>
                    ) : field.name === "rarity_id" ? (
                      <>
                        <option hidden>Pilih Rarity</option>
                        {rarities.map((rarity) => (
                          <option key={rarity.id} value={rarity.id}>
                            {rarity.name}
                          </option>
                        ))}
                      </>
                    ) : (
                      <>
                        <option value="">Pilih Kondisi</option>
                        <option value="Mint">Mint</option>
                        <option value="Near Mint">Near Mint</option>
                        <option value="Played">Played</option>
                      </>
                    )}
                  </select>
                ) : field.type === "file" ? (
                  <input
                    type="file"
                    name={field.name}
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full"
                  />
                ) : (
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">
              Deskripsi
            </label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white"
            >
              {initialData ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
