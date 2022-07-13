'use strict';

import { Request, Response } from 'express';
import { Category } from '../models/Category';
import { categoryBo } from '../bos/categoryBo';

class CategoryController {
  public async getCategory(req: Request, res: Response): Promise<void> {
    const activity: Category[] = await categoryBo.getCategory();
    res.status(200).json({ results: activity });
  }

  public async postCategory(req: Request, res: Response): Promise<void> {
    const data = req.body;
    const category: Category[] = await categoryBo.postCategory(data);
    res.status(200).json({ results: category });
  }
}

export const categoryController = new CategoryController();
