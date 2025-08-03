import React, { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../serviece/ProductService";

import ProductModal from "../components/Modal/ProductModal";
import ProductCard from "../components/Card/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

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

  const handleDelete = async (id) => {
    if (window.confirm("Yakin hapus set ini?")) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSubmit = async (formObject) => {
  try {
    let dataToSend;

    // Jika image_url bertipe File, maka gunakan FormData
    if (formObject.image_url instanceof File) {
      const formData = new FormData();
      Object.entries(formObject).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (currentProduct) {
        formData.append("id", currentProduct.id);
        await updateProduct(formData, true); // kirim flag FormData = true
      } else {
        await createProduct(formData, true); // flag FormData = true
      }

      dataToSend = formData;
    } else {
      const data = { ...formObject };
      if (currentProduct) {
        data.id = currentProduct.id;
        await updateProduct(data);
      } else {
        await createProduct(data);
      }

      dataToSend = data;
    }

    setModalShow(false);
    fetchProducts();
  } catch (err) {
    console.error("Gagal submit:", err);
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
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <ProductCard 
              product={product} 
              onDelete={handleDelete} 
              onEdit={() =>{
                setCurrentProduct(product);
                setModalShow(true);
              }}/>
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

export default Product;
