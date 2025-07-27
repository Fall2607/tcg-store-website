const API_URL = 'http://localhost/api-tcg/v1/sets/index.php';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || 'Request failed');
  }
  return response.json();
};

export const getSets = () => fetch(API_URL).then(handleResponse);
export const getSetById = (id) => fetch(`${API_URL}?id=${id}`).then(handleResponse);
export const createSet = (data) => fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then(handleResponse);

export const updateSet = (id, data) => fetch(`${API_URL}?id=${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then(handleResponse);

export const deleteSet = (id) => fetch(`${API_URL}?id=${id}`, {
  method: 'DELETE'
}).then(handleResponse);
