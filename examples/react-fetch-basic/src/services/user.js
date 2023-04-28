

export async function getAllUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const config = {
    method: 'GET',
  }

  try {
    const response = await fetch(url, config)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
