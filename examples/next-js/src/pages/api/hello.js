// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// Cloud Functions -> Serverless Functions

export default function handler(req, res) {
  const messages = 'Hello World'
  res.status(200).json(messages)
}
