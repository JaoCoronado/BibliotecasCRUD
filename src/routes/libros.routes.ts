import { Router } from 'express';
import { createLibro, getLibros, getLibroById, updateLibroById, deleteLibroById } from '../controllers/libros.controller';

const router = Router();

router.post('/', createLibro);
router.get('/', getLibros);
router.get('/id/:id', getLibroById);
router.put('/update/:id', updateLibroById);
router.delete('/delete/:id', deleteLibroById);

export default router;
