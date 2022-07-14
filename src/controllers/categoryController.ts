'use strict';

import { Request, Response, NextFunction } from 'express';
import { Category } from '../models/Category';
import { categoryBo } from '../bos/categoryBo';

class CategoryController {
  public async getCategory(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const activity: Category[] = await categoryBo.getCategory();
      res.status(200).json({ results: activity });
    } catch (error) {
      next(error);
    }
  }

  public async postCategory(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = req.body;
      const category: Category[] = await categoryBo.postCategory(data);
      res.status(201).json({ results: category });
    } catch (error) {
      next(error);
    }
  }
}

export const categoryController = new CategoryController();
