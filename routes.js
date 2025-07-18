// routes.js
import express from 'express';
import { avaliarRiscoCarga } from './controllers/avaliacao_de_risco.js'

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Live Coding no ar!');
});

router.post('/avaliacao_risco', avaliarRiscoCarga);


export default router;
