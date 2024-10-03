// import { getAutorById } from './autores.controller';
import { Request, Response } from "express";
import { Autor } from "../models/autor.model";

// Crear un autor
export const createAutor = async (req: Request, res: Response) => {
  // const { nombre, nacionalidad } = req.body;
  try {
    const { body } = req;

    const { nombre, nacionalidad } = req.body;

    const newAutor = new Autor({
      ...body,
    });

    const saveAutor = await newAutor.save();

    res.status(201).json({
      ok: true,
      msg: "Autor Created",
      Autor: saveAutor,
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


// Obtener todos los autores
export const getAutores = async (req: Request, res: Response)=> {
   try {
    const getAutores = await Autor.find();

    res.json({ ok: true, autores: getAutores });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};

// Obtener un autor por ID
export const getAutorById = async (req: Request, res: Response)=> {
  const { id } = req.params;

  try {
    const getAutorById = await Autor.findById(id);
    res.json({ ok: true, autor: getAutorById });
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};
// Actualizar un autor
export const updateAutor = async (req: Request, res: Response)=> {
  const id = req.params.id;
  const payload = req.body;

  try {
    const updateAutorById = await Autor.findByIdAndUpdate(id, payload, {
      new: true,
    });

    if (updateAutorById) {
      res.json({ ok: true, Autor: updateAutorById });
    } else {
      res.status(500).json({ ok: false, msg: "Error occurred to update Autor" });
    }
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};
// Eliminar un autor
export const deleteAutor = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteAutor = await Autor.findByIdAndDelete(id);
    if (deleteAutor) {
      res.json({ ok: true, msg: "Autor deleted" });
    } else {
      res.status(500).json({ ok: false, msg: "Error occurred to delete Autor" });
    }
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};
