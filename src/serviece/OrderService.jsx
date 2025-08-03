import { data } from "react-router-dom";

const API_URL = "http://localhost/api-tcg/v1/orders/index.php";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || 'Request failed');
  }
  return response.json();
};

export const getOrders = () => fetch(API_URL).then(handleResponse);
export const getOrderById = (id) => fetch(`${API_URL}?id=${id}`).then(handleResponse);

export const createOrder = (data) => fetch(API_URL, {
  method: 'POST',
  headers: { 'content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then(handleResponse);

export const updateOrder = (id, data) => fetch(`${API_URL}?id=${id}`, {
  method: 'PUT',
  headers: { 'content-Type': 'application/json' },
  body: JSON.stringify(data),
})

export const deleteOrder = (id) => fetch(`${API_URL}?id=${id}`, {
  method: 'DELETE'
}).then(handleResponse);