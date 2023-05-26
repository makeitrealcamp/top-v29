const BASE_URL = import.meta.env.VITE_API_URL;

export async function getAllHotels() {
  const response = await fetch(`${BASE_URL}/api/hotels`);
  return response.json();
}

export async function getHotelById(id) {
  const response = await fetch(`${BASE_URL}/api/hotels/${id}`);
  return response.json();
}

export async function createHotel(hotel) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hotel),
  };
  const response = await fetch(`${BASE_URL}/api/hotels`, options);
  return response.json();
}
