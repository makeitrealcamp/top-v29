const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// app.get('/api/products', async (req, res) => {
//   const products = await prisma.product.findMany();

//   return res.json(products);
// });

// app.get('/api/products', async (req, res) => {
//   const products = await prisma.product.findMany({
//     where: {
//       name: 'Jordan 4 Black',
//     },
//   });

//   return res.json(products);
// });

// app.get('/api/products', async (req, res) => {
//   const products = await prisma.product.findMany({
//     where: {
//       price: {
//         gt: 10000,
//         lt: 30000,
//       },
//     },
//   });

//   return res.json(products);
// });

app.get('/api/products', async (req, res) => {
  const products = await prisma.product.findMany({
    include: {
      reviews: {
        select: {
          text: true,
          rating: true,
        },
      },
    },
  });

  return res.json(products);
});

app.post('/api/products', async (req, res) => {
  const data = req.body;

  const productCreated = await prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
    },
  });

  return res.json(productCreated);
});

app.post('/api/reviews', async (req, res) => {
  const data = req.body;

  const review = await prisma.review.create({
    data: {
      text: data.text,
      rating: data.rating,
      Product: {
        connect: {
          id: data.productId,
        },
      },
    },
  });

  return res.json(review);
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
