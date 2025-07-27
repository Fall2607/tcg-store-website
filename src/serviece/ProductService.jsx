const API_URL = 'http://localhost/api-tcg/v1/products/index.php';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || 'Request failed');
  }
  return response.json();
};

export const getProducts = () => fetch(API_URL).then(handleResponse);
export const getProductById = (id) => fetch(`${API_URL}?id=${id}`).then(handleResponse);
export const createProduct = (data) => fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then(handleResponse);

export const updateProduct = (id, data) => fetch(`${API_URL}?id=${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then(handleResponse);

export const deleteProduct = (id) => fetch(`${API_URL}?id=${id}`, {
  method: 'DELETE'
}).then(handleResponse);
