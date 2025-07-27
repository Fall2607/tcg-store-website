import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "../components/Card/ProductCard";
import ProductModal from "../components/Modal/ProductModal";
import TableComponent from "../components/TableComponent";

const Products = () => {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
  const productsData = [
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    { 
      id: 1,
      name: 'Charizard',
      set_id: 1,
      set_name: 'Base Set',
      rarity_id: 3,
      rarity_name: 'Rare Holo',
      price: 299.99,
      stock_quantity: 5,
      condition: 'Mint',
      image_url: '/charizard.jpg',
      sku: 'PKM-BS-001',
      description: 'First edition Charizard holographic card',
      created_at: '2023-01-15'
    },
    // Data lainnya...
  ];

  // const handleDelete = (id) => {
  //   console.log('Delete product with id:', id);
  //   // Implementasi delete
  // };

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
      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products Management</h1>
        <Link 
          to="/products/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add New Product
        </Link>
      </div> */}

      <TableComponent
        title="Set TCG"
        columns={columns}
        data={formattedData}
        onAdd={handleAdd}
      />

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map(product => (
          // <ProductCard
          //   key={product.id} 
          //   product={product} 
          //   onDelete={handleDelete}
          // />
          <TableComponent
        title="Set TCG"
        columns={columns}
        data={formattedData}
        onAdd={handleAdd}
      />
        ))}
      </div> */}

      <ProductModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        onSubmit={handleSubmit}
        initialData={currentSet}
      />
    </div>
  );
};

export default Products;