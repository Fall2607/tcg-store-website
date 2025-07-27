import React, { useEffect, useState } from 'react';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from '../serviece/ProductService';

import ProductModal from "../components/Modal/ProductModal";
import ProductCard from "../components/Card/ProductCard";

const Product2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);


  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Set ID', accessor: 'set_id' },
    { header: 'Rarity ID', accessor: 'rarity_id' },
    { header: 'Nama Produk', accessor: 'name' },
    { header: 'Slug', accessor: 'slug' },
    { header: 'Deskripsi', accessor: 'description' },
    { header: 'Harga', accessor: 'price' },
    { header: 'Stok', accessor: 'stock_quantity' },
    { header: 'Kondisi', accessor: 'card_condition' },
    { header: 'Gambar', accessor: 'image_url' },
    { header: 'SKU', accessor: 'sku' },
    {
      header: 'Aksi',
      accessor: 'actions'
    }
  ];


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setCurrentProduct(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setCurrentProduct(item);
    setModalShow(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin hapus set ini?')) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (err) {
        console.error(err);
      }
    }
  };

  // const handleSubmit = async (formData) => {
  //   try {
  //     if (currentProduct) {
  //       await updateProduct(currentProduct.id, formData);
  //     } else {
  //       await createProduct(formData);
  //     }
  //     setModalShow(false);
  //     fetchProducts();
  //   } catch (err) {
  //     console.error('Gagal submit:', err);
  //   }
  // };

  const handleSubmit = async (formData) => {
    try {
      const data = new FormData();
      for (const key in formData) {
        if (formData[key] !== null && formData[key] !== undefined) {
          data.append(key, formData[key]);
        }
      }

      if (currentProduct) {
        // Untuk update, tambahkan id dan method override
        data.append('_method', 'PUT');
        data.append('id', currentProduct.id);
        await updateProduct(data);
      } else {
        await createProduct(data);
      }

      setModalShow(false);
      fetchProducts();
    } catch (err) {
      console.error('Gagal submit:', err);
    }
  };




  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">List Cards</h2>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map(product => (
          <div key={product.id} className="w-full">
            <ProductCard
              product={product}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>

      <ProductModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        onSubmit={handleSubmit}
        initialData={currentProduct}
      />
    </div>
  );
};

export default Product2;
