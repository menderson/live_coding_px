// routes.js
import express from 'express';
import { inverterArvoreController } from './controllers/arvoreController.js';
import { parenteses } from './controllers/parenteses.js'

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Live Coding no ar!');
});

router.post('/inverterArvore', inverterArvoreController);
router.post('/verificaParenteses', parenteses )

export default router;
