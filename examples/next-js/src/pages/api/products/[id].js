const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
]

export default function handler(req, res) {
  const productId = req.query.id
  const product = products.find((p) => p.id === Number(productId))

  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }

  res.status(200).json(product)
}
