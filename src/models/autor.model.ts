import mongoose, { Schema, Document, model } from 'mongoose';

// Definimos la interfaz del autor que extiende de Document
export interface IAutor extends Document {
  nombre: string;
  nacionalidad: string;
}

// Definimos el esquema del autor
const autorSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  nacionalidad: { type: String, required: true },
});

// Exportamos el modelo Autor basado en el esquema y la interfaz IAutor
export const Autor = model<IAutor>('Autor', autorSchema);
