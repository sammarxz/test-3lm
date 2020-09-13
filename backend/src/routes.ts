import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello 3LM' });
});

export default routes;
