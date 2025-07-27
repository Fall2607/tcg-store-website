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
  body: data,
}).then(handleResponse);

export const updateProduct = (data) => fetch(API_URL, { // URL tidak perlu lagi ?id=
  method: 'POST',
  body: data,
}).then(handleResponse);

export const deleteProduct = (id) => fetch(`${API_URL}?id=${id}`, {
  method: 'DELETE'
}).then(handleResponse);
