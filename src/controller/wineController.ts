import { Request, Response } from 'express';
import Wine from '../models/Wine';
import * as wineService from '../services/wineService';
import mongoose from 'mongoose';


export const getAllWines = async (req: Request, res: Response) => {
    try {
        const wines = await wineService.getAllWines();
        res.json(wines);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar vinhos' });
    }
};

export const getWineById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const wine = await wineService.getWineById(id);
        
        if (wine) {
            res.json(wine);
        } else {
            res.status(404).json({ error: 'Vinho não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar vinho por ID' });
    }
};

export const getWinesByCountry = async (req: Request, res: Response) => {
    try {
        const { country } = req.params;
        const wines = await wineService.getWinesByCountry(country);
        res.json(wines);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar vinhos por país' });
    }
};

export const addWine = async (req: Request, res: Response) => {
  try {
    const { name, safra } = req.body;    
    const newWine = new Wine({ name, safra });
    await newWine.save();
    res.json(newWine);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar Vinho" });
  }
};

export const deleteWine = async (req: Request, res: Response) => {
  try {        
      
    const idToDelete = new mongoose.Types.ObjectId(req.query.id as string); 
    const result = await Wine.findOneAndDelete(idToDelete);     
   
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Vinho" });
  }
};

export const updateWineById = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const updatedWineData = req.body;
      const updatedWine = await wineService.updateWineById(id, updatedWineData);

      if (updatedWine) {
          res.json(updatedWine);
      } else {
          res.status(404).json({ error: 'Vinho não encontrado' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar vinho por ID' });
  }
};

