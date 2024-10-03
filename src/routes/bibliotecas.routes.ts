import { Router, Request, Response } from 'express';
import {
  createBiblioteca,
  getBibliotecas,
  getBibliotecaById,
  updateBiblioteca,
  deleteBiblioteca
} from '../controllers/biblioteca.controller';

const router = Router();

// Rutas
router.post('/', createBiblioteca);
router.get('/', getBibliotecas);
router.get('/id/:id', getBibliotecaById);
router.put('/update/:id', updateBiblioteca);
router.delete('/delete/:id', deleteBiblioteca);

export default router;
