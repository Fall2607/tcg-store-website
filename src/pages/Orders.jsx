import React, { useEffect, useState } from 'react'
import TableComponent from "../components/TableComponent"
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder
} from '../serviece/OrderService';
import OrderModal from '../components/Modal/OrderModal';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'User ID', accessor: 'user_id' },
    { header: 'Recipient', accessor: 'recipient_name' },
    { header: 'Phone', accessor: 'phone_number' },
    { header: 'City', accessor: 'city' },
    { header: 'Status', accessor: 'status' },
    { header: 'Action', accessor: 'action' },
  ];


  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setCurrentOrder(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setCurrentOrder(item);
    setModalShow(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin menghapus order ini?")) {
      try {
        await deleteOrder(id);
        fetchOrders();
      } catch (err) {
        console.error("Gagal hapus order:", err);
      }
    }
  };


  const handleSubmit = async (formData) => {
    try {
      if (currentOrder) {
        await updateOrder(currentOrder.id, formData);
      } else {
        await createOrder(formData);
      }
      setModalShow(false);
      fetchOrders();
    } catch (err) {
      console.error('Gagal Submit:', err)
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateOrder(id, { status: newStatus }); // pastikan endpoint mendukung partial update
      fetchOrders();
    } catch (err) {
      console.error("Gagal update status:", err);
    }
  };


  const formattedData = orders.map((item) => ({
    ...item,
    status: (
      <select
        value={item.status}
        onChange={(e) => handleStatusChange(item.id, e.target.value)}
        className="border rounded px-2 py-1 text-sm"
      >
        <option value="pending">Pending</option>
        <option value="dikemas">Dikemas</option>
        <option value="dijalan">Dijalan</option>
        <option value="sampai">Sampai</option>
      </select>
    ),
    action: (
      <div className="flex space-x-2">
        <button
          onClick={() => handleEdit(item)}
          className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Edit
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          Hapus
        </button>
      </div>
    ),
  }));

  if (loading) return <div>loading....</div>

  return (
    <div className="contrainer mx-auto px-4 py-6">
      <TableComponent
        title="Orders TCG"
        columns={columns}
        data={formattedData}
        onAdd={handleAdd} />

      <OrderModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        onSubmit={handleSubmit}
        initialData={currentOrder} />
    </div>
  );
};

export default Orders;
