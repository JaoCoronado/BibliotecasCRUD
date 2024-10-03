import { Request, Response } from 'express';
import Biblioteca from '../models/biblioteca.model';

export const createBiblioteca = async (req: Request, res: Response) => {

  try {
    const biblioteca = new Biblioteca(req.body);
    await biblioteca.save();
    res.json(biblioteca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al crear biblioteca', error });
  }
};

export const getBibliotecas = async (req: Request, res: Response) => {
  try {
    const bibliotecas = await Biblioteca.find();
    res.status(200).json(bibliotecas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener bibliotecas', error });
  }
};

export const getBibliotecaById = async (req: Request, res: Response) => {
    const { id } = req.params;
  try {
    const getBibliotecaById = await Biblioteca.findById(id);
    if (!getBibliotecaById) {
    //   return res.json({ msg: 'Biblioteca no encontrada' });
    res.json({ ok: true, biblioteca: getBibliotecaById });

    }
    res.json(getBibliotecaById);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener biblioteca', error });
  }
};

export const updateBiblioteca = async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  try {
    const updateBiblioteca = await Biblioteca.findByIdAndUpdate(id, payload, {
      new: true,
    });

    if (updateBiblioteca) {
      res.json({ ok: true, user: updateBiblioteca });
    } else {
      res.status(500).json({ ok: false, msg: "Error occurred to update user" });
    }
  } catch (error) {
    res.status(500).json({ ok: false, msg: "Error occurred", error });
  }
};

export const deleteBiblioteca = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleteBiblioteca = await Biblioteca.findByIdAndDelete(id);
      if (deleteBiblioteca) {
        res.json({ ok: true, msg: "User deleted" });
      } else {
        res.status(500).json({ ok: false, msg: "Error occurred to delete user" });
      }
    } catch (error) {
      res.status(500).json({ ok: false, msg: "Error occurred", error });
    }
  };