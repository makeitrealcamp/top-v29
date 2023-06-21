const BASE_URL = 'http://localhost:8080';

export const login = async (username, password) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  };

  const url = `${BASE_URL}/api/auth/login`;
  const response = await fetch(url, payload);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Something went wrong');
  }
};

export const register = async (customer) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  };

  const url = `${BASE_URL}/api/auth/register`;
  const response = await fetch(url, payload);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Something went wrong');
  }
};

export const forgotPassword = async (email) => {};
