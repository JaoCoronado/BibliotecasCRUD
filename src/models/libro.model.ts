import mongoose, { Schema, Document } from 'mongoose';
import { IAutor } from './autor.model';
import { IBiblioteca } from './biblioteca.model';

export interface ILibro extends Document {
  titulo: string;
  autor: IAutor['_id'];  // Relación con el modelo Autor
  biblioteca: IBiblioteca['_id'];  // Relación con el modelo Biblioteca
  anioPublicacion: number;
  genero: string;
}

const libroSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: Schema.Types.ObjectId, ref: 'Autor', required: true },  // Relación con Autor
  biblioteca: { type: Schema.Types.ObjectId, ref: 'Biblioteca', required: true },  // Relación con Biblioteca
  anioPublicacion: { type: Number, required: true },
  genero: { type: String, required: true },
});

// Crear el modelo de Libro usando el esquema definido
const Libro = mongoose.model<ILibro>('Libro', libroSchema);

export default Libro;
