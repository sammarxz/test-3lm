import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([
    'Samuel',
    'Bruna',
    'Churros',
  ]);
});

app.listen(3333)
