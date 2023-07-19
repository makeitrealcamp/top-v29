

export default async function handler(req, res) {
  const url = 'https://fakestoreapi.com/products'
  const data = await fetch(url)
  const products = await data.json()

  res.status(200).json(products)
}
