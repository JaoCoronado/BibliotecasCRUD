import mongoose, { Schema, Document } from 'mongoose';

export interface IBiblioteca extends Document {
  nombre: string;
  ubicacion: string;
}

const bibliotecaSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: String, required: true },
});

const Biblioteca = mongoose.model<IBiblioteca>('Biblioteca', bibliotecaSchema);

export default Biblioteca;
