const express = require('express');

const { PrismaClient } = require('@prisma/client');

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

const port = 3000; 

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// ... (Next, we'll implement the CRUD operations)


// const express = require('express');
// const app = express();
// const port = 3000; 

// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


// // src/index.ts
// import express from 'express';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
// const app = express();
// const port = 3000;

// app.get('/', async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });