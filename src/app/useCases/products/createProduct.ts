import type { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, description, price, ingredients, category } = req.body;

    const imagePath = req.file?.filename;

    const ingredientsJson = JSON.parse(ingredients);

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: ingredientsJson,
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
