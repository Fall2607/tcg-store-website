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
// ProductService.js

export const createProduct = async (data, isForm = false) => {
  const res = await fetch(`${API_URL}/products/index.php`, {
    method: 'POST',
    headers: isForm ? {} : { 'Content-Type': 'application/json' },
    body: isForm ? data : JSON.stringify(data),
  });

  return await handleResponse(res);
};



// updateProduct.js
export const updateProduct = async (data) => {
  const formData = new FormData();
  formData.append('product_data', JSON.stringify(data)); // ✅ Kirim semua sebagai JSON string

  if (data.image_url instanceof File) {
    formData.append('image_url', data.image_url);
  }

  try {
    const response = await fetch(`http://localhost/api-tcg/v1/products/index.php?update=1`, {
      method: 'POST', // ✅ pakai POST (bukan PUT!)
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Gagal update produk');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};






export const deleteProduct = (id) => fetch(`${API_URL}?id=${id}`, {
  method: 'DELETE'
}).then(handleResponse);
