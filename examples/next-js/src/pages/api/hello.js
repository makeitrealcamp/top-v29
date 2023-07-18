// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// Cloud Functions -> Serverless Functions

export default function handler(req, res) {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]
  res.status(200).json(products)
}
