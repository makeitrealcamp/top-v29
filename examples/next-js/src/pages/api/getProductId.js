export default function handler(req, res) {
  const productId = req.query
  console.log("🚀 ~ file: getProductId.js:3 ~ handler ~ productId:", productId)

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]
  res.status(200).json(products)
}
