import { Router } from 'express';
import { createAutor, getAutores, getAutorById, updateAutor, deleteAutor } from '../controllers/autores.controller';

const router = Router();

router.post('/', createAutor);
router.get('/', getAutores);
router.get('/id/:id', getAutorById);
router.put('/update/:id', updateAutor);
router.delete('/delete/:id', deleteAutor);

export default router;
