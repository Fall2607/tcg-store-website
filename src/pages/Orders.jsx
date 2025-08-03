import React, { useState } from 'react'
import TableComponent from "../components/TableComponent"
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder
} from '../serviece/OrderService';

function Orders() {

  const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    
    const column = [
      { header: 'ID', accessor: 'id'},
      {},
      {},
      {},
      {},
      {},

    ]
  }

  return (
    <div>
    </div>
  )
}

export default Orders
