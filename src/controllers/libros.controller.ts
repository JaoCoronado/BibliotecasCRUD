import { Request, Response } from 'express';
import Libro from '../models/libro.model';

// Obtener todos los libros
export const getLibros = async (req: Request, res: Response) => {
  try {
    const getAllLibros = await Libro.find({});

    res.json({ ok: true, users: getAllLibros });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};

// Obtener un libro por ID
export const getLibroById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const getLibroById = await Libro.findById(id);
    res.json({ ok: true, user: getLibroById });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};

// Crear un nuevo libro
export const createLibro = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const newLibro = new Libro({
      ...body,
    });
    
    const saveLibro = await newLibro.save();

    res.status(201).json({
      ok: true,
      msg: "Libro Created",
      user: saveLibro,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error occurred",
      error,
    });
  }
};

// Actualizar un libro
export const updateLibroById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  try {
    const updateLibroById = await Libro.findByIdAndUpdate(id, payload, {
      new: true,
    });

    if (updateLibroById) {
      res.json({ ok: true, user: updateLibroById });
    } else {
      res.status(500).json({ ok: false, msg: "Error occurred to update user" });
    }
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};

// Eliminar un libro
export const deleteLibroById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteLibroById = await Libro.findByIdAndDelete(id);
    if (deleteLibroById) {
      res.json({ ok: true, msg: "User deleted" });
    } else {
      res.status(500).json({ ok: false, msg: "Error occurred to delete user" });
    }
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};
