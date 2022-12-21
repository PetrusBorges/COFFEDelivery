// Types Express
import { Request, Response } from 'express';

// Model
import { Category } from '../../app/models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name } = req.body;

    const category = await Category.create({ name });

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
